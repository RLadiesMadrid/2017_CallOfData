$(document).ready(function () {
  init();

  function init() {
    $('.close-container').click(function () {
      $('.lateral-menu-container, .lateral-menu-container .menu').removeClass('menu--on');
    });

    $('.hamburger-container').click(function () {
      $('.lateral-menu-container, .lateral-menu-container .menu').addClass('menu--on');
    });

    $('.js-tab .tab-nav-item').click(function (event) {
      event.preventDefault();
      const $id = $(this).attr('href')
      $('.js-tab .tab-nav-item--on').removeClass('tab-nav-item--on');
      $('.js-tab .tab-content--on').removeClass('tab-content--on');

      $(this).addClass('tab-nav-item--on');
      $('.js-tab ' + $id).addClass('tab-content--on');
    });

    $('.js-form-newsletter').submit(function (event) {
      event.preventDefault();
      const $email = $(this).find('input').val();
      const settings = {
        url: 'https://us14.api.mailchimp.com/2.0/lists/subscribe.json',
        method: 'GET',
        success: function (data) { $('.js-newsletter-form-message').text('Te has incrito correctamente! Enhorabuena') },
        error: function (data) { $('.js-newsletter-form-message').text('Algo ha debido ir mal! Inténtelo más tarde') },
        dataType: "jsonp",
        jsonp: false,
        jsonpCallback: "myJsonMethod",
        data: {
          apikey: '4a74317392c2c4e1b85b051a89f7ce9d-us14',
          id: '419bdbc491',
          send_welcome: false,
          email: {
            email: $email
          }
        }
      }

      $.ajax(settings);
    });
  }
});

function callback() {
  console.log('funciona')
} 