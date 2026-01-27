// Set up our variables.
let highlightClass = 'highlight' // “Strings” (like a class name) are wrapped in quotes.
let textBlock = document.querySelector('section') // Any selector.
let switchButton = document.querySelector('#example')

// You’ll often see this instead of the `.onclick` shorthand:
switchButton.addEventListener('click', () => { // “Listen” for clicks.
	textBlock.classList.toggle(highlightClass) // Toggle the class!
})
