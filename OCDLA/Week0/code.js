//Object constructor for Locations
class Location {
	//Takes three parameters
	constructor (lat,lon,name) {
		this.lat = lat;
		this.lon = lon;
		this.name = name;
		
		
	}
	
}
//Object Constructor for History Element
class History{\
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
//New History Instance
const cityHistory = new History();

//New Instances of the Location object
//Made these on my own
const NY = new Location(40,-74,"New York City")
const LA = new Location(34, -118, "Los Angeles");
const CHI = new Location(41, -87, "Chicago");
const HOU = new Location(29, -95, "Houston");
const PHX = new Location(33, -112, "Phoenix");
//Fed the above into chatgpt to get some more 
const PHI = new Location(40, -75, "Philadelphia");
const SA = new Location(29, -98, "San Antonio");
const SD = new Location(32, -117, "San Diego");
const DAL = new Location(32, -96, "Dallas");
const SEA = new Location(47, -122, "Seattle");
//Array of 10 location objects
const Locations = [NY,LA,CHI,HOU,PHX,PHI,SA,SD,DAL,SEA];
//Method that goes through each item in the array and does this function with it
Locations.forEach(CreateButton);

//Takes in a city as a paramether despite the .foreach not having to list a parameter
function CreateButton (city) {
	//const that stores a html element
	const newButton = document.createElement("button");
	//const that stores a text node that will become the text of the element
	const textNode = document.createTextNode(city.name);
	//Appends the element and the text together to create an element with text inside
	newButton.appendChild(textNode);
	//Sets the id of the button to the name of the city in lowercase
	newButton.id = city.name.toLowerCase();
	//Adds a style to signify its active status
	newButton.classList.add("Inactive");
	
	//Appends the button to the actual div inside the html
	document.getElementById("ButtonsDiv").appendChild(newButton);
	//Gets the button that was created in the html and sets the event listener for setInfo on that button
	const btn = document.getElementById(`${city.name.toLowerCase()}`);
	btn.addEventListener("click",() => setInfo(city)); 
	
	
}
function setInfo(city){
	//Sets the info within the div to info from the object the button represents
	const cityInfo = `<h1>Info</h1><p>City:${city.name} Lattitude:${city.lat} Longitude:${city.lon}</p>`
	const cityDiv = document.getElementById("InfoDiv");
	cityDiv.innerHTML = cityInfo;
	
	//Runs the method in the history to add the name of the last hit button into the history object
	cityHistory.add(city.name);
	
	//Sets the class of all the buttons to inactive
	Locations.forEach(c => {
		const colorSet = document.getElementById(`${c.name.toLowerCase()}`)
	colorSet.classList.remove('Active');
	colorSet.classList.add('Inactive');
	})
	
	//gets the button that was actually clicked and stores it
	const newActive = document.getElementById(`${city.name.toLowerCase()}`)
	//sets the style to become the active button
	newActive.classList.remove('Inactive');
	newActive.classList.add('Active');
}
