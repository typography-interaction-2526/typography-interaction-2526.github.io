import webC from '@11ty/eleventy-plugin-webc'

export default (eleventyConfig) => {
	// Setup.
	eleventyConfig.addPlugin(webC, { components: 'components/**/*.webc' })
	eleventyConfig.setFrontMatterParsingOptions({
		delimiters: ['<!---', '--->'],
		language: 'js',
	})
	eleventyConfig.addGlobalData('layout', 'base.webc')

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
