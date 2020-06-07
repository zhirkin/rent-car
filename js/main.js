$(document).ready(function () {
  let player1;
  $('.video__play1').on('click',function onYouTubeIframeAPIReady() {
    player = new YT.Player('player1', {
      height: '100%',
      width: '100%',
      videoId: 'BkGFhBypWrc',
      events: {
        'onReady': onPlayerReady
      }
    });
    function onPlayerReady (event) {
      event.target.playVideo();
    }
  })
  let player2;
  $('.video__play2').on('click',function onYouTubeIframeAPIReady() {
    player = new YT.Player('player2', {
      height: '100%',
      width: '100%',
      videoId: 'xjrTEIG-hsg',
      events: {
        'onReady': onPlayerReady
      }
    });
    function onPlayerReady (event) {
      event.target.playVideo();
    }
  })
  let player3;
  $('.video__play3').on('click',function onYouTubeIframeAPIReady() {
    player = new YT.Player('player3', {
      height: '100%',
      width: '100%',
      videoId: '35uUBsRS2Kw',
      events: {
        'onReady': onPlayerReady
      }
    });
    function onPlayerReady (event) {
      event.target.playVideo();
    }
  })
  let player4;
  $('.video__play4').on('click',function onYouTubeIframeAPIReady() {
    player = new YT.Player('player4', {
      height: '100%',
      width: '100%',
      videoId: 'zmOBHYgAebE',
      events: {
        'onReady': onPlayerReady
      }
    });
    function onPlayerReady (event) {
      event.target.playVideo();
    }
  })
  const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
    breakpoints: {
      800: {
        slidesPerView: 2,
        spaceBetween: 90,
      }

    }
  });
  const mySwiper1 = new Swiper('.swiper-container1', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination1',
      type: 'fraction',
      formatFractionCurrent: function(number) {
        if (number < 10) {
        number = '0' + number;
        }
        return number;
      },
      formatFractionTotal: function(number) {
        if (number < 10) {
        number = '0' + number;
        }
        return number;
      },
    },
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
      },
  });
  const mySwiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination2',
      type: 'fraction',
      currentClass: 'swiper-pagination-current2',
      totalClass: 'swiper-pagination-total2',
      formatFractionCurrent: function(number) {
        if (number < 10) {
        number = '0' + number;
        }
        return number;
      },
      formatFractionTotal: function(number) {
        if (number < 10) {
        number = '0' + number;
        }
        return number;
      },
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
      },
  });
  $('.form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
        // Строчное правило
        userPhone: {
          required: true,
          minlength: 16,
      },
    }, // сообщения
    messages: {
      userPhone: {
        required: "Телефон обязателен",
        minlength: "Укажите верный номер телефона",
      },
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
            $(form)[0].reset();
        }
      });
    }
  });
  $('[type=tel]').mask('+7(000)000-00-00');
  $('#form1').change(function(){
    $('div.price').slideUp();
    $('#p_'+$(this).val()).slideDown();
  });
});