export default {
	eleventyComputed: {
		title: (data) => `Week Nº ${data.page.fileSlug}`,
		type: 'week',
		week: (data) => Number(data.page.fileSlug),
	},
}
