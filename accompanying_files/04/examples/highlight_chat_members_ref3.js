"use strict";

{
  const highlightChatMembersBy = partOfMemberName => {
    const liNodesFound = chatMembers()
      .filter(liNode =>
        liNode.innerHTML.includes(partOfMemberName));

    liNodesFound.forEach(highlight);
  };

  const chatMembers = () => Array.from($$("#chat_members li"));
  const highlight = el => el.classList.add("highlighted");

  const $$ = document.querySelectorAll.bind(document);

  highlightChatMembersBy("ert");
}
