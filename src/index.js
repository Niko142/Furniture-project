import "./assets/styles/style.scss";
import "bootstrap/js/src/collapse.js";
import initialAdvantages from "./components/advantages";
import initFormSubmit from "./components/form";

const animatedItems = document.querySelectorAll(
  ".gallery-item, .process__step, .cta-figure, .gallery-list__item, .collection__img"
);

// Настройки observer-a
const OBSERVER_OPTIONS = {
  rootMargin: "0px", // Сдвиг области просмотра
  threshold: 0.3, // Процент пересечения
};

const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.replace("invisible", "visible");
      observer.unobserve(entry.target);
    }
  });
};

function initIntersectionObserver() {
  const imageObserver = new IntersectionObserver(
    handleIntersection,
    OBSERVER_OPTIONS
  );

  animatedItems.forEach((item) => imageObserver.observe(item));
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
  initialAdvantages();
  initIntersectionObserver();
  initFormSubmit();
});
