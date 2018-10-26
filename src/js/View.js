import { MDCTopAppBar } from "@material/top-app-bar";
import { MDCDrawer } from "@material/drawer";
import { MDCRipple } from "@material/ripple";
import { MDCMenu } from "@material/menu";
import { MDCList } from "@material/list";
import { MDCTabBar } from "@material/tab-bar";
import { MDCDialog } from "@material/dialog";
import { MDCTextField } from "@material/textfield";

import Home from "./Home";
import Light from "./Light";
import CoffeeMachine from "./CoffeeMachine";
import Tv from "./Tv";

export default class mainView {
  constructor(home, root) {
    this._home = home;
    this._root = root;
  }
  render() {
    root.innerText = "";

    let bodyTag = document.getElementsByTagName("body");
    bodyTag[0].classList.add("page");

    let sidebar = document.createElement("aside");
    sidebar.classList.add(
      "mdc-drawer",
      "mdc-drawer__content",
      "mdc-drawer--dismissible"
    );

    let sidebar_list = document.createElement("div");
    sidebar_list.classList.add("mdc-list");

    // Creating home section link for left sidebar
    let sidebar_home_section = document.createElement("a");
    sidebar_home_section.classList.add("mdc-list-item", "mdc-list-home");
    sidebar_home_section.href = "#home";

    let sidebar_home_icon = document.createElement("i");
    sidebar_home_icon.classList.add("material-icons", "mdc-list-item__graphic");
    sidebar_home_icon.innerText = "home";

    let sidebar_home_span = document.createElement("span");
    sidebar_home_span.classList.add("mdc-list-item__text");
    sidebar_home_span.innerText = "Start page";

    // Creating Your Devices section link for left sidebar
    let sidebar_devices_section = document.createElement("a");
    sidebar_devices_section.classList.add("mdc-list-item", "mdc-list-devices");
    sidebar_devices_section.href = "#devices";

    let sidebar_devices_icon = document.createElement("i");
    sidebar_devices_icon.classList.add(
      "material-icons",
      "mdc-list-item__graphic"
    );
    sidebar_devices_icon.innerText = "dashboard";

    let sidebar_devices_span = document.createElement("span");
    sidebar_devices_span.classList.add("mdc-list-item__text");
    sidebar_devices_span.innerText = "Your Devices";

    // Creating author section link for left sidebar
    let sidebar_author_section = document.createElement("a");
    sidebar_author_section.classList.add("mdc-list-item", "mdc-list-author");
    sidebar_author_section.href = "#author";

    let sidebar_author_icon = document.createElement("i");
    sidebar_author_icon.classList.add(
      "material-icons",
      "mdc-list-item__graphic"
    );
    sidebar_author_icon.innerText = "person";

    let sidebar_author_span = document.createElement("span");
    sidebar_author_span.classList.add("mdc-list-item__text");
    sidebar_author_span.innerText = "Author";

    //Attaching sidebar section to root
    root.appendChild(sidebar);
    sidebar.appendChild(sidebar_list);
    sidebar_list.appendChild(sidebar_home_section);
    sidebar_home_section.appendChild(sidebar_home_icon);
    sidebar_home_section.appendChild(sidebar_home_span);

    sidebar_list.appendChild(sidebar_devices_section);
    sidebar_devices_section.appendChild(sidebar_devices_icon);
    sidebar_devices_section.appendChild(sidebar_devices_span);

    sidebar_list.appendChild(sidebar_author_section);
    sidebar_author_section.appendChild(sidebar_author_icon);
    sidebar_author_section.appendChild(sidebar_author_span);

    //Creating Top App Bar
    let header = document.createElement("div");
    header.classList.add("mdc-drawer-app-content");

    let header_wrapper = document.createElement("header");
    header_wrapper.classList.add("mdc-top-app-bar", "app-bar");
    header_wrapper.setAttribute("id", "app-bar");

    let header_row = document.createElement("div");
    header_row.classList.add("mdc-top-app-bar__row");

    root.appendChild(header);
    header.appendChild(header_wrapper);
    header_wrapper.appendChild(header_row);

    // Adding page title
    let header_title = document.createElement("section");
    header_title.classList.add(
      "mdc-top-app-bar__section",
      "mdc-top-app-bar__section--align-start"
    );

    let header_title_link = document.createElement("a");
    header_title_link.classList.add(
      "material-icons",
      "mdc-top-app-bar__navigation-icon"
    );
    header_title_link.innerText = "menu";

    let header_title_span = document.createElement("span");
    header_title_span.classList.add("mdc-top-app-bar__title");
    header_title_span.innerText = "Smart House with MDC";

    header_row.appendChild(header_title);
    header_title.appendChild(header_title_link);
    header_title.appendChild(header_title_span);

    //Main-devices section----------------------------------------------

    let devices = document.createElement("div");
    devices.classList.add(
      "main-devices",
      "main-content",
      "main",
      "mdc-top-app-bar--fixed-adjust"
    );
    devices.setAttribute("id", "main-content");

    root.appendChild(devices);

    //Main-light section----------------------------------------------

    //Left panel----------------------------------------------
    //Left panel----------------------------------------------
    //Left panel----------------------------------------------
    //Left panel----------------------------------------------
    //Left panel----------------------------------------------
    //Left panel----------------------------------------------
    //Left panel----------------------------------------------
    //Left panel----------------------------------------------
    //Left panel----------------------------------------------
    //Left panel----------------------------------------------
    //Left panel----------------------------------------------
    //Left panel----------------------------------------------
    //Left panel----------------------------------------------

    this._home.devices.forEach(device => {
      if (device instanceof Light) {
        let light = document.createElement("main");
        light.classList.add(
          "main-light",
          "mdc-top-app-bar--fixed-adjust",
          "main",
          "mdc-hidden",
          `main__${device.id}`
        );

        let light_wrapper_left = document.createElement("div");

        devices.appendChild(light);
        light.appendChild(light_wrapper_left);

        let light_title = document.createElement("h2");
        light_title.innerText = `${device.name}`;
        light_title.classList.add("device__title", `device__${device.id}`);

        let light_image_wrapper = document.createElement("div");
        light_image_wrapper.classList.add(
          "mdc-card",
          "mdc-card__light",
          "mdc-card-first",
          `mdc-card-first-${device.id}`,
          "card__light"
        );

        let light_card = document.createElement("div");
        light_card.classList.add("card__light");

        let light_image = document.createElement("img");
        light_image.classList.add("mdc-card__image", "mdc__color-yellow");
        light_image.setAttribute(
          "src",
          "../assets/img/yellow_light_cropped.png"
        );

        let light_card_second = document.createElement("div");
        light_card_second.classList.add(
          "mdc-card",
          "mdc-card-second",
          `mdc-card-second-${device.id}`,
          "mdc-hidden"
        );

        let light_card_second_title = document.createElement("h3");
        light_card_second_title.classList.add(
          "card__title",
          `card__title__${device.id}`
        );
        light_card_second_title.innerText = "Light specification";

        let light_card_second_description = document.createElement("p");
        light_card_second_description.classList.add("card__paragraph");
        light_card_second_description.innerText = `${device.info}`;

        light_wrapper_left.appendChild(light_title);
        light_wrapper_left.appendChild(light_image_wrapper);
        light_image_wrapper.appendChild(light_card);
        light_card.appendChild(light_image);
        light_wrapper_left.appendChild(light_card_second);
        light_card_second.appendChild(light_card_second_title);
        light_card_second.appendChild(light_card_second_description);

        // "Select" funcionality
        let light_card_tab_wrapper = document.createElement("div");
        light_card_tab_wrapper.classList.add("mdc-tab-bar");

        let light_card_tab_scroller = document.createElement("div");
        light_card_tab_scroller.classList.add("mdc-tab-scroller");

        let light_card_tab_scroll_area = document.createElement("div");
        light_card_tab_scroll_area.classList.add(
          "mdc-tab-scroller__scroll-area"
        );

        let light_card_tab_scroll_content = document.createElement("div");
        light_card_tab_scroll_content.classList.add(
          "mdc-tab-scroller__scroll-content"
        );

        let light_card_button_main = document.createElement("button");
        light_card_button_main.classList.add(
          "mdc-tab",
          "mdc-tab-first",
          `mdc-tab-first-${device.id}`,
          "mdc-tab--active"
        );
        light_card_button_main.setAttribute("role", "tab");
        light_card_button_main.setAttribute("aria-selected", "true");
        light_card_button_main.setAttribute("tabindex", "0");

        let light_card_span_left_content = document.createElement("span");
        light_card_span_left_content.classList.add("mdc-tab__content");

        let light_card_span_left_icon = document.createElement("span");
        light_card_span_left_icon.classList.add(
          "mdc-tab__icon",
          "material-icons"
        );
        light_card_span_left_icon.innerText = "location_city";

        let light_card_span_left_label = document.createElement("span");
        light_card_span_left_label.classList.add("mdc-tab__text-label");
        light_card_span_left_label.innerText = "Main";

        let light_card_span_left_ripple = document.createElement("span");
        light_card_span_left_ripple.classList.add("mdc-tab__ripple");

        let light_card_button_info = document.createElement("button");
        light_card_button_info.classList.add(
          "mdc-tab",
          "mdc-tab-second",
          "mdc-tab-second-light",
          `mdc-tab-second-${device.id}`,
          "mdc-tab--active"
        );
        light_card_button_info.setAttribute("role", "tab");
        light_card_button_info.setAttribute("aria-selected", "true");
        light_card_button_info.setAttribute("tabindex", "1");

        let light_card_span_right_content = document.createElement("span");
        light_card_span_right_content.classList.add("mdc-tab__content");

        let light_card_span_right_icon = document.createElement("span");
        light_card_span_right_icon.classList.add(
          "mdc-tab__icon",
          "material-icons"
        );
        light_card_span_right_icon.innerText = "info";

        let light_card_span_right_label = document.createElement("span");
        light_card_span_right_label.classList.add("mdc-tab__text-label");
        light_card_span_right_label.innerText = "Information";

        let light_card_span_right_ripple = document.createElement("span");
        light_card_span_right_ripple.classList.add("mdc-tab__ripple");

        light_wrapper_left.appendChild(light_card_tab_wrapper);
        light_card_tab_wrapper.appendChild(light_card_tab_scroller);
        light_card_tab_scroller.appendChild(light_card_tab_scroll_area);
        light_card_tab_scroll_area.appendChild(light_card_tab_scroll_content);

        light_card_tab_scroll_content.appendChild(light_card_button_main);
        light_card_button_main.appendChild(light_card_span_left_content);
        light_card_span_left_content.appendChild(light_card_span_left_icon);
        light_card_span_left_content.appendChild(light_card_span_left_label);
        light_card_button_main.appendChild(light_card_span_left_ripple);

        light_card_tab_scroll_content.appendChild(light_card_button_info);
        light_card_button_info.appendChild(light_card_span_right_content);
        light_card_span_right_content.appendChild(light_card_span_right_icon);
        light_card_span_right_content.appendChild(light_card_span_right_label);
        light_card_button_info.appendChild(light_card_span_right_ripple);

        //Right panel-----------------------------------------
        let light_wrapper_right = document.createElement("div");
        light_wrapper_right.classList.add("select__wrapper");

        light.appendChild(light_wrapper_right);

        let light_select_name = document.createElement("div");
        light_select_name.classList.add("mdc-text-field");

        let light_select_name_input = document.createElement("input");
        light_select_name_input.classList.add(
          "mdc-text-field__input",
          "mdc-text-field__input_light_name",
          `mdc-text-field-${device.id}`
        );
        light_select_name_input.setAttribute("type", "text");
        light_select_name_input.setAttribute("placeholder", "Name your device");
        light_select_name_input.setAttribute("id", "my-text-field");
        light_select_name_input.setAttribute(
          "oninput",
          `document.querySelector(".device__${
            device.id
          }").innerHTML = document.querySelector(".mdc-text-field-${
            device.id
          }").value;`
        );

        let light_select_name_ripple = document.createElement("div");
        light_select_name_ripple.classList.add("mdc-line-ripple");

        let light_select_description = document.createElement("div");
        light_select_description.classList.add("mdc-text-field");

        let light_select_description_input = document.createElement("input");
        light_select_description_input.classList.add(
          "mdc-text-field__input",
          "mdc-text-field__input_light_descripion"
        );
        light_select_description_input.setAttribute("type", "text");
        light_select_description_input.setAttribute(
          "placeholder",
          "Change the description"
        );
        light_select_description_input.setAttribute("id", "my-text-field");

        let light_select_description_ripple = document.createElement("div");
        light_select_description_ripple.classList.add("mdc-line-ripple");

        //Light mode
        let light_select_mode = document.createElement("div");
        light_select_mode.classList.add("mdc-select");

        let light_select_mode_wrapper = document.createElement("select");
        light_select_mode_wrapper.classList.add("mdc-select__native-control");

        let light_select_mode_option1 = document.createElement("option");
        light_select_mode_option1.innerText = "Constant";

        let light_select_mode_option2 = document.createElement("option");
        light_select_mode_option2.innerText = "Blinking";

        let light_select_mode_option3 = document.createElement("option");
        light_select_mode_option3.innerText = "Fadingt";

        let light_select_mode_label = document.createElement("label");
        light_select_mode_label.classList.add(
          "mdc-floating-label",
          "mdc-floating-label--float-above"
        );
        light_select_mode_label.innerText = "Change the mode";

        let light_select_mode_ripple = document.createElement("div");
        light_select_mode_ripple.classList.add("mdc-line-ripple");

        //Color mode
        let light_select_color = document.createElement("div");
        light_select_color.classList.add("mdc-select");

        let light_select_color_wrapper = document.createElement("select");
        light_select_color_wrapper.classList.add("mdc-select__native-control");

        let light_select_color_option1 = document.createElement("option");
        light_select_color_option1.innerText = "Yellow";

        let light_select_color_option2 = document.createElement("option");
        light_select_color_option2.innerText = "Green";

        let light_select_color_option3 = document.createElement("option");
        light_select_color_option3.innerText = "Orange";

        let light_select_color_label = document.createElement("label");
        light_select_color_label.classList.add(
          "mdc-floating-label",
          "mdc-floating-label--float-above"
        );
        light_select_color_label.innerText = "Change color";

        let light_select_color_ripple = document.createElement("div");
        light_select_color_ripple.classList.add("mdc-line-ripple");

        light_wrapper_right.appendChild(light_select_name);
        light_select_name.appendChild(light_select_name_input);
        light_select_name.appendChild(light_select_name_ripple);

        light_wrapper_right.appendChild(light_select_description);
        light_select_description.appendChild(light_select_description_input);
        light_select_description.appendChild(light_select_description_ripple);

        light_wrapper_right.appendChild(light_select_mode);
        light_select_mode.appendChild(light_select_mode_wrapper);
        light_select_mode_wrapper.appendChild(light_select_mode_option1);
        light_select_mode_wrapper.appendChild(light_select_mode_option2);
        light_select_mode_wrapper.appendChild(light_select_mode_option3);
        light_select_mode.appendChild(light_select_mode_label);
        light_select_mode.appendChild(light_select_mode_ripple);

        light_wrapper_right.appendChild(light_select_color);
        light_select_color.appendChild(light_select_color_wrapper);
        light_select_color_wrapper.appendChild(light_select_color_option1);
        light_select_color_wrapper.appendChild(light_select_color_option2);
        light_select_color_wrapper.appendChild(light_select_color_option3);
        light_select_color.appendChild(light_select_color_label);
        light_select_color.appendChild(light_select_color_ripple);

        //Remote control
        let light_control_wrapper = document.createElement("div");
        light_control_wrapper.classList.add(
          "control__wrapper",
          "control__light"
        );

        let light_control_image = document.createElement("img");
        light_control_image.classList.add("control__image");
        light_control_image.setAttribute(
          "src",
          "../assets/img/remote_control.png"
        );

        let light_control_btn_power = document.createElement("button");
        light_control_btn_power.classList.add(
          "light__onOff",
          "mdc-fab",
          "mdc-button-add"
        );

        let light_control_btn_power_icon = document.createElement("i");
        light_control_btn_power_icon.classList.add("fas", "fa-power-off");

        let light_control_horizontal = document.createElement("div");
        light_control_horizontal.classList.add("control__horizontal");

        let light_control_btn_up = document.createElement("button");
        light_control_btn_up.classList.add("mdc-fab", "mdc-button-channel-up");

        let light_control_btn_up_icon = document.createElement("i");
        light_control_btn_up_icon.classList.add("fas", "fa-caret-left");

        let light_control_btn_down = document.createElement("button");
        light_control_btn_down.classList.add(
          "mdc-fab",
          "mdc-button-channel-down"
        );

        let light_control_btn_down_icon = document.createElement("i");
        light_control_btn_down_icon.classList.add("fas", "fa-caret-right");

        let light_control_wrapper_mode = document.createElement("div");

        let light_control_mode = document.createElement("div");
        light_control_mode.classList.add("control__mode");

        let light_control_mode_btn_1 = document.createElement("button");
        light_control_mode_btn_1.classList.add("mdc-fab", "mdc-button-channel");
        light_control_mode_btn_1.innerText = "1";

        let light_control_mode_btn_2 = document.createElement("button");
        light_control_mode_btn_2.classList.add("mdc-fab", "mdc-button-channel");
        light_control_mode_btn_2.innerText = "2";

        let light_control_mode_btn_3 = document.createElement("button");
        light_control_mode_btn_3.classList.add("mdc-fab", "mdc-button-channel");
        light_control_mode_btn_3.innerText = "3";

        let light_control_volume = document.createElement("div");
        light_control_volume.classList.add("control__volume");

        let light_control_volume_title = document.createElement("h2");
        light_control_volume_title.classList.add("volume__title");
        light_control_volume_title.innerText = "Brightness";

        let light_control_volume_input = document.createElement("input");
        light_control_volume_input.classList.add("e-range");
        light_control_volume_input.setAttribute("type", "range");
        light_control_volume_input.setAttribute("min", "0");
        light_control_volume_input.setAttribute("max", "10");

        light_wrapper_right.appendChild(light_control_wrapper);
        light_control_wrapper.appendChild(light_control_image);
        light_control_wrapper.appendChild(light_control_btn_power);
        light_control_btn_power.appendChild(light_control_btn_power_icon);

        light_control_wrapper.appendChild(light_control_horizontal);
        light_control_horizontal.appendChild(light_control_btn_up);
        light_control_btn_up.appendChild(light_control_btn_up_icon);
        light_control_horizontal.appendChild(light_control_btn_down);
        light_control_btn_down.appendChild(light_control_btn_down_icon);

        light_control_wrapper.appendChild(light_control_wrapper_mode);
        light_control_wrapper_mode.appendChild(light_control_mode);
        light_control_mode.appendChild(light_control_mode_btn_1);
        light_control_mode.appendChild(light_control_mode_btn_2);
        light_control_mode.appendChild(light_control_mode_btn_3);

        light_control_wrapper.appendChild(light_control_volume);
        light_control_volume.appendChild(light_control_volume_title);
        light_control_volume.appendChild(light_control_volume_input);

        //Dialog popup
        let light_dialog_wrapper = document.createElement("div");
        light_dialog_wrapper.classList.add(
          "mdc-dialog",
          "mdc-dialog-light",
          `mdc-dialog-${device.id}`
        );
        light_dialog_wrapper.setAttribute("role", "alertdialog");
        light_dialog_wrapper.setAttribute("aria-modal", "true");
        light_dialog_wrapper.setAttribute("aria-labelledby", "my-dialog-title");
        light_dialog_wrapper.setAttribute(
          "aria-describedby",
          "my-dialog-content"
        );

        let light_dialog_container = document.createElement("div");
        light_dialog_container.classList.add("mdc-dialog__container");

        let light_dialog_surface = document.createElement("div");
        light_dialog_surface.classList.add("mdc-dialog__surface");

        let light_dialog_title = document.createElement("h2");
        light_dialog_title.classList.add("mdc-dialog__title");
        light_dialog_title.setAttribute("id", "my-dialog-title");
        light_dialog_title.innerText =
          "Are you sure you want to delete this device?";

        let light_dialog_image = document.createElement("img");
        light_dialog_image.classList.add("dialog__image");
        light_dialog_image.setAttribute("src", "../assets/img/nooo.png");

        let light_dialog_footer = document.createElement("footer");
        light_dialog_footer.classList.add("mdc-dialog__actions");

        let light_dialog_btn__cancel = document.createElement("button");
        light_dialog_btn__cancel.classList.add(
          "mdc-button",
          "mdc-dialog__button"
        );
        light_dialog_btn__cancel.setAttribute("type", "button");
        light_dialog_btn__cancel.setAttribute(
          "data-mdc-dialog-action",
          "close"
        );
        light_dialog_btn__cancel.innerText = "Cancel";

        let light_dialog_btn_delete = document.createElement("button");
        light_dialog_btn_delete.classList.add(
          "mdc-button",
          "mdc-dialog__button",
          `mdc-dialog__${device.id}`
        );

        light_dialog_btn_delete.setAttribute("type", "button");
        light_dialog_btn_delete.setAttribute(
          "data-mdc-dialog-action",
          "accept"
        );
        light_dialog_btn_delete.innerText = "Delete";

        let light_dialog_scrim = document.createElement("div");
        light_dialog_scrim.classList.add("mdc-dialog__scrim");

        let light_dialog_btn_trigger = document.createElement("button");
        light_dialog_btn_trigger.classList.add(
          "mdc-button",
          "mdc-button-dialog-light",
          "mdc-button-delete-light",
          "mdc-button-delete",
          "mdc-button-dialog",
          "mdc-button--raised",
          `mdc-button-dialog-${device.id}`
        );
        light_dialog_btn_trigger.innerText = "Delete device";

        light_control_wrapper.appendChild(light_dialog_wrapper);
        light_dialog_wrapper.appendChild(light_dialog_container);
        light_dialog_container.appendChild(light_dialog_surface);
        light_dialog_surface.appendChild(light_dialog_title);
        light_dialog_surface.appendChild(light_dialog_image);
        light_dialog_surface.appendChild(light_dialog_footer);
        light_dialog_footer.appendChild(light_dialog_btn__cancel);
        light_dialog_footer.appendChild(light_dialog_btn_delete);
        light_dialog_wrapper.appendChild(light_dialog_scrim);
        light_control_wrapper.appendChild(light_dialog_btn_trigger);
      } else if (device instanceof Tv) {
        // TV section-------------------------------------
        // TV section-------------------------------------
        // TV section-------------------------------------
        // TV section-------------------------------------
        // TV section-------------------------------------
        // TV section-------------------------------------
        // TV section-------------------------------------
        // TV section-------------------------------------
        // TV section-------------------------------------
        // TV section-------------------------------------
        // TV section-------------------------------------
        // TV section-------------------------------------
        // TV section-------------------------------------
        // TV section-------------------------------------
        // TV section-------------------------------------

        let tv = document.createElement("main");
        tv.classList.add("main-tv", "main", "mdc-hidden", `main__${device.id}`);

        let tv_wrapper_left = document.createElement("div");

        devices.appendChild(tv);
        tv.appendChild(tv_wrapper_left);

        let tv_title = document.createElement("h2");
        tv_title.innerText = `${device.name}`;
        tv_title.classList.add("device__title");

        let tv_video_wrapper = document.createElement("div");
        tv_video_wrapper.classList.add(
          "mdc-card",
          "mdc-card-first",
          `mdc-card-first-${device.id}`
        );

        let tv_card = document.createElement("div");
        tv_card.classList.add("card__tv");

        let tv_video = document.createElement("iframe");
        tv_video.classList.add("giphy-embed");
        tv_video.setAttribute("src", "https://giphy.com/embed/1zqkzJMV89QHK");
        tv_video.setAttribute("height", "280");
        tv_video.setAttribute("width", "500");
        tv_video.setAttribute("frameBorder", "0");

        let tv_card_media = document.createElement("div");
        tv_card_media.classList.add(
          "mdc-card__media",
          "card__tv-image",
          "mdc-card__media--square"
        );

        let tv_card_media_content = document.createElement("div");
        tv_card_media_content.classList.add("mdc-card__media-content");

        let tv_card_second = document.createElement("div");
        tv_card_second.classList.add(
          "mdc-card",
          "mdc-card-second",
          `mdc-card-second-${device.id}`,
          "mdc-hidden"
        );

        let tv_card_second_title = document.createElement("h3");
        tv_card_second_title.classList.add("card__title");
        tv_card_second_title.innerText = "TV specification";

        let tv_card_second_description = document.createElement("p");
        tv_card_second_description.classList.add("card__paragraph");
        tv_card_second_description.innerText = `${device.info}`;

        tv_wrapper_left.appendChild(tv_title);
        tv_wrapper_left.appendChild(tv_video_wrapper);
        tv_video_wrapper.appendChild(tv_card);
        tv_card.appendChild(tv_video);
        tv_video_wrapper.appendChild(tv_card_media);
        tv_card_media.appendChild(tv_card_media_content);
        tv_wrapper_left.appendChild(tv_card_second);
        tv_card_second.appendChild(tv_card_second_title);
        tv_card_second.appendChild(tv_card_second_description);

        // "Select" funcionality
        let tv_card_tab_wrapper = document.createElement("div");
        tv_card_tab_wrapper.classList.add("mdc-tab-bar");

        let tv_card_tab_scroller = document.createElement("div");
        tv_card_tab_scroller.classList.add("mdc-tab-scroller");

        let tv_card_tab_scroll_area = document.createElement("div");
        tv_card_tab_scroll_area.classList.add("mdc-tab-scroller__scroll-area");

        let tv_card_tab_scroll_content = document.createElement("div");
        tv_card_tab_scroll_content.classList.add(
          "mdc-tab-scroller__scroll-content"
        );

        let tv_card_button_main = document.createElement("button");
        tv_card_button_main.classList.add(
          "mdc-tab",
          "mdc-tab-first",
          "mdc-tab-first-tv",
          `mdc-tab-first-${device.id}`,
          "mdc-tab--active"
        );
        tv_card_button_main.setAttribute("role", "tab");
        tv_card_button_main.setAttribute("aria-selected", "true");
        tv_card_button_main.setAttribute("tabindex", "0");

        let tv_card_span_left_content = document.createElement("span");
        tv_card_span_left_content.classList.add("mdc-tab__content");

        let tv_card_span_left_icon = document.createElement("span");
        tv_card_span_left_icon.classList.add("mdc-tab__icon", "material-icons");
        tv_card_span_left_icon.innerText = "location_city";

        let tv_card_span_left_label = document.createElement("span");
        tv_card_span_left_label.classList.add("mdc-tab__text-label");
        tv_card_span_left_label.innerText = "Main";

        let tv_card_span_left_ripple = document.createElement("span");
        tv_card_span_left_ripple.classList.add("mdc-tab__ripple");

        let tv_card_button_info = document.createElement("button");
        tv_card_button_info.classList.add(
          "mdc-tab",
          "mdc-tab-second",
          "mdc-tab-second-tv",
          `mdc-tab-second-${device.id}`,
          "mdc-tab--active"
        );
        tv_card_button_info.setAttribute("role", "tab");
        tv_card_button_info.setAttribute("aria-selected", "true");
        tv_card_button_info.setAttribute("tabindex", "1");

        let tv_card_span_right_content = document.createElement("span");
        tv_card_span_right_content.classList.add("mdc-tab__content");

        let tv_card_span_right_icon = document.createElement("span");
        tv_card_span_right_icon.classList.add(
          "mdc-tab__icon",
          "material-icons"
        );
        tv_card_span_right_icon.innerText = "info";

        let tv_card_span_right_label = document.createElement("span");
        tv_card_span_right_label.classList.add("mdc-tab__text-label");
        tv_card_span_right_label.innerText = "Information";

        let tv_card_span_right_ripple = document.createElement("span");
        tv_card_span_right_ripple.classList.add("mdc-tab__ripple");

        tv_wrapper_left.appendChild(tv_card_tab_wrapper);
        tv_card_tab_wrapper.appendChild(tv_card_tab_scroller);
        tv_card_tab_scroller.appendChild(tv_card_tab_scroll_area);
        tv_card_tab_scroll_area.appendChild(tv_card_tab_scroll_content);

        tv_card_tab_scroll_content.appendChild(tv_card_button_main);
        tv_card_button_main.appendChild(tv_card_span_left_content);
        tv_card_span_left_content.appendChild(tv_card_span_left_icon);
        tv_card_span_left_content.appendChild(tv_card_span_left_label);
        tv_card_button_main.appendChild(tv_card_span_left_ripple);

        tv_card_tab_scroll_content.appendChild(tv_card_button_info);
        tv_card_button_info.appendChild(tv_card_span_right_content);
        tv_card_span_right_content.appendChild(tv_card_span_right_icon);
        tv_card_span_right_content.appendChild(tv_card_span_right_label);
        tv_card_button_info.appendChild(tv_card_span_right_ripple);

        //Right panel-----------------------------------------
        let tv_wrapper_right = document.createElement("div");
        tv_wrapper_right.classList.add("select__wrapper");

        tv.appendChild(tv_wrapper_right);

        let tv_select_name = document.createElement("div");
        tv_select_name.classList.add("mdc-text-field");

        let tv_select_name_input = document.createElement("input");
        tv_select_name_input.classList.add("mdc-text-field__input");
        tv_select_name_input.setAttribute("type", "text");
        tv_select_name_input.setAttribute("placeholder", "Name your device");
        tv_select_name_input.setAttribute("id", "my-text-field");

        let tv_select_name_ripple = document.createElement("div");
        tv_select_name_ripple.classList.add("mdc-line-ripple");

        let tv_select_description = document.createElement("div");
        tv_select_description.classList.add("mdc-text-field");

        let tv_select_description_input = document.createElement("input");
        tv_select_description_input.classList.add("mdc-text-field__input");
        tv_select_description_input.setAttribute("type", "text");
        tv_select_description_input.setAttribute(
          "placeholder",
          "Change the description"
        );
        tv_select_description_input.setAttribute("id", "my-text-field");

        let tv_select_description_ripple = document.createElement("div");
        tv_select_description_ripple.classList.add("mdc-line-ripple");

        tv_wrapper_right.appendChild(tv_select_name);
        tv_select_name.appendChild(tv_select_name_input);
        tv_select_name.appendChild(tv_select_name_ripple);

        tv_wrapper_right.appendChild(tv_select_description);
        tv_select_description.appendChild(tv_select_description_input);
        tv_select_description.appendChild(tv_select_description_ripple);

        //Remote control
        let tv_control_wrapper = document.createElement("div");
        tv_control_wrapper.classList.add("control__wrapper", "control__tv");

        let tv_control_image = document.createElement("img");
        tv_control_image.classList.add("control__image");
        tv_control_image.setAttribute(
          "src",
          "../assets/img/remote_control.png"
        );

        let tv_control_btn_power = document.createElement("button");
        tv_control_btn_power.classList.add(
          "tv__onOff",
          "mdc-fab",
          "mdc-button-add"
        );

        let tv_control_btn_power_icon = document.createElement("i");
        tv_control_btn_power_icon.classList.add("fas", "fa-power-off");

        let tv_control_horizontal = document.createElement("div");
        tv_control_horizontal.classList.add("control__horizontal");

        let tv_control_btn_up = document.createElement("button");
        tv_control_btn_up.classList.add("mdc-fab", "mdc-button-channel-up");

        let tv_control_btn_up_icon = document.createElement("i");
        tv_control_btn_up_icon.classList.add("fas", "fa-caret-left");

        let tv_control_btn_down = document.createElement("button");
        tv_control_btn_down.classList.add("mdc-fab", "mdc-button-channel-down");

        let tv_control_btn_down_icon = document.createElement("i");
        tv_control_btn_down_icon.classList.add("fas", "fa-caret-right");

        let tv_control_wrapper_mode = document.createElement("div");

        let tv_control_mode_left = document.createElement("div");
        tv_control_mode_left.classList.add("control__left");

        let tv_control_mode_btn_1 = document.createElement("button");
        tv_control_mode_btn_1.classList.add("mdc-fab", "mdc-button-channel");
        tv_control_mode_btn_1.innerText = "1";

        let tv_control_mode_btn_2 = document.createElement("button");
        tv_control_mode_btn_2.classList.add("mdc-fab", "mdc-button-channel");
        tv_control_mode_btn_2.innerText = "2";

        let tv_control_mode_btn_3 = document.createElement("button");
        tv_control_mode_btn_3.classList.add("mdc-fab", "mdc-button-channel");
        tv_control_mode_btn_3.innerText = "3";

        let tv_control_mode_right = document.createElement("div");
        tv_control_mode_right.classList.add("control__right");

        let tv_control_mode_btn_4 = document.createElement("button");
        tv_control_mode_btn_4.classList.add("mdc-fab", "mdc-button-channel");
        tv_control_mode_btn_4.innerText = "4";

        let tv_control_mode_btn_5 = document.createElement("button");
        tv_control_mode_btn_5.classList.add("mdc-fab", "mdc-button-channel");
        tv_control_mode_btn_5.innerText = "5";

        let tv_control_mode_btn_6 = document.createElement("button");
        tv_control_mode_btn_6.classList.add("mdc-fab", "mdc-button-channel");
        tv_control_mode_btn_6.innerText = "6";

        let tv_control_volume = document.createElement("div");
        tv_control_volume.classList.add("control__volume");

        let tv_control_volume_title = document.createElement("h2");
        tv_control_volume_title.classList.add("volume__title-tv");
        tv_control_volume_title.innerText = "Volume";

        let tv_control_volume_input = document.createElement("input");
        tv_control_volume_input.classList.add("e-range");
        tv_control_volume_input.setAttribute("type", "range");
        tv_control_volume_input.setAttribute("min", "0");
        tv_control_volume_input.setAttribute("max", "10");

        tv_wrapper_right.appendChild(tv_control_wrapper);
        tv_control_wrapper.appendChild(tv_control_image);
        tv_control_wrapper.appendChild(tv_control_btn_power);
        tv_control_btn_power.appendChild(tv_control_btn_power_icon);

        tv_control_wrapper.appendChild(tv_control_horizontal);
        tv_control_horizontal.appendChild(tv_control_btn_up);
        tv_control_btn_up.appendChild(tv_control_btn_up_icon);
        tv_control_horizontal.appendChild(tv_control_btn_down);
        tv_control_btn_down.appendChild(tv_control_btn_down_icon);

        tv_control_wrapper.appendChild(tv_control_wrapper_mode);
        tv_control_wrapper_mode.appendChild(tv_control_mode_left);
        tv_control_mode_left.appendChild(tv_control_mode_btn_1);
        tv_control_mode_left.appendChild(tv_control_mode_btn_2);
        tv_control_mode_left.appendChild(tv_control_mode_btn_3);
        tv_control_wrapper_mode.appendChild(tv_control_mode_right);
        tv_control_mode_right.appendChild(tv_control_mode_btn_4);
        tv_control_mode_right.appendChild(tv_control_mode_btn_5);
        tv_control_mode_right.appendChild(tv_control_mode_btn_6);

        tv_control_wrapper.appendChild(tv_control_volume);
        tv_control_volume.appendChild(tv_control_volume_title);
        tv_control_volume.appendChild(tv_control_volume_input);

        //Dialog popup
        let tv_dialog_wrapper = document.createElement("div");
        tv_dialog_wrapper.classList.add(
          "mdc-dialog",
          "mdc-dialog-tv",
          `mdc-dialog-${device.id}`
        );
        tv_dialog_wrapper.setAttribute("role", "alertdialog");
        tv_dialog_wrapper.setAttribute("aria-modal", "true");
        tv_dialog_wrapper.setAttribute("aria-labelledby", "my-dialog-title");
        tv_dialog_wrapper.setAttribute("aria-describedby", "my-dialog-content");

        let tv_dialog_container = document.createElement("div");
        tv_dialog_container.classList.add("mdc-dialog__container");

        let tv_dialog_surface = document.createElement("div");
        tv_dialog_surface.classList.add("mdc-dialog__surface");

        let tv_dialog_title = document.createElement("h2");
        tv_dialog_title.classList.add("mdc-dialog__title");
        tv_dialog_title.setAttribute("id", "my-dialog-title");
        tv_dialog_title.innerText =
          "Are you sure you want to delete this device?";

        let tv_dialog_image = document.createElement("img");
        tv_dialog_image.classList.add("dialog__image");
        tv_dialog_image.setAttribute("src", "../assets/img/nooo.png");

        let tv_dialog_footer = document.createElement("footer");
        tv_dialog_footer.classList.add("mdc-dialog__actions");

        let tv_dialog_btn__cancel = document.createElement("button");
        tv_dialog_btn__cancel.classList.add("mdc-button", "mdc-dialog__button");
        tv_dialog_btn__cancel.setAttribute("type", "button");
        tv_dialog_btn__cancel.setAttribute("data-mdc-dialog-action", "close");
        tv_dialog_btn__cancel.innerText = "Cancel";

        let tv_dialog_btn_delete = document.createElement("button");
        tv_dialog_btn_delete.classList.add(
          "mdc-button",
          "mdc-dialog__button",
          `mdc-dialog__${device.id}`
        );
        tv_dialog_btn_delete.setAttribute("type", "button");
        tv_dialog_btn_delete.setAttribute("data-mdc-dialog-action", "accept");
        tv_dialog_btn_delete.innerText = "Delete";

        let tv_dialog_scrim = document.createElement("div");
        tv_dialog_scrim.classList.add("mdc-dialog__scrim");

        let tv_dialog_btn_trigger = document.createElement("button");
        tv_dialog_btn_trigger.classList.add(
          "mdc-button",
          "mdc-button-dialog-tv",
          "mdc-button-delete-tv",
          "mdc-button-delete",
          "mdc-button-dialog",
          "mdc-button--raised",
          `mdc-button-dialog-${device.id}`
        );
        tv_dialog_btn_trigger.innerText = "Delete device";

        tv_control_wrapper.appendChild(tv_dialog_wrapper);
        tv_dialog_wrapper.appendChild(tv_dialog_container);
        tv_dialog_container.appendChild(tv_dialog_surface);
        tv_dialog_surface.appendChild(tv_dialog_title);
        tv_dialog_surface.appendChild(tv_dialog_image);
        tv_dialog_surface.appendChild(tv_dialog_footer);
        tv_dialog_footer.appendChild(tv_dialog_btn__cancel);
        tv_dialog_footer.appendChild(tv_dialog_btn_delete);
        tv_dialog_wrapper.appendChild(tv_dialog_scrim);
        tv_control_wrapper.appendChild(tv_dialog_btn_trigger);
      } else if (device instanceof CoffeeMachine) {
        // Coffee Machine section-------------------------------------
        // Coffee Machine section-------------------------------------
        // Coffee Machine section-------------------------------------
        // Coffee Machine section-------------------------------------
        // Coffee Machine section-------------------------------------
        // Coffee Machine section-------------------------------------
        // Coffee Machine section-------------------------------------
        // Coffee Machine section-------------------------------------
        // Coffee Machine section-------------------------------------
        // Coffee Machine section-------------------------------------
        // Coffee Machine section-------------------------------------
        // Coffee Machine section-------------------------------------
        // Coffee Machine section-------------------------------------
        // Coffee Machine section-------------------------------------
        // Coffee Machine section-------------------------------------

        let coffee = document.createElement("main");
        coffee.classList.add(
          "main-coffee",
          "mdc-hidden",
          "mdc-top-app-bar--fixed-adjust",
          "main",
          `main__${device.id}`
        );

        let coffee_wrapper_left = document.createElement("div");

        devices.appendChild(coffee);
        coffee.appendChild(coffee_wrapper_left);

        let coffee_title = document.createElement("h2");
        coffee_title.innerText = `${device.name}`;
        coffee_title.classList.add("device__title");

        let coffee_image_wrapper = document.createElement("div");
        coffee_image_wrapper.classList.add(
          "mdc-card",
          "mdc-card-first",
          `mdc-card-first-${device.id}`
        );

        let coffee_card = document.createElement("div");
        coffee_card.classList.add("card__coffee");

        let coffee_image = document.createElement("img");
        coffee_image.classList.add("card__image", "card__image-coffee");
        coffee_image.setAttribute("src", "../assets/img/coffee.png");

        let coffee_card_second = document.createElement("div");
        coffee_card_second.classList.add(
          "mdc-card",
          "mdc-card-second",
          `mdc-card-second-${device.id}`,
          "mdc-hidden"
        );

        let coffee_card_second_title = document.createElement("h3");
        coffee_card_second_title.classList.add("card__title");
        coffee_card_second_title.innerText = "Coffee Machine specification";

        let coffee_card_second_description = document.createElement("p");
        coffee_card_second_description.classList.add("card__paragraph");
        coffee_card_second_description.innerText = `${device.info}`;

        coffee_wrapper_left.appendChild(coffee_title);
        coffee_wrapper_left.appendChild(coffee_image_wrapper);
        coffee_image_wrapper.appendChild(coffee_card);
        coffee_card.appendChild(coffee_image);
        coffee_wrapper_left.appendChild(coffee_card_second);
        coffee_card_second.appendChild(coffee_card_second_title);
        coffee_card_second.appendChild(coffee_card_second_description);

        // "Select" funcionality
        let coffee_card_tab_wrapper = document.createElement("div");
        coffee_card_tab_wrapper.classList.add("mdc-tab-bar");

        let coffee_card_tab_scroller = document.createElement("div");
        coffee_card_tab_scroller.classList.add("mdc-tab-scroller");

        let coffee_card_tab_scroll_area = document.createElement("div");
        coffee_card_tab_scroll_area.classList.add(
          "mdc-tab-scroller__scroll-area"
        );

        let coffee_card_tab_scroll_content = document.createElement("div");
        coffee_card_tab_scroll_content.classList.add(
          "mdc-tab-scroller__scroll-content"
        );

        let coffee_card_button_main = document.createElement("button");
        coffee_card_button_main.classList.add(
          "mdc-tab",
          "mdc-tab-first",
          "mdc-tab-first-coffee",
          `mdc-tab-first-${device.id}`,
          "mdc-tab--active"
        );
        coffee_card_button_main.setAttribute("role", "tab");
        coffee_card_button_main.setAttribute("aria-selected", "true");
        coffee_card_button_main.setAttribute("tabindex", "0");

        let coffee_card_span_left_content = document.createElement("span");
        coffee_card_span_left_content.classList.add("mdc-tab__content");

        let coffee_card_span_left_icon = document.createElement("span");
        coffee_card_span_left_icon.classList.add(
          "mdc-tab__icon",
          "material-icons"
        );
        coffee_card_span_left_icon.innerText = "location_city";

        let coffee_card_span_left_label = document.createElement("span");
        coffee_card_span_left_label.classList.add("mdc-tab__text-label");
        coffee_card_span_left_label.innerText = "Main";

        let coffee_card_span_left_ripple = document.createElement("span");
        coffee_card_span_left_ripple.classList.add("mdc-tab__ripple");

        let coffee_card_button_info = document.createElement("button");
        coffee_card_button_info.classList.add(
          "mdc-tab",
          "mdc-tab-second",
          "mdc-tab-second-coffee",
          `mdc-tab-second-${device.id}`,
          "mdc-tab--active"
        );
        coffee_card_button_info.setAttribute("role", "tab");
        coffee_card_button_info.setAttribute("aria-selected", "true");
        coffee_card_button_info.setAttribute("tabindex", "1");

        let coffee_card_span_right_content = document.createElement("span");
        coffee_card_span_right_content.classList.add("mdc-tab__content");

        let coffee_card_span_right_icon = document.createElement("span");
        coffee_card_span_right_icon.classList.add(
          "mdc-tab__icon",
          "material-icons"
        );
        coffee_card_span_right_icon.innerText = "info";

        let coffee_card_span_right_label = document.createElement("span");
        coffee_card_span_right_label.classList.add("mdc-tab__text-label");
        coffee_card_span_right_label.innerText = "Information";

        let coffee_card_span_right_ripple = document.createElement("span");
        coffee_card_span_right_ripple.classList.add("mdc-tab__ripple");

        coffee_wrapper_left.appendChild(coffee_card_tab_wrapper);
        coffee_card_tab_wrapper.appendChild(coffee_card_tab_scroller);
        coffee_card_tab_scroller.appendChild(coffee_card_tab_scroll_area);
        coffee_card_tab_scroll_area.appendChild(coffee_card_tab_scroll_content);

        coffee_card_tab_scroll_content.appendChild(coffee_card_button_main);
        coffee_card_button_main.appendChild(coffee_card_span_left_content);
        coffee_card_span_left_content.appendChild(coffee_card_span_left_icon);
        coffee_card_span_left_content.appendChild(coffee_card_span_left_label);
        coffee_card_button_main.appendChild(coffee_card_span_left_ripple);

        coffee_card_tab_scroll_content.appendChild(coffee_card_button_info);
        coffee_card_button_info.appendChild(coffee_card_span_right_content);
        coffee_card_span_right_content.appendChild(coffee_card_span_right_icon);
        coffee_card_span_right_content.appendChild(
          coffee_card_span_right_label
        );
        coffee_card_button_info.appendChild(coffee_card_span_right_ripple);

        //Right panel-----------------------------------------
        let coffee_wrapper_right = document.createElement("div");
        coffee_wrapper_right.classList.add("select__wrapper");

        coffee.appendChild(coffee_wrapper_right);

        let coffee_select_name = document.createElement("div");
        coffee_select_name.classList.add("mdc-text-field");

        let coffee_select_name_input = document.createElement("input");
        coffee_select_name_input.classList.add("mdc-text-field__input");
        coffee_select_name_input.setAttribute("type", "text");
        coffee_select_name_input.setAttribute(
          "placeholder",
          "Name your device"
        );
        coffee_select_name_input.setAttribute("id", "my-text-field");

        let coffee_select_name_ripple = document.createElement("div");
        coffee_select_name_ripple.classList.add("mdc-line-ripple");

        let coffee_select_description = document.createElement("div");
        coffee_select_description.classList.add("mdc-text-field");

        let coffee_select_description_input = document.createElement("input");
        coffee_select_description_input.classList.add("mdc-text-field__input");
        coffee_select_description_input.setAttribute("type", "text");
        coffee_select_description_input.setAttribute(
          "placeholder",
          "Change the description"
        );
        coffee_select_description_input.setAttribute("id", "my-text-field");

        let coffee_select_description_ripple = document.createElement("div");
        coffee_select_description_ripple.classList.add("mdc-line-ripple");

        //Sugar Quantity
        let coffee_select_sugar = document.createElement("div");
        coffee_select_sugar.classList.add("mdc-select");

        let coffee_select_sugar_wrapper = document.createElement("select");
        coffee_select_sugar_wrapper.classList.add("mdc-select__native-control");

        let coffee_select_sugar_option1 = document.createElement("option");
        coffee_select_sugar_option1.innerText = "0";

        let coffee_select_sugar_option2 = document.createElement("option");
        coffee_select_sugar_option2.innerText = "1";

        let coffee_select_sugar_option3 = document.createElement("option");
        coffee_select_sugar_option3.innerText = "2";
        coffee_select_sugar_option3.setAttribute("selected", "");

        let coffee_select_sugar_label = document.createElement("label");
        coffee_select_sugar_label.classList.add(
          "mdc-floating-label",
          "mdc-floating-label--float-above"
        );
        coffee_select_sugar_label.innerText = "Sugar Quantity";

        let coffee_select_sugar_ripple = document.createElement("div");
        coffee_select_sugar_ripple.classList.add("mdc-line-ripple");

        //Size
        let coffee_select_size = document.createElement("div");
        coffee_select_size.classList.add("mdc-select");

        let coffee_select_size_wrapper = document.createElement("select");
        coffee_select_size_wrapper.classList.add("mdc-select__native-control");

        let coffee_select_size_option1 = document.createElement("option");
        coffee_select_size_option1.innerText = "Small";

        let coffee_select_size_option2 = document.createElement("option");
        coffee_select_size_option2.innerText = "Medium";

        let coffee_select_size_option3 = document.createElement("option");
        coffee_select_size_option3.innerText = "XXL";
        coffee_select_size_option3.setAttribute("selected", "");

        let coffee_select_size_label = document.createElement("label");
        coffee_select_size_label.classList.add(
          "mdc-floating-label",
          "mdc-floating-label--float-above"
        );
        coffee_select_size_label.innerText = "Choose the coffee size";

        let coffee_select_size_ripple = document.createElement("div");
        coffee_select_size_ripple.classList.add("mdc-line-ripple");

        coffee_wrapper_right.appendChild(coffee_select_name);
        coffee_select_name.appendChild(coffee_select_name_input);
        coffee_select_name.appendChild(coffee_select_name_ripple);

        coffee_wrapper_right.appendChild(coffee_select_description);
        coffee_select_description.appendChild(coffee_select_description_input);
        coffee_select_description.appendChild(coffee_select_description_ripple);

        coffee_wrapper_right.appendChild(coffee_select_sugar);
        coffee_select_sugar.appendChild(coffee_select_sugar_wrapper);
        coffee_select_sugar_wrapper.appendChild(coffee_select_sugar_option1);
        coffee_select_sugar_wrapper.appendChild(coffee_select_sugar_option2);
        coffee_select_sugar_wrapper.appendChild(coffee_select_sugar_option3);
        coffee_select_sugar.appendChild(coffee_select_sugar_label);
        coffee_select_sugar.appendChild(coffee_select_sugar_ripple);

        coffee_wrapper_right.appendChild(coffee_select_size);
        coffee_select_size.appendChild(coffee_select_size_wrapper);
        coffee_select_size_wrapper.appendChild(coffee_select_size_option1);
        coffee_select_size_wrapper.appendChild(coffee_select_size_option2);
        coffee_select_size_wrapper.appendChild(coffee_select_size_option3);
        coffee_select_size.appendChild(coffee_select_size_label);
        coffee_select_size.appendChild(coffee_select_size_ripple);

        //Buton on/Off popup

        let coffee_btn_onoff = document.createElement("button");
        coffee_btn_onoff.classList.add(
          "mdc-button",
          "mdc-button-onoff",
          "mdc-button--raised"
        );
        coffee_btn_onoff.innerText = "Turn On / Off";

        coffee_wrapper_right.appendChild(coffee_btn_onoff);

        //Dialog popup
        let coffee_dialog_wrapper = document.createElement("div");
        coffee_dialog_wrapper.classList.add(
          "mdc-dialog",
          "mdc-dialog-coffee",
          `mdc-dialog-${device.id}`
        );
        coffee_dialog_wrapper.setAttribute("role", "alertdialog");
        coffee_dialog_wrapper.setAttribute("aria-modal", "true");
        coffee_dialog_wrapper.setAttribute(
          "aria-labelledby",
          "my-dialog-title"
        );
        coffee_dialog_wrapper.setAttribute(
          "aria-describedby",
          "my-dialog-content"
        );

        let coffee_dialog_container = document.createElement("div");
        coffee_dialog_container.classList.add("mdc-dialog__container");

        let coffee_dialog_surface = document.createElement("div");
        coffee_dialog_surface.classList.add("mdc-dialog__surface");

        let coffee_dialog_title = document.createElement("h2");
        coffee_dialog_title.classList.add("mdc-dialog__title");
        coffee_dialog_title.setAttribute("id", "my-dialog-title");
        coffee_dialog_title.innerText =
          "Are you sure you want to delete this device?";

        let coffee_dialog_image = document.createElement("img");
        coffee_dialog_image.classList.add("dialog__image");
        coffee_dialog_image.setAttribute("src", "../assets/img/nooo.png");

        let coffee_dialog_footer = document.createElement("footer");
        coffee_dialog_footer.classList.add("mdc-dialog__actions");

        let coffee_dialog_btn__cancel = document.createElement("button");
        coffee_dialog_btn__cancel.classList.add(
          "mdc-button",
          "mdc-dialog__button"
        );
        coffee_dialog_btn__cancel.setAttribute("type", "button");
        coffee_dialog_btn__cancel.setAttribute(
          "data-mdc-dialog-action",
          "close"
        );
        coffee_dialog_btn__cancel.innerText = "Cancel";

        let coffee_dialog_btn_delete = document.createElement("button");
        coffee_dialog_btn_delete.classList.add(
          "mdc-button",
          "mdc-dialog__button",
          `mdc-dialog__${device.id}`
        );
        coffee_dialog_btn_delete.setAttribute("type", "button");
        coffee_dialog_btn_delete.setAttribute(
          "data-mdc-dialog-action",
          "accept"
        );
        coffee_dialog_btn_delete.innerText = "Delete";

        let coffee_dialog_scrim = document.createElement("div");
        coffee_dialog_scrim.classList.add("mdc-dialog__scrim");

        let coffee_dialog_btn_trigger = document.createElement("button");
        coffee_dialog_btn_trigger.classList.add(
          "mdc-button",
          "mdc-button-delete",
          "mdc-button-delete-coffee",
          "mdc-button-dialog-coffee",
          "mdc-button-dialog",
          "mdc-button--raised",
          `mdc-button-dialog-${device.id}`
        );
        coffee_dialog_btn_trigger.innerText = "Delete device";

        coffee_wrapper_right.appendChild(coffee_dialog_wrapper);
        coffee_dialog_wrapper.appendChild(coffee_dialog_container);
        coffee_dialog_container.appendChild(coffee_dialog_surface);
        coffee_dialog_surface.appendChild(coffee_dialog_title);
        coffee_dialog_surface.appendChild(coffee_dialog_image);
        coffee_dialog_surface.appendChild(coffee_dialog_footer);
        coffee_dialog_footer.appendChild(coffee_dialog_btn__cancel);
        coffee_dialog_footer.appendChild(coffee_dialog_btn_delete);
        coffee_dialog_wrapper.appendChild(coffee_dialog_scrim);
        coffee_wrapper_right.appendChild(coffee_dialog_btn_trigger);
      }
    });

    // -----------------------
    //Adding buttons to the header
    let header_button = document.createElement("div");
    header_button.classList.add("device__wrapper");

    header_row.appendChild(header_button);

    //First button
    let header_button_left_wrapper = document.createElement("div");
    header_button_left_wrapper.classList.add("mdc-menu-surface--anchor");

    let header_button_left = document.createElement("button");
    header_button_left.classList.add(
      "mdc-button",
      "mdc-button-left",
      "mdc-button--raised"
    );
    header_button_left.innerText = "List of your devices";

    let header_button_left_menu = document.createElement("div");
    header_button_left_menu.classList.add("mdc-menu-left", "mdc-menu-surface");

    let header_button_list = document.createElement("ul");
    header_button_list.classList.add("mdc-list");

    header_button.appendChild(header_button_left_wrapper);
    header_button_left_wrapper.appendChild(header_button_left);
    header_button_left_wrapper.appendChild(header_button_left_menu);
    header_button_left_menu.appendChild(header_button_list);

    // Generating list of existing devices

    let linkArray = [];
    let menuArray = [];
    let lightNameInputs = [];

    this._home.devices.forEach(device => {
      let a = document.createElement("a");
      a.classList.add("mdc-list-item", `list__${device.id}`);
      a.href = "";

      let button = document.createElement("span");
      button.classList.add("mdc-list-item__text");
      button.innerText = `${device.name}`;

      // lightNameInputs[`${device.id}`] = MDCTextField.attachTo(
      //   document.querySelector(`.mdc-text-field-${device.id}`)
      // );
      // let buttonDelete;

      // lightNameInputs[`${device.id}`] = document.querySelector(
      //   `.mdc-text-field-${device.id}`
      // );

      // lightNameInputs[`${device.id}`].listen("click", () => {
      // device.id.removeDevice();
      // });

      // console.log("inputs", lightNameInputs);

      header_button_list.appendChild(a);
      a.appendChild(button);

      linkArray[`${device.id}`] = MDCList.attachTo(
        document.querySelector(`.list__${device.id}`)
      );
      menuArray[`${device.id}`] = document.querySelector(`.main__${device.id}`);
    });

    linkArray.forEach((linkItem, i) => {
      linkItem.listen("click", () => {
        menuArray.forEach((menuItem, k) => {
          if (i === k) {
            menuItem.classList.remove("mdc-hidden");
          } else {
            menuItem.classList.add("mdc-hidden");
          }
        });
      });
    });

    menuArray[menuArray.length - 1].classList.remove("mdc-hidden");

    // JS for left button
    const buttonLeft = MDCRipple.attachTo(
      document.querySelector(".mdc-button-left")
    );
    const menuLeft = new MDCMenu(document.querySelector(".mdc-menu-left"));

    buttonLeft.listen("click", () => {
      menuLeft.open = !menuLeft.open;
    });

    //Second button
    let header_button_right_wrapper = document.createElement("div");
    header_button_right_wrapper.classList.add("mdc-menu-surface--anchor");

    let header_button_right = document.createElement("button");
    header_button_right.classList.add(
      "mdc-button",
      "mdc-button-right",
      "mdc-button--raised"
    );
    header_button_right.innerText = "Add new device";

    let header_button_right_menu = document.createElement("div");
    header_button_right_menu.classList.add(
      "mdc-menu-right",
      "mdc-menu-surface"
    );

    let header_button_right_list = document.createElement("ul");
    header_button_right_list.classList.add("mdc-list");

    let header_button_right_list_link_light = document.createElement("a");
    header_button_right_list_link_light.classList.add(
      "mdc-list-item",
      "list-item-light"
    );
    header_button_right_list_link_light.href = "";

    let header_button_right_list_span_light = document.createElement("span");
    header_button_right_list_span_light.classList.add("mdc-list-item__text");
    header_button_right_list_span_light.innerText = "Light";

    let header_button_right_list_link_tv = document.createElement("a");
    header_button_right_list_link_tv.classList.add(
      "mdc-list-item",
      "list-item-tv"
    );
    header_button_right_list_link_tv.href = "";

    let header_button_right_list_span_tv = document.createElement("span");
    header_button_right_list_span_tv.classList.add("mdc-list-item__text");
    header_button_right_list_span_tv.innerText = "TV";

    let header_button_right_list_link_coffee = document.createElement("a");
    header_button_right_list_link_coffee.classList.add(
      "mdc-list-item",
      "list-item-coffee"
    );
    header_button_right_list_link_coffee.href = "";

    let header_button_right_list_span_coffee = document.createElement("span");
    header_button_right_list_span_coffee.classList.add("mdc-list-item__text");
    header_button_right_list_span_coffee.innerText = "Coffee Machine";

    // Attaching logic to the button

    header_button.appendChild(header_button_right_wrapper);
    header_button_right_wrapper.appendChild(header_button_right);
    header_button_right_wrapper.appendChild(header_button_right_menu);
    header_button_right_menu.appendChild(header_button_right_list);
    header_button_right_list.appendChild(header_button_right_list_link_light);
    header_button_right_list_link_light.appendChild(
      header_button_right_list_span_light
    );
    header_button_right_list.appendChild(header_button_right_list_link_tv);
    header_button_right_list_link_tv.appendChild(
      header_button_right_list_span_tv
    );
    header_button_right_list.appendChild(header_button_right_list_link_coffee);
    header_button_right_list_link_coffee.appendChild(
      header_button_right_list_span_coffee
    );

    // JS for right button

    const buttonRight = MDCRipple.attachTo(
      document.querySelector(".mdc-button-right")
    );
    const menuRight = new MDCMenu(document.querySelector(".mdc-menu-right"));

    buttonRight.listen("click", () => {
      menuRight.open = !menuRight.open;
    });

    let lightListItem = MDCList.attachTo(
      document.querySelector(".list-item-light")
    );
    let tvListItem = MDCList.attachTo(document.querySelector(".list-item-tv"));
    let coffeeListItem = MDCList.attachTo(
      document.querySelector(".list-item-coffee")
    );

    lightListItem.listen("click", () => {
      this._home.addNewDevice(
        new Light(
          "Light title",
          "Please, fill the fields at the right side and write the device description"
        )
      );
      this.render();
    });

    tvListItem.listen("click", () => {
      this._home.addNewDevice(
        new Tv(
          "TV title",
          "Please, fill the fields at the right side and write the device description"
        )
      );
      this.render();
    });

    coffeeListItem.listen("click", () => {
      this._home.addNewDevice(
        new CoffeeMachine(
          "Coffee title",
          "Please, fill the fields at the right side and write the device description"
        )
      );
      this.render();
    });

    //Input field JS logic

    function myFunction() {
      var x = document.querySelector(`.mdc-text-field-0`).value;
      document.querySelector(".main__0").innerHTML =
        "You wrote: " + document.querySelector(`.mdc-text-field-0`).value;
    }

    // this._home.devices.forEach(device => {
    //   let lightNameInputs = [];
    //   let k = 0;
    //   lightNameInputs[k] = MDCTextField.attachTo(
    //     document.querySelector(`.mdc-text-field-${device.id}`)
    //   );

    //   lightNameInputs[k].listen("keypress", () => {
    //     device.info(lightNameInput.value);
    //     this.render();
    //   });
    //   k++;

    // console.log(document.querySelector(`.mdc-text-field-${device.id}`));
    // console.log(
    //   MDCTextField.attachTo(
    //     document.querySelector(`.mdc-text-field-${device.id}`)
    //   )
    // );
    // });

    // this._home.devices.forEach(device => {
    //   const lightNameInput = MDCTextField.attachTo(
    //     document.querySelector(`.mdc-text-field-${device.id}`)
    //   );

    // light_select_name_input.listen("keypress", () => {
    //   light_title.innerText = light_select_name_input.value;
    // });

    // const lightNameInput = MDCTextField.attachTo(
    //   document.querySelector(`.mdc-text-field-${device.id}`)
    // );

    //   lightNameInput.listen("keypress", () => {
    //     light_title.innerText = lightNameInput.value;
    //   });
    // });

    // const lightNameInput = MDCTextField.attachTo(
    //   document.querySelector(`.mdc-text-field-${device.id}`)
    // );

    // lightNameInput.listen("keypress", () => {
    //   light_title.innerText = lightNameInput.value;
    // });

    //-------------------------------------

    //Adding print icon to the header
    let header_print = document.createElement("section");
    header_print.classList.add(
      "mdc-top-app-bar__section",
      "mdc-top-app-bar__section--align-end"
    );

    let header_print_button = document.createElement("button");
    header_print_button.classList.add(
      "mdc-icon-button",
      "mdc-icon-button-print",
      "material-icons"
    );
    header_print_button.innerText = "print";

    header_row.appendChild(header_print);
    header_print.appendChild(header_print_button);

    //Author page----------------------------------------------
    let author = document.createElement("main");
    author.classList.add("main-content", "main-author", "mdc-hidden");
    author.setAttribute("id", "main-content");

    let author_wrapper = document.createElement("div");
    author_wrapper.classList.add(
      "mdc-top-app-bar--fixed-adjust",
      "author__wrapper"
    );

    let author_title = document.createElement("h2");
    author_title.classList.add("author__title");
    author_title.innerText = "Made by Pavlo";

    let author_image = document.createElement("img");
    author_image.classList.add("author__image");
    author_image.setAttribute("src", "../assets/img/ava.jpg");

    let author_info = document.createElement("p");
    author_info.classList.add("author__info");
    author_info.innerText = "©2018 Smart House. All Rights Reserved.";

    root.appendChild(author);
    author.appendChild(author_wrapper);
    author_wrapper.appendChild(author_title);
    author_wrapper.appendChild(author_image);
    author_wrapper.appendChild(author_info);

    //JS functions for Top App Bar and for Drawer
    const topAppBar = MDCTopAppBar.attachTo(document.getElementById("app-bar"));
    topAppBar.setScrollTarget(document.getElementById("main-content"));
    topAppBar.listen("MDCTopAppBar:nav", () => {
      drawer.open = !drawer.open;
    });

    const drawer = MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));

    const iconPrint = new MDCRipple(
      document.querySelector(".mdc-icon-button-print")
    );

    iconPrint.unbounded = true;

    iconPrint.listen("click", () => {
      window.print();
    });

    //Start page----------------------------------------------

    let start = document.createElement("main");
    start.classList.add("main-content", "main-home", "mdc-hidden");
    start.setAttribute("id", "main-content");

    let start_main = document.createElement("div");
    start_main.classList.add("mdc-top-app-bar--fixed-adjust");

    let start_wrapper = document.createElement("div");
    start_wrapper.classList.add("button-wrapper__start");

    let start_image = document.createElement("img");
    start_image.classList.add("start__image");
    start_image.setAttribute("src", "../assets/img/smart.png");

    let start_input_wrapper = document.createElement("div");
    start_input_wrapper.classList.add(
      "mdc-text-field",
      "mdc-text-field--textarea",
      "mdc-text-field--fullwidth",
      "mdc-text-field--disabled"
    );

    let start_input = document.createElement("textarea");
    start_input.classList.add("mdc-text-field__input");
    start_input.setAttribute("rows", "4");
    start_input.setAttribute("cols", "40");
    start_input.setAttribute("id", "textarea");
    start_input.setAttribute(
      "placeholder",
      "Click General Information button to get more information about the House"
    );

    let start_btn_wrapper = document.createElement("div");
    start_btn_wrapper.classList.add(
      "mdc-menu-surface--anchor",
      "mdc-button-general__wrapper"
    );

    let start_btn = document.createElement("button");
    start_btn.classList.add(
      "mdc-button",
      "mdc-button-general",
      "mdc-button--raised"
    );
    start_btn.innerText = "General information";

    let start_button_menu = document.createElement("div");
    start_button_menu.classList.add("mdc-menu-general", "mdc-menu-surface");

    let start_button_list = document.createElement("ul");
    start_button_list.classList.add("mdc-list");
    start_button_list.setAttribute("role", "menu");
    start_button_list.setAttribute("aria-hidden", "true");
    start_button_list.setAttribute("aria-orientation", "vertical");

    let start_button_list_link_address = document.createElement("li");
    start_button_list_link_address.classList.add(
      "mdc-list-item",
      "mdc-list-get-address"
    );

    let start_button_list_span_address = document.createElement("span");
    start_button_list_span_address.classList.add("mdc-list-item__text");
    start_button_list_span_address.innerText = "Get Home address";

    let start_button_list_link_devices = document.createElement("li");
    start_button_list_link_devices.classList.add(
      "mdc-list-item",
      "mdc-list-get-devices"
    );

    let start_button_list_span_devices = document.createElement("span");
    start_button_list_span_devices.classList.add("mdc-list-item__text");
    start_button_list_span_devices.innerText = "Get List of all devices";

    let start_button_list_link_owner = document.createElement("li");
    start_button_list_link_owner.classList.add(
      "mdc-list-item",
      "mdc-list-get-owner"
    );

    let start_button_list_span_owner = document.createElement("span");
    start_button_list_span_owner.classList.add("mdc-list-item__text");
    start_button_list_span_owner.innerText = "Get owner name";

    root.appendChild(start);
    start.appendChild(start_main);
    start_main.appendChild(start_wrapper);
    start_wrapper.appendChild(start_image);

    start_wrapper.appendChild(start_btn_wrapper);
    start_btn_wrapper.appendChild(start_btn);
    start_btn_wrapper.appendChild(start_button_menu);
    start_button_menu.appendChild(start_button_list);
    start_button_list.appendChild(start_button_list_link_address);
    start_button_list_link_address.appendChild(start_button_list_span_address);
    start_button_list.appendChild(start_button_list_link_devices);
    start_button_list_link_devices.appendChild(start_button_list_span_devices);
    start_button_list.appendChild(start_button_list_link_owner);
    start_button_list_link_owner.appendChild(start_button_list_span_owner);

    start_wrapper.appendChild(start_input_wrapper);
    start_input_wrapper.appendChild(start_input);

    // General Information button Logic

    let getHomeAddressOption = MDCList.attachTo(
      document.querySelector(".mdc-list-get-address")
    );

    getHomeAddressOption.listen("click", () => {
      start_input.value = `${this._home.address}`;
    });

    let getDevicesOption = MDCList.attachTo(
      document.querySelector(".mdc-list-get-devices")
    );

    getDevicesOption.listen("click", () => {
      start_input.value = "";
      this._home.devices.forEach(
        device =>
          (start_input.value += `Device name: ${device.name},  \n IsOn: ${
            device.isOn
          } \n`)
      );
    });

    let getOwnerNameOption = MDCList.attachTo(
      document.querySelector(".mdc-list-get-owner")
    );

    getOwnerNameOption.listen("click", () => {
      start_input.value = `${this._home.owner}`;
    });

    // JS for button General
    const buttonGeneral = MDCRipple.attachTo(
      document.querySelector(".mdc-button-general")
    );
    const menuGeneral = new MDCMenu(
      document.querySelector(".mdc-menu-general")
    );

    buttonGeneral.listen("click", () => {
      menuGeneral.open = !menuGeneral.open;
    });

    // JS for Main
    const homePage = document.querySelector(".main-home");
    const DevicesPage = document.querySelector(".main-devices");
    const authorPage = document.querySelector(".main-author");
    const homeLink = MDCList.attachTo(document.querySelector(".mdc-list-home"));
    const DevicesLink = MDCList.attachTo(
      document.querySelector(".mdc-list-devices")
    );
    const authorLink = MDCList.attachTo(
      document.querySelector(".mdc-list-author")
    );

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
    // We need to REDO this
    // const onButton = MDCRipple.attachTo(
    //   document.querySelector(".light__onOff")
    // );
    // const image = document.querySelector(".mdc__color-yellow");

    // onButton.listen("click", () => {
    //   image.style.opacity === ""
    //     ? (image.style.opacity = "1")
    //     : (image.style.opacity = "");
    // });

    // JS for Tab Bar

    const firstCardArray = [];
    const secondCardArray = [];
    const firstTabArray = [];
    const secondTabArray = [];
    this._home.devices.forEach(device => {
      firstCardArray[`${device.id}`] = document.querySelector(
        `.mdc-card-first-${device.id}`
      );
      secondCardArray[`${device.id}`] = document.querySelector(
        `.mdc-card-second-${device.id}`
      );
      firstTabArray[`${device.id}`] = MDCTabBar.attachTo(
        document.querySelector(`.mdc-tab-first-${device.id}`)
      );
      secondTabArray[`${device.id}`] = MDCTabBar.attachTo(
        document.querySelector(`.mdc-tab-second-${device.id}`)
      );

      firstTabArray[`${device.id}`].listen("click", () => {
        firstCardArray[`${device.id}`].classList.remove("mdc-hidden");
        secondCardArray[`${device.id}`].classList.add("mdc-hidden");
      });

      secondTabArray[`${device.id}`].listen("click", () => {
        firstCardArray[`${device.id}`].classList.add("mdc-hidden");
        secondCardArray[`${device.id}`].classList.remove("mdc-hidden");
      });
    });

    // JS for the Delete button
    this._home.devices.forEach(device => {
      let checkArray = [];
      let k = 0;
      checkArray[k] = MDCRipple.attachTo(
        document.querySelector(`.mdc-dialog__${device.id}`)
      );
      checkArray[k].listen("click", () => {
        this._home.removeDevice(device);
        this.render();
      });
      k++;
    });

    // JS for Dialog component
    this._home.devices.forEach(device => {
      let dialogArray = [];
      let dialogBtnArray = [];
      dialogArray[`${device.id}`] = new MDCDialog(
        document.querySelector(`.mdc-dialog-${device.id}`)
      );
      dialogBtnArray[`${device.id}`] = MDCRipple.attachTo(
        document.querySelector(`.mdc-button-dialog-${device.id}`)
      );
      dialogBtnArray[`${device.id}`].listen("click", () => {
        dialogArray[`${device.id}`].open();
      });
    });
  }
}
