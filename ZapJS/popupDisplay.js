import { displayItem, hideItem } from "./ZapFunctions.js";

const getPopupScreen = () => {
  return document.querySelector(".popup-screen");
};

const displayItemPopup = (course) => {
  const { imageUrl } = course;
  const popupScreen = getPopupScreen();
  const popupImage = popupScreen.querySelector(".popup-image"); // Ensure you are using the correct class selector

  if (popupImage) {
    popupImage.src = imageUrl; // Correctly reference the image URL
  }

  displayItem(popupScreen);
};

const hideItemPopup = () => {
  const popupScreen = getPopupScreen();
  hideItem(popupScreen);
};

export const addDisplayOnClick = (item, course) => {
  item.addEventListener("click", () => displayItemPopup(course));
};

export const exitPopupButton = () => {
  const exitButton = document.querySelector(".exit-button");

  exitButton.addEventListener("click", hideItemPopup);
};
