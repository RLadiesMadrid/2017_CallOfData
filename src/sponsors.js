import $ from 'jquery';
import sponsors from './models/sponsors';

export default {
  init() {
    $('.js-sponsors').html(sponsors.reduce(getSponsorItem, ''));

    function getSponsorItem(acc, sponsor, index) {
      acc += `<div class="sponsors-type sponsors-type--${sponsor.type}">
        <h3>${sponsor.title}</h3>
        <div class="sponsors-type-container">
          ${sponsor.enterprises
            .map(enterprise => `<a href="${enterprise.url}" target="_blank" title="${enterprise.name}"><img src="${enterprise.img}" alt="${enterprise.name}"></a>`).join('')}
        </div>
      </div>`;
      return acc;
    }
  }
}