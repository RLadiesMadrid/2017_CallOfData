import $ from 'jquery';
import jury from './models/jury';

export default {
  init() {
    $('.js-jury-members').html(jury.reduce(getJuryItem, ''));

    function getJuryItem(acc, juryItem, index) {
      acc += `<article class="jury-member">
      <div class="jury-member-header">
        <img src="${juryItem.img}" alt="${juryItem.name}">
        <ul>
          ${juryItem.networks
            .map(network => `<li><a href="${network.url}" target="_blank"><i class="fab fa-${network.type}"></i></a></li>`).join('')}
        </ul>
      </div>
      <div class="jury-member-body">
        <h3>${juryItem.name}</h3>
        <p>${juryItem.description}</p>
      </div>
    </article>`;
      return acc;
    }
  }
}