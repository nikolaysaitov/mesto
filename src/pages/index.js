" use strict ";

import Card from "../componetnts/Card.js";
import { FormValidator } from "../componetnts/FormValidator.js";
import { Section } from "../componetnts/Section.js";
import { initialCards, validationConfig } from "../componetnts/utils.js";
import { PopupWithImage } from "../componetnts/PopupWithImage.js";
import { PopupWithForm } from "../componetnts/PopupWithForm.js";
import { UserInfo } from "../componetnts/UserInfo.js";

import '../pages/index.css';



const buttonEditPopup = document.querySelector(".profile__button-edit");
const popupEdit = document.querySelector(".popup_edit");
const buttonAddPopup = document.querySelector(".profile__button-add");
const popupAdd = document.querySelector(".popup_add");
const nameInput = document.querySelector(".popup__input-name");
const jobInput = document.querySelector(".popup__input-job");
const cardFormCreate = popupAdd.querySelector(".popup__form");
const formEdit = popupEdit.querySelector(".popup__form");
const editProfileValidator = new FormValidator(validationConfig, formEdit);
const createCardValidator = new FormValidator(validationConfig, cardFormCreate);
const cardNameInput = document.querySelector(".popup__input_card-name");
const linkInput = document.querySelector(".popup__input-link");

editProfileValidator.enableValidation();
createCardValidator.enableValidation();

buttonEditPopup.addEventListener("click", () => {
  const { name, job } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = job;
  editProfileValidator.disableSubmitButton();
  editProfilePopup.open();
});

buttonAddPopup.addEventListener("click", () => {
  createCardValidator.resetErrors();
  createCardValidator.disableSubmitButton();
  createCardPopup.open();
});

//Редактирование имени
const handleProfileFormSubmit = (data) => {
  const { name, job } = data;
  userInfo.setUserInfo(name, job);
  editProfilePopup.close();
};




function createCard(data) {
  const card = new Card(data, ".cards", () => {
    popupPic.open(data.name, data.link);
  });
  const cardElement = card.generateCard();
  return cardElement;
  
}
const section = new Section(
  {
    items: initialCards,
    renderer: (item) =>{
      const cardElement = createCard(item);
      section.addItem(cardElement);
  }
  },
  ".pictures__board"
);
section.renderItems();


// СОЗДАНИЕ и СОХРАНЕНИЕ
function handleCardAddSubmit(data) {
  const newCard = createCard({
    name: data['card'],
    link: data.link
  });
  section.addItem(newCard);
  createCardPopup.close();
}






















// const section = new Section(
//   {
//     items: initialCards,
//     renderer: createCard,
//   },
//   ".pictures__board"
// );
// section.renderItems();

// // ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ
// function createCard(data) {
//   const card = new Card(data, ".cards", () => {
//     popupPic.open(data.name, data.link);
//   });
//   const cardElement = card.generateCard();
//   section.addItem(cardElement);
  
// }

// // СОЗДАНИЕ и СОХРАНЕНИЕ
// function handleCardAddSubmit() {
//   const newCard = {
//     name: cardNameInput.value,
//     link: linkInput.value,
//   };
//   createCard(newCard);
//   createCardPopup.close();
// }









const popupPic = new PopupWithImage(".popup_picture");
const createCardPopup = new PopupWithForm(".popup_add", handleCardAddSubmit);
const editProfilePopup = new PopupWithForm(
  ".popup_edit",
  handleProfileFormSubmit
);

createCardPopup.setEventListeners();
editProfilePopup.setEventListeners();
popupPic.setEventListeners();

const userInfo = new UserInfo({
  profileNameSelector: ".profile__id-title",
  profileJobSelector: ".profile__id-subtitle",
});
