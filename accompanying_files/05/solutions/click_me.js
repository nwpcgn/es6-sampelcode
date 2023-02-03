"use strict";

{
  const init = () =>
    $("#click_me").addEventListener("click", handleButtonClick);

  const handleButtonClick = event =>
    changeButtonTextTo(event.target,
        event.altKey
        ? "Cool, you found an easteregg!"
        : "Hey I like it when you click me!");

  const changeButtonTextTo = (button, text) => button.innerHTML = text;

  const $ = document.querySelector.bind(document);

  init();
}
