import { videos } from "./constants.js";

const videoTemplate = document.getElementById("video-template");
const videoGrid = document.querySelector(".video-grid");
const editVideoPopup = document.querySelector(".popup");
const editVideoButton = document.querySelector(".add-video-button");
const editVideoForm = document.querySelector(".form_type_edit-video");

const createVideoElement = (videoData) => {
  const videoElement = videoTemplate.content
    .querySelector(".video")
    .cloneNode(true);

  const videoName = videoElement.querySelector(".video__name");
  const videoImage = videoElement.querySelector(".video__image");
  const channelName = videoElement.querySelector(".video__channel-name");

  videoName.textContent = videoData.name;
  videoImage.src = videoData.thumbnailUrl;
  videoImage.alt = videoData.name;
  channelName.textContent = videoData.channel.name;

  const deleteButton = videoElement.querySelector(
    ".video__overlay-delete-icon"
  );
  const likeButton = videoElement.querySelector(
    ".video__overlay-favorite-icon"
  );

  const handleDelete = () => {
    videoElement.remove();
  };

  const handleLike = () => {
    likeButton.classList.toggle("video__overlay-favorite-icon_active");
  };

  deleteButton.addEventListener("click", handleDelete);

  likeButton.addEventListener("click", handleLike);

  return videoElement;
};

const renderVideoElement = (videoElement) => {
  videoGrid.prepend(videoElement);
};

videos.forEach((video) => {
  const element = createVideoElement(video);
  renderVideoElement(element);
});

// const openPopup = (popup) => {
//   popup.classList.add("popup_open");
// };

function openPopup(popup) {
  popup.classList.add("popup_open");
}

const closePoup = (popup) => {
  popup.classList.remove("popup_open");
};

editVideoButton.addEventListener("click", () => {
  openPopup(editVideoPopup);
});

const handleEditVideoSubmit = (event) => {
  event.preventDefault();

  const nameInput = editVideoForm.querySelector(".form__input_type_name");
  const thumbnailInput = editVideoForm.querySelector(
    ".form__input_type_thumbnail"
  );

  const name = nameInput.value;
  const thumbnailUrl = thumbnailInput.value;

  const videoData = {
    name,
    thumbnailUrl,
    channel: {
      name: "Wild nature",
    },
  };

  renderVideoElement(createVideoElement(videoData));
  closePoup(editVideoPopup);
};

editVideoForm.addEventListener("submit", handleEditVideoSubmit);
