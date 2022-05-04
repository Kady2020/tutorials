// import Swiper, {
//   Navigation, Pagination, Scrollbar,
//   Keyboard, Mousewheel, Parallax
// } from 'swiper';

// let swiperCustom = new Swiper('.swiper-custom', {
//   modules: [Navigation, Pagination, Scrollbar,
//     Keyboard, Mousewheel, Parallax],

//   wrapperClass: 'swiper-custom__body',
//   slideClass: 'swiper-custom__screen',

//   direction: 'vertical',

//   slidesPerView: '1',

//   parallax: true,

//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//     pageUpDown: true,
//   },

//   mousewheel: {
//     sensitivity: 1,
//   },

//   watchOverflow: true,

//   spped: 1000,

//   observer: true,

//   observeParents: true,

//   observeSlideChildren: true,

//   pagination: {
//     el: '.swiper-custom__pagination',
//     type: 'bullets',
//     clickable: true,
//     bulletClass: 'swiper-custom__bullet',
//     bulletActiveClass: 'swiper-custom__bullet_active',
//   },

//   scrollbar: {
//     el: '.swiper-custom__scroll',
//     draggable: true,
//     dragClass: 'swiper-custom__drag-scroll',
//   },
// });

// let menuLinks = document.querySelectorAll('.sc-header__link');

// function menuSlider(params) {
//   if (menuLinks.length > 0) {
//     menuLinks[swiperCustom.realIndex].classList.add('_active');
//     for (let index = 0; index < menuLinks.length; index++) {
//       const menuLink = menuLinks[index];
//       menuLink.addEventListener('click', function (e) {
//         menuSliderRemove();
//         swiperCustom.slideTo(index, 1000);
//         menuLink.classList.add('_active');
//         e.preventDefault();
//       });
//     }
//   }
// }

// function menuSliderRemove() {
//   let menuLinkActive = document.querySelector('.sc-header__link._active');
//   if (menuLinkActive) {
//     menuLinkActive.classList.remove('_active');
//   }
// }
