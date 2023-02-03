"use strict";

const NUMBER_OF_WINNERS = 3;

const mayAddCutie = cutie =>
   $$("#cutest li").length < NUMBER_OF_WINNERS
   && !isInCutest(cutie);

const isInCutest = cutie =>
  $$("#cutest li span")
    .filter(span => span.textContent === cutie.textContent)
    .length > 0;

$$("#candidates li").on("click", e => {
  const cutie = e.currentTarget;
  if (!mayAddCutie(cutie)) return;

  $("#cutest").appendChild(
    cutie.cloneNode(true).on("click", e => e.currentTarget.remove())
  );
});
