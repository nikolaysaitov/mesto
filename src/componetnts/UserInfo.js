export class UserInfo {
  constructor({ profileNameSelector, profileJobSelector, profileAvatarSelector }) {
    this._nameElement = document.querySelector(profileNameSelector);
    this._jobElement = document.querySelector(profileJobSelector);
    this._avatar = document.querySelector(profileAvatarSelector);
  }
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
    };
  }
  setUserInfo(title, job, avatar) {
    this._nameElement.textContent = title;
    this._jobElement.textContent = job;
    this._avatar.src = avatar;
    console.log('res');


    // this._avatar.style.backgroundImage = `url(${avatar})`;
    // this._avatar.style.backgroundSize = 'cover';
    // this._avatar.style.backgroundRepeat = 'no-repeat';
    // this._avatar.style.backgroundPosition = 'center center';
  }





}