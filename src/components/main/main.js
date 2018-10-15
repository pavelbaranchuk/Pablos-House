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
const image = document.querySelector(".mdc__color-yellow");

onButton.listen("click", () => {
  image.style.opacity === ""
    ? (image.style.opacity = "1")
    : (image.style.opacity = "");
});

const volumeFirst = MDCRipple.attachTo(document.querySelector(".volume__1"));

volumeFirst.listen("mouseover", () => {
  image.style.opacity = "0.1";
});

const volume2 = MDCRipple.attachTo(document.querySelector(".volume__2"));

volume2.listen("mouseover", () => {
  image.style.opacity = "0.2";
});

const volume3 = MDCRipple.attachTo(document.querySelector(".volume__3"));

volume3.listen("mouseover", () => {
  image.style.opacity = "0.35";
});

const volume4 = MDCRipple.attachTo(document.querySelector(".volume__4"));

volume4.listen("mouseover", () => {
  image.style.opacity = "0.45";
});

const volume5 = MDCRipple.attachTo(document.querySelector(".volume__5"));

volume5.listen("mouseover", () => {
  image.style.opacity = "0.6";
});

const volume6 = MDCRipple.attachTo(document.querySelector(".volume__6"));

volume6.listen("mouseover", () => {
  image.style.opacity = "0.7";
});

const volume7 = MDCRipple.attachTo(document.querySelector(".volume__7"));

volume7.listen("mouseover", () => {
  image.style.opacity = "0.8";
});

const volume8 = MDCRipple.attachTo(document.querySelector(".volume__8"));

volume8.listen("mouseover", () => {
  image.style.opacity = "0.9";
});

const volume9 = MDCRipple.attachTo(document.querySelector(".volume__9"));

volume9.listen("mouseover", () => {
  image.style.opacity = "1";
});
