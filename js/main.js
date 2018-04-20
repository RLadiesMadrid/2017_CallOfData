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

  }
});
