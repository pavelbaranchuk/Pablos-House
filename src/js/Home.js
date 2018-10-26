export default class Home {
  constructor(address, owner) {
    this._address = address;
    this._owner = owner;
    this._devices = new Map();
  }

  get address() {
    return this._address;
  }

  get owner() {
    return this._owner;
  }

  set owner(name) {
    this._owner = name;
  }

  get devices() {
    return [...this._devices.values()];
  }

  addNewDevice(device) {
    if (!this._devices.has(device.name)) {
      this._devices.set(device.id, device);
    } else {
      //Do
      throw new Error("The device name is exist already");
    }
  }

  removeDevice(device) {
    if (this._devices.has(device.id)) {
      this._devices.delete(device.id);
    } else {
      throw new Error("The device does not exist");
    }
  }

  deleteAllDevices() {
    this._devices.forEach(device => removeDevice(device));
  }

  turnOffAllDevices() {
    this._devices.clear;
  }
}
