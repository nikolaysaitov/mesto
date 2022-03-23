" use strict ";

import Card from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { initialCards, validationConfig } from "./utils.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";

import '../pages/index.css';



const openEditButtonPopup = document.querySelector(".profile__button-edit");
const popupEdit = document.querySelector(".popup_edit");
const closePopupButton = document.querySelector(".popup__close");
const openAddButtonPopup = document.querySelector(".profile__button-add");
const popupAdd = document.querySelector(".popup_add");
const closePopupButtonAdd = document.querySelector(".popup__close_add");
const closePopupButtonPic = document.querySelector(".popup__close_pic");
const nameInput = document.querySelector(".popup__input-name");
const jobInput = document.querySelector(".popup__input-job");
const addCardForm = popupAdd.querySelector(".popup__form");
const editForm = popupEdit.querySelector(".popup__form");
const editProfileValidator = new FormValidator(validationConfig, editForm);
const addCardValidator = new FormValidator(validationConfig, addCardForm);
const inputCardName = document.querySelector(".popup__input_card-name");
const inputLink = document.querySelector(".popup__input-link");

editProfileValidator.enableValidation();
addCardValidator.enableValidation();

openEditButtonPopup.addEventListener("click", () => {
  const { name, job } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = job;
  editProfileValidator.disableSubmitButton();
  editProfilePopup.open();
});
closePopupButton.addEventListener("click", () => editProfilePopup.close());

openAddButtonPopup.addEventListener("click", () => {
  addCardValidator.resetErrors();
  addCardValidator.disableSubmitButton();
  addCardPopup.open();
});

closePopupButtonAdd.addEventListener("click", () => addCardPopup.close());
closePopupButtonPic.addEventListener("click", () => popupPic.close());

//Редактирование имени
const handleProfileFormSubmit = (data) => {
  const { name, job } = data;
  userInfo.setUserInfo(name, job);
  editProfilePopup.close();
};


const section = new Section(
  {
    items: initialCards,
    renderer: addCard,
  },
  ".pictures__board"
);
section.renderItems();

// ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ
function addCard(data) {
  const card = new Card(data, ".cards", openPopupPic);
  const cardElement = card.createCard();
  section.addItem(cardElement);
}

// СОЗДАНИЕ и СОХРАНЕНИЕ
function handleCardAddSubmit() {
  const newCard = {
    name: inputCardName.value,
    link: inputLink.value,
  };
  addCard(newCard);
  addCardPopup.close();
}

const popupPic = new PopupWithImage(".popup_picture");
function openPopupPic(link, name) {
  popupPic.open(link, name);
}
const addCardPopup = new PopupWithForm(".popup_add", handleCardAddSubmit);
const editProfilePopup = new PopupWithForm(
  ".popup_edit",
  handleProfileFormSubmit
);

addCardPopup.setEventListeners();
editProfilePopup.setEventListeners();
popupPic.setEventListeners();

const userInfo = new UserInfo({
  profileNameSelector: ".profile__id-title",
  profileJobSelector: ".profile__id-subtitle",
});
