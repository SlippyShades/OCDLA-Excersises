import Button from "./Button.js";
import {GetState,SetState} from '../Utils/react/client.js';
export default function CityPicker(cities,cityHistory){
    let activeButtonId = GetState("activeCityId");
    const newDiv = document.createElement("div");
    newDiv.id = "ButtonsDiv";
    for(let key in cities) {
        let city = cities[key];
        let active = key == activeButtonId;
        let btn = Button(city,key,active, (e) => setInfo(e, city, cityHistory));
        newDiv.appendChild(btn);
    

       

    };
    return newDiv;
};
 function setInfo(e,city,cityHistory){
            let target = e.target;
            SetState("activeCityId", target.id)
            cityHistory.add(city.name);
        };
