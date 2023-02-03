"use strict";

{
  const init = () =>
    $("#buy").addEventListener("click", disableBuyButton);

  const disableBuyButton = e => e.target.disabled = true;

  init();
}
