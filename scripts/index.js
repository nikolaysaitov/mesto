" use strict ";

const openEditButtonPopup = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close');


// Открыть попап
function openPopup() {
    popup.classList.add('popup_open');
}
//Закрыть попап
function closePopup() {
popup.classList.remove('popup_open');
nameInput.value = title.textContent;
jobInput.value = subtitle.textContent;
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
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

  
title.textContent = nameInput.value; 
subtitle.textContent = jobInput.value;

closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);



