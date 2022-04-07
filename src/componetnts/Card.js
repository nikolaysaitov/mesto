export default class Card {
  constructor(data, templateSelector, openPopupPic, handleDeleteClick, handleLikeClick) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._userId = data.userId;
    this._ownerId = data.ownerId;
    this._handleLikeClick = handleLikeClick;



    this._handleDeleteClick = handleDeleteClick;
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


  isLiked() {
    const userHasLikedCard = this._likes.find(user => user._id === this._userId);

    return userHasLikedCard;
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    const likeCountElement = this._element.querySelector('.pictures__like-count');
    likeCountElement.textContent = this._likes.length;

    // const userHasLikedCard = this._likes.find(user => user._id === this._userId);
    if(this.isLiked()) {
      this._fillLike();
    } else {
      this._addLike();
    }

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
    this.setLikes(this._likes);

    if(this._ownerId !== this._userId) {
      this._element.querySelector('.pictures__delete').style.display = 'none';
    }





    return this._element;
  }

  //   ОБРАБОТЧИКИ ПОПАП ЛАЙК КОРЗИНА
  _setListeners() {
    this._image.addEventListener("click", () => {
      this._openPopupPic(this._name, this._link);
    });
    
    this._like.addEventListener("click", () => {
      this._handleLikeClick(this._id);
      
    });

    this._element.querySelector(".pictures__delete").addEventListener("click", () => {
      this._handleDeleteClick(this._id);
    });
    
  }
  _fillLike() {
    this._like.classList.add("pictures__like_active");
  }
  _addLike() {
    this._like.classList.remove("pictures__like_active");
  }

  deleteCard() {
    this._element.remove();

    this._element = null;
  }
}

