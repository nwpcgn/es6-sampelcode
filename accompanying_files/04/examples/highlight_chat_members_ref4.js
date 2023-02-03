"use strict";

{
  const highlightChatMembersBy = partOfMemberName => {
    const liNodesFound = chatMembers()
      .filter(memberElement =>
        doesMemberMatch(partOfMemberName, memberElement));

    liNodesFound.forEach(highlight);
  };

  const doesMemberMatch = (partOfMemberName, memberElement) =>
    memberElement.innerHTML.includes(partOfMemberName);

  const chatMembers = () => Array.from($$("#chat_members li"));
  const highlight = el => el.classList.add("highlighted");

  const $$ = document.querySelectorAll.bind(document);

  highlightChatMembersBy("ert");
}
