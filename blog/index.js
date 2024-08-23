import "@styles/global.scss";

const MIN_1024_PX = matchMedia("(min-width: 1024.1px)");

if (MIN_1024_PX.matches) {
  import("/src/js/background.js")
    .then(functions => functions.addBackground());
}

MIN_1024_PX.addEventListener("change", (event) => {
  const { matches } = event;

  if (matches) {
    import("/src/js/background.js")
      .then(functions => functions.addBackground());
  } else {
    const background = document.querySelector(".background");

    background?.remove();
  }
});
