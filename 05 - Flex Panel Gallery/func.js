window.onload = () => {
	(function() {

		const panels = document.querySelectorAll('div.panel');
		console.log(panels)
		Array.from(panels).forEach( (panel) => {
			panel.addEventListener('click', () => {
				this.classList.toggle('open');
			});
			panel.addEventListener('transitionend', (e) => {
				if(e.propertyName.includes('flex')){
						this.classList.toggle('open-active');
				}
			})
		});

	}());
}
