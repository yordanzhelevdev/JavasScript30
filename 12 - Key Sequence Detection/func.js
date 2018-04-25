window.onload = () => {
	const pressed = [];
	const secretCode = 'yordan';
	window.addEventListener('keyup', (e) => {
		pressed.push(e.key);
		pressed.splice(-secretCode.legnth - 1, pressed.length - secretCode.length);
		if(pressed.join('').includes(secretCode)){
			console.log('You did it!!');
			cornify_add();
		}
		console.log(pressed);
	});
};	