export default {
	eleventyComputed: {
		title: (data) => `Week Nº ${data.page.fileSlug}`,	
		type: 'Agenda',
		week: (data) => Number(data.page.fileSlug),
	},
}
