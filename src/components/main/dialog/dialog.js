import { MDCDialog } from "@material/dialog";
import { MDCRipple } from "@material/ripple";

const dialog = new MDCDialog(document.querySelector(".mdc-dialog"));
const buttonDialog = MDCRipple.attachTo(
  document.querySelector(".mdc-button-dialog")
);
buttonDialog.listen("click", () => {
  dialog.open();
});

const dialogLight = new MDCDialog(document.querySelector(".mdc-dialog-light"));
const buttonDialogLight = MDCRipple.attachTo(
  document.querySelector(".mdc-button-dialog-light")
);
buttonDialogLight.listen("click", () => {
  dialogLight.open();
});

const dialogCoffee = new MDCDialog(
  document.querySelector(".mdc-dialog-coffee")
);
const buttonDialogCoffee = MDCRipple.attachTo(
  document.querySelector(".mdc-button-dialog-coffee")
);
buttonDialogCoffee.listen("click", () => {
  dialogCoffee.open();
});
