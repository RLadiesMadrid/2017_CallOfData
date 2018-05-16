import lang from '../lang';

const resources = lang.get();

export default {
  day1: [
    { time: '8:30', speaker: '', talk: resources['registration'], img: 'assets/img/tba.svg' },
    { time: '9:15', speaker: '', talk: resources['opening'], img: 'assets/img/tba.svg' },
    { time: '9:45', speaker: 'Mariluz Congosto', talk: '', img: 'assets/img/ponente/mariluz.jpg' },
    { time: '10:30', speaker: '', talk: 'Lightning talk 1', img: 'assets/img/tba.svg' },
    { time: '11:00', speaker: '', talk: resources['coffee-break'], img: 'assets/img/tba.svg' },
    { time: '11:45', speaker: 'Hannah Frick', talk: 'Good practice for R packages', img: 'assets/img/ponente/hannah.jpg' },
    { time: '12:35', speaker: 'Celeste Durán', talk: 'Caminando hacia el Big Data', img: 'assets/img/ponente/celeste.jpeg' },
    { time: '13:30', speaker: '', talk: resources['lunch-break'], img: 'assets/img/tba.svg' },
    { time: '15:00', speaker: '', talk: 'Lightning talk 2', img: 'assets/img/tba.svg' },
    { time: '15:30', speaker: 'Nerea Luis Mingueza', talk: 'La teoría del todo: desensamblando la minería de datos', img: 'assets/img/ponente/nerea.jpeg' },
    { time: '16:20', speaker: '', talk: 'Lightning talk 3', img: 'assets/img/tba.svg' },
    { time: '16:50', speaker: '', talk: 'Lightning talk 4', img: 'assets/img/tba.svg' },
    { time: '17:20', speaker: 'Carmen Reina', talk: '', img: 'assets/img/ponente/carmen.jpg' },
    { time: '18:10', speaker: 'Mirian Pena', talk: 'Secret Life of Ads', img: 'assets/img/ponente/miriam.jpg' },
    { time: '19:00', speaker: '', talk: resources['closing'], img: 'assets/img/tba.svg' }
  ],

  day2: [
    { time: '9:00', speaker: '', talk: resources['opening-datathon'], img: 'assets/img/tba.svg' },
    { time: '17:30', speaker: '', talk: resources['project-exposition'], img: 'assets/img/tba.svg' },
    { time: '19:00', speaker: '', talk: resources['closing'], img: 'assets/img/tba.svg' }
  ]
}