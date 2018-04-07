(function(){
	
	let secHand = document.querySelector('.second-hand');
	let	hourHand = document.querySelector('.hour-hand');
	let minHand = document.querySelector('.min-hand');

	function setClockTime() {
		const now = new Date;
		
		const seconds = now.getSeconds();
		const secDegree = ((seconds / 60) * 360) + 90;
		secHand.style.transform = `rotate(${secDegree}deg)`;

		const minutes = now.getMinutes();
		const minDeg = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
		minHand.style.transform = `rotate(${minDeg}deg)`;

		const hours = now.getHours();
		const hoursDeg = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
		hourHand.style.transform = `rotate(${hoursDeg}deg)`;



	}

	setInterval(setClockTime, 1000);
}());