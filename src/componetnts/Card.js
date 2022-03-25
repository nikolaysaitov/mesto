export default class Card {
  constructor(data, templateSelector, openPopupPic) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._openPopupPic = openPopupPic;
  }

  //СОЗДАЕТ КОПИЮ ТЕМПЛЭЙТ
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".pictures__item")
      .cloneNode(true);

    return cardElement;
  }

  //СОЗДАЕТ КАРТОЧКУ
  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".pictures__title").textContent = this._name;
    this._image = this._element.querySelector(".pictures__image");
    this._image.src = this._link;
    this._image.alt = this._name;


    this._like = this._element.querySelector('.pictures__like');


    this._setListeners();

    return this._element;
  }

  //   ОБРАБОТЧИКИ ПОПАП ЛАЙК КОРЗИНА
  _setListeners() {
    this._image.addEventListener("click", () => {
      this._openPopupPic(this._name, this._link);
    });
    
    this._like.addEventListener("click", () => {
      this._addLike();
    });

    this._element.querySelector(".pictures__delete").addEventListener("click", () => {
      this._deleteCard();
    });
    
  }

  _addLike() {
    this._like.classList.toggle("pictures__like_active");
  }

  _deleteCard() {
    this._element.remove();
  }
}

