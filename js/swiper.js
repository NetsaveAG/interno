  const swiper = new Swiper('#swiper1', {
    // Опции
    direction: 'horizontal',
    loop: true,
  
    // Autoplay settings
    autoplay: {
      delay: 3000, // Задержка в миллисекундах (3 секунды)
      disableOnInteraction: false, // Не отключать автопрокрутку после взаимодействия
    },
  
    // Эффект для анимации
    effect: 'coverflow', // Используем эффект coverflow
  
    // Параметры coverflow эффекта
    coverflowEffect: {
      rotate: 50, // Угол поворота слайдов
      stretch: 0, // Растяжение слайдов
      depth: 100, // Глубина
      modifier: 1, // Усиление эффекта
      slideShadows: true, // Тени слайдов
    },
  
    // Плавность переходов
    speed: 1000, // Время перехода в миллисекундах (1 секунда)
  
    // Пагинация
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Кнопки навигации
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Скроллбар
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  