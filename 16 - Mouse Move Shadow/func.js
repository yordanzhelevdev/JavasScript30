window.onload = () => {
	const hero = document.querySelector('.hero');
	const text = hero.querySelector('h1');
	const walk = 200;

	function shadow(e){
		//Hero width and height
		const width = hero.offsetWidth;
		const height = hero.offsetHeight;
		
		//Cursor position
		let x = e.offsetX;
		let y = e.offsetY;

		if(this !== e.target) {
			x = x + e.target.offsetLeft;
			y = y + e.target.offsetTop;
		}

		const xWalk = Math.round((x / width * walk) - (walk / 2));
		const yWalk = Math.round((y / height * walk) - (walk / 2));

		text.style.textShadow = `
		${xWalk}px ${yWalk}px 0 #FFB7D7FF,
		${xWalk * -1}px ${yWalk}px 0 #FFC54FFF,
		${xWalk}px ${yWalk * -1}px 2px #7B23FFEA,
		${yWalk * -1}px ${xWalk}px 5px #C0A2FFFF
		`;
	}

	hero.addEventListener('mousemove', shadow);
};