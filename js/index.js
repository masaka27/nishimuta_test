/* トップ
------------------------------------*/
if ($('body#top').size()) {
  /* 
	------------------------------------*/

  var target = $('<div class="js-slide"></div>');
  $('body').append(target);

  target.ready(function () {
    $('.title-scroll img:nth-child(1)').velocity(
      { opacity: 1.0, top: 0 },
      { duration: 600, delay: 100, easing: 'easeOutExpo' }
    );
    $('.title-scroll img:nth-child(2)').velocity(
      { opacity: 1.0, top: 0 },
      { duration: 600, delay: 200, easing: 'easeOutExpo' }
    );
    $('.title-scroll img:nth-child(3)').velocity(
      { opacity: 1.0, top: 0 },
      { duration: 600, delay: 300, easing: 'easeOutExpo' }
    );
    $('.title-scroll img:nth-child(4)').velocity(
      { opacity: 1.0, top: 0 },
      { duration: 600, delay: 400, easing: 'easeOutExpo' }
    );
    $('#js-slide1')
      .delay(800)
      .each(function (i) {
        $(this)
          .delay(60 * i)
          .velocity(
            { top: 0, opacity: 1.0 },
            {
              duration: 1200,
              easing: 'easeInOutQuart',
              complete: function (elements) {},
            }
          );
      });

    $('#js-slide2')
      .delay(800)
      .each(function (i) {
        $(this)
          .delay(60 * i)
          .velocity(
            { bottom: 0, opacity: 1.0 },
            {
              duration: 1200,
              easing: 'easeInOutQuart',
              complete: function (elements) {},
            }
          );
      });

    $('#js-slide1').simplyScroll({
      className: 'vert',
      horizontal: false,
      frameRate: 60,
      pauseOnHover: false,
      speed: 1,
    });
    $('#js-slide2').simplyScroll({
      className: 'vert',
      horizontal: false,
      direction: 'backwards',
      frameRate: 60,
      pauseOnHover: false,
      speed: 1,
    });
  });
}
