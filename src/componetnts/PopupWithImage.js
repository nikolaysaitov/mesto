import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector(".popup__photo");
    this._caption = this._popup.querySelector(".popup__photo-title");
  }
  open(text, link) {
    this._image.src = link;
    this._image.alt = text;
    this._caption.textContent = text;
    super.open();
  }
}
