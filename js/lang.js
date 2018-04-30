const langs = {
  es: 'es-ES',
  en: 'en-GB'
};

const lang = langs[getParameterByName('lang')] || 'es-ES';

$(document).ready(function () {
  $.getJSON('assets/lang/' + lang + '.json', function (json) {
    for (item in json) {
      $('[data-lang="' + item + '"]').html(json[item]);
      $('[data-lang-placeholder="' + item + '"').attr('placeholder', json[item]);
    }
  });
});

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}