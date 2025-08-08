import webC from '@11ty/eleventy-plugin-webc'

import markdownIt from 'markdown-it'
import markdownItAbbr from 'markdown-it-abbr'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItAttrs from 'markdown-it-attrs'
import markdownItDeflist from 'markdown-it-deflist'
import markdownItHeaderSections from 'markdown-it-header-sections'

import { componentPlugin } from '@mdit-vue/plugin-component' // Pretend we are Vue.

import abbreviations from './data/abbreviations.js'

import stripTags from 'striptags'

export default (eleventyConfig) => {
	// Setup.
	eleventyConfig.addPlugin(webC, { components: 'components/**/*.webc' })
	eleventyConfig.setFrontMatterParsingOptions({
		delimiters: ['<script front>', '</script>'],
		language: 'js',
	})
	eleventyConfig.addGlobalData('layout', 'page.webc')
	eleventyConfig.addWatchTarget('**/*.css')
	eleventyConfig.addWatchTarget('**/*.js')

	// Slide these on over.
	eleventyConfig.addPassthroughCopy('styles/reset.css')
	eleventyConfig.addPassthroughCopy('assets/**/*.(ico|js|pdf|png)')
	eleventyConfig.addPassthroughCopy('content/**/*.(gif|jpg|png|svg)')

	// Ignore drafts.
	eleventyConfig.addPreprocessor('drafts', '*', (data, content) => (data.draft && process.env.ELEVENTY_RUN_MODE === 'build') ? false : undefined)

	// Markdown stuff.
	const markdownOptions = {
		html: true,
		breaks: true,
		linkify: true,
		typographer: true,
	}

	const markdown = markdownIt(markdownOptions)
		// Fix name collision with global `env.abbreviations` data and `markdown-it-abbr`.
		.use(markdown => markdown.render = (src, env = {}) => (delete env.abbreviations, markdown.constructor.prototype.render.call(markdown, src, env)))
		.use(markdownItAbbr)
		.use(markdownItDeflist)
		.use(markdownItHeaderSections)
		.use(markdownItAnchor, {
			permalink: markdownItAnchor.permalink.linkInsideHeader({ class: '', space: ' '}),
			slugify: eleventyConfig.getFilter('slugify'),
		})
		.use(markdownItAttrs)
		.use(componentPlugin) // Allows custom HTML component names (otherwise made into strings).
		.use(markdown => {
			markdown.renderer.rules.fence = (tokens, idx, options, env, slf) => {
				const token = tokens[idx]
				return `<pre ${slf.renderAttrs(token)}><code class="language-${token.info.trim()}">${markdown.utils.escapeHtml(token.content)}</code></pre>`
			}
		})

	// Append abbreviations for `markdownItAbbr`.
	const markdownAbbreviations = abbreviations.map(item => `\n*[${item.abbr}]: ${item.title}`).join('\n')
	eleventyConfig.addPreprocessor('abbreviations', '.md', (data, content) => content + markdownAbbreviations)

	// Convert HTML comments to curly brackets for `markdownItAttrs` to pick up.
	eleventyConfig.addPreprocessor('commentsToCurlies', '.md', (data, content) =>
		// Only match `.class`…, `#id`…, `data`…, `style`… so example/other comments aren’t transformed.
		content.replace(/<!--\s*(\.(?:[\s\S]*?)|#(?:[\s\S]*?)|data(?:[\s\S]*?)|style(?:[\s\S]*?))\s*-->$/gm, '{ $1 }'),
	)

	// Filter for component use.
	eleventyConfig.addFilter('markdownInline', (content) => markdownIt(markdownOptions)
		.use(markdownItAbbr)
		.render(String(content + markdownAbbreviations)) // We can’t use `renderInline` if we want `abbr` inserted.
		.replace('<p>', '')
		.replace('</p>', '')
		.replace('&amp;', '&')
		.trim(),
	)

	// Overall Markdown use.
	eleventyConfig.setLibrary('md', markdown)

	// Other filters.
	eleventyConfig.addFilter('stripTags', (content) => stripTags(String(content)))

	// Remainder setup.
	return {
		dir: {
			input: 'content',
			output: '_site',

			// Relative to `input`.
			data: '../data',
			layouts: '../layouts',
		},
		htmlTemplateEngine: 'webc',
		markdownTemplateEngine: false,
	}
}
