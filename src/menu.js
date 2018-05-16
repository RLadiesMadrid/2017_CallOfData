import $ from 'jquery';
import lang from './lang';

export default {
  init() {
    $('.js-close-container').click(function () {
      $('.lateral-menu-container, .lateral-menu-container .menu').removeClass('menu--on');
    });

    $('.hamburger-container').click(function () {
      $('.lateral-menu-container, .lateral-menu-container .menu').addClass('menu--on');
    });

    
    $('[data-id=change-lang]').each(function (index) {
      const langSelected = lang.getSelected();
      const elem = $(this);

      if (langSelected === 'en') {
        const text = elem.hasClass('js-change-lang') ? 'Spanish' : 'ES >';
        elem.attr('href', '/?lang=es');
        elem.text(text);
      } else {
        const text = elem.hasClass('js-change-lang') ? 'English' : 'EN >';
        elem.attr('href', '/?lang=en');
        elem.text(text);
      }
    });
  }
}
