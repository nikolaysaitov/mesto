" use strict ";

const openEditButtonPopup = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close');

function openPopup() {
    popup.classList.add('popup__open');
}

function closePopup() {
popup.classList.remove('popup__open');
}

openEditButtonPopup.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);



// Находим форму в DOM
let formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input-name');  // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__input-job');  // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value


let title = document.querySelector('.profile__id-title');
// console.log(title .textContent); // "Это текст внутри элемента."
title .textContent = nameInput.value; // можно перезаписать содержимое

let subtitle = document.querySelector('.profile__id-subtitle');
// console.log(subtitle.textContent); // "Это текст внутри элемента."
subtitle.textContent = jobInput.value; // можно перезаписать содержимое


// Выберите элементы, куда должны быть вставлены значения полей

// Вставьте новые значения с помощью textContent
closePopup()
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
closePopup();


