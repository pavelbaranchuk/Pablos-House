import { MDCTabBar } from "@material/tab-bar";

// // Light
const firstCardLight = document.querySelector(".mdc-card-first-light");
const secondCardLight = document.querySelector(".mdc-card-second-light");
const buttonCardOneLight = MDCTabBar.attachTo(
  document.querySelector(".mdc-tab-first-light")
);
const buttonCardTwoLight = MDCTabBar.attachTo(
  document.querySelector(".mdc-tab-second-light")
);

buttonCardOneLight.listen("click", () => {
  firstCardLight.classList.remove("mdc-hidden");
  secondCardLight.classList.add("mdc-hidden");
});

buttonCardTwoLight.listen("click", () => {
  firstCardLight.classList.add("mdc-hidden");
  secondCardLight.classList.remove("mdc-hidden");
});

// TV
const firstCard = document.querySelector(".mdc-card-first");
const secondCard = document.querySelector(".mdc-card-second");
const buttonCardOne = MDCTabBar.attachTo(
  document.querySelector(".mdc-tab-first")
);
const buttonCardTwo = MDCTabBar.attachTo(
  document.querySelector(".mdc-tab-second")
);

buttonCardOne.listen("click", () => {
  firstCard.classList.remove("mdc-hidden");
  secondCard.classList.add("mdc-hidden");
});

buttonCardTwo.listen("click", () => {
  firstCard.classList.add("mdc-hidden");
  secondCard.classList.remove("mdc-hidden");
});

// Coffee Machine
const firstCardCoffee = document.querySelector(".mdc-card-first-coffee");
const secondCardCoffee = document.querySelector(".mdc-card-second-coffee");
const buttonCardOneCoffee = MDCTabBar.attachTo(
  document.querySelector(".mdc-tab-first-coffee")
);
const buttonCardTwoCoffee = MDCTabBar.attachTo(
  document.querySelector(".mdc-tab-second-coffee")
);

buttonCardOneCoffee.listen("click", () => {
  firstCardCoffee.classList.remove("mdc-hidden");
  secondCardCoffee.classList.add("mdc-hidden");
});

buttonCardTwoCoffee.listen("click", () => {
  firstCardCoffee.classList.add("mdc-hidden");
  secondCardCoffee.classList.remove("mdc-hidden");
});
