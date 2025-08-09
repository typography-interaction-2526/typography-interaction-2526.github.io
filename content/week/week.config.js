export default {
	eleventyComputed: {
		date: data => {
			if (data.collections.weeks.length) {
				let date = data.date
				let weekOffset = 0
				let weekIndex = data.collections.weeks.findIndex(week => week.url === data.page.url)

				while (!date) {
					date = data.collections.weeks[weekIndex - 1].data.date
					weekOffset++
					weekIndex--
				}

				date = new Date(date)
				date.setDate(7 * weekOffset + date.getDate())

				return date
			}
		},
		title: data => {
			const date = new Date(data.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', timeZone: 'UTC' })

			return `Week ${data.page.fileSlug}, <nobr>${date}</nobr>`
		},
		unit: data => {
			if (data.collections.weeks.length) {
				let unit = data.unit
				let weekIndex = data.collections.weeks.findIndex(week => week.url === data.page.url)

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
				const weekIndex = data.collections.weeks.findIndex(week => week.url === data.page.url)

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
	},
}
