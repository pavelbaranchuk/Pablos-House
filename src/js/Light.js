import Devices from "./Devices";

export default class Light extends Devices {
  constructor(name, info) {
    super(name, info);
    this._intensity = 8;
    this._minIntensity = 0;
    this._maxIntensity = 10;
    this._modeList = ["Constant", "Blinking", "Fading"];
    this._mode = this._modeList[0];
    this._colorList = ["Yellow", "Green", "Orange"];
    this._color = this._modeList[0];
  }

  get intensity() {
    return this._intensity;
  }

  set intensity(intensity) {
    this._intensity = intensity;
  }

  get mode() {
    return this._mode;
  }

  set mode(mode) {
    if (this._mode.indexOf(this._modelList) !== -1) {
      this._mode = mode;
    } else {
      throw new Error("The value is incorrect");
    }
  }

  get color() {
    return this._color;
  }

  set color(color) {
    if (this._color.indexOf(this._colorlList) !== -1) {
      this._color = color;
    } else {
      throw new Error("The value is incorrect");
    }
  }

  incriseIntensity() {
    if (this._intensity < this._maxIntensity) {
      this._intensity++;
    } else {
      throw new Error("The value is incorrect");
    }
  }

  decreaseIntensity() {
    if (this._intensity > this._minIntensity) {
      this._intensity--;
    } else {
      throw new Error("The value is incorrect");
    }
  }
}
