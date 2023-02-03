"use strict";

{
  const init = () => {
    showFirstMessage();
    initProgressbar();
    $("[title=next]").addEventListener("click", nextMessage);
    $("[title=prev]").addEventListener("click", prevMessage);
  };

  const showFirstMessage = () => showMessageByNumber(1);

  const initProgressbar = () => {
    progressbar().max = messages.length;
    progressbar().value = 1;
  };

  const nextMessage = e => {
    showMessageByNumber(progressbar().value += 1);
    e.preventDefault();
  };
  const prevMessage = e => {
    showMessageByNumber(progressbar().value -= 1);
    e.preventDefault();
  };

  const progressbar = () => $("#messages_progress");

  const showMessageByNumber = (messageNumber) =>
    $(".newsboard_content").innerHTML = messages[messageNumber - 1];

  init();
}
