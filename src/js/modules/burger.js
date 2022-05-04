$(document).ready(function () {
  $(".sc-header__burger").click(function (event) {
    $(".sc-header,.sc-header__logo,.sc-header__menu,.sc-header__link,.sc-header__burger").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $('.sc-header__link').click(function (event) {
    $(".sc-header,.sc-header__logo,.sc-header__menu,.sc-header__link,.sc-header__burger").removeClass('active');
    $('body').removeClass('lock');
  });
});
