"use strict";

{
  const highlightChatMembersBy = partOfMemberName => {
    chatMembers()
      .filter(member =>
        doesMemberMatch(partOfMemberName, member))
      .forEach(highlight);
  };

  const doesMemberMatch = (partOfMemberName, memberElement) =>
    memberElement.innerHTML.includes(partOfMemberName);

  const chatMembers = () => $$("#chat_members li");
  const highlight = el => el.classList.add("highlighted");

  const $$ = document.querySelectorAll.bind(document);
  NodeList.prototype.__proto__ = Array.prototype;

  highlightChatMembersBy("ert");
}
