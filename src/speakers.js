import $ from 'jquery';
import speakers from './models/speakers';

function setSpeaker(speaker) {
  $('.speakers-preview img').attr({ src: speaker.img, alt: speaker.name });
  $('.speakers-preview h3').text(speaker.name);
  $('.speakers-preview .title-talk').text(speaker.talk);
  $('.speakers-preview p').html(speaker.bio);

  const htmlSocial = speaker.socials.reduce(function (acc, social, index) {
    acc += '<li><a href="' + social.url + '" target="_blank"><i class="fab fa-' + social.type + '"></i></a></li>';
    return acc;
  }, '');
  $('.speakers-preview ul').html(htmlSocial);
}

export default {
  init() {
    var speakerOn = Math.floor((Math.random() * speakers.length));
    var html = speakers.reduce(function (acc, speaker, index) {
      var className = (index === speakerOn) ? 'speakers-carrousel--on' : '';
      acc += '<img src="' + speaker.img + '" alt="' + speaker.name + '" class="' + className + '" data-index="' + index + '">';
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
}