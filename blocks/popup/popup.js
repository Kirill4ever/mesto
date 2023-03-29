let container = document.querySelector('.page');
let popup = container.querySelector('.popup');
let form = container.querySelector('.popup__container');

let editBtn = container.querySelector('.profile__edit-button');

let authorName = container.querySelector('.profile__author-name');
let authorDescription = container.querySelector('.profile__author-description');

let nameField = container.querySelector('.popup__author-name');
let descriptionField = container.querySelector('.popup__author-description');

function openPopup () {
    popup.classList.add('popup_opened');
    nameField.value = authorName.innerHTML;
    descriptionField.value = authorDescription.innerHTML;
}

let saveBtn = container.querySelector('.popup__save-btn');

function saveChanges (evt) {
    let newAuthorName = nameField.value;
    let newAuthorDescription = descriptionField.value;
    authorName.textContent = newAuthorName;
    authorDescription.textContent = newAuthorDescription;
    closePopup();
    evt.preventDefault();
}

let closeBtn = container.querySelector('.popup__close-btn')

function closePopup () {
    popup.classList.remove('popup_opened');
}

editBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
form.addEventListener('submit', saveChanges);
