import { advantagesItems } from "../data/data";

const wrapper = document.querySelector(".advantages-wrapper");

function createAdvantageItem(item) {
  return `
    <div class="advantages-item d-flex align-items-center">
      <img 
        src="${item.imgSrc}" 
        class="advantages__img advantages__img--${item.imgClass}" 
        alt="${item.title}">
      <div class="advantages__content d-grid">
        <h3 class="advantages__content--title fw-semibold mb-0">${item.title}</h3>
        <p class="advantages__content--description mb-0">${item.description}</p>
      </div>
    </div>
  `;
}
const initialAdvantages = () => {
  advantagesItems.forEach((item) => {
    wrapper.insertAdjacentHTML("beforeend", createAdvantageItem(item));
  });
};

export default initialAdvantages;
