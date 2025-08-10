import { getWeek } from '../../data/weeks.js'

export default {
	eleventyComputed: {
		date: data => getWeek(data, data.week)?.date,
		title: data => `<em>${data.title}</em>`,
		type: 'Project',
	},
}
