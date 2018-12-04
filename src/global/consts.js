const heroesList = [
    {   name: 'Ana',
        imgSrc: 'ana.png',
        weight: 10  },
    {   name: 'Ashe',
        imgSrc: 'ashe.png',
        weight: 10  },
    {   name: 'Bastion',
        imgSrc: 'bastion.png',
        weight: 10  },
    {   name: 'Brigitte',
        imgSrc: 'brigitte.png',
        weight: 10  },
    {   name: 'D.va',
        imgSrc: 'dva.png',
        weight: 10  },
    {   name: 'Doomfist',
        imgSrc: 'doomfist.png',
        weight: 10  },
    {   name: 'Genji',
        imgSrc: 'genji.png',
        weight: 10  },
    {   name: 'Hanzo',
        imgSrc: 'hanzo.png',
        weight: 10  },
    {   name: 'Junkrat',
        imgSrc: 'junkrat.png',
        weight: 10  },
    {   name: 'Lucio',
        imgSrc: 'lucio.png',
        weight: 10  },
    {   name: 'McCree',
        imgSrc: 'mccree.png',
        weight: 10  },
    {   name: 'Mei',
        imgSrc: 'mei.png',
        weight: 10  },
    {   name: 'Mercy',
        imgSrc: 'mercy.png',
        weight: 10  },
    {   name: 'Moira',
        imgSrc: 'moira.png',
        weight: 10  },
    {   name: 'Orisa',
        imgSrc: 'orisa.png',
        weight: 10  },
    {   name: 'Pharah',
        imgSrc: 'pharah.png',
        weight: 10  },
    {   name: 'Reaper',
        imgSrc: 'reaper.png',
        weight: 10  },
    {   name: 'Reinhardt',
        imgSrc: 'reinhardt.png',
        weight: 10  },
    {   name: 'Roadhog',
        imgSrc: 'roadhog.png',
        weight: 10  },
    {   name: 'Soldier: 76',
        imgSrc: 'soldier76.png',
        weight: 10  },
    {   name: 'Sombra',
        imgSrc: 'sombra.png',
        weight: 10  },
    {   name: 'Symmetra',
        imgSrc: 'symmetra.png',
        weight: 10  },
    {   name: 'Torbjorn',
        imgSrc: 'torbjorn.png',
        weight: 10  },
    {   name: 'Tracer',
        imgSrc: 'tracer.png',
        weight: 10  },
    {   name: 'Widowmaker',
        imgSrc: 'widowmaker.png',
        weight: 10  },
    {   name: 'Winston',
        imgSrc: 'winston.png',
        weight: 10  },
    {   name: 'Wrecking Ball',
        imgSrc: 'wreckingball.png',
        weight: 10  },
    {   name: 'Zarya',
        imgSrc: 'zarya.png',
        weight: 10  },
    {   name: 'Zenyatta',
        imgSrc: 'zenyatta.png',
        weight: 10  }
];

const availableIcons = ((r) => {
    let images = {};
    r.keys().map((item) => images[item.replace('./', '')] = r(item));
    return images;
})(require.context('../images', true, /\.(png|jpe?g|svg)$/));


export {
    availableIcons,
    heroesList
}