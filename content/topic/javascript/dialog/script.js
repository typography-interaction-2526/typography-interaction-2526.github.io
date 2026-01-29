// Similar to before, setting up variables.
let modalButton = document.querySelector('#modal') // The thing we’re clicking.
let modalDialog = document.querySelector('#dialog') // Now one for our `dialog`.
let closeButton = modalDialog.querySelector('.close') // Only looking within `modalDialog`.

modalButton.addEventListener('click', () => { // “Listen” for clicks.
	modalDialog.showModal() // This opens it up.
})

closeButton.addEventListener('click', () => {
	modalDialog.close() // And this closes it!
})

modalDialog.addEventListener('click', (event) => { // Listen on our `modal`, using the `event`…
	if (event.target == modalDialog) { // Only if clicks are to itself (the background).
		modalDialog.close() // Close it too then.
	}
})
