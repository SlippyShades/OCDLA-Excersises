//Takes in a city as a paramether despite the .foreach not having to list a parameter
export default function Button (city,key,active, onClick) {
	//const that stores a html element
	const newButton = document.createElement("button");
	//const that stores a text node that will become the text of the element
	const textNode = document.createTextNode(city.name);
	//Appends the element and the text together to create an element with text inside
	newButton.appendChild(textNode);
	//Sets the id of the button to the name of the city in lowercase
	newButton.id = key;
	//Adds a style to signify its active status
	newButton.classList.add(active == true ? "Active" : "Inactive");
	
	//Gets the button that was created in the html and sets the event listener for setInfo on that button
	newButton.addEventListener("click",onClick); 
	
	return newButton;
}