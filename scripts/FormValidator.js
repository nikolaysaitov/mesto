export class FormValidator {
  constructor(validationConfig, formElement) {
    this._formElement = formElement;
    this._validationConfig = validationConfig;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._validationConfig.inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._validationConfig.submitButtonSelector
    );
  }

  _showInputError(inputElement, errorMessage) {
    const { inputErrorClass, errorClass } = this._validationConfig;

    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  }
  _hideInputError(inputElement) {
    const { inputErrorClass, errorClass } = this._validationConfig;

    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    // проходим по этому массиву методом some
    return this._inputList.some((inputElement) => {
      // Если поле не валидно, колбэк вернёт true
      // Обход массива прекратится и вся фунцкция
      // hasInvalidInput вернёт true

      return !inputElement.validity.valid;
    });
  }

  disableSubmitButton() {
    const { inactiveButtonClass } = this._validationConfig;

    this._buttonElement.classList.add(
      this._validationConfig.inactiveButtonClass
    );
    this._buttonElement.disabled = true;
  }

  // disableSubmitButton() {
  //   const { inactiveButtonClass } = this._validationConfig;
  //   this._buttonElement.classList.add(this._validationConfig.inactiveButtonClass);
  //   this._buttonElement.disabled = true;
  // }

  _enableSubmitButton() {
    this._buttonElement.classList.remove(
      this._validationConfig.inactiveButtonClass
    );
    this._buttonElement.disabled = false;
  }

  _toggleButtonState() {
    // Если есть хотя бы один невалидный инпут
    if (this._hasInvalidInput()) {
      // сделай кнопку неактивной
      this.disableSubmitButton();
    } else {
      // иначе сделай кнопку активной
      this._enableSubmitButton();
    }
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(); ///вызов кнопки???
      });
    });
  }

  // ПУБЛИЧНЫЙ МЕТОД КЛЮЧАЮЩИЙ ВАЛИДАЦИЮ ФОРМЫ
  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }

  resetErrors() {
    this.form.reset();
    this._inputList.forEach(() => {
      this._checkInputValidity(inputElement);
    });
    this._toggleButtonState(inputList, buttonElement);
  }
}

// const showInputError = (formElement, inputElement, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add("popup__error");
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add("popup__error_active");
// };
// const hideInputError = (formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove("popup__error");
//   errorElement.classList.remove("popup__error_active");
//   errorElement.textContent = "";
// };

// const checkInputValidity = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     hideInputError(formElement, inputElement);
//   }
// };

// const hasInvalidInput = (inputList) => {
//   // проходим по этому массиву методом some
//   return inputList.some((inputElement) => {
//     // Если поле не валидно, колбэк вернёт true
//     // Обход массива прекратится и вся фунцкция
//     // hasInvalidInput вернёт true

//     return !inputElement.validity.valid;
//   });
// };

// const toggleButtonState = (inputList, buttonElement) => {
//   // Если есть хотя бы один невалидный инпут
//   if (hasInvalidInput(inputList)) {
//     // сделай кнопку неактивной
//     buttonElement.classList.add("popup__button_disabled");
//   } else {
//     // иначе сделай кнопку активной
//     buttonElement.classList.remove("popup__button_disabled");
//   }
// };

// const setEventListeners = (formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
//   ///вызов кнопки???
//   const buttonElement = formElement.querySelector(".popup__button");
//   toggleButtonState(inputList, buttonElement); ///вызов кнопки???
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener("input", function () {
//       checkInputValidity(formElement, inputElement);

//       toggleButtonState(inputList, buttonElement); ///вызов кнопки???
//     });
//   });
// };

// function enableValidation(validationConfig) {
//   const formList = Array.from(document.querySelectorAll(".popup__form"));

//   formList.forEach((formElement) => {
//     formElement.addEventListener("submit", (evt) => {
//       evt.preventDefault();
//     });

//     setEventListeners(formElement);
//   });
// }

// // включение валидации вызовом enableValidation
// // все настройки передаются при вызове

// enableValidation(validationConfig);
