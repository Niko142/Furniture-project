import { initFormSubmit } from "./components/form-handler";
import { initAdvantages } from "./components/advantages";
import { initIntersectionObserver } from "./services/intersection-observer";

import "./assets/styles/style.scss";
import "bootstrap/js/src/collapse.js";

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(
    ".gallery-item, .process__step, .cta-figure, .gallery-list__item, .collection__img"
  );

  initAdvantages();
  initIntersectionObserver(animatedItems);
  initFormSubmit();
});
