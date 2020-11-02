$(document).ready(function () {
   $('.steps').each(function () {
      var stepItem = $(this).find('.steps__item');
      var stepItemLength = stepItem.length;
      var stepItemActive = $(this).find('.steps__item--active');
      var stepItemActiveLength = stepItemActive.length;
      $(stepItemActive).eq(stepItemActiveLength - 1).addClass('steps__item--active--last');
      var itemSpace = (100 / (stepItemLength - 1)) * (stepItemActiveLength - 1);
      console.log($(stepItemActive).eq(stepItemActiveLength));
      $(this).find('.steps__progress').css('width', itemSpace + '%')
   });
   $('.table-wraper-size').scroll(function (e) {
      var _this = this;
      if (_this.scrollWidth === (_this.scrollLeft + _this.clientWidth)) {
         $(_this).parent('.table-wraper-inner').addClass('right-none');
      }
      else {
         $(_this).parent('.table-wraper-inner').removeClass('right-none');
      };

      if (_this.scrollLeft === 0) {
         $(_this).parent('.table-wraper-inner').addClass('left-none');
      }
      else {
         $(_this).parent('.table-wraper-inner').removeClass('left-none');
      };
   }).scroll();
   if (deviceIsMobile == false) {
      $('body').addClass('no-touch')
   };
   if (deviceIsMobile == true) {
      $('.bg').css('min-height', $(window).height() + 100)
   };
   if ($(window).width() < 769) {
      var swiperFav = new Swiper('.swiper-fav', {
         slidesPerView: 'auto',
         navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
         },
      });
   };
   var swiperFav = new Swiper('.swiper-fav-sticky', {
      slidesPerView: 'auto',
      watchOverflow: true,
      navigation: {
         nextEl: '.swiper-next',
         prevEl: '.swiper-prev',
      },
   });
   var swiperLogin = new Swiper('.swiper-login', {
      spaceBetween: 30,
      autoplay: {
         delay: 7000,
      },
      navigation: {
         nextEl: '.swiper-next',
         prevEl: '.swiper-prev',
      },
      pagination: {
         el: '.swiper-pagination',
         type: 'bullets',
      },
   });
   var swiperLogin = new Swiper('.swiper-km-big', {
      spaceBetween: 30,
      autoplay: {
         delay: 5000,
      },
      navigation: {
         nextEl: '.swiper-next',
         prevEl: '.swiper-prev',
      },
      pagination: {
         el: '.swiper-pagination',
         type: 'bullets',
         clickable: true
      },
   });

   var swiper3it = new Swiper('.swiper-3-it', {
      spaceBetween: 10,
      slidesPerView: 3,
      navigation: {
         nextEl: '.swiper-3-it ~ .swiper-next',
         prevEl: '.swiper-3-it ~ .swiper-prev',
      },
      breakpoints: {
         // when window width is >= 480px
         640: {
            slidesPerView: 'auto'
         }
      }
   });

   if ($('body').has('.main .fav-inner').length > 0) {
      var hieghtThreshold;
      function stickyHeightCal() {
         if ($(".main .fav-inner").length) {
            if ($(window).width() > 768) {
               hieghtThreshold = $(".main .fav-inner").offset().top + $(".main .fav-inner").height() - 120;
            }
            else {
               hieghtThreshold = $(".main .fav-inner").offset().top;
            }
         }
      };
      $(window).resize(function () {
         stickyHeightCal()
      });
      $(function () {
         stickyHeightCal();
         $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= hieghtThreshold) {
               $('.fav--sticky').addClass('sticky-fav');
            } else {
               $('.fav--sticky').removeClass('sticky-fav');
            }
         });
      });
      $(function () {
         $(window).scroll(function () {
            if ($(window).width() >= 1200) {
               var scroll = $(window).scrollTop();
               if (scroll >= 16) {
                  $('.menu').addClass('menu--sticky');
                  $('.search').addClass('search--sticky');
                  $('.fav--sticky').addClass('fav--sticky-top');
               }
               else {
                  $('.menu').removeClass('menu--sticky');
                  $('.fav--sticky').removeClass('fav--sticky-top');
               }
            }
         });
      });
   }
   else {
      $('.fav--sticky').addClass('sticky-fav');
   };
   if (iOS()) {
      $('#search').focus(function () {
         window.scrollTo({ top: 0, behavior: 'smooth' });
      })
   }
   //sidebar-cal
   // if ($('.sidebar-mini__item').hasClass('active')) {
   //    sidebarActiveFirstPos = $('.sidebar-mini__item.active').position().top;
   //    $('.sidebar-mini-active').addClass('show');
   // }
   // else {
   //    sidebarActiveFirstPos = ''
   // }
   // $('[name=sidebar-m-trigger]').on('change', function () {
   //    sidebarId = $(this).attr('id');
   //    if ($(this).is(':checked')) {
   //       $('[for=' + sidebarId + ']').addClass('sidebar-item--acitve');
   //       $('.sidebar-left').addClass('sidebar-left--open')
   //       $('[name=sidebar-m-trigger]:not(#' + sidebarId + ')').prop("checked", false);
   //       $('.sidebar-right-expand-overlay').addClass('active');
   //    }
   //    else {
   //       $('label.sidebar-mini__item').removeClass('sidebar-item--acitve');
   //       $('.sidebar-left').removeClass('sidebar-left--open');
   //       $('.sidebar-right-expand-overlay').removeClass('active');
   //    }
   // });
   // if ($(window).width() >= 1200) {
   //    $('label.sidebar-mini__item').on('click', function () {
   //       sidebarActivePos = $(this).position().top;
   //       $('.sidebar-mini-active').css('top', sidebarActivePos).addClass('show');
   //    });
   // }
   // else {
   //    $('label.sidebar-mini__item:not(.sidebar-mini--home)').on('click', function () {
   //       sidebarActivePos = $(this).position().top;
   //       $('.sidebar-mini-active').css('top', sidebarActivePos).addClass('show');
   //    });
   // };
   // $('.breadcrumbs > label').on('click', function () {
   //    var idFor = $(this).attr('for');
   //    console.log(idFor);
   //    $('.sidebar-mini__item[for=' + idFor + ']').trigger('click')
   // });
   // $('.close-sidebar-left').on('click', function () {
   //    $('.sidebar-left').removeClass('sidebar-left--open');
   //    $(this).removeClass('active');
   //    $('[name=sidebar-m-trigger]').prop("checked", false);
   //    if ($('.sidebar-mini__item').hasClass('active')) {
   //       $('.sidebar-mini-active').css('top', sidebarActiveFirstPos)
   //    }
   //    else {
   //       $('.sidebar-mini-active').removeClass('show');
   //    }
   // });
   // $('.sidebar-mini--home').on('click', function () {
   //    $('.sidebar-left').removeClass('sidebar-left--open');
   // });
   if ($(window).width() < 1200) {
      $('#sidebar1').prop("checked", true);
   };
   //end sidebar-cal
   //radio Show
   $('input[type=radio][showFor]').on('change', function () {
      $('input[type=radio][showFor]').each(function () {
         name = $(this).attr('name');
         idShow = $($(this).attr('showFor'));
         idShow.addClass('hidden');
         if ($(this).is(':checked')) {
            idShow.removeClass('hidden')
         }
         else {
            idShow.addClass('hidden');
         }
      })
   });
   $('input[type=radio][showFor]').trigger('change')
   //end radio Show
   //template select-2-confirm
   function templateConfirm(confirm) {
      if (!confirm.id) { return confirm.text; }
      var $confirm = $('<div class="select-txt-main">' + confirm.text + '</div><div class="select-txt-sub h6">' + confirm.element.attributes.datainfo.value + '</div>');
      return $confirm;
   };
   function templateImg(img) {
      if (!img.id) { return img.text; }
      var $img = $('<div class="select-tpl-img-wrap"><div class="select-tpl-img" style="background-image: url(images/web/img/' + img.element.attributes.dataimg.value + ')"></div><div class="sselect-tpl-txt">' + img.text + '</div></div>');
      return $img;
   };
   $('.select-2-template-cf').select2({
      templateResult: templateConfirm,
      templateSelection: templateConfirm,
   });

   $('.select-2-template-img').select2({
      templateResult: templateImg,
      templateSelection: templateImg
   });
   // light-pick from to
   //modal-countdown
   var countdown
   $('.modal--countdown').on('shown.bs.modal', function () {
      $('.modal-countdown-txt').html('3');
      countdown = setInterval(function () {
         countdownNum = $('.modal-countdown-txt').html();
         $('.modal-countdown-txt').html(countdownNum - 1);
         if (countdownNum == 1) {
            $('.modal--countdown').modal('hide')
         }
         if (countdownNum <= 0) {
            clearInterval(countdown);
            $('.modal-countdown-txt').html('3');
         }
      }, 1000);
   }).on('hidden.bs.modal', function () {
      $('.modal-countdown-txt').html('3');
      clearInterval(countdown);
   });
   //popover
   $('[data-toggle="popover"]').popover({
      trigger: 'focus',
      html: true
   })
   // modal
   $('.list-radio-modal-close').find('input').on('click', function () {
      $(this).closest('.modal').modal('hide');
   });
   // cleave
   $('.cleave-custom-date').toArray().forEach(function (field) {
      new Cleave(field, {
         delimiter: '/',
         blocks: [2, 2],
         uppercase: true
      });
   })
});


// đếm ngược time nhận mã OTP
function countdown_otp() {
   var timeleft = 10;
   var downloadTimer = setInterval(function () {
      document.getElementById("countdown").innerHTML = "Mã OTP sẽ hết hiệu lực sau " + timeleft + " giây";
      timeleft -= 1;
      if (timeleft <= 0) {
         clearInterval(downloadTimer);
         document.getElementById("countdown").innerHTML = '<a href="javascript:countdown_otp()" class="reopt hover-line-white"><span class="icon"></span>Nhận lại mã xác nhận</a>'
      }
   }, 1000);
}

