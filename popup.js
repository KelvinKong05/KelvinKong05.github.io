$(document).ready(function() {
    function showPopup() {
      $('.wrapper').fadeIn(500);
      $('.popup-box').removeClass('transform-out').addClass('transform-in');
    }
  
    function hidePopup() {
      $('.wrapper').fadeOut(500);
      $('.popup-box').removeClass('transform-in').addClass('transform-out');
    }
  
    showPopup();
  
    $('.popup-close').click(function(e) {
      hidePopup();
      e.preventDefault();
    });
  });