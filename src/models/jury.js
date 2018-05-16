import lang from '../lang';

const resources = lang.get();

export default [
  { 
    name: 'Aurora Barrero', 
    description: resources['jury-description-aurora'], 
    img: 'assets/img/jurado/aurora.jpg' ,
    networks: [
      { type: 'twitter', url: 'https://twitter.com/aurora_barrero' },
      { type: 'linkedin-in', url: 'https://www.linkedin.com/in/aurorabarrero' }
    ] 
  },
  { 
    name: 'Ibon Tolosana', 
    description: resources['jury-description-ibon'], 
    img: 'assets/img/jurado/ibon.png' ,
    networks: [
      { type: 'twitter', url: 'https://twitter.com/hyperandroid' }
    ] 
  },
  { 
    name: 'Gema Parreño', 
    description: resources['jury-description-gema'], 
    img: 'assets/img/jurado/gema.png' ,
    networks: [
      { type: 'twitter', url: 'http://twitter.com/soyGema' },
      { type: 'github', url: 'http://www.github.com/soygema' }
    ] 
  },
  { 
    name: 'Jorge Barroso', 
    description: resources['jury-description-jorge'], 
    img: 'assets/img/jurado/jorge.png' ,
    networks: [
      { type: 'twitter', url: 'https://twitter.com/flipper83' }
    ] 
  },
  { 
    name: 'Irene Rodríguez', 
    description: resources['jury-description-irene'], 
    img: 'assets/img/jurado/irene.png' ,
    networks: [
      { type: 'twitter', url: 'https://twitter.com/irenerodluj' },
      { type: 'linkedin-in', url: 'https://www.linkedin.com/in/irenerodluj' }
    ] 
  }
]