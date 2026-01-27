// Similar to before, setting up variables.
let button = document.querySelector('#example')
let modal = document.querySelector('#dialog') // Now one for our `dialog`.
let closeButton = modal.querySelector('.close') // Only looking within `modal`.

button.addEventListener('click', () => { // “Listen” for clicks.
	modal.showModal() // This opens it up.
})

closeButton.addEventListener('click', () => {
	modal.close() // And this closes it!
})

modal.addEventListener('click', (event) => { // Listen on our `modal`, using the `event`…
	if (event.target == modal) { // Only if clicks are to itself (the background).
		modal.close() // Close it too then.
	}
})
