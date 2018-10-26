import "./index.scss";
import View from "./js/View";

import Home from "./js/Home";
import Light from "./js/Light";
import CoffeeMachine from "./js/CoffeeMachine";
import Tv from "./js/Tv";

const home = new Home(
  "Kharkiv, Akademika Proskury str.,app.73",
  "Pavlo Baranchuk"
);

home.addNewDevice(new Light("Light System SunShine", "Light text"));
home.addNewDevice(new Tv("LG flatron B112", "TV text"));
home.addNewDevice(new CoffeeMachine("Coffee Machine Espresso", "Coffee text"));

const mainView = new View(home, document.getElementById("root"));

mainView.render();
