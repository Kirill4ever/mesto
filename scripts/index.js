//Select container and pop-ups
const container = document.querySelector('.page');
const popupEditProfile = container.querySelector('#popupEditProfile');
const popupAddCard = container.querySelector('#popupAddCard');

//Select forms
const editForm = container.querySelector('#editForm');
const addCardForm = container.querySelector('#addCardForm');

//Select buttons
const editBtn = container.querySelector('.profile__edit-button');
const addBtn = container.querySelector('.profile__add-button');
const closeEditFormBtn = popupEditProfile.querySelector('.popup__close-btn');
const closeAddFormBtn = popupAddCard.querySelector('.popup__close-btn');

//Select elements for editing
const authorName = container.querySelector('.profile__author-name');
const authorDescription = container.querySelector('.profile__author-description');

//Select fields
const placeNameField = container.querySelector('.popup__text-field_value_place-name');
const placeImageField = container.querySelector('.popup__text-field_value_place-image');
const nameField = container.querySelector('.popup__text-field_value_author-name');
const descriptionField = container.querySelector('.popup__text-field_value_author-description');

//Basic pop-up functions
function openPopup (popup) {
    popup.classList.add('popup_opened');
}

function closePopup (popup) {
    popup.classList.remove('popup_opened');
}

//Edit profile
function openEditPopup () {
    nameField.value = authorName.textContent;
    descriptionField.value = authorDescription.textContent;
    openPopup(popupEditProfile);
}

function saveChanges (evt) {
    evt.preventDefault();
    let newAuthorName = nameField.value;
    let newAuthorDescription = descriptionField.value;
    authorName.textContent = newAuthorName;
    authorDescription.textContent = newAuthorDescription;
    closePopup(popupEditProfile);
}

editBtn.addEventListener('click', openEditPopup);

closeEditFormBtn.addEventListener('click', function() {
    closePopup(popupEditProfile);
});

editForm.addEventListener('submit', saveChanges);

//Initial card array
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

//Select template and place for cards
const cardTemplate = container.querySelector('#card-template');
const cardFlex = container.querySelector('.elements__list');

//Create card element
function createCardElement(cardData){
const cardElement = cardTemplate.content.querySelector('.element').cloneNode(true);

const elementImage = cardElement.querySelector('.element__image');
const elementName = cardElement.querySelector('.element__name');

elementImage.src = cardData.link;
elementImage.alt = cardData.name;
elementName.textContent = cardData.name;

return cardElement;
};

//Renderer
function renderCard(cardElement) {
cardFlex.prepend(cardElement);
};

//Add initial cards to the page
initialCards.forEach((card) => {
const element = createCardElement(card);
renderCard(element);
});

//Add new place
function openAddCardPopup () {
    placeNameField.value = '';
    placeImageField.value = '';
    openPopup(popupAddCard);
}

function addCard (evt) {
    evt.preventDefault();
    let newPlace ={};
    newPlace.name = placeNameField.value;
    newPlace.link = placeImageField.value;
    const element = createCardElement(newPlace);
    renderCard(element);
    closePopup(popupAddCard);
    
}

addBtn.addEventListener('click', openAddCardPopup);
closeAddFormBtn.addEventListener('click', function() {
    closePopup(popupAddCard);
});
addCardForm.addEventListener('submit', addCard);

