" use strict ";

const openEditButtonPopup = document.querySelector(".profile__button-edit");
const popupEdit = document.querySelector(".popup_edit");
const closePopupButton = document.querySelector(".popup__close");
const openAddButtonPopup = document.querySelector(".profile__button-add");
const popupAdd = document.querySelector(".popup_add");
const closePopupButtonAdd = document.querySelector(".popup__close_add");
const popupPic = document.querySelector(".popup_picture");
const popupPicClose = document.querySelector(".popup_picture");
const closePopupButtonPic = document.querySelector(".popup__close_pic");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input-name");
const jobInput = document.querySelector(".popup__input-job");
const title = document.querySelector(".profile__id-title");
const subtitle = document.querySelector(".profile__id-subtitle");

// Открыть попап
function openPopup(popup) {
  popup.classList.add("popup_open");

  document.addEventListener("keydown", keyCloseEsc);
  document.addEventListener("click", closeOverlayPopup);
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

function closePopupEdit() {
  closePopup(popupEdit);
}
openEditButtonPopup.addEventListener("click", openPopupEdit);
closePopupButton.addEventListener("click", closePopupEdit);

//попап добавления карточки
function openPopupAdd() {
  openPopup(popupAdd);
  inputCardName.value = "";
  inputLink.value = "";
}

function closePopupAdd() {
  closePopup(popupAdd);
}

openAddButtonPopup.addEventListener("click", openPopupAdd);
closePopupButtonAdd.addEventListener("click", closePopupAdd);

// //попап открытой картинки
function openPopupPic() {
  openPopup(popupPic);
}
function closePopupPic() {
  closePopup(popupPic);
}

closePopupButtonPic.addEventListener("click", closePopupPic);

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

function createCard(card) {
  const cardElement = cards.cloneNode(true);
  const cardImage = cardElement.querySelector(".pictures__image");
  const cardTitle = cardElement.querySelector(".pictures__title");

  // //лайки
  const likeActive = cardElement.querySelector(".pictures__like");
  likeActive.addEventListener("click", addLike);

  // //удаление
  const deleteButton = cardElement.querySelector(".pictures__delete");
  deleteButton.addEventListener("click", deleteCard);

  cardImage.addEventListener("click", () => openPopupPic(card));
  cardTitle.textContent = card.name;
  cardImage.src = card.link;
  return cardElement;
}

function renderCard(card) {
  cardList.prepend(createCard(card));
}

initialCards.forEach(renderCard);

function addItem(event) {
  event.preventDefault();
  closePopupAdd();
  renderCard({ name: inputCardName.value, link: inputLink.value });
}

cardButton.addEventListener("click", addItem);

//лайки
function addLike(e) {
  e.target.classList.toggle("pictures__like_active");
}

//удаление
function deleteCard(e) {
  e.target.closest(".pictures__item").remove();
}

// большая картинка
const popupOpenPic = document.querySelector(".popup__photo");
const popupOpenTitle = document.querySelector(".popup__photo-title");

function openPopupPic(data) {
  openPopup(popupPic);
  popupOpenPic.src = data.link;
  popupOpenPic.alt = data.name;
  popupOpenTitle.textContent = data.name;
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
