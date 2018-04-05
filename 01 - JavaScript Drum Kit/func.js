window.onkeydown = function (e) {
	const key = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const div = document.querySelector(`div[data-key="${e.keyCode}"]`);
	
	if(key != null){
		key.play();
		key.currentTime = 0;
		div.classList.add('playing');
		removeTransition(div);
	}
};

function removeTransition(div){
	div.addEventListener('transitionend', () => {
		div.classList.remove('playing');
	});
}

