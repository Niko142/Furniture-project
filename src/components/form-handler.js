import { TIMEOUT_DELAY } from "../constants/delay";
import { validateEmail } from "../utils/validation";

// Очищаем стилей, связанных с ошибками
const clearError = (input) => {
  input.classList.remove("invalid");
  input.setCustomValidity("");
};

// Показывает ошибку валидации
const showError = (input) => {
  input.classList.add("invalid");
  input.setCustomValidity("Введите корректный email");
  input.reportValidity();
};

// Обработчик отправки формы
const handleSubmit = (form, emailInput) => (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (!validateEmail(email)) {
    showError(emailInput);
    return;
  }

  clearError(emailInput);

  setTimeout(() => {
    alert("Спасибо за подписку!");
    form.reset();
  }, TIMEOUT_DELAY);
};

// Инициализация обработчика отправки формы
export const initFormSubmit = () => {
  const form = document.querySelector(".footer__form");
  if (!form) return;

  const emailInput = form.querySelector(".footer__form--input");
  if (!emailInput) return;

  form.addEventListener("submit", handleSubmit(form, emailInput));
  emailInput.addEventListener("input", () => clearError(emailInput));
};
