'use strict'
window.onload = () => {
	const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
	
	let lastIndex;

	function handleCheck(e){
		let inBetween = false;

		if(e.shiftKey && this.checked){
			checkBoxes.forEach( checkbox => {
				if(checkbox === this || checkbox === lastIndex) {
					inBetween = !inBetween;
				}
				if(inBetween){
					checkbox.checked = true; 
				}

			});
		}
		lastIndex = this;
	}



	checkBoxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

}