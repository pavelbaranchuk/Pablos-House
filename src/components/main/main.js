import { MDCDrawer } from "@material/drawer";
import { MDCList } from "@material/list";
import { MDCRipple } from "@material/ripple";

const homePage = document.querySelector(".main-home");
const DevicesPage = document.querySelector(".main-devices");
const authorPage = document.querySelector(".main-author");
const homeLink = MDCList.attachTo(document.querySelector(".mdc-list-home"));
const DevicesLink = MDCList.attachTo(
  document.querySelector(".mdc-list-devices")
);
const authorLink = MDCList.attachTo(document.querySelector(".mdc-list-author"));

homeLink.listen("click", () => {
  homePage.classList.remove("mdc-hidden");
  DevicesPage.classList.add("mdc-hidden");
  authorPage.classList.add("mdc-hidden");
});

DevicesLink.listen("click", () => {
  homePage.classList.add("mdc-hidden");
  DevicesPage.classList.remove("mdc-hidden");
  authorPage.classList.add("mdc-hidden");
});

authorLink.listen("click", () => {
  homePage.classList.add("mdc-hidden");
  DevicesPage.classList.add("mdc-hidden");
  authorPage.classList.remove("mdc-hidden");
});

const onButton = MDCRipple.attachTo(document.querySelector(".light__onOff"));
const image = document.querySelector(".mdc__color");
const urlWhite = "http://localhost:8080/assets/img/white.png";
const urlYellow = "http://localhost:8080/assets/img/yellow.png";

onButton.listen("click", () => {
  image.src === urlWhite
    ? (image.src = image.src.replace(urlWhite, urlYellow))
    : (image.src = image.src.replace(urlYellow, urlWhite));
});
