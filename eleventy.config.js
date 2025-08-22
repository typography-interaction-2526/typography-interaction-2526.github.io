import webC from '@11ty/eleventy-plugin-webc'

import markdownIt from 'markdown-it'
import markdownItAbbr from 'markdown-it-abbr'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItAttrs from 'markdown-it-attrs'
import markdownItDeflist from 'markdown-it-deflist'
import markdownItHeaderSections from 'markdown-it-header-sections'

import { componentPlugin } from '@mdit-vue/plugin-component' // Pretend we are Vue.

import abbreviations from './data/abbreviations.js'

import pluginToc from '@uncenter/eleventy-plugin-toc'

import stripTags from 'striptags'

export default (eleventyConfig) => {
	// Setup.
	eleventyConfig.addBundle('css', { toFileDirectory: 'styles' })
	eleventyConfig.addGlobalData('layout', 'main.webc')
	eleventyConfig.addPlugin(webC, { components: 'components/**/*.webc' })
	eleventyConfig.setFrontMatterParsingOptions({
		delimiters: ['<script front-matter>', '</script>'],
		language: 'js',
	})
	eleventyConfig.setDataFileSuffixes(['.config'])

	// Watch for changes.
	eleventyConfig.addWatchTarget('**/*.css')
	eleventyConfig.addWatchTarget('**/*.js')

	// Slide these on over.
	eleventyConfig.addPassthroughCopy('styles/reset.css')
	eleventyConfig.addPassthroughCopy('assets/**/*.(ico|otf|pdf|png)')
	eleventyConfig.addPassthroughCopy('content/**/*.(gif|jpg|png|svg)')

	// Don’t render examples as if they’re real pages, but copy them to the output as is.
	eleventyConfig.ignores.add('content/topic/*/*/*.*')
	eleventyConfig.addPassthroughCopy('content/topic/*/*/*.*')

	// Don’t render out drafts—but this leaves them in the collections for date calculations.
	process.env.ELEVENTY_RUN_MODE === 'build' && eleventyConfig.addGlobalData('eleventyComputed', { permalink: (data) => data.draft ? false : data.permalink })

	// Markdown stuff.
	const markdownOptions = {
		breaks: true,
		html: true,
		linkify: true,
		typographer: true,
	}

	// Do some automatic ragging.
	const markdownRagging = (markdown) => {
		const shortWords = 'a|an|as|at|I|in|is|it|of|on|to'

		markdown.core.ruler.after('inline', 'ragging', ({ tokens }) =>
			tokens?.forEach(({ children, type }) =>
				type === 'inline' && children?.forEach((child, index, children) => {
					if (child.type === 'text') {
						// Keep short words with the following…
						child.content = child.content.replace( new RegExp(`(\\s|^)(${shortWords}) (\\S)`, 'gi'), '$1$2\u00A0$3') // `&nbsp;`

						// TODO This is broken! Applies inside of `em`, after chops `i&thinsp;OS`.
						// // Also when followed by a node (link, emphasis, etc.).
						// children[index + 1] && (child.content = child.content.replace(new RegExp(`(\\s|^)(${shortWords})( ?)$`, 'i'), '$1$2\u00A0'))

						// Adds a “word joiner” `&NoBreak;` before em-dashes, to keep them from starting lines.
						child.content = child.content.replace(/—/g, '\u2060—')

						// Adds a `&ZeroWidthSpace;` after every slash.
						child.content = child.content.replace(/\//g, '/\u200B')

						// Prevent orphans at the end of a block/paragraph (not just token).
						!children?.slice(index + 1).some((token) => token.type === 'text' && token.content.trim()) &&
							 /[.!?…:;)]$/.test(children?.map((token) => token.type === 'text' ? token.content : '').join('').trim()) &&
								(child.content = child.content.replace(/(\S+)\s+(\S+)(?=\s*$)/g,
									(match, prevWord, lastWord, offset, string) =>
										/^\s*$/.test(string.slice(offset + match.length)) && prevWord.length + lastWord.length <= 20
											? `${prevWord}\u00A0${lastWord}`
											: match,
								))
					}
				}),
			),
		)
	}

	const markdown = markdownIt(markdownOptions)
		// Fix name collision with global `env.abbreviations` data and `markdown-it-abbr`.
		.use((markdown) => markdown.render = (src, env = {}) =>
			(delete env.abbreviations, markdown.constructor.prototype.render.call(markdown, src, env)))
		.use(markdownItAbbr)
		.use(markdownItDeflist)
		.use(markdownItHeaderSections)
		.use(markdownItAnchor, {
			permalink: markdownItAnchor.permalink.linkInsideHeader({ class: '', space: ' '}),
			slugify: eleventyConfig.getFilter('slugify'),
		})
		.use(markdownItAttrs)
		.use((markdown) => markdown.renderer.rules.fence = (tokens, index, options, env, self) =>
			`<pre ${self.renderAttrs(tokens[index])}>
				<code class="language-${tokens[index].info.trim()}">${markdown.utils.escapeHtml(tokens[index].content)}</code>
			</pre>`,
		)
		.use(markdownRagging)
		.use(componentPlugin) // Allows custom HTML component names (otherwise made into strings).

	// Append abbreviations for `markdownItAbbr`.
	const markdownAbbreviations = abbreviations.map((item) => `\n*[${item.abbr}]: ${item.title}`).join('\n')

	// Append them for the plugin.
	eleventyConfig.addPreprocessor('abbreviations', '.md', (data, content) => content + markdownAbbreviations)

	// Convert HTML comments to curly brackets for `markdownItAttrs` to pick up.
	eleventyConfig.addPreprocessor('commentsToCurlies', '.md', (data, content) =>
		// Only match `.class`…, `#id`…, `data`…, `style`… so example/other comments aren’t transformed.
		content.replace(/<!--\s*(\.(?:[\s\S]*?)|#(?:[\s\S]*?)|data(?:[\s\S]*?)|style(?:[\s\S]*?))\s*-->$/gm, '{ $1 }'),
	)

	// Filter for component use.
	eleventyConfig.addFilter('markdown', (content) =>
		markdownIt(markdownOptions)
			.use(markdownItAbbr)
			.use(markdownRagging)
			.render(String(content + markdownAbbreviations))
			.replace('<p>', '')
			.replace('</p>', '')
			.replace('&amp;', '&')
			.trim(),
	)

	// Overall Markdown use.
	eleventyConfig.setLibrary('md', markdown)

	// Other filters.
	eleventyConfig.addFilter('stripTags', (content) => stripTags(String(content)))
	eleventyConfig.addFilter('displayDate', (date) => new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', timeZone: 'UTC' }))

	// Transform words for faux-italics.
	eleventyConfig.addTransform('italicSpans', function(html) {
		return String(this.inputPath).endsWith('.md') && String(this.outputPath).endsWith('.html')
			? html .replace(/<em>([\s\S]*?)<\/em>/g, (match, inner) => `<em>${inner.replace(/(\S+)/g, '<nobr><span>$1</span></nobr>')}</em>` )
			: html
	})

	// Table of contents.
	eleventyConfig.addPlugin(pluginToc, {
		ignoredElements: ['a'],
		ul: true,
		wrapper: (toc) => toc,
	})

	// Set up the weeks for date logic.
	eleventyConfig.addCollection('weeks', (collection) => collection
		.getFilteredByGlob('content/week/*.md')
		.sort((a, b) => a.inputPath.localeCompare(b.inputPath, undefined, { numeric: true })),
	)

	// Root/admin stuff.
	eleventyConfig.addCollection('root', (collection) => collection
		.getFilteredByGlob('content/*.{md,webc}')
		.sort((a, b) => (a.data.order || 0) - (b.data.order || 0)),
	)

	// Big, combined, non-root collection. (Sorting is template-side!)
	eleventyConfig.addCollection('pages', (collection) => collection.getFilteredByGlob('content/*/**/*.md'))

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
