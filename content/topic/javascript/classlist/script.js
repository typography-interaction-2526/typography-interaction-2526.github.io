// Set up our variables.
let highlightClass = 'highlight' // “Strings” (like this class name) are wrapped in quotes.
let textBlock = document.querySelector('section') // This can use any CSS selector.
let switchButton = document.querySelector('#switch') // But use `id` for a singular thing.

switchButton.addEventListener('click', () => { // “Listen” for clicks.
	textBlock.classList.toggle(highlightClass) // Toggle the class!
})
