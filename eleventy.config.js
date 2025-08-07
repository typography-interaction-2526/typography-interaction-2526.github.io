import webC from '@11ty/eleventy-plugin-webc'

export default (eleventyConfig) => {
	// Setup.
	eleventyConfig.addPlugin(webC, { components: 'components/**/*.webc' })

	// Remainder setup.
	return {
		dir: {
			input: 'content',
			output: '_site',
		},
		htmlTemplateEngine: 'webc',
		markdownTemplateEngine: false,
	}
}
