
import { getWeekDate } from '../../data/weeks.js'

export default {
	eleventyComputed: {
		date: data => getWeekDate(data, data.page.fileSlug),
		title: data => `Week ${data.page.fileSlug}`,
		type: 'Agenda',
		unit: data => {
			if (data.collections.weeks.length) {
				let unit = data.unit
				let weekIndex = data.page.fileSlug - 1

				while (!unit) {
					unit = data.collections.weeks[weekIndex].data.unit
					weekIndex--
				}

				return unit
			}
		},
		unitCombined: data => `Unit ${data.unitNumber}: ${data.unit}`,
		unitNumber: data => {
			if (data.collections.weeks.length) {
				const weekIndex = data.page.fileSlug - 1

				let unit
				let unitNumber = 0

				data.collections.weeks.some((week, index) => {
					if (index > weekIndex) return
					if (week.data.unit && week.data.unit != unit) {
						unit = week.data.unit
						unitNumber++
					}
				})

				return unitNumber
			}
		},
		week: data => Number(data.page.fileSlug),
	},
}
