import "@styles/global.scss";
import "./index.scss";
import "/src/js/add-background.js";
import { Spoilers } from "./scripts/spoilers.js";
import "./scripts/cooperation-slider.js";
import "./scripts/team-slider.js";
import "./scripts/freelance-list.js";
import "./scripts/reviews-slider.js";
import "./scripts/review-stars.js";

const MIN_900_PX = matchMedia("(min-width: 900.1px)");

if (!MIN_900_PX.matches) {
  import("./scripts/stack.js");
}

MIN_900_PX.addEventListener("change", (event) => {
  const { matches } = event;

  if (!matches) import("./scripts/stack.js");
});

const spoilers = new Spoilers();
