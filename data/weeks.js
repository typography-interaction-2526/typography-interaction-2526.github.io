// Count up our dates and units.
export function getWeek(data, week) {
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
			(previousUnit =>
				weeks.slice(0, weekIndex + 1)
					.map(week => previousUnit = week.data.unit || previousUnit)
					.filter(Boolean)
			)(),
		).size

		return { date, unit, unitNumber }
	}

}
