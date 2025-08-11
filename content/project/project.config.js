export default {
	eleventyComputed: {
		title: data => `<em>${data.title}</em>`,
		type: 'Project',
	},
}
