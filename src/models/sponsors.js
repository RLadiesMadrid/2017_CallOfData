import lang from '../lang';

const resources = lang.get();

export default [
  {
    type: 'gold',
    title: resources['gold'],
    enterprises: [
      { name: 'iexl', img: 'assets/img/sponsor/ie.svg', url: 'https://www.ie.edu/' },
     // { name: 'Altran', img: '', url: 'https://www.altran.com/es/es/' }
    ]
  },
  {
    type: 'silver',
    title: resources['silver'],
    enterprises: [
      { name: 'kschool', img: 'assets/img/sponsor/kschool.png', url: 'https://kschool.com/' },
     // { name: 'Metroscopia', img: '', url: 'http://metroscopia.org/' },
     // { name: 'Decathlon', img: '', url: 'https://www.decathlon.es/' }
    ]
  },
  {
    type: 'bronze',
    title: resources['bronze'],
    enterprises: [
    //  { name: 'Máxima formación', img: '', url: 'https://www.maximaformacion.es/' },
      { name: 'Neo4j', img: 'assets/img/sponsor/neo4j.svg', url: 'https://neo4j.com/' },
      //  { name: 'T3chfest', img: '', url: 'https://t3chfest.uc3m.es/2019/' }
    ]
  },
 /* {
    type: 'media',
    title: resources['media'],
    enterprises: [
      { name: 'Autentia', img: '', url: 'https://www.autentia.com/' }
    ]
  },
  {
    type: 'collaborators',
    title: resources['collaborators-sponsor'],
    enterprises: [
      { name: 'Acción contra el hambre', img: '', url: 'https://www.accioncontraelhambre.org/es' }
    ]
  }*/
]