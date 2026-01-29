// Set up our variables.
let highlightClass = 'highlight' // “Strings” (like a class name) are wrapped in quotes.
let textBlock = document.querySelector('section') // Any CSS selector.
let switchButton = document.querySelector('#switch') // But use `id` for a singular thing.

// You’ll often see this instead of the `.onclick` shorthand:
switchButton.addEventListener('click', () => { // “Listen” for clicks.
	textBlock.classList.toggle(highlightClass) // Toggle the class!
})
