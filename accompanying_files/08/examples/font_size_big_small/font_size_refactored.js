"use strict";

{
  const SMALL = 14;
  const NORMAL = 16;
  const BIG = 24;
  const VERY_BIG = 36;

  const init = () => {
    $("#very_big").on("click", () => setFontSizeTo(VERY_BIG));
    $("#big")     .on("click", () => setFontSizeTo(BIG));
    $("#normal")  .on("click", () => setFontSizeTo(NORMAL));
    $("#small")   .on("click", () => setFontSizeTo(SMALL));
  };

  const setFontSizeTo = size =>  $("p").style.fontSize = size + "px";

  init();
}
