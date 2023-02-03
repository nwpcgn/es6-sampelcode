"use strict";

{
  const highlightChatMembers = () => {
    const searchFor = "ert";

    const liNodes = Array.from($$("#chat_members li"));
    const liNodesFound = liNodes.filter(liNode =>
      liNode.innerHTML.includes(searchFor));

    liNodesFound.forEach(li => li.classList.add("highlighted"));
  };

  const $$ = document.querySelectorAll.bind(document);

  highlightChatMembers();
}
