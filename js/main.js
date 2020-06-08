$(document).ready(function () {
  (function (jq) {
    jq.autoScroll = function (ops) {
        ops = ops || {};
        ops.styleClass = ops.styleClass || 'button-up';
        var t = jq('<div class="' + ops.styleClass + '"></div>'),
            d = jq(ops.target || document);
        jq(ops.container || 'body').append(t);

        t.css({
            opacity: 0,
            position: 'absolute',
            top: 0,
            right: 0
        }).on('click', function () {
            jq('html,body').animate({
                scrollTop: 0
            }, ops.scrollDuration || 1000);
        });

        d.scroll(function () {
            var sv = d.scrollTop();
            if (sv < 300) {
                t.clearQueue().fadeOut(ops.hideDuration || 200);
                return;
            }

            t.css('display', '').clearQueue().animate({
                top: sv,
                opacity: 0.8
            }, ops.showDuration || 500);
        });
    };
  })(jQuery);

  $.autoScroll({
      scrollDuration: 600,
      showDuration: 600,
      hideDuration: 300
  });
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
  const allForms = ['.form'];
    $.each(allForms, function (index, value){
        $(value).validate({
            errorClass: "invalid",
            errorElement: "div",
            rules: {
                userPhone: {
                    required: true,
                    minlength: 16,
                },
            },
            messages: {
                userPhone: {
                  required: "Телефон обязателен",
                  minlength: "Номер телефона введен не корректно",
                }   
            },
            submitHandler: function (form) {
              $.ajax({
                  type: "POST",
                  url: "send.php",
                  data: $(form).serialize(),
                  success: function (response) {
                      $(form)[0].reset();
                      const popUp = $('.modal-thanks');
                      popUp.addClass('modal-thanks--visible');
                      setTimeout(function () {
                          popUp.removeClass('modal-thanks--visible');
                      }, 5000);
                  }
              });
          }
        });
    });
  $('[type=tel]').mask('+7(000)000-00-00');

  $('#form1').change(function(){
    $('div.price').slideUp();
    $('#p_'+$(this).val()).slideDown();
  });
  
  const menu = document.querySelector('.popup-menu'),
  menuItem = document.querySelectorAll('.menu__item'),
  hamburger = document.querySelector('.hamburger'),
  linkBox = document.querySelector('.menu__nav-popup');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('popup-menu-active');
    linkBox.classList.toggle('menu__nav-popup_active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('popup-menu-active');
    });
  });

  (function($) {
    $(function() {
    
      $('input, select, span').styler();
    
    });
  })(jQuery);

















  $('.slct').click(function(){
    /* Заносим выпадающий список в переменную */
    var dropBlock = $(this).parent().find('.drop');
  
    /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
    if( dropBlock.is(':hidden') ) {
      dropBlock.slideDown();
  
      /* Выделяем ссылку открывающую select */
      $(this).addClass('active');
  
      /* Работаем с событием клика по элементам выпадающего списка */
      $('.drop').find('li').click(function(){
  
        /* Заносим в переменную HTML код элемента
        списка по которому кликнули */
        var selectResult = $(this).html();
  
        /* Находим наш скрытый инпут и передаем в него
        значение из переменной selectResult */
        $(this).parent().parent().find('input').val(selectResult);
  
        /* Передаем значение переменной selectResult в ссылку которая
        открывает наш выпадающий список и удаляем активность */
        $(this).parent().parent().find('.slct').removeClass('active').html(selectResult);
  
        /* Скрываем выпадающий блок */
        dropBlock.slideUp();
      });
  
    /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
    } else {
      $(this).removeClass('active');
      dropBlock.slideUp();
    }
  
    /* Предотвращаем обычное поведение ссылки при клике */
    return false;
  });
});