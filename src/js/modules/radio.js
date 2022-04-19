$(document).ready(function () {
  $.each($('.radio-button'), function (index, val) {
    if ($(this).find('input').prop('checked') == true) {
      $(this).addClass('active');
    }
  });
  $(document).on('click', '.radio-button', function (event) {
    $(this).parents('.radio').find('.radio-button').removeClass('active');
    $(this).parents('.radio').find('.radio-button input').prop('checked', false);
    $(this).toggleClass('active');
    $(this).find('input').prop('checked', true);
    return false;
  });
});
