"use strict";

{
  const init = () =>
    $("#age").on("input", () => {
      movies().forEach(
        movie => suitable(movie).checked = isSuitableForAge(age(), movie)
      );
    });

  const movies = () => $$(".movie");
  const age = () => Number($("#age").value);
  const suitable = movie => movie.querySelector(".suitable input");

  const isSuitableForAge = (age, movie) => age >= ageRating(movie);

  const ageRating = movie => Number(movie.querySelector(".age_rating").innerHTML);

  init();
}
