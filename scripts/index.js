" use strict ";

const openEditButtonPopup = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close');

// Открыть попап
function openPopup() {
    popup.classList.add('popup_open');
    nameInput.value = title.textContent;
    jobInput.value = subtitle.textContent;
}
//Закрыть попап
function closePopup() {
popup.classList.remove('popup_open');
}

//Слушатели на кнопки
openEditButtonPopup.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);

//Переменные
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input-name'); 
let jobInput = document.querySelector('.popup__input-job'); 
let title = document.querySelector('.profile__id-title');
let subtitle = document.querySelector('.profile__id-subtitle');

//Редактирование имени
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    title.textContent = nameInput.value; 
    subtitle.textContent = jobInput.value;

    closePopup();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

//popup add
const openAddButtonPopup = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popup_add');
const closePopupButtonAdd = document.querySelector('.popup__close_add');

function openPopupAdd() {
    popupAdd.classList.add('popup_open');
    inputCardName.value = '';
    inputLink.value = '';
}

function closePopupAdd() {
    popupAdd.classList.remove('popup_open');
}

openAddButtonPopup.addEventListener('click', openPopupAdd);
closePopupButtonAdd.addEventListener('click', closePopupAdd);




const cards = document.querySelector('.cards').content;
const cardList = document.querySelector('.pictures__board');

//iputs
const inputCardName = document.querySelector('.popup__input_card-name');
const inputLink = document.querySelector('.popup__input-link');

//buttons
const cardButton = document.querySelector('.popup__button_card');2

//рендер дефолтного массива
function render(){
    initialCards.forEach(renderItem);
}



// Открыть попап

const popupPic = document.querySelector('.popup_picture');
const popupPicClose = document.querySelector('.popup_picture');
const closePopupButtonPic = document.querySelector('.popup__close_pic');

// открытая картинка


function openPopupPic() {
  popupPic.classList.add('popup_open');
  
}
function closePopupPic() {
  popupPic.classList.remove('popup_open');
  
}

function renderItem(text){
    const cardElement = cards.cloneNode(true);
    const cardImage = cardElement.querySelector('.pictures__image');
    const cardTitle = cardElement.querySelector('.pictures__title');
    cardElement.querySelector('.pictures__title').innerText = text;

    //лайки
    const likeActive = cardElement.querySelector('.pictures__like');
    likeActive.addEventListener('click', addLike);

    //удаление
    const deleteButton = cardElement.querySelector('.pictures__delete');
    deleteButton.addEventListener('click', deleteCard);


    // let popupOpenPic = document.querySelector('.popup__photo');
    // let popupOpenTitle = document.querySelector('.popup__photo-title');


    // cardImage.addEventListener('click', openPopupPic);

    // popupOpenPic.src = text.link;
    // popupOpenTitle.textContent = text.name;



    closePopupButtonPic.addEventListener('click', closePopupPic);


    cardImage.addEventListener('click', () => openPopupPic(text));


    cardTitle.textContent = text.name;
    cardImage.src = text.link;

    
    // отображаем на странице
    cardList.prepend(cardElement);
}






function addItem(event) {
    event.preventDefault();
    renderItem({name: inputCardName.value, link: inputLink.value});
    closePopupAdd();
}

cardButton.addEventListener('click', addItem);

render();


//лайки
function addLike(e) {
    e.target.closest('.pictures__like').classList.toggle('pictures__like_active');
   
}

 //удаление
function deleteCard(e) {
  e.target.closest('.pictures__item').remove();
}






// большая картинка

let popupOpenPic = document.querySelector('.popup__photo');
let popupOpenTitle = document.querySelector('.popup__photo-title');

function openPopupPic(data) {
  popupPic.classList.add('popup_open');
  
  popupOpenPic.src = data.link;
  popupOpenTitle.textContent = data.name;
}

