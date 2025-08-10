
import { getWeek } from '../../data/weeks.js'

export default {
	eleventyComputed: {
		date: data => getWeek(data, data.page.fileSlug)?.date,
		title: data => `Week ${data.page.fileSlug}`,
		type: 'Agenda',
		unit: data => getWeek(data, data.page.fileSlug)?.unit,
		unitCombined: data => `Unit ${data.unitNumber}: ${data.unit}`,
		unitNumber: data => getWeek(data, data.page.fileSlug)?.unitNumber,
		week: data => Number(data.page.fileSlug),
	},
}
