(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._id=e.id,this._userId=e.userId,this._ownerId=e.ownerId,this._handleLikeClick=i,this._handleDeleteClick=o,this._templateSelector=n,this._openPopupPic=r}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".pictures__item").cloneNode(!0)}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._element.querySelector(".pictures__like-count").textContent=this._likes.length,this.isLiked()?this._fillLike():this._addLike()}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".pictures__title").textContent=this._name,this._image=this._element.querySelector(".pictures__image"),this._image.src=this._link,this._image.alt=this._name,this._like=this._element.querySelector(".pictures__like"),this._setListeners(),this.setLikes(this._likes),this._ownerId!==this._userId&&(this._element.querySelector(".pictures__delete").style.display="none"),this._element}},{key:"_setListeners",value:function(){var e=this;this._image.addEventListener("click",(function(){e._openPopupPic(e._name,e._link)})),this._like.addEventListener("click",(function(){e._handleLikeClick(e._id)})),this._element.querySelector(".pictures__delete").addEventListener("click",(function(){e._handleDeleteClick(e._id)}))}},{key:"_fillLike",value:function(){this._like.classList.add("pictures__like_active")}},{key:"_addLike",value:function(){this._like.classList.remove("pictures__like_active")}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._validationConfig=t,this._inputList=Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector)),this._buttonElement=this._formElement.querySelector(this._validationConfig.submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){var n=this._validationConfig,r=n.inputErrorClass,o=n.errorClass,i=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(r),i.textContent=t,i.classList.add(o)}},{key:"_hideInputError",value:function(e){var t=this._validationConfig,n=t.inputErrorClass,r=t.errorClass,o=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(n),o.classList.remove(r),o.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"disableSubmitButton",value:function(){this._validationConfig.inactiveButtonClass,this._buttonElement.classList.add(this._validationConfig.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._validationConfig.inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():this._enableSubmitButton()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"resetErrors",value:function(){var e=this;this._formElement.reset(),this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),a={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__error",errorClass:"popup__error_active"};function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.currentTarget===t.target&&e.close()})),this._closeButton.addEventListener("click",(function(){return e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function d(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__photo"),t._caption=t._popup.querySelector(".popup__photo-title"),t}return t=a,(n=[{key:"open",value:function(e,t){this._image.src=t,this._image.alt=e,this._caption.textContent=e,f(_(a.prototype),"open",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function S(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=t,n._form=n._popup.querySelector(".popup__form"),n._submitButton=n._popup.querySelector(".popup__button"),n._initButtonText=n._submitButton.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e,t=function(e){if(Array.isArray(e))return m(e)}(e=this._form.querySelectorAll(".popup__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n={};return t.forEach((function(e){n[e.name]=e.value})),n}},{key:"changeSubmitHandler",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;k(w(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues())}))}},{key:"close",value:function(){k(w(a.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":this._initButtonText}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.profileNameSelector,r=t.profileJobSelector,o=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._jobElement=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,job:this._jobElement.textContent}}},{key:"setUserInfo",value:function(e,t,n){this._nameElement.textContent=e,this._jobElement.textContent=t,this._avatar.src=n}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P,I,q=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=r,this._baseUrl=n}var t,n;return t=e,(n=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._getResponseData)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._getResponseData)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._getResponseData)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._getResponseData)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._getResponseData)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._getResponseData)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"083f1856-1d24-41b5-bab8-7705d2d18558","Content-Type":"application/json"}});q.getProfile().then((function(e){W.setUserInfo(e.name,e.about,e.avatar),I=e.avatar,P=e._id})).catch(console.log),q.getInitialCards().then((function(e){e.reverse(),e.forEach((function(e){var t=H({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:P,ownerId:e.owner._id,avatar:e.avatar});M.addItem(t)}))})).catch(console.log);var B=document.querySelector(".profile__button-edit"),R=document.querySelector(".popup_edit"),T=document.querySelector(".profile__button-add"),D=document.querySelector(".popup_add"),U=document.querySelector(".popup__input-name"),x=document.querySelector(".popup__input-job"),A=D.querySelector(".popup__form"),V=new r(a,R.querySelector(".popup__form")),N=new r(a,A),J=new r(a,document.querySelector(".popup_avatar").querySelector(".popup__form"));function H(e){var n=new t(e,".cards",(function(){z.open(e.name,e.link)}),(function(e){G.open(),G.changeSubmitHandler((function(){q.deleteCard(e).then((function(e){n.deleteCard(),G.close()})).catch(console.log)}))}),(function(e){n.isLiked()?q.deleteLike(e).then((function(e){n.setLikes(e.likes)})):q.addLike(e).then((function(e){n.setLikes(e.likes)})).catch(console.log)}));return n.generateCard()}V.enableValidation(),N.enableValidation(),J.enableValidation(),B.addEventListener("click",(function(){var e=W.getUserInfo(),t=e.name,n=e.job;U.value=t,x.value=n,V.disableSubmitButton(),F.open()})),T.addEventListener("click",(function(){N.resetErrors(),N.disableSubmitButton(),$.open()}));var M=new i({items:[],renderer:function(e){var t=H(e);M.addItem(t)}},".pictures__board");M.renderItems();var z=new y(".popup_picture"),$=new L(".popup_add",(function(e){$.renderLoading(!0),q.addCard(e.card,e.link).then((function(e){var t=H({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:P,ownerId:e.owner._id,avatar:e.avatar});M.addItem(t),$.close()})).catch(console.log).finally((function(){$.renderLoading(!1)}))})),F=new L(".popup_edit",(function(e){var t=e.name,n=e.job;F.renderLoading(!0),q.editProfile(t,n).then((function(){W.setUserInfo(t,n,I),F.close()})).catch(console.log).finally((function(){F.renderLoading(!1)}))})),G=new L(".popup_delete-confirm"),K=document.querySelector(".profile__id-wrapper"),Q=new L(".popup_avatar",(function(e){Q.renderLoading(!0),q.updateAvatar(e.link).then((function(e){W.setUserInfo(e.name,e.about,e.avatar),Q.close()})).catch(console.log).finally((function(){Q.renderLoading(!1)}))}));K.addEventListener("click",(function(){J.resetErrors(),J.disableSubmitButton(),Q.open()})),Q.setEventListeners(),$.setEventListeners(),F.setEventListeners(),z.setEventListeners(),G.setEventListeners();var W=new O({profileNameSelector:".profile__id-title",profileJobSelector:".profile__id-subtitle",profileAvatarSelector:".profile__id-avatar"})})();