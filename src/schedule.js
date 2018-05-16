import $ from 'jquery';
import schedules from './models/schedules';

export default {
  init() {
    $('.js-schedule-day-1').html(schedules.day1.reduce(getScheduleItem, ''));
    $('.js-schedule-day-2').html(schedules.day2.reduce(getScheduleItem, ''));

    function getScheduleItem(acc, sche, index) {
      acc += `<li>
        <img class="${(sche.img == 'assets/img/tba.svg') ? 'tba' : ''}" src="${sche.img}" alt="${sche.speaker}">
        <div>
          <b>${sche.time}h</b>
          <h4>${sche.talk}</h4>
          <span>${sche.speaker}</span>
        </div>
      </li>`;
      return acc;
    }
  }
}