import * as myFunctions from "./modules/functions.js";

import SmoothScroll from "smoothscroll-for-websites";
import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from "swiper";

myFunctions.isWebp();

// Scroller
(function scroller() {
  SmoothScroll({
    animationTime: 1000,
    stepSize: 80,
    keyboardSupport: true,
    arrowScroll: 100,
    touchpadSupport: true,
  });
})();

(function inputRange() {
  const rangeInputs = document.querySelectorAll('input[type="range"]');
  const numberInput = document.querySelector('input[type="number"]');

  function handleInputChange(e) {
    let target = e.target;
    if (e.target.type !== "range") {
      target = document.getElementById("range");
    }
    const min = target.min;
    const max = target.max;
    const val = target.value;

    target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
  }

  rangeInputs.forEach((input) => {
    input.addEventListener("input", handleInputChange);
  });
})();

// Swiper banner
(function bannerSwipe() {
  // const progressCircle = document.querySelector(".autoplay-progress svg");
  // const progressContent = document.querySelector(".autoplay-progress span");

  // const viewsSlider = new Swiper(".banner .swiper", {
  //   modules: [Navigation, Pagination, EffectFade, Autoplay],
  //   centeredSlides: true,
  //   watchSlidesProgress: true,
  //   // autoplay: {
  //   //   delay: 5000,
  //   //   disableOnInteraction: false,
  //   // },
  //   effect: "fade",

  //   // Pagination arrows
  //   pagination: {
  //     el: ".banner .swiper-pagination",
  //     clickable: true,
  //   },

  //   // Navigation arrows
  //   navigation: {
  //     prevEl: ".banner .banner__swiper-arrow .banner__swiper-arrow-prev",
  //     nextEl: ".banner .banner__swiper-arrow .banner__swiper-arrow-next",
  //   },
  //   on: {
  //     autoplayTimeLeft(s, time, progress) {
  //       console.log(s, time, progress);
  //       progressCircle.style.setProperty("--progress", 1 - progress);
  //       progressContent.textContent = `${Math.ceil(time / 1000)}s`;
  //     },
  //   },
  // });

  const progressBar = document.querySelector(".banner__swiper-__progress");
  const progressBar1 = document.querySelector(".swiper-progress");

  const viewsSlider = new Swiper(".banner .swiper", {
    modules: [Navigation, Pagination, EffectFade, Autoplay],
    loop: true,
    centeredSlides: true,
    watchSlidesProgress: true,
    effect: "fade",

    // Pagination arrows
    pagination: {
      el: ".banner .swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      prevEl: ".banner .banner__swiper-arrow .banner__swiper-arrow-prev",
      nextEl: ".banner .banner__swiper-arrow .banner__swiper-arrow-next",
    },
  });

  progressBar.addEventListener("animationend", myEndFunction);
  progressBar1.addEventListener("animationend", myEndFunction);

  function myEndFunction() {
    viewsSlider.slideNext();
    progressBar.style.animation = "none";
    progressBar1.style.animation = "none";
    void progressBar.offsetWidth;
    progressBar.style.animation = null;
    progressBar1.style.animation = null;
  }

  viewsSlider.on("slideChange", function () {
    progressBar.style.animation = "none";
    progressBar1.style.animation = "none";
    void progressBar.offsetWidth;
    progressBar.style.animation = null;
    progressBar1.style.animation = null;
    progressBar.style.animationPlayState = "play";
    progressBar1.style.animationPlayState = "play";
  });
})();

(function modal() {
  const brochureClose = document.querySelector(".modal__button-close");
  const brochureOpen = document.querySelectorAll("[data-toggle]");
  const brochure = document.querySelector(".modal");

  brochureClose.addEventListener("click", () => {
    brochure.classList.remove("show");
    document.body.style.overflowY = "auto";
  });

  brochureOpen?.forEach((el) => {
    el.addEventListener("click", () => {
      brochure.classList.add("show");
      document.body.style.overflowY = "hidden";
    });
  });
})();

(function buttonLoading() {
  let buttonSwiper = document.querySelector(".banner__swiper-button");
  let buttonSwiperSpan = document.querySelector(".banner__swiper-button span");
  const buttonSvg = document.querySelector("#loading");

  buttonSwiper.addEventListener("click", () => {
    buttonSwiper.classList.add("button_loading");
    buttonSwiperSpan.style.display = "none";
    buttonSvg.style.display = "block";
  });
})();

(function burger() {
  const burgerMenu = document.querySelector(".header__menu-mobile");
  const burgerOn = document.querySelector(".header__burger-button");
  const burgerClose = document.querySelector(".header__menu-close");

  burgerClose.addEventListener("click", () => {
    burgerMenu.classList.remove("menu-open");
    document.body.style.overflowY = "auto";
  });

  burgerOn.addEventListener("click", () => {
    burgerMenu.classList.toggle("menu-open");
    document.body.style.overflowY = "hidden";
  });
})();
