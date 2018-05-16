import $ from 'jquery';
import esES from '../assets/lang/es-ES';
import enGB from '../assets/lang/en-GB';

const langs = {
  es: esES,
  en: enGB
};

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default {
  init() {
    const langSelected = getParameterByName('lang') || 'es';
    const lang = langs[langSelected] || langs.es;

    try {
      for (let item in lang) {
        $('[data-lang="' + item + '"]').html(lang[item]);
        $('[data-lang-placeholder="' + item + '"]').attr('placeholder', lang[item]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      $('.oh').removeClass('oh');
    }
  },

  get() {
    const langs = {
      es: esES,
      en: enGB
    };
    const langSelected = getParameterByName('lang') || 'es';

    return langs[langSelected] || langs.es;
  },

  getSelected() {
    return getParameterByName('lang') || 'es';
  }
}