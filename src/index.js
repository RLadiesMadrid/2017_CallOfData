import $ from 'jquery';
import lang from './lang';
import menu from './menu';
import tabs from './tabs';
import schedule from './schedule';
import speakers from './speakers';

$(document).ready(function () {
  lang.init();
  menu.init();
  tabs.init();
  schedule.init();
  speakers.init();
});
