const MIN_900_PX = matchMedia("(min-width: 900.1px)");

if (MIN_900_PX.matches) {
  import("/src/js/background.js")
    .then(functions => functions.addBackground());
}

MIN_900_PX.addEventListener("change", (event) => {
  const { matches } = event;

  if (matches) {
    import("/src/js/background.js")
      .then(functions => functions.addBackground());
  } else {
    const background = document.querySelector(".background");

    background?.remove();
  }
});
