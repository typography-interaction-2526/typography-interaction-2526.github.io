export default {
	eleventyComputed: {
		title: (data) => Number.isInteger(+data.page.fileSlug)
			? `Project Nº ${data.page.fileSlug}: “${data.title}”`
			: `Project “${data.title}”`,
		type: 'project',
	},
}
