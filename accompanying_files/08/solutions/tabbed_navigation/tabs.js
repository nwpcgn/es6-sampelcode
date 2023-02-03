"use strict";

{
  const init = () => {
    registerTabEvents();
    activateTabByIndex(0);
  };

  const registerTabEvents = () =>
    navItems().forEach((elem, i) =>
      elem.on("click", () => activateTabByIndex(i)));

  const activateTabByIndex = index => {
    removeHighlightFromActiveNavItem();
    hightlightNavItemByIndex(index);
    hideAllArticles();
    showArticleByIndex(index);
  };

  const removeHighlightFromActiveNavItem = () =>
    activeNavItems().forEach(elem =>
      elem.classList.remove("active"));

  const hightlightNavItemByIndex = index =>
    navItems()[index].classList.add("active");

  const hideAllArticles = () => articles().forEach(hide);

  const showArticleByIndex = index => show(articles()[index]);

  const articles = () => $$(".tabs article");
  const navItems = () => $$(".tabs > nav li");
  const activeNavItems = () => $$(".tabs > nav li.active");

  const show = elem => elem.style.display = "block";
  const hide = elem => elem.style.display = "none";

  init();
}
