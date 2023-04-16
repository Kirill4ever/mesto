const container = document.querySelector('.page');
const popup = container.querySelector('.popup');
const form = container.querySelector('.popup__form');

const editBtn = container.querySelector('.profile__edit-button');

const authorName = container.querySelector('.profile__author-name');
const authorDescription = container.querySelector('.profile__author-description');

const nameField = container.querySelector('.popup__text-field_value_author-name');
const descriptionField = container.querySelector('.popup__text-field_value_author-description');

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

const closeBtn = container.querySelector('.popup__close-btn')

function closePopup () {
    popup.classList.remove('popup_opened');
}

editBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
form.addEventListener('submit', saveChanges);

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

  const cardTemplate = container.querySelector('#card-template');
  const cardFlex = container.querySelector('.elements__list');

  function createCardElement(cardData){
    const cardElement = cardTemplate.content.querySelector('.element').cloneNode(true);

    const elementImage = cardElement.querySelector('.element__image');
    const elementName = cardElement.querySelector('.element__name');

    elementImage.src = cardData.link;
    elementImage.alt = cardData.name;
    elementName.textContent = cardData.name;

    return cardElement;
  }

  function renderCard(cardElement) {
    cardFlex.append(cardElement);
  }

  initialCards.forEach((card) => {
    const element = createCardElement(card);
    renderCard(element);
  });