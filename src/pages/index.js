" use strict ";

import Card from "../componetnts/Card.js";
import { FormValidator } from "../componetnts/FormValidator.js";
import { Section } from "../componetnts/Section.js";
import { initialCards, validationConfig } from "../utils/constants.js";
import { PopupWithImage } from "../componetnts/PopupWithImage.js";
import { PopupWithForm } from "../componetnts/PopupWithForm.js";
import { UserInfo } from "../componetnts/UserInfo.js";
import "../pages/index.css";
import { api } from "../componetnts/Api.js";

let userId;


api.getProfile().then((res) => {
  userInfo.setUserInfo(res.name, res.about);

  userId = res._id;
});

api.getInitialCards().then((cardList) => {
  cardList.forEach((data) => {
    const newCard = createCard({
      name: data.name,
      link: data.link,
      likes: data.likes,
      id: data._id,
      userId: userId,
      ownerId: data.owner._id,
      avatar: data.avatar
    });
    section.addItem(newCard);
  });
});

const buttonEditPopup = document.querySelector(".profile__button-edit");
const popupEdit = document.querySelector(".popup_edit");
const buttonAddPopup = document.querySelector(".profile__button-add");
const popupAdd = document.querySelector(".popup_add");
const nameInput = document.querySelector(".popup__input-name");
const jobInput = document.querySelector(".popup__input-job");
const cardFormCreate = popupAdd.querySelector(".popup__form");
const formEdit = popupEdit.querySelector(".popup__form");


const profileValidatorEdit = new FormValidator(validationConfig, formEdit);
const cardValidatorCreate = new FormValidator(validationConfig, cardFormCreate);


const avatarPopupEdit = document.querySelector(".popup_avatar");
const avatarFormEdit = avatarPopupEdit.querySelector(".popup__form");
const avatarValidatorEdit = new FormValidator(validationConfig, avatarFormEdit);

profileValidatorEdit.enableValidation();
cardValidatorCreate.enableValidation();
avatarValidatorEdit.enableValidation();


buttonEditPopup.addEventListener("click", () => {
  const { name, job } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = job;
  profileValidatorEdit.disableSubmitButton();
  profilePopupEdit.open();
});

buttonAddPopup.addEventListener("click", () => {
  cardValidatorCreate.resetErrors();
  cardValidatorCreate.disableSubmitButton();
  cardPopupCreate.open();
});

//Редактирование имени
const handleProfileFormSubmit = (data) => {
  const { name, job } = data;

  api.editProfile(name, job).then(() => {
    userInfo.setUserInfo(name, job);
    profilePopupEdit.close();
  });

  
};

function createCard(data) {
  const card = new Card(data, ".cards", () => {
    popupPic.open(data.name, data.link);
  }, (id) => {
    confirmPopup.open();
    confirmPopup.changeSubmitHandler(() => {
      api.deleteCard(id)
      .then(res => {
        card.deleteCard();
        confirmPopup.close();
      });
    }); 
  },
    (id) => {
      if(card.isLiked()) {
        api.deleteLike(id)
      .then(res => {
        card.setLikes(res.likes);
      });
      } else {
        api.addLike(id)
        .then(res => {
          
          card.setLikes(res.likes);
        });
      }
      
      
    }

  );
  const cardElement = card.generateCard();
  return cardElement;
}

const section = new Section(
  {
    items: [],
    renderer: (item) => {
      const cardElement = createCard(item);
      section.addItem(cardElement);
    },
  },
  ".pictures__board"
);
section.renderItems();

// СОЗДАНИЕ и СОХРАНЕНИЕ
function handleCardAddSubmit(data) {
  api.addCard(data["card"], data.link)
  .then((res) => {
    const newCard = createCard({
      name: res.name,
      link: res.link,
      likes: res.likes,
      id: res._id,
      userId: userId,
      ownerId: res.owner._id,

      avatar: res.avatar
    });
    section.addItem(newCard);
    cardPopupCreate.close();
  });
}

const popupPic = new PopupWithImage(".popup_picture");
const cardPopupCreate = new PopupWithForm(".popup_add", handleCardAddSubmit);
const profilePopupEdit = new PopupWithForm(
  ".popup_edit",
  handleProfileFormSubmit
);
const confirmPopup = new PopupWithForm(".popup_delete-confirm");





const avatarEditButton = document.querySelector('.profile__id-avatar');

function submitEditAvatarForm(avatar) {
  api.updateAvatar(avatar.link)
  .then((res) => {
    // console.log('res', res);
    userInfo.setUserInfo(res.name, res.about, res.avatar);
   
    avatarPopup.close();
  });
}

const avatarPopup = new PopupWithForm(".popup_avatar", submitEditAvatarForm);

avatarEditButton.addEventListener("click", () => {
  avatarValidatorEdit.resetErrors();
  avatarValidatorEdit.disableSubmitButton();
  avatarPopup.open();
});
avatarPopup.setEventListeners();





cardPopupCreate.setEventListeners();
profilePopupEdit.setEventListeners();
popupPic.setEventListeners();
confirmPopup.setEventListeners();


const userInfo = new UserInfo({
  profileNameSelector: ".profile__id-title",
  profileJobSelector: ".profile__id-subtitle",
  profileAvatarSelector: ".profile__id-avatar"
});