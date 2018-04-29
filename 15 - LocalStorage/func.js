  window.onload = () => {
  	const addItems = document.querySelector('.add-items');
  	const btnCheckAll = addItems.querySelector('.btn-checkAll');
  	const btnUncheckAll = addItems.querySelector('.btn-uncheckAll');
  	const btnDeletSelected = addItems.querySelector('.btn-deleteChecked');
  	
  	const itemsList = document.querySelector('.plates');
  	let items = JSON.parse(localStorage.getItem('items')) || [];

		
  	function addItem(e){
  		e.preventDefault();
  		const itemName = (this.querySelector('[name=item]')).value;
  		const item = {
  			name: itemName,
  			done: false
  		};

  		items.push(item);
  		console.log(items);
  		populateList(items, itemsList);
  		localStorage.setItem('items', JSON.stringify(items));
  		this.reset();
  	}


  	function populateList(plates = [], platesList) {
  		
  		platesList.innerHTML = plates.map( (plate, index) => {
  			return `
					<li>
						<input type="checkbox" data-index=${index} id="item${index}" ${plate.done ? 'checked' : ''} />
						<label for="item${index}">${plate.name}</label>
					</li>
  			`
  		}).join('');
  	}

		function toggleDone(e) {
			if(!e.target.matches('input')) return;
			const element = e.target;
			const index = element.dataset.index;
			items[index].done = !items[index].done;
			localStorage.setItem('items', JSON.stringify(items));
			populateList(items, itemsList);
		}

		function checkAll(){
			
			items.map(item => {
				item.done = true;
			});
			
			populateList(items, itemsList);
			localStorage.setItem('items', JSON.stringify(items));
		}

		function uncheckAll() {
			
			items.map(item => {
				item.done = false;
			});

			populateList(items, itemsList);
			localStorage.setItem('items', JSON.stringify(items));
		}

		function deleteSelected() {
		 items = items.filter(item => {
				return item.done === false;
			});

			populateList(items, itemsList);
			localStorage.setItem('items', JSON.stringify(items));
		}

		addItems.addEventListener('submit', addItem);
		itemsList.addEventListener('click', toggleDone)
		btnCheckAll.addEventListener('click', checkAll);
		btnUncheckAll.addEventListener('click', uncheckAll);
		btnDeletSelected.addEventListener('click', deleteSelected);
		populateList(items, itemsList);
  };
  
