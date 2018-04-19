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
        crossDomain: true,
        url: 'https://us14.api.mailchimp.com/3.0/lists/419bdbc491/members',
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": "",
          "Cache-Control": "no-cache"
        },
        data: { email_address: $email, status: 'subscribed' }
      }

      $.ajax(settings)
        .then(response => $('.js-newsletter-form-message').text('Te has incrito correctamente! Enhorabuena'))
        .catch(error => $('.js-newsletter-form-message').text('Algo no ha funcionado! Inténtalo luego más tarde'));
    });
  }
});
