import { MDCRipple } from "@material/ripple";
import { MDCMenu } from "@material/menu";
import { MDCList } from "@material/list";
import { MDCDrawer } from "@material/drawer";

const buttonCenter = MDCRipple.attachTo(
  document.querySelector(".mdc-button-center")
);
const menu = new MDCMenu(document.querySelector(".mdc-menu-main"));

const buttonLeft = MDCRipple.attachTo(
  document.querySelector(".mdc-button-left")
);
const menuLeft = new MDCMenu(document.querySelector(".mdc-menu-left"));

const buttonRight = MDCRipple.attachTo(
  document.querySelector(".mdc-button-right")
);
const menuRight = new MDCMenu(document.querySelector(".mdc-menu-right"));

const buttonGeneral = MDCRipple.attachTo(
  document.querySelector(".mdc-button-general")
);
const menuGeneral = new MDCMenu(document.querySelector(".mdc-menu-general"));

const mainTv = document.querySelector(".main-tv");
const mainLight = document.querySelector(".main-light");
const mainCoffee = document.querySelector(".main-coffee");

const tvLink = MDCList.attachTo(document.querySelector(".list__tv"));
const lightLink = MDCList.attachTo(document.querySelector(".list__light"));
const coffeeLink = MDCList.attachTo(document.querySelector(".list__coffee"));

buttonCenter.listen("click", () => {
  menu.open = !menu.open;
});

buttonLeft.listen("click", () => {
  menuLeft.open = !menuLeft.open;
});

buttonRight.listen("click", () => {
  menuRight.open = !menuRight.open;
});

buttonGeneral.listen("click", () => {
  menuGeneral.open = !menuGeneral.open;
});

tvLink.listen("click", () => {
  mainTv.classList.remove("mdc-hidden");
  mainLight.classList.add("mdc-hidden");
  mainCoffee.classList.add("mdc-hidden");
});

lightLink.listen("click", () => {
  mainTv.classList.add("mdc-hidden");
  mainLight.classList.remove("mdc-hidden");
  mainCoffee.classList.add("mdc-hidden");
});

coffeeLink.listen("click", () => {
  mainTv.classList.add("mdc-hidden");
  mainLight.classList.add("mdc-hidden");
  mainCoffee.classList.remove("mdc-hidden");
});
