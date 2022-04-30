import Swiper, {
  Navigation, Pagination, Scrollbar, Keyboard, HashNavigation,
  Mousewheel, Autoplay, EffectFade, EffectFlip, EffectCube, EffectCoverflow,
  Lazy, Zoom, Thumbs
} from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Scrollbar, Keyboard, HashNavigation,
    Mousewheel, Autoplay, EffectFade, EffectFlip, EffectCube, EffectCoverflow, Lazy, Zoom, Thumbs],

  /* ============================== МОДУЛИ ============================== */
  // ========== СТРЕЛКИ ==========
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // ========== ПАГИНАЦИЯ ==========
  pagination: {
    el: '.swiper-pagination',


    //Буллеты
    // type: 'bullets',

    // Фракция
    type: 'fraction',

    // Прогрессбар
    // type: 'progressbar',

    // Кликабельные буллеты
    // clickable: true,

    // Динамические буллеты
    // dynamicBullets: true,

    // Кастомные буллеты
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },

    // Кастомная фракция
    renderFraction: function (currentClass, totalClass) {
      return 'Фото <span class="' + currentClass + '"></span>' +
        ' из ' +
        '<span class="' + totalClass + '"></span>';
    },
  },

  // ========== СКРОЛЛБАР ==========
  scrollbar: {
    el: '.swiper-scrollbar',

    // Возможность перетаскивать скролл
    draggable: true,
  },

  // ========== УПРАВЛЕНИЕ КЛАВИАТУРОЙ ==========
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  // ========== НАВИГАЦИЯ ПО ХЕШУ ==========
  hashNavigation: {
    watchState: true,
  },

  // ========== УПРАВЛЕНИЕ КОЛЕСОМ МЫШИ ==========
  mousewheel: {
    sensitivity: 1,
  },

  // ========== АВТОПРОКРУТКА ==========
  // autoplay: {
  //   delay: 2500,
  //   stopOnLastSlide: false,
  //   disableOnInteraction: true,
  // },
  // speed: 1000,

  // ========== ЭФФЕКТЫ ==========
  // effect: 'fade',
  // fadeEffect: {
  //   // Параллельная смена прозрачности
  //   crossFade: true,
  // },

  // effect: 'flip',
  // flipEffect: {
  //   // Тень
  //   slideShadows: true,
  //   // Показ только активного слайда
  //   limitRotation: true
  // },

  // effect: 'cube',
  // cubeEffect: {
  //   slideShadows: true,
  //   shadow: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.94
  // },

  // effect: 'coverflow',
  // coverflowEffect: {
  //   rotate: 20,
  //   stretch: 50,
  //   slideShadows: true,
  // },

  // ========== ЛЕНИВАЯ ПОДГРУЗКА ==========
  // Отключить предзагрузку картинок
  preloadImages: false,
  // Lazy Loading (подгрузка картинок)
  lazy: {
    // Подгружать на старте переключения слайда
    loadOnTransitionStart: false,
    // Подгрузить предыдущую и следующую картинки
    loadPrevNext: false,
  },
  // Слежка за видимыми слайдами
  watchSlidesProgress: true,
  // Добавление класса видимым слайдам
  watchSlidesVisibility: true,

  // ========== ЗУМ КАРТИНКИ ==========
  // zoom: {
  //   // Макимальное увеличение
  //   maxRatio: 3,
  //   // Минимальное увеличение
  //   minRatio: 1,
  // },
  // ========== МИНИАТЮРЫ (ПРЕВЬЮ) ==========
  // thumbs: {
  //   // Свайпер с мениатюрами и его настройки
  //   swiper: {
  //     el: '.image-mini-slider',
  //     slidesPerView: 5,
  //   }
  // },
  /* ============================== МОДУЛИ ============================== */

  /* ============================== ПАРАМЕТРЫ ============================== */
  // Горизонтальный слацдер
  direction: 'horizontal',

  // Вертикальный слайдер
  // direction: 'vertical',

  // Перетаскивание на ПК
  simulateTouch: true,

  // Чувствительность свайпа
  touchRatio: 1,

  // Угол срабатывания свайпа/перетаскивания
  touchAngle: 45,

  // Курсор перетаскивания
  grabCursor: false,

  // Переключение при клике на слайд
  slideToClickedSlide: false,

  // Автовысота
  autoHeight: false,

  // Количество слайдов
  slidesPerView: 1,

  // Отключение функционала если мало слайдов
  watchOverflow: true,

  // Отступ между слайдами
  // spaceBetween: 30,

  // Количество пролистываемых слайдов
  slidesPerGroup: 1,

  // Активный слайд по центру
  centeredSlides: false,

  // Стартовый слайд.
  initialSlide: 0,

  // Кол-во рядов
  slidesPerColumn: 1,

  // Бесконечная прокрутка
  // Стоит отключать scrollbar
  // Не будет работать с slidesPerColumn > 1
  // Если slidesPerGroup = auto, то нужно добавить loopedSlides > 0
  loop: false,

  // Кол-во дублирующих слайдов
  loopedSlides: 0,

  // Свободный режим
  freeMode: true,

  // Брейк поинты
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //   },
  //   992: {
  //     slidesPerView: 3,
  //   }
  // },
  /* ============================== ПАРАМЕТРЫ ============================== */
});
