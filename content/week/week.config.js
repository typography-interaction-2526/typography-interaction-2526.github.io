
import { getWeek } from '../../data/weeks.js'

export default {
	eleventyComputed: {
		date: data => getWeek(data)?.date,
		title: data => `Week ${data.page.fileSlug}`,
		type: 'Agenda',
		unit: data => getWeek(data)?.unit,
		unitNumber: data => getWeek(data)?.unitNumber,
		week: data => Number(data.page.fileSlug),
	},
}
