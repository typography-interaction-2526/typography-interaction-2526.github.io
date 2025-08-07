import webC from '@11ty/eleventy-plugin-webc'

import markdownIt from 'markdown-it'
import markdownItAbbr from 'markdown-it-abbr'
import markdownItAttrs from 'markdown-it-attrs'
import markdownItDeflist from 'markdown-it-deflist'
import markdownItHeaderSections from 'markdown-it-header-sections'

export default (eleventyConfig) => {
	// Setup.
	eleventyConfig.addPlugin(webC, { components: 'components/**/*.webc' })
	eleventyConfig.setFrontMatterParsingOptions({
		delimiters: ['<script front>', '</script>'],
		language: 'js',
	})
	eleventyConfig.addGlobalData('layout', 'base.webc')

	const markdownOptions = {
		html: true,
		breaks: true,
		linkify: true,
		typographer: true,
	}

	const markdown = markdownIt(markdownOptions)
		.use(markdownItAbbr)
		.use(markdownItDeflist)
		.use(markdownItHeaderSections)
		})
		.use(markdownItAttrs)
		.use(markdown => {
			markdown.renderer.rules.fence = (tokens, idx, options, env, slf) => {
				const token = tokens[idx]
				return `<pre ${slf.renderAttrs(token)}><code class="language-${token.info.trim()}">${markdown.utils.escapeHtml(token.content)}</code></pre>`
			}
		})

	// Convert HTML comments to curly brackets for `markdownItAttrs` to pick up.
	eleventyConfig.addPreprocessor('commentsToCurlies', '.md', (data, content) =>
		// Only match `.class`…, `#id`…, `data`…, `style`… so example/other comments aren’t transformed.
		content.replace(/<!--\s*(\.(?:[\s\S]*?)|#(?:[\s\S]*?)|data(?:[\s\S]*?)|style(?:[\s\S]*?))\s*-->$/gm, '{ $1 }'),
	)

	eleventyConfig.setLibrary('md', markdown)

	// Remainder setup.
	return {
		dir: {
			input: 'content',
			output: '_site',

			// Relative to `input`.
			layouts: '../layouts',
		},
		htmlTemplateEngine: 'webc',
		markdownTemplateEngine: false,
	}
}
