"use strict";

const r = () => $("#red").value;
const g = () => $("#green").value;
const b = () => $("#blue").value;

$$("input[type='range']").on("input", () =>
  $("body").style.backgroundColor = `rgb(${r()}, ${g()}, ${b()})`);
