import History from './Utils/History.js';
import {getCity, getCities} from './Data/Cities.js';
import CityInfo from './Components/CityInfo.js';
import CityPicker from './Components/cityPicker.js';
import {GetState, SetState,render} from './Utils/react/client.js';
import HistoryInfo from './Components/HistoryInfo.js';

let root = document.getElementById("App");

//New History Instance
const cityHistory = new History();


let cities = getCities();
function App(){
    let cityId = GetState("activeCityId");
    let container = document.createElement("div");
    let city = getCity(cityId);
    let Info = CityInfo(city);
    let hisInfo = HistoryInfo();
    container.appendChild(hisInfo);
    container.appendChild(Info);
    container.appendChild(CityPicker(cities, cityHistory));
    return container;
};

render(root,App);







