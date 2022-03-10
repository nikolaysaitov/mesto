class Card {
  constructor(data, templateSelector, openPopupPic) {
    this._name = data.name;
    this._link = data.link;
    this._openPopupPic = openPopupPic;
    this._templateSelector = templateSelector;
  }

  //СОЗДАЕТ КОПИЮ ТЕМПЛЭЙТ
  _getTemplate() {
    return (this._templateSelector = document
    .querySelector(".cards")
      .content.querySelector(".pictures__item")
      .cloneNode(true));
  }

  //СОЗДАЕТ КАРТОЧКУ
  createCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".pictures__title").textContent = this._name;
    this._image = this._element.querySelector(".pictures__image");
    this._image.src = this._link;
    this._image.alt = this._name;

    this._setListeners();

    return this._element;
  }

  //   ОБРАБОТЧИКИ ПОПАП ЛАЙК КОРЗИНА
  _setListeners() {
    this._image.addEventListener("click", () => {
      this._openPopupPic(this._name, this._link);
    });
    this._element.addEventListener("click", (evt) => {
      if (evt.target === this._element.querySelector(".pictures__like")) {
        this._addLike(evt);
      } else if (
        evt.target === this._element.querySelector(".pictures__delete")
      ) {
        this._deleteCard();
      }
    });
  }

  _addLike(evt) {
    evt.target.classList.toggle("pictures__like_active");
  }

  _deleteCard() {
    this._element.remove();
  }
}
export { Card };
