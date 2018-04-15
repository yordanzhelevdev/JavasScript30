(function() {
	const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

	const statesAndCities = [];

	const searchInput = document.querySelector('.search');
	const listSuggestions = document.querySelector('.suggestions');

	fetch(endpoint)
		.then(response => response.json())
		.then(data => statesAndCities.push(...data))
		.catch(error => console.log(error));

	function searchPlace(searchValue, arr) {
		return arr.filter((place) => {
			const regex = new RegExp(searchValue, 'gi');
			return place.city.match(regex) || place.state.match(regex);
		});
	}

	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	function displayResult() {
		const filteredArr = searchPlace(this.value, statesAndCities);
		const listHtml = filteredArr.map((place) => {
			const regex = new RegExp(this.value, 'gi');
			const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
			const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
			return `
				<li>
					<span class="name">${cityName}, ${stateName}</span>
					<span class="population">${numberWithCommas(place.population)}</span>
				</li>
			`;
		}).join('');

		listSuggestions.innerHTML = listHtml;
	}

	searchInput.addEventListener('change', displayResult);
	searchInput.addEventListener('keyup', displayResult);

}());