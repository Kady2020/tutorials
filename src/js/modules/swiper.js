import Swiper, {
  A11y, Autoplay, Controller, EffectCards, EffectCoverflow, EffectCreative,
  EffectCube, EffectFade, EffectFlip, FreeMode, Grid, HashNavigation, History,
  Keyboard, Lazy, Manipulation, Mousewheel, Navigation, Pagination, Parallax,
  Scrollbar, Thumbs, Virtual, Zoom
} from 'swiper';


let myImageSlider = new Swiper('.image-slider', {
  modules: [Navigation, Pagination, Scrollbar, Keyboard, HashNavigation,
    Mousewheel, Autoplay, EffectFade, EffectFlip, EffectCube, EffectCoverflow, Lazy, Zoom, Thumbs],

  /* ============================== НАВИГАЦИЯ ============================== */
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  /* ============================== НАВИГАЦИЯ ============================== */

  /* ============================== ПАГИНАЦИЯ ============================== */
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
  /* ============================== ПАГИНАЦИЯ ============================== */

  /* ============================== СКРОЛЛБАР ============================== */
  scrollbar: {
    el: '.swiper-scrollbar',

    // Возможность перетаскивать скролл
    draggable: true,
  },
  /* ============================== СКРОЛЛБАР ============================== */

  /* ============================== УПРАВЛЕНИЕ КЛАВИАТУРОЙ ============================== */
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    UpDown: true,
  },
  /* ============================== УПРАВЛЕНИЕ КЛАВИАТУРОЙ ============================== */

  /* ============================== НАВИГАЦИЯ ПО ХЕШУ ============================== */
  hashNavigation: {
    watchState: true,
  },
  /* ============================== НАВИГАЦИЯ ПО ХЕШУ ============================== */

  /* ============================== УПРАВЛЕНИЕ КОЛЕСОМ МЫШИ ============================== */
  mousewheel: {
    sensitivity: 1,
  },
  /* ============================== УПРАВЛЕНИЕ КОЛЕСОМ МЫШИ ============================== */

  /* ============================== АВТОПРОКРУТКА ============================== */
  // autoplay: {
  //   delay: 2500,
  //   stopOnLastSlide: false,
  //   disableOnInteraction: true,
  // },
  // speed: 1000,
  /* ============================== АВТОПРОКРУТКА ============================== */

  /* ============================== ЭФФЕКТЫ ============================== */
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
  /* ============================== ЭФФЕКТЫ ============================== */

  /* ============================== ЛЕНИВАЯ ПОДГРУЗКА ============================== */
  // Отключить предзагрузку картинок
  preloadImages: false,

  // Слежка за видимыми слайдами
  watchSlidesProgress: true,

  // Добавление класса видимым слайдам
  watchSlidesVisibility: true,

  // Lazy Loading (подгрузка картинок)
  lazy: {
    // Подгружать на старте переключения слайда
    loadOnTransitionStart: false,
    // Подгрузить предыдущую и следующую картинки
    loadPrevNext: false,
  },
  /* ============================== ЛЕНИВАЯ ПОДГРУЗКА ============================== */

  /* ============================== ЗУМ КАРТИНКИ ============================== */
  // zoom: {
  //   // Макимальное увеличение
  //   maxRatio: 3,
  //   // Минимальное увеличение
  //   minRatio: 1,
  // },
  /* ============================== ЗУМ КАРТИНКИ ============================== */

  /* ============================== МИНИАТЮРЫ (ПРЕВЬЮ) ============================== */
  // thumbs: {
  //   // Свайпер с мениатюрами и его настройки
  //   swiper: {
  //     el: '.image-mini-slider',
  //     slidesPerView: 5,
  //   }
  // },
  /* ============================== МИНИАТЮРЫ (ПРЕВЬЮ) ============================== */

  // Горизонтальный слайдер
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

  // Количество слайдов для показа
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
  freeMode: false,

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

  // Передача управления (только в одну сторону)
  // controller: {
  //   control: myTextSlider
  // },

  // Обновить свайпер
  // при изменении элементов слайдера
  observer: true,

  // Обновить свайпер
  // при изменении родительских
  // элементов слайдера
  observeParents: true,

  // Обновить свайпер
  // при изменении дочерних
  // элементов слайда
  observeSlideChildren: true,

  // Включаем параллакс
  // parallax: true,
});

/* ============================== СЛАЙДЕР В СЛАЙДЕРЕ ============================== */
new Swiper('.image-in-slider', {
  modules: [Pagination, Lazy],

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
  },

  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },

  preloadImages: false,

  watchSlidesProgress: true,

  watchSlidesVisibility: true,

  slidesPerView: 1,

  watchOverflow: true,

  simulateTouch: true,

  // Корректная работа слайдера в слайдере (перетаскивание)
  nested: true,
});
/* ============================== СЛАЙДЕР В СЛАЙДЕРЕ ============================== */

/* ============================== ВТОРОЙ ПОДКОНТРОЛЬНЫЙ СЛАЙДЕР ============================== */
let myTextSlider = new Swiper('.image-slider', {
  // Количество слайдов для показа должно быть одинаковым у обоих слайдеров
  slidesPerView: 1,
});

// myImageSlider.controller.control = myTextSlider;
// myTextSlider.controller.control = myImageSlider;
/* ============================== ВТОРОЙ ПОДКОНТРОЛЬНЫЙ СЛАЙДЕР ============================== */

/* ============================== CUSTOM SWIPER ============================== */
let swiperCustomWrapper = document.querySelector('.swiper-custom-wrapper');

let swiperCustom = new Swiper('.swiper-custom', {
  modules: [Navigation, Pagination, Scrollbar,
    Keyboard, Mousewheel, Parallax],

  wrapperClass: 'swiper-custom__body',
  slideClass: 'swiper-custom__screen',

  direction: 'vertical',

  slidesPerView: '1',

  parallax: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  watchOverflow: true,

  spped: 1000,

  observer: true,

  observeParents: true,

  observeSlideChildren: true,

  pagination: {
    el: '.swiper-custom__pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'swiper-custom__bullet',
    bulletActiveClass: 'swiper-custom__bullet_active',
  },

  scrollbar: {
    el: '.swiper-custom__scroll',
    draggable: true,
    dragClass: 'swiper-custom__drag-scroll',
  },

  init: false,

  on: {
    init: function () {
      menuSlider();
      setScrollType();
      swiperCustomWrapper.classList.add('_loaded');
    },

    slideChange: function () {
      menuSliderRemove();
      menuLinks[swiperCustom.realIndex].classList.add('_active');
    },

    resize: function () {
      setScrollType();
    }
  },
});

let menuLinks = document.querySelectorAll('.sc-header__link');

function menuSlider(params) {
  if (menuLinks.length > 0) {
    menuLinks[swiperCustom.realIndex].classList.add('_active');
    for (let index = 0; index < menuLinks.length; index++) {
      const menuLink = menuLinks[index];
      menuLink.addEventListener('click', function (e) {
        menuSliderRemove();
        swiperCustom.slideTo(index, 1000);
        menuLink.classList.add('_active');
        e.preventDefault();
      });
    }
  }
}

function menuSliderRemove() {
  let menuLinkActive = document.querySelector('.sc-header__link._active');
  if (menuLinkActive) {
    menuLinkActive.classList.remove('_active');
  }
}

function setScrollType() {
  if (swiperCustomWrapper.classList.contains('_free')) {
    swiperCustomWrapper.classList.remove('_free');
    swiperCustom.params.freeMode = false;
  }
  for (let index = 0; index < swiperCustom.slides.length; index++) {
    const pageSlide = swiperCustom.slides[index];
    const pageSlideContent = pageSlide.querySelector('.screen__content');
    if (pageSlideContent) {
      const pageSlideContentHeight = pageSlideContent.offsetHeight;
      if (pageSlideContentHeight > window.innerHeight) {
        swiperCustomWrapper.classList.add('_free');
        swiperCustom.params.freeMode = true;
        break;
      }
    }
  }
}

swiperCustom.init();
/* ============================== CUSTOM SWIPER ============================== */
