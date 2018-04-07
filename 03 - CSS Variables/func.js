(function(){
	let inputs = document.querySelectorAll('input');
	let img = document.querySelector('img');
	

	function changeVals() {
		let sizing = this.dataset.sizing || '';
		img.style.setProperty(`--${this.name}`, this.value + sizing);
	}


	inputs.forEach(function(input) {
		input.addEventListener('change', changeVals);
	});
	inputs.forEach(function(input){
		input.addEventListener('mousemove', changeVals);
	});


/*	let spacingRange = document.getElementById('spacing');
	spacingRange.addEventListener('change', function(){
		img.style.setProperty('--spaceAround', spacingRange.value + spacingRange.dataset.sizing);
	});

	let blurRange = document.getElementById('blur');
	blurRange.addEventListener('change', function(){
		img.style.setProperty('--blurVal', blurRange.value + blurRange.dataset.sizing);
	});

	let backgroundC = document.getElementById('base');
	backgroundC.addEventListener('change', function(){
		img.style.setProperty('--baseCol', backgroundC.value);
	});
*/


})();