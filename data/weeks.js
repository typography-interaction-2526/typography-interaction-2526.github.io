// Count up our dates.
export function getWeekDate(data, week) {
	if (data.collections.weeks && data.collections.weeks.length) {
		let weekIndex = Number(week - 1)

		if (weekIndex === -1) return

		let date = data.collections.weeks[weekIndex].data.date
		let weekOffset = 0

		while (!date && weekIndex > 0) {
			date = data.collections.weeks[weekIndex - 1].data.date
			weekOffset++
			weekIndex--
		}

		if (date) {
			date = new Date(date)
			date.setDate(7 * weekOffset + date.getDate())
			return date
		}
	}
}
