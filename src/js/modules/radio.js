$(document).ready(function () {
  $.each($('.radio-button, .radio-all'), function (index, val) {
    if ($(this).find('input').prop('checked') == true) {
      $(this).addClass('active');
    }
  });
  $(document).on('click', '.radio-button, .radio-all', function (event) {
    $(this).parents('.radio').find('.radio-button , .radio-all').removeClass('active');
    $(this).parents('.radio').find('.radio-button input, .radio-all input').prop('checked', false);
    $(this).toggleClass('active');
    $(this).find('input').prop('checked', true);
    return false;
  });
});
