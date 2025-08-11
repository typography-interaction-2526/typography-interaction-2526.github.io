// Count up our dates and units.
export function getWeek(data) {
	const week = data.week
	const weeks = data.collections.weeks

	if (weeks?.length) {
		let weekIndex = week - 1, unitIndex = weekIndex

		let date = weeks[weekIndex].data.date
		let weekOffset = 0

		let unit = data.unit

		while (!date && weekIndex > 0) {
			date = weeks[weekIndex - 1].data.date
			weekOffset++
			weekIndex--
		}

		if (date) {
			date = new Date(date)
			date.setDate(7 * weekOffset + date.getDate())
		}

		while (!unit) {
			unit = weeks[unitIndex].data.unit
			unitIndex--
		}

		const unitNumber = new Set(
			weeks.slice(0, weekIndex + 1)
				.map(week => unit = week.data.unit || unit)
				.filter(Boolean),
		).size

		return { date, unit, unitNumber }
	}

}
