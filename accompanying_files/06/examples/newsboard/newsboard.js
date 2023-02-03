"use strict";

{
  const init = () => {
    showFirstMessage();
    $("[title=next]").addEventListener("click", nextMessage);
    $("[title=prev]").addEventListener("click", prevMessage);
  };

  const showFirstMessage = () => showMessageByNumber(1);

  const nextMessage = e => {
    showMessageByNumber(currentMessageNumber += 1);
    e.preventDefault();
  };
  const prevMessage = e => {
    showMessageByNumber(currentMessageNumber -= 1);
    e.preventDefault();
  };

  const showMessageByNumber = messageNumber =>
    $(".newsboard_content").innerHTML = messages[messageNumber - 1];

  let currentMessageNumber = 1;

  init();
}
