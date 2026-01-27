// This is the same as before, setting up variables.
let button = document.querySelector('#example')
let modal = document.querySelector('#dialog') // Now one for our `dialog`.
let closeButton = modal.querySelector('.close') // Only looking within `modal`.

button.onclick = () => { // “Listen” for clicks.
	modal.showModal() // This opens it up.
}

closeButton.onclick = () => {
	modal.close() // And this closes it!
}

modal.onclick = (event) => { // Listen on our `modal` also…
	if (event.target == modal) { // Only if clicks are to itself (the background).
		modal.close() // Close it then too.
	}
}
