import { advantagesItems } from "../data/advantages-data";

// Формируем разметку элемента достоинств
const createAdvantageItem = (item) => {
  return `
    <div class="advantages-item d-flex align-items-center">
      <img 
        src="${item.src}" 
        class="advantages__img advantages__img--${item.class}"
        loading="lazy"
        alt="${item.title}">
      <div class="advantages__content d-grid">
        <h3 class="advantages__content--title fw-semibold mb-0">${item.title}</h3>
        <p class="advantages__content--description mb-0">${item.description}</p>
      </div>
    </div>
  `;
};

// Рендерим элементы в контейнер
const renderAdvantageItems = ({ items, container }) => {
  items.forEach((item) => {
    container.insertAdjacentHTML("beforeend", createAdvantageItem(item));
  });
};

export const initAdvantages = () => {
  const advantageContainer = document.querySelector(".advantages-wrapper");

  if (!advantagesItems?.length) {
    console.error("Не удалось сформировать список достоинств");
    return;
  }

  renderAdvantageItems({
    items: advantagesItems,
    container: advantageContainer,
  });
};
