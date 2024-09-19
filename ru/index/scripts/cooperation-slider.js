import Swiper from "swiper";
import { Keyboard, } from "swiper/modules";

const cooperationSlider = document.querySelector(".cooperation-slider");

if (cooperationSlider) {
  const swiper = new Swiper(cooperationSlider, {
    modules: [Keyboard,],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    breakpoints: {
      "900.1": {
        slidesPerView: 3,
      },
    },
    slidesPerView: 1,
    spaceBetween: 20,
    rewind: true,
  });
}
