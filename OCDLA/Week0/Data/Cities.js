import Location from '../Utils/Location.js';
//New Instances of the Location object
//Made these on my own
let cities = {};
cities["ny"] = new Location(40,-74,"New York City");
cities["la"] = new Location(34, -118, "Los Angeles");
cities["chi"] = new Location(41, -87, "Chicago");
cities["hou"] = new Location(29, -95, "Houston");
cities["phx"] = new Location(33, -112, "Phoenix");
cities["phi"] = new Location(40, -75, "Philadelphia");
cities["sa"] = new Location(29, -98, "San Antonio");
cities["sd"] = new Location(32, -117, "San Diego");
cities["dal"] = new Location(32, -96, "Dallas");
cities["sea"] = new Location(47, -122, "Seattle");

function getCity(id){
    return cities[id] || {};
};
function getCities(){
    return cities;
};
export {getCity, getCities};