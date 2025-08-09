import { getWeekDate } from '../../data/weeks.js'

export default {
	eleventyComputed: {
		date: data => getWeekDate(data, data.week),
		title: data => `<em>${data.title}</em>`,
	},
}
