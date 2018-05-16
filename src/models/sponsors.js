import lang from '../lang';

const resources = lang.get();

export default [
  {
    type: 'gold',
    title: resources['gold'],
    enterprises: [
      { name: 'kschool', img: 'assets/img/sponsor/kschool.png', url: 'https://kschool.com/' },
      { name: 'neo4j', img: 'assets/img/sponsor/neo4j.svg', url: 'https://neo4j.com/' },
      { name: 'iexl', img: 'assets/img/sponsor/ie.svg', url: 'https://www.ie.edu/' }
    ]
  },
  {
    type: 'silver',
    title: resources['silver'],
    enterprises: [
      { name: 'kschool', img: 'assets/img/sponsor/kschool.png', url: 'https://kschool.com/' },
      { name: 'neo4j', img: 'assets/img/sponsor/neo4j.svg', url: 'https://neo4j.com/' },
      { name: 'iexl', img: 'assets/img/sponsor/ie.svg', url: 'https://www.ie.edu/' }
    ]
  },
  {
    type: 'bronze',
    title: resources['bronze'],
    enterprises: [
      { name: 'kschool', img: 'assets/img/sponsor/kschool.png', url: 'https://kschool.com/' },
      { name: 'neo4j', img: 'assets/img/sponsor/neo4j.svg', url: 'https://neo4j.com/' },
      { name: 'iexl', img: 'assets/img/sponsor/ie.svg', url: 'https://www.ie.edu/' }
    ]
  },
  {
    type: 'media',
    title: resources['media'],
    enterprises: [
      { name: 'neo4j', img: 'assets/img/sponsor/neo4j.svg', url: 'https://neo4j.com/' }
    ]
  },
  {
    type: 'collaborators',
    title: resources['collaborators-sponsor'],
    enterprises: [
      { name: 'neo4j', img: 'assets/img/sponsor/neo4j.svg', url: 'https://neo4j.com/' }
    ]
  }
]