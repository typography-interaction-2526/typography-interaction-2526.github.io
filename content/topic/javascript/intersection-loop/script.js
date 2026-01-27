let highlightClass = 'highlight' // Variables again.
let highlightBlocks = document.querySelectorAll('section') // Get all of them.

// Loop through the list, doing this `forEach` one.
highlightBlocks.forEach((block) => {
	let sectionObserver = new IntersectionObserver((entries) => {
		let [entry] = entries

		if (entry.isIntersecting) {
			block.classList.add(highlightClass)
		} else {
			block.classList.remove(highlightClass)
		}
	}, {
		root: document, // This is only needed in the example iframe!
		rootMargin: '-33% 0% -33% 0%', // CSS-ish: top/right/bottom/left.
	})

	sectionObserver.observe(block) // Watch each one!
})
