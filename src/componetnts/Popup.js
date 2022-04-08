export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector(".popup__close");
    this._handleEscClose = this._handleEscClose.bind(this);



    this._submitButton = this._popup.querySelector('.popup__button');

  }

  open() {
    this._popup.classList.add("popup_open");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_open");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener("click", (evt) => {
      if (evt.currentTarget === evt.target) {
        this.close();
      }
    });
    this._closeButton.addEventListener("click", () => this.close());
  }




  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = 'Сохранение...';
    } else {
      this._submitButton.textContent = this._initButtonText;
    }
  }

}
