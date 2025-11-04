// Конфигурация базовых настроек Intersection-observer
const OBSERVER_OPTIONS = {
  rootMargin: "0px", // Сдвиг области просмотра
  threshold: 0.3, // Процент пересечения
};

// Обработчик пересечения элементов
const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.replace("invisible", "visible");
      observer.unobserve(entry.target);
    }
  });
};

export const initIntersectionObserver = (selectors) => {
  const imageObserver = new IntersectionObserver(
    handleIntersection,
    OBSERVER_OPTIONS
  );

  selectors.forEach((item) => imageObserver.observe(item));
};
