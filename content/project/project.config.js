import { getWeek } from '../../data/weeks.js'

export default {
	eleventyComputed: {
		date: data => getWeek(data)?.date,
		title: data => `<em>${data.title}</em>`,
		type: 'Project',
		unit: data => getWeek(data)?.unit,
		unitNumber: data => getWeek(data)?.unitNumber,
	},
}
