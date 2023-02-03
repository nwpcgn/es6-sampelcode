"use strict";

{
  const highlightChatMembersBy = partOfMemberName => {
    const liNodes = Array.from($$("#chat_members li"));
    const liNodesFound = liNodes.filter(liNode =>
      liNode.innerHTML.includes(partOfMemberName));

    liNodesFound.forEach(li => li.classList.add("highlighted"));
  };

  const $$ = document.querySelectorAll.bind(document);

  highlightChatMembersBy("ert");
}
