import $ from 'jquery';
import lang from './lang';
import menu from './menu';
import tabs from './tabs';
import schedule from './schedule';
import speakers from './speakers';
import sponsors from './sponsors';
import jury from './jury';

$(document).ready(function () {
  lang.init();
  menu.init();
  tabs.init();
  schedule.init();
  speakers.init();
  sponsors.init();
  jury.init();
});
