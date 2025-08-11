import { getWeek } from '../../data/weeks.js'

export default {
	eleventyComputed: {
		date: data => getWeek(data)?.date,
		type: 'Topic',
		unit: data => getWeek(data)?.unit,
		unitNumber: data => getWeek(data)?.unitNumber,
	},
}
