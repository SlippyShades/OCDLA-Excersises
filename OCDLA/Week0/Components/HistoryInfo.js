import {GetState} from "../Utils/react/client.js";
export default function HistoryInfo(){
  let history = GetState("history") || [];

  let div = document.createElement("div");
  div.id = "History";

  div.innerHTML = "<h1>History</h1>";

  history.forEach(name => {
    div.insertAdjacentHTML("beforeend", `${name}<br>`);
  });

  return div;
}