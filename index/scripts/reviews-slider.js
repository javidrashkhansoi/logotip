import Swiper from "swiper";
import { Keyboard, } from "swiper/modules";

const reviewsSlider = document.querySelector(".reviews-slider");

if (reviewsSlider) {
  const swiper = new Swiper(reviewsSlider, {
    modules: [Keyboard,],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    breakpoints: {
      "900.1": {
        slidesPerView: 2.375,
      },
    },
    slidesPerView: 1.176470588,
    spaceBetween: 20,
    rewind: true,
  });
}
