let container = document.querySelector('.page');
let popup = container.querySelector('.popup');
let form = container.querySelector('.popup__form');

let editBtn = container.querySelector('.profile__edit-button');

let authorName = container.querySelector('.profile__author-name');
let authorDescription = container.querySelector('.profile__author-description');

let nameField = container.querySelector('.popup__text-field_value_author-name');
let descriptionField = container.querySelector('.popup__text-field_value_author-description');

function openPopup () {
    popup.classList.add('popup_opened');
    nameField.value = authorName.textContent;
    descriptionField.value = authorDescription.textContent;
}
function saveChanges (evt) {
    evt.preventDefault();
    let newAuthorName = nameField.value;
    let newAuthorDescription = descriptionField.value;
    authorName.textContent = newAuthorName;
    authorDescription.textContent = newAuthorDescription;
    closePopup();
}

let closeBtn = container.querySelector('.popup__close-btn')

function closePopup () {
    popup.classList.remove('popup_opened');
}

editBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
form.addEventListener('submit', saveChanges);
