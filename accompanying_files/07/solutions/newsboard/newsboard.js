"use strict";

{
  const init = () => {
    initProgressbar();
    firstMessage();
    $("[title=next]").addEventListener("click", nextMessage);
    $("[title=prev]").addEventListener("click", prevMessage);
    $("[title=first]").addEventListener("click", firstMessage);
    $("[title=last]").addEventListener("click", lastMessage);
  };

  const initProgressbar = () => {
    progressbar().max = messages.length;
    progressbar().value = 1;
  };

  const nextMessage = () => {
    incCurrentMessageNumber();
    update();
  };
  const prevMessage = () => {
    decCurrentMessageNumber();
    update();
  };
  const firstMessage = () => {
    setCurrentMessageNumberToFirstMessage();
    update();
  };
  const lastMessage = () => {
    setCurrentMessageNumberToLastMessage();
    update();
  };

  const incCurrentMessageNumber = () => progressbar().value += 1;
  const decCurrentMessageNumber = () => progressbar().value -= 1;
  const setCurrentMessageNumberToFirstMessage = () => progressbar().value = 1;
  const setCurrentMessageNumberToLastMessage = () => progressbar().value = progressbar().max;

  const update = () => {
    updateMessage();
    updateButtonsState();
  };

  const updateMessage = () => showMessageByNumber(currentMessageNumber());

  const updateButtonsState = () => {
    buttonNext().disabled = lastMessageReached();
    buttonPrev().disabled = firstMessageReached();
    buttonLast().disabled = lastMessageReached();
    buttonFirst().disabled = firstMessageReached();
  };

  const lastMessageReached = () => currentMessageNumber() === messages.length;
  const firstMessageReached = () => currentMessageNumber() === 1;

  const showMessageByNumber = messageNumber =>
    $(".newsboard_content").innerHTML = messages[messageNumber - 1];

  const buttonNext = () => $("[title=next]");
  const buttonPrev = () => $("[title=prev]");
  const buttonFirst = () => $("[title=first]");
  const buttonLast = () => $("[title=last]");

  const currentMessageNumber = () => progressbar().value;
  const progressbar = () => $("#messages_progress");

  init();
}
