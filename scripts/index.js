" use strict ";

import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const openEditButtonPopup = document.querySelector(".profile__button-edit");
const popupEdit = document.querySelector(".popup_edit");
const closePopupButton = document.querySelector(".popup__close");
const openAddButtonPopup = document.querySelector(".profile__button-add");
const popupAdd = document.querySelector(".popup_add");
const closePopupButtonAdd = document.querySelector(".popup__close_add");

const popupPicClose = document.querySelector(".popup_picture");
const closePopupButtonPic = document.querySelector(".popup__close_pic");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input-name");
const jobInput = document.querySelector(".popup__input-job");
const title = document.querySelector(".profile__id-title");
const subtitle = document.querySelector(".profile__id-subtitle");
const popup = document.querySelector(".popup");


 

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__error",
  errorClass: "popup__error_active",
};


const addCardForm = popupAdd.querySelector('.popup__form');
const editForm = popupEdit.querySelector('.popup__form');

const editProfileValidator = new FormValidator(validationConfig, editForm );
const addCardValidator = new FormValidator(validationConfig, addCardForm);

editProfileValidator.enableValidation();
addCardValidator.enableValidation();









// Открыть попап
function openPopup(popup) {
  popup.classList.add("popup_open");
  document.addEventListener("keydown", keyCloseEsc);
  popup.addEventListener("click", closeOverlayPopup);
}

//Закрыть попап
function closePopup(popup) {
  popup.classList.remove("popup_open");
  document.removeEventListener("keydown", keyCloseEsc);
}

//попап редактирования профиля
function openPopupEdit() {
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
  openPopup(popupEdit);
}

openEditButtonPopup.addEventListener("click", openPopupEdit);
closePopupButton.addEventListener("click", () => closePopup(popupEdit));

//попап добавления карточки
function openPopupAdd() {
  openPopup(popupAdd);
  inputCardName.value = "";
  inputLink.value = "";
}

function closePopupAdd() {
  closePopup(popupAdd);
}

openAddButtonPopup.addEventListener("click", () => {
  addCardValidator.disableSubmitButton();
  openPopupAdd();
});



closePopupButtonAdd.addEventListener("click", () => closePopup(popupAdd));
closePopupButtonPic.addEventListener("click", () => closePopup(popupPic));

//Редактирование имени
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;

  closePopup(popupEdit);
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", handleProfileFormSubmit);

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const cards = document.querySelector(".cards").content;
const cardList = document.querySelector(".pictures__board");
const inputCardName = document.querySelector(".popup__input_card-name");
const inputLink = document.querySelector(".popup__input-link");
const cardButton = document.querySelector(".popup__button_card");

//СОЗДАНИЕ НОВОЙ КАРТОЧКИ
function getNewCard() {
  const newCard = {
    name: inputCardName.value,
    link: inputLink.value,
  };
  addCard(newCard);
}

//ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ
function addCard(item) {
  const card = new Card(item, ".pictures__item", openPopupPic);
  const cardElement = card.createCard();
  cardList.prepend(cardElement);
}

//СОХРАНЕНИЕ
function handleCardAddSubmit(evt) {
  evt.preventDefault();
  closePopupAdd();
  getNewCard();
}
cardButton.addEventListener("click", handleCardAddSubmit);

//ОТРИСОВКА МАССИВА ПО УМОЛЧАНИЮ:
function renderInitialCards() {
  initialCards.forEach((item) => addCard(item));
}
renderInitialCards();

// // большая картинка
const popupPic = document.querySelector(".popup_picture");
const popupOpenPic = document.querySelector(".popup__photo");
const popupOpenTitle = document.querySelector(".popup__photo-title");

function openPopupPic(name, link) {
  popupOpenPic.src = link;
  popupOpenPic.alt = name;
  popupOpenTitle.textContent = name;
  openPopup(popupPic);
}

function keyCloseEsc(evt) {
  if (evt.key === "Escape") {
    const popupCloseEsc = document.querySelector(".popup_open");
    closePopup(popupCloseEsc);
  }
}

function closeOverlayPopup(evt) {
  if (evt.target.classList.contains("popup_open")) {
    const popupCloseOverlay = document.querySelector(".popup_open");
    closePopup(popupCloseOverlay);
  }
}
