(function() {
	
	const panels = document.querySelectorAll('div.panel');
	console.log(panels)
	Array.from(panels).forEach( (panel) => {
		panel.addEventListener('click', (e) => {
			const panel = e.target;
			panel.classList.toggle('open');
			panel.classList.toggle('open-active');
			console.log(panel);
		});
	});

}());