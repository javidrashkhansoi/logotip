import Swiper from "swiper";
import { Keyboard, } from "swiper/modules";

const teamSlider = document.querySelector(".team-slider");

if (teamSlider) {
  const swiper = new Swiper(teamSlider, {
    modules: [Keyboard,],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    breakpoints: {
      "900.1": {
        slidesPerView: 4,
      },
    },
    slidesPerView: 1,
    spaceBetween: 20,
    rewind: true,
    freeMode: true,
  });
}
