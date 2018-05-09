const langs = {
  es: esES,
  en: enGB
};
const langSelected = getParameterByName('lang') || 'es'
const lang = langs[langSelected] || langs.es;

$(document).ready(function () {
  try {
    const json = lang;
    for (item in json) {
      $('[data-lang="' + item + '"]').html(json[item]);
      $('[data-lang-placeholder="' + item + '"]').attr('placeholder', json[item]);
    }
  } catch (error) {
    console.error(error);
  } finally {
    $('.oh').removeClass('oh');
  }
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