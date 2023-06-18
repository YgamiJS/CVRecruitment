import Swiper, { Navigation, Pagination } from "swiper";
import "@/scss/index.scss";
import "@/scss/home.scss";
import "swiper/swiper-bundle.css";

const swiper = new Swiper(".specialties-list-swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-specialties-list",
    prevEl: ".swiper-button-prev-specialties-list",
  },
  modules: [Navigation],
});

const swiper2 = new Swiper(".swiper-work-list", {
  navigation: {
    nextEl: ".swiper-button-next-work-list",
    prevEl: ".swiper-button-prev-work-list",
  },
  spaceBetween: 40,
  modules: [Navigation],
});

const swiper3 = new Swiper(".swiper-clients", {
  loop: true,
  spaceBetween: 15,
  slidesPerView: 4,
  breakpoints: {
    310: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1240: {
      slidesPerView: 6,
    },
    1650: {
      slidesPerView: 8,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next-clients",
    prevEl: ".swiper-button-prev-clients",
  },
  pagination: {
    el: ".swiper-clients-pagination",
    clickable: true,
    type: "bullets",
  },
  modules: [Navigation, Pagination],
});

const swiper4 = new Swiper(".swiper-reviews", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 4,
  breakpoints: {
    310: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1240: {
      slidesPerView: 4,
    },
    1650: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next-reviews",
    prevEl: ".swiper-button-prev-reviews",
  },
  pagination: {
    el: ".swiper-reviews-pagination",
    clickable: true,
    type: "bullets",
  },
  modules: [Navigation, Pagination],
});

const feedbackForm = document.querySelector<HTMLFormElement>(".feedback-form")!;
const button = document.querySelector<HTMLButtonElement>(".feedback-form__button")!;

feedbackForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  let response = await fetch("/", {
    method: "POST",
    body: new FormData(feedbackForm),
  });

  response.ok ? (button.textContent = "Отправленно") : (button.textContent = "Отправить повторно");
});
