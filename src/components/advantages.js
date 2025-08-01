import { advantagesItems } from "../data/data";

const wrapper = document.querySelector(".advantages-wrapper");

function createAdvantageItem(item) {
  return `
    <div class="advantages-item">
      <img 
        src="${item.imgSrc}" 
        class="advantages__img ${item.imgClass}" 
        alt="${item.title}">
      <div class="advantages__content">
        <h5 class="advantages__content--title">${item.title}</h5>
        <p class="advantages__content--description">${item.description}</p>
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
