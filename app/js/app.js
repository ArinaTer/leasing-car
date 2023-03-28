import * as myFunctions from "./modules/functions.js";

import SmoothScroll from "smoothscroll-for-websites";
import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from "swiper";

import Inputmask from "inputmask/dist/inputmask.es6.js";

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

// Swiper banner
(function bannerSwipe() {
  const progressBar = document.querySelector(".banner__swiper__progress");
  const progressBar1 = document.querySelector(".swiper-progress");

  const viewsSlider = new Swiper(".banner .swiper", {
    modules: [Navigation, Pagination, EffectFade],
    loop: true,
    observeParents: true,
    observer: true,
    centeredSlides: true,
    loopedSlides: 1,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },

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

(function modalCalc() {
  const modalCalcClose = document.querySelector(".modal-calc__button-close");
  const modalCalcOpen = document.querySelectorAll("[data-toggle]");
  const modalCalc = document.querySelector(".modal-calc");
  // const

  modalCalcClose.addEventListener("click", () => {
    modalCalc.classList.remove("show");
    document.body.style.overflowY = "auto";
  });

  modalCalcOpen?.forEach((el) => {
    el.addEventListener("click", () => {
      modalCalc.classList.add("show");
      document.body.style.overflowY = "hidden";
    });
  });

  let inputMask = document.getElementById("phone-mask");

  let mask = new Inputmask("+9 (999) 999 99 99");
  mask.mask(inputMask);
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
