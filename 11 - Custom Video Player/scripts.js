window.onload = () => {
	const player = document.querySelector('.player');
	const video = player.querySelector('.viewer');
	const progress = player.querySelector('.progress');
	const progressBar = player.querySelector('.progress__filled');
	const btnToggle = player.querySelector('.toggle');
	const skipBtns = player.querySelectorAll('[data-skip]');
	const ranges = player.querySelectorAll('.player__slider');
	

	function playAndPause(){
		if(video.paused) {
			video.play();
		}
		else{
			video.pause();
		}
	}

	function updateTheBtn() {
		btnToggle.textContent = this.paused ? '►' : '▍▍';
	}

	function skipTime() {
		video.currentTime += parseFloat(this.dataset.skip);
	}

	function handleRangeChange() {
		const inputChange = this.name;
		video[`${inputChange}`] = this.value;
	};	


	function videoProgress() {
		const percent = (video.currentTime / video.duration) * 100;
		console.log(video.currentTime / video.duration);
		progressBar.style.flexBasis = `${percent}%`;
	}
	
	function scrub(e){
		const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
		video.currentTime = scrubTime;
	}

	video.addEventListener('click', playAndPause);
	video.addEventListener('play', updateTheBtn);
	video.addEventListener('pause', updateTheBtn);
	video.addEventListener('timeupdate', videoProgress);
	
	skipBtns.forEach(skipBtn => {
		skipBtn.addEventListener('click', skipTime)
	});

	ranges.forEach(range => {
		range.addEventListener('change', handleRangeChange);
	});
	ranges.forEach(range => {
		range.addEventListener('mousemove', handleRangeChange);
	});


	btnToggle.addEventListener('click', playAndPause);

	let mousedown = false;
	progress.addEventListener('click', scrub);
	progress.addEventListener('mousemove', (e) => {
		if(mousedown) {
			scrub(e);
		}
	});
	progress.addEventListener('mousedown', () => mousedown = true);
	progress.addEventListener('mouseup', () => mousedown = false);

}
