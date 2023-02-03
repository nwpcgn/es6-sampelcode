"use strict";

{
  const init = () => {
    $("#inc").on("click", incFontSize);
    $("#dec").on("click", decFontSize);
  };

  const incFontSize = () => setFontSizeTo(currentFontSize() + 5);
  const decFontSize = () => setFontSizeTo(currentFontSize() - 5);

  const currentFontSize = () =>
    parseInt(getComputedStyle($("p")).fontSize);

  const setFontSizeTo = size =>
    $("p").style.fontSize = size + "px";

  init();
}
