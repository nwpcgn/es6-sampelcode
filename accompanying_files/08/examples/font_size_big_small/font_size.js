"use strict";

{
  const init = () => {
    $("#very_big").on("click", () => $("p").style.fontSize = "36px");
    $("#big").on("click", () => $("p").style.fontSize = "24px");
    $("#normal").on("click", () => $("p").style.fontSize = "16px");
    $("#small").on("click", () => $("p").style.fontSize = "14px");
  };

  init();
}
