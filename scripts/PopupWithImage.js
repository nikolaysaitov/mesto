import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupOpenPic = this._popup.querySelector('.popup__photo');
        this._popupOpenTitle = this._popup.querySelector('.popup__photo-title');

    }
    open(link, name) {
        this._popupOpenPic.src = name;
        this._popupOpenPic.alt = link;
        this._popupOpenTitle.textContent = link;
        super.open();
      }
}