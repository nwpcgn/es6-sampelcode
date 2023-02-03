"use strict";

{
  const updateHighlightingOfChatMembers = partOfMemberName => {
    removeHighlightsFromAllChatMembers();
    highlightChatMembersBy(partOfMemberName);
  };

  const removeHighlightsFromAllChatMembers = () =>
    chatMembers().forEach(removeHighlight);

  const highlightChatMembersBy = partOfMemberName => {
    chatMembers()
      .filter(member =>
        doesMemberMatch(partOfMemberName, member))
      .forEach(highlight);
  };

  const doesMemberMatch = (partOfMemberName, memberElement) =>
    memberElement.innerHTML.toLowerCase()
      .includes(partOfMemberName.toLowerCase());

  const chatMembers = () => $$("#chat_members li");
  const highlight = el => el.classList.add("highlighted");
  const removeHighlight = el => el.classList.remove("highlighted");

  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  NodeList.prototype.__proto__ = Array.prototype;

  $("#member_search input")
    .addEventListener("keyup", () =>
      updateHighlightingOfChatMembers($("#member_search input").value));
}
