import lang from '../lang';

const resources = lang.get();

export default {
  day1: [
    {
      time: '8:30',
      speaker: '',
      talk: resources['registration'],
      img: 'assets/img/tba.svg',
      socials: []
    },
    {
      time: '9:15',
      speaker: '',
      talk: resources['opening'],
      img: 'assets/img/tba.svg',
      socials: []
    },
    {
      time: '9:50',
      speaker: 'Mariluz Congosto',
      talk: 'En Twitter... ¿juntos pero no revueltos? <br/> Visualizando la propagación de trending topics con Gephi y d3.js',
      img: 'assets/img/ponente/mariluz.jpg',
      socials: [
        { type: 'twitter', url: 'http://twitter.com/congosto' },
        { type: 'linkedin-in', url: 'http://www.linkedin.com/in/congosto' }
      ]
    },
    {
      time: '10:40',
      speaker: 'Jorge Aznar Tobajas',
      talk: 'Iba a quejarme en Twitter y me lié',
      img: 'assets/img/ponente/jorge.jpg',
      socials: [
        { type: 'twitter', url: 'https://twitter.com/jorgeATGU' },
        { type: 'github', url: 'https://github.com/jorgeatgu' },
        { type: 'linkedin-in', url: 'https://www.linkedin.com/in/jorgeatgu/' }
      ]
    },
    {
      time: '11:15',
      speaker: '',
      talk: resources['coffee-break'],
      img: 'assets/img/tba.svg',
      socials: []
    },
    {
      time: '12:00',
      speaker: 'Hannah Frick',
      talk: 'Good practice for R packages',
      img: 'assets/img/ponente/hannah.jpg',
      socials: [
        { type: 'twitter', url: 'https://twitter.com/hfcfrick' }
      ]
    },
    {
      time: '12:50',
      speaker: 'Celeste Durán',
      talk: 'Caminando hacia el Big Data',
      img: 'assets/img/ponente/celeste.jpeg',
      socials: [
        { type: 'twitter', url: 'https://twitter.com/mceduran' },
        { type: 'linkedin-in', url: 'https://www.linkedin.com/in/maria-celeste-duran-gonzalez-477b46113/' }
      ]
    },
    {
      time: '13:40',
      speaker: '',
      talk: resources['lunch-break'],
      img: 'assets/img/tba.svg',
      socials: []
    },
    {
      time: '15:00',
      speaker:
        'David Pastor Escuredo',
      talk: 'Mobile phone data for seasonal migration and food security monitoring',
      img: 'assets/img/ponente/david.jpg',
      socials: [
        { type: 'twitter', url: 'https://twitter.com/dpastoresc' },
        { type: 'medium', url: 'https://medium.com/@dpastoresc' },
        { type: 'linkedin-in', url: 'https://www.linkedin.com/in/david-pastor-escuredo-59543320/' }
      ]
    },
    {
      time: '15:30',
      speaker: 'Nerea Luis Mingueza',
      talk: 'La teoría del todo: desensamblando la minería de datos',
      img: 'assets/img/ponente/nerea.jpeg',
      socials: [
        { type: 'twitter', url: 'https://twitter.com/sailormerqury' },
        { type: 'linkedin-in', url: 'https://www.linkedin.com/in/nerealuis/' }
      ]
    },
    {
      time: '16:20',
      speaker: 'Elena Torró',
      talk: 'Cómo el e-learning puede entender a sus estudiantes',
      img: 'assets/img/ponente/elenatorro.png',
      socials: [
        { type: 'twitter', url: 'https://twitter.com/eletorro' },
        { type: 'linkedin-in', url: 'https://www.linkedin.com/in/elenatorro' }
      ]
    },
    {
      time: '16:50',
      speaker: 'Moisés Martínez',
      talk: 'Scrapeando la web: Cargando de datos y modelos nuestras Apps', img: 'assets/img/ponente/moises.jpg',
      socials: [
          { type: 'twitter', url: 'https://twitter.com/moisipm' }
      ]
    },
    {
      time: '17:20',
      speaker: 'Carmen Reina',
      talk: '',
      img: 'assets/img/ponente/carmen.jpg',
      socials: [
        { type: 'twitter', url: 'https://twitter.com/reigarma' },
        { type: 'linkedin-in', url: 'https://www.linkedin.com/in/carmenreina/' }
      ]
    },
    {
      time: '18:10',
      speaker: 'Miriam Pena',
      talk: 'Secret Life of Ads',
      img: 'assets/img/ponente/miriam.jpg',
      socials: [
        { type: 'twitter', url: 'https://twitter.com/miriampena' },
        { type: 'linkedin-in', url: 'https://www.linkedin.com/in/miriampena/' }
      ]
    },
    {
      time: '19:00',
      speaker: '',
      talk: resources['closing'],
      img: 'assets/img/tba.svg',
      socials: []
    }
  ],

  day2: [
    { time: '9:00', speaker: '', talk: resources['opening-datathon'], img: 'assets/img/tba.svg', socials: [] },
    { time: '17:30', speaker: '', talk: resources['project-exposition'], img: 'assets/img/tba.svg', socials: [] },
    { time: '19:00', speaker: '', talk: resources['closing'], img: 'assets/img/tba.svg', socials: [] }
  ]
}
