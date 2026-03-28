//Object Constructor for History Element
class History{
	//Doesn't take any parameters
	constructor() {
		this.historyRecord = [];
	}
	//Additional Methods attached to the objects created by the constructor
	add(cityName) {
		//adds listed name to the array
		this.historyRecord.push(cityName);
		//Calls the other method in this called render
		this.render();
	}
	render() {
		//gets a set part of the site
		const his = document.getElementById("History");
		//Adds a heading
		his.innerHTML = "<h1>History</h1>";
		//Renders everyitem in the array again when a new item gets added
		this.historyRecord.forEach(name => {
			his.insertAdjacentHTML("beforeend", `${name}<br>`);
		});
		
	}
	
	
}
export default History;