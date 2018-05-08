window.onload = () => {
		const bands = ['The Plot in You', 
									'The Devil Wears Prada', 
									'Pierce the Veil', 
									'Norma Jean', 
									'The Bled', 
									'Say Anything', 
									'The Midway State',
									'We Came as Romans', 
									'Counterparts', 
									'Oh, Sleeper', 
									'A Skylit Drive', 
									'Anywhere But Here', 
									'An Old Dog'];
		const bandsList = document.querySelector('#bands');
		
		const sorted = bands.sort( (a, b) => {
			const reg = /\b(The|A|An)\b(.*)/gm;
			const band1 = a.replace(reg, '$2 $1').trim();
			const band2 = b.replace(reg, '$2 $1').trim();


			if(band1 < band2) return -1;
			else if (band1 > band2) return 1;
			return 0;
		
		});

		console.log(bandsList);

		sorted.map(band => {
			bandsList.innerHTML += `<li>${band}</li>`;
		});

		console.log(sorted);
}