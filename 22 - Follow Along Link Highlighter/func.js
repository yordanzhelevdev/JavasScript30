window.onload = () => {
	const triggers = document.querySelectorAll('a');

	const highlight = document.createElement('span');
	highlight.classList.add('highlight');
	document.body.append(highlight);

	function highlightLink() {
		const linkCords = this.getBoundingClientRect();
		const cords = {
			width: linkCords.width,
			height: linkCords.height,
			top: linkCords.top + window.scrollY,
			left: linkCords.left + window.scrollX
		}
		console.log(linkCords);
		highlight.style.width = `${cords.width}px`;
		highlight.style.height = `${cords.height}px`;
		highlight.style.transform = `translate(${cords.left}px, ${cords.top}px)`;
	}

	triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
};