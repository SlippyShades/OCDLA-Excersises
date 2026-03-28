function setInfo(city){
	//Sets the info within the div to info from the object the button represents
	const cityInfo = `<h1>Info</h1><p>City:${city.name} Latitude:${city.lat} Longitude:${city.lon}</p>`;
	const cityDiv = document.getElementById("InfoDiv");
	cityDiv.innerHTML = cityInfo;
	
	//Runs the method in the history to add the name of the last hit button into the history object
	cityHistory.add(city.name);
	
	//Sets the class of all the buttons to inactive
	Locations.forEach(c => {
		const colorSet = document.getElementById(c.name.toLowerCase());
		colorSet.classList.remove('Active');
		colorSet.classList.add('Inactive');
	});
	
	//gets the button that was actually clicked and stores it
	const newActive = document.getElementById(city.name.toLowerCase());
	//sets the style to become the active button
	newActive.classList.remove('Inactive');
	newActive.classList.add('Active');
}

export default setInfo;