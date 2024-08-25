import Swiper from "swiper";
import { Keyboard, FreeMode, } from "swiper/modules";

const teamSlider = document.querySelector(".team-slider");

if (teamSlider) {
  const swiper = new Swiper(teamSlider, {
    modules: [Keyboard, FreeMode,],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    breakpoints: {
      "900.1": {
        slidesPerView: 4,
      },
    },
    slidesPerView: 0.621301775,
    spaceBetween: 20,
    rewind: true,
    freeMode: true,
  });
}
