window.onload = () => {
	(function() {

		const panels = document.querySelectorAll('div.panel');
		console.log(panels)
		

		function panelOpen() {
			this.classList.toggle('open');
		}

		function panelActive(e) {
			if(e.propertyName.includes('flex')){
					this.classList.toggle('open-active');
			}
		}

		Array.from(panels).forEach( (panel) => {
			panel.addEventListener('click', panelOpen);
			panel.addEventListener('transitionend', panelActive)
		});

	}());
}
