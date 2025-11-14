// Mock data per Pina Country House

export const siteInfo = {
  name: "Pina Country House",
  tagline: "Il tuo Rifugio di Pace e Autenticità",
  subtitle: "Dove la tradizione incontra il comfort moderno, per una vacanza indimenticabile nella natura.",
  contact: {
    phone: "+39 328 381 5813",
    email: "infopinacountryhouse@gmail.com",
    address: "Via Aniello Vitale, 49 D - Cava de' Tirreni (SA)"
  },
  
  social: {
    facebook: "#",
    instagram: "#",
    tripadvisor: "#"
  }
};

export const services = [
  {
    id: 1,
    title: "Colazione Genuina",
    description: "Prodotti locali, dolci freschi, opzioni salate e per intolleranze. Inizia la giornata con i sapori autentici del territorio.",
    icon: "coffee"
  },
  {
    id: 2,
    title: "Connessione Wi-Fi Veloce",
    description: "Internet gratuito e veloce disponibile in tutte le aree interne ed esterne. Rimani connesso mentre ti godi la tranquillità della campagna.",
    icon: "wifi"
  },
  {
    id: 3,
    title: "Parcheggio Privato",
    description: "Ampio parcheggio custodito per la tua auto. Comodo e sicuro, a pochi passi dalla struttura.",
    icon: "parking-circle"
  },
  {
    id: 4,
    title: "Biancheria e Cortesia",
    description: "Fornitura completa di lenzuola e asciugamani freschi, set di cortesia per il bagno con prodotti di qualità.",
    icon: "sparkles"
  },
  {
    id: 5,
    title: "Aria Condizionata/Riscaldamento",
    description: "Sistema autonomo in ogni camera per garantirti il massimo comfort in ogni stagione.",
    icon: "thermometer"
  },
  {
    id: 6,
    title: "Pulizia Giornaliera",
    description: "Riassetto e pulizia quotidiana degli spazi comuni per un soggiorno sempre impeccabile.",
    icon: "sparkle"
  },
  {
    id: 7,
    title: "Spazi Comuni Interni",
    description: "Accesso alle aree comuni interne della struttura per momenti di relax e condivisione in un ambiente accogliente.",
    icon: "trees"
  }
];

export const additionalServices = [
  {
    id: 1,
    title: "Visita alla fattoria",
    description: "Scopri la magia della vita in fattoria all’Horseland Ranch: cavalli, pony e tanta natura ti aspettano!",
    price: "A pagamento"
  },
  {
    id: 3,
    title: "Degustazioni",
    description: "Prodotti tipici locali",
    price: "Su richiesta"
  }
];

export const rooms = [
  {
    id: "smeraldo",
    name: "Smeraldo",
    subtitle: "Freschezza e Rigenerazione",
    description: "Camera matrimoniale spaziosa, arredata con toni del verde e del legno naturale, che evoca la freschezza e la rigenerazione. Ideale per le coppie che cercano un'atmosfera naturale e rilassante.",
    features: [
      "Letto matrimoniale",
      "Bagno privato con doccia spaziosa",
      "TV satellitare",
      "Angolo scrivania",
      "Aria condizionata"
    ],
    images: [
      "/images/Camera-smeraldo-1.jpg",
      "/images/Camera-smeraldo-2.jpg",
      "/images/Camera-smeraldo-3.jpg"
    ],
    color: "emerald"
  },
  {
    id: "diamante",
    name: "Diamante",
    subtitle: "Luminosità e Lusso",
    description: "La suite più luminosa e lussuosa, con colori chiari e arredi moderni. Perfetta per famiglie.",
    features: [
      "Letto matrimoniale e 2 letti singoli",
      "Bagno privato con doccia spaziosa",
      "Angolo scrivania",
      "Bagno privato",
      "TV satellitare",
      "Aria condizionata",
    ],
    images: [
      "/images/Camera-diamante-1.jpg",
      "/images/Camera-diamante-2.jpg",
      "/images/Camera-diamante-3.jpg"
    ],
    color: "slate"
  },
  {
    id: "rubino",
    name: "Rubino",
    subtitle: "Calore e Intimità",
    description: "Camera accogliente e calda, con tonalità del rosso rubino e bordeaux. Atmosfera intima e romantica, ideale per un weekend di coppia all'insegna del relax e della passione.",
    features: [
      "Letto matrimoniale",
      "Bagno privato con vasca spaziosa",
      "Aria condizionata",
      "TV satellitare",
      "Angolo Scrivania"
    ],
    images: [
      "/images/Camera-rubino-1.jpg",
      "/images/Camera-rubino-2.jpg",
      "/images/Camera-rubino-3.jpg"
    ],
    color: "rose"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Horseland Ranch",
    date: "12 Novembre 2025",
    excerpt: (
  <span>
    <a href="https://www.facebook.com/p/Centro-equestre-HorseLand-Ranch-100064842242467" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
      L’Horseland Ranch
    </a>
    , immerso nel verde di Cava de’ Tirreni, offre un’esperienza autentica a contatto con i cavalli. Con istruttori qualificati, lezioni di equitazione, trekking e attività per famiglie, il maneggio unisce natura, professionalità ed emozioni. Un luogo ideale per chi vuole imparare, rilassarsi e vivere il legame unico con il cavallo.
  </span>
),
    image: "/images/blog-horseland-ranch.jpeg",
    category: "Itinerari"
  },
  {
    id: 2,
    title: "Oasi Diecimare",
    date: "12 Novembre 2025",
    excerpt: (
  <span>
    <a href="https://oasidiecimare.it/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
      L’Oasi Diecimare
    </a>
    , con il suo Centro Visite situato nella frazione Sant’Anna di Cava de’ Tirreni, è un’area naturalistica di grande pregio che si estende per oltre 400 ettari tra i Monti Lattari e i Monti Picentini. Da qui partono diversi sentieri panoramici che attraversano boschi, macchia mediterranea e punti di osservazione suggestivi. Il Centro Visite propone escursioni guidate, attività didattiche ed eventi culturali, con spazi accessibili e pensati per coinvolgere adulti, bambini e persone con diverse esigenze. Un luogo ideale per vivere la natura, scoprire il territorio e rigenerarsi immersi nel verde.
  </span>
),
    image: "/images/blog-oasi-diecimare.webp",
    category: "Itinerari"
  },
  {
    id: 3,
    title: "Città vicine",
    date: "12 Novembre 2025",
    excerpt: (
  <span>
    <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sharry.land%2Fit%2Ftrova%2Fcosa-fare-vicino%2Fcava-de-tirreni&psig=AOvVaw3Acg4LDyARr-emKWkK2BX1&ust=1763218316231000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCKCM7Z3y8ZADFQAAAAAdAAAAABAE" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
      Esplora le meraviglie della zona
    </a>
    , da Cava de' Tirreni, porta della Costiera Amalfitana, fino alle rovine di Pompei e ai tesori di Napoli. Scopri borghi affascinanti, panorami mozzafiato e siti archeologici che hanno fatto la storia.
  </span>
),
    image: "/images/blog-città-vicine.webp",
    category: "Territorio"
  },
  {
    id: 4,
    title: "Disfida di Cava de' Tirreni",
    date: "12 Novembre 2025",
    excerpt: (
  <span>
    <a href="https://www.atsc-cavadetirreni.it/disfida-dei-trombonieri/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
      La Disfida dei Trombonieri di Cava de’ Tirreni
    </a>
    , è una rievocazione storica unica, in cui le contrade cittadine si sfidano con spettacolari spari d’archibugio. Tra costumi rinascimentali, cortei e tamburi, la città rivive le sue origini e celebra una tradizione che unisce storia, identità e passione.
  </span>
),
    image: "/images/blog-disfida-dei-trombonieri.webp",
    category: "Eventi"
  }
];

export const heroImages = {
  main: "/images/Salotto-comune-home-page.jpg",
  villa: "/images/hero/hero_2.jpg",
  interior: "/images/exterior/exterior_1.jpg",
  aerial: "/images/exterior/exterior_3.jpg"
};

export const aboutInfo = {
  story: "Pina country house è una nuova e moderna struttura situata sulle lussureggianti colline cavesi, posta all’interno di una fattoria e del Centro Equestre Horselan Ranch noto maneggio con oltre 30 anni di attività. L’appartamento è finemente arredato in stile country, presenta un ambio salone comune con tutti i confort e una terrazza panoramica. Un imponente camino sorveglia la casa. Per rendere il soggiorno confortevole tre ampie camere con bagno ad uso esclusivo, finemente arredate offrono un soggiorno autentico.",
  location: "Siamo immersi nella quiete delle colline di Cava de' Tirreni, un punto strategico per esplorare la Costiera Amalfitana e le città d'arte della Campania. L'aria fresca, il silenzio e i profumi della natura saranno il tuo risveglio quotidiano.",
  directions: {
    car: "In auto: Uscita autostrada A3 Cava de' Tirreni, proseguire seguendo le indicazioni per Sant'Anna. La struttura si trova in Via Aniello Vitale 49 D.",
    publicTransport: "Mezzi pubblici: Dalla stazione ferroviaria di Cava de' Tirreni puoi prendere un taxi oppure un autobus locale in direzione Sant’Anna n° 66 oppure 67, scendendo alla fermata più vicina a Via Aniello Vitale 49 D."
  }
};