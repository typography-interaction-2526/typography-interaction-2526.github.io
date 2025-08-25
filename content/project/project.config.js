export default {
	eleventyComputed: {
		title: (data) => `Project Nº ${data.page.fileSlug}: “${data.title}”`,
		type: 'Project',
	},
}
