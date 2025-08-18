export default {
	eleventyComputed: {
		title: (data) => `Week ${data.page.fileSlug}`,
		type: 'Agenda',
		week: (data) => Number(data.page.fileSlug),
	},
}
