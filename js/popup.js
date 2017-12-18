/**
 * Created by Stefan on 18/12/2017.
 *
 * close popup-price block after click on background (.popup-price)
 */
(function ($) {
  $(document).ready(function () {

    $('.popup-price').on('click', function(e) {
      if (e.target !== this)
        return;

      window.location.hash = 'section-price';
      // console.log('click on parent');
    });

  });
})(jQuery);    