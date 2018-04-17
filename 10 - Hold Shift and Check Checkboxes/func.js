window.onload = () => {
	const checkBoxes = document.querySelectorAll('input[type="checkbox"]');

	console.log(checkBoxes);
	let indexStart = null;	

	function checkboxChange(e) {
		console.log(e);
	}

	for(let checkbox of checkBoxes){
		checkbox.addEventListener('change', checkboxChange);
	}
}