// Shared week date logic for Eleventy global data
export function getWeekDate(data, week) {
	if (data.collections.weeks && data.collections.weeks.length) {
		let weekIndex = week ? week - 1 : data.collections.weeks.findIndex(week => week.url === data.page.url)

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
