function initFormSubmit() {
  const form = document.querySelector(".footer__form");
  const emailInput = form.querySelector("input[type='email']");

  // Валидация поля
  const validateEmail = (email) =>
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);

  // Очистка ошибки
  const clearError = () => {
    emailInput.classList.remove("is-invalid");
    emailInput.setCustomValidity("");
  };

  // Показать ошибку
  const showError = () => {
    emailInput.classList.add("is-invalid");
    emailInput.setCustomValidity("Введите корректный email");
    emailInput.reportValidity();
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
      showError();
      return;
    }

    clearError();
    emailInput.value = "";

    setTimeout(() => {
      alert("Спасибо за подписку!");
    }, 700);
  });

  emailInput.addEventListener("input", clearError);
}

export default initFormSubmit;
