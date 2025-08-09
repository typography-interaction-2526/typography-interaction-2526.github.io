// Count up our dates.
export function getWeekDate(data, week) {
	const weeks = data.collections.weeks

	if (weeks?.length) {
		let weekIndex = week - 1

		let date = weeks[weekIndex].data.date
		let weekOffset = 0

		while (!date && weekIndex > 0) {
			date = weeks[weekIndex - 1].data.date
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
