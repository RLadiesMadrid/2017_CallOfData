$(document).ready(function () {
  init();

  function init() {
    $('.js-close-container').click(function () {
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

    $('[data-id=change-lang]').each(function (index) {
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
    })

    initCarrouselSpeakers();
  }

  function initCarrouselSpeakers() {
    var resources = lang;
    var speakers = [
      { name: 'Carmen Reina', img: 'assets/img/ponente/carmen.jpg', talk: resources['talk-carmen'], bio: resources['bio-carmen'] },
      { name: 'Hannah Frick', img: 'assets/img/ponente/hannah.jpg', talk: resources['talk-hannah'], bio: resources['bio-hannah'] },
      { name: 'Mariluz Congosto', img: 'assets/img/ponente/mariluz.jpg', talk: resources['talk-mariluz'], bio: resources['bio-mariluz'] },
      { name: 'Miriam Pena', img: 'assets/img/ponente/miriam.jpg', talk: resources['talk-miriam'], bio: resources['bio-miriam'] },
      { name: 'Celeste Durán', img: 'assets/img/ponente/celeste.jpeg', talk: resources['talk-celeste'], bio: resources['bio-celeste'] }
    ];
    var speakerOn = Math.floor((Math.random() * speakers.length));
    var html = speakers.reduce(function (acc, speaker, index) {
      var className = (index === speakerOn) ? 'speakers-carrousel--on' : '';
      acc += '<img src="' + speaker.img + '" alt="' + speaker.name + '" class="' + className +'" data-index="' + index + '">';
      return acc;
    }, '');
    $('div.speakers-carrousel').html(html);
    setSpeaker(speakers[speakerOn]);

    $('div.speakers-carrousel img').click(function () {
      $('div.speakers-carrousel img').removeClass('speakers-carrousel--on');
      $(this).addClass('speakers-carrousel--on');
      var speakerOn = $(this).data('index')
      setSpeaker(speakers[speakerOn])
    });
  }

  function setSpeaker(speaker) {
    $('.speakers-preview img').attr({ src: speaker.img, alt: speaker.name });
    $('.speakers-preview h3').text(speaker.name);
    $('.speakers-preview .title-talk').text(speaker.talk);
    $('.speakers-preview p').html(speaker.bio);
  }
});
