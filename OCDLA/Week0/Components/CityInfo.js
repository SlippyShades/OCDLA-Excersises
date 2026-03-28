export default function CityInfo(city){



//Sets the info within the div to info from the object the button represents
	const cityInfo = `<h1>Info</h1><p>City:${city.name} Latitude:${city.lat} Longitude:${city.lon}</p>`;
    const defaultInfo = `<div id="InfoDiv"><h1>Info</h1></div>`;
	const cityDiv = document.createElement("div");
    cityDiv.id = "InfoDiv";
	cityDiv.innerHTML = city.name == null ? defaultInfo : cityInfo;
    return cityDiv;
}
