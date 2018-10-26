import Devices from "./Devices";

export default class Tv extends Devices {
  constructor(name, info) {
    super(name, info);
    this._channelList = [
      "Western",
      "Ukraine_Today",
      "Animal_Planet",
      "Football-1",
      "Fantasy",
      "1+1"
    ];
    this._currentChannel = this._channelList[0];
    this._soundVolume = 5;
    this._minVolume = 0;
    this._maxVolume = 10;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get channelList() {
    return this._channelList;
  }

  get currentChannel() {
    return this._currentChannel;
  }

  set currentChannel(currentChannel) {
    if (this._currentChannel.indexOf(this._channelList) !== -1) {
      this._currentChannel = currentChannel;
    } else {
      throw new Error("The channel does not exist");
    }
  }

  get soundVolume() {
    return this._soundVolume;
  }

  set soundVolume(soundVolume) {
    if (soundVolume <= this._maxVolume && soundVolume >= this._minVolume) {
      this._soundVolume = soundVolume;
    } else {
      throw new Error("The value is incorrect");
    }
  }

  nextChannel() {
    const channelNumber = this._channelList.indexOf(this._currentChannel);
    const length = this._channelList.length;
    this._currentChannel === this._channelList[length - 1]
      ? (this._currentChannel = this._channelList[0])
      : (this._currentChannel = this._channelList[channelNumber + 1]);
  }

  previousChannel() {
    const channelNumber = this._channelList.indexOf(this._currentChannel);
    const length = this._channelList.length;
    this._currentChannel === this._channelList[0]
      ? (this._currentChannel = this._channelList[length - 1])
      : (this._currentChannel = this._channelList[channelNumber - 1]);
  }

  increaseSound() {
    if (this._soundVolume !== this._maxVolume) {
      this.soundVolume++;
    } else {
      throw new Error("Maximum is reached");
    }
  }

  decreaseSound() {
    if (this._soundVolume !== this._minVolume) {
      this.soundVolume--;
    } else {
      throw new Error("Minimum is reached");
    }
  }
}
