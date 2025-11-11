// Mock data per Pina Country House

export const siteInfo = {
  name: "Pina Country House",
  tagline: "Il tuo Rifugio di Pace e Autenticità",
  subtitle: "Dove la tradizione incontra il comfort moderno, per una vacanza indimenticabile nella natura.",
  contact: {
    phone: "+39 328 381 5813",
    email: "info@pinacountryhouse.it",
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
    description: "Prodotti locali e fatti in casa, dolci freschi, opzioni salate e per intolleranze. Inizia la giornata con i sapori autentici del territorio.",
    icon: "coffee",
    image: "/images/kitchen/kitchen_2.jpg"
  },
  {
    id: 2,
    title: "Connessione Wi-Fi Veloce",
    description: "Internet gratuito e veloce disponibile in tutte le aree interne ed esterne. Rimani connesso mentre ti godi la tranquillità della campagna.",
    icon: "wifi",
    image: "/images/kitchen/kitchen_1.jpg"
  },
  {
    id: 3,
    title: "Parcheggio Privato",
    description: "Ampio parcheggio interno e custodito per la tua auto. Comodo e sicuro, a pochi passi dalla struttura.",
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
    description: "Riassetto e pulizia quotidiana della camera per un soggiorno sempre impeccabile.",
    icon: "sparkle"
  },
  {
    id: 7,
    title: "Spazi Comuni Interni",
    description: "Accesso alle aree comuni interne della struttura per momenti di relax e condivisione in un ambiente accogliente.",
    icon: "trees",
    image: "/images/exterior/exterior_2.jpg"
  }
];

export const additionalServices = [
  {
    id: 1,
    title: "Noleggio Biciclette",
    description: "Esplora il territorio su due ruote",
    price: "A pagamento"
  },
  {
    id: 2,
    title: "Servizio Navetta",
    description: "Trasferimenti da e per la stazione",
    price: "Su richiesta"
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
      "Letto Queen Size",
      "Bagno privato con doccia spaziosa",
      "TV satellitare",
      "Angolo scrivania",
      "Aria condizionata autonoma"
    ],
    images: [
      "/images/rooms/smeraldo/smeraldo_1.jpg",
      "/images/rooms/smeraldo/smeraldo_2.jpg",
      "/images/rooms/smeraldo/smeraldo_3.jpg"
    ],
    color: "emerald"
  },
  {
    id: "diamante",
    name: "Diamante",
    subtitle: "Luminosità e Lusso",
    description: "La suite più luminosa e lussuosa, con colori chiari (bianco, grigio perla) e arredi moderni. Possibilità di letto aggiuntivo. Perfetta per famiglie o per una fuga romantica speciale.",
    features: [
      "Letto King Size",
      "Vasca idromassaggio in bagno",
      "Angolo salotto",
      "Balcone privato",
      "TV satellitare",
      "Frigobar",
      "Letto aggiuntivo disponibile"
    ],
    images: [
      "/images/rooms/diamante/diamante_1.jpg",
      "/images/rooms/diamante/diamante_2.jpg",
      "/images/rooms/diamante/diamante_3.jpg"
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
      "Bagno privato",
      "Frigobar",
      "TV satellitare",
      "Aria condizionata autonoma"
    ],
    images: [
      "/images/rooms/rubino/rubino_1.jpg",
      "/images/rooms/rubino/rubino_2.jpg",
      "/images/rooms/rubino/rubino_3.jpg"
    ],
    color: "rose"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "La Sagra del Fungo Porcino",
    date: "15 Settembre 2024",
    excerpt: "Non perdere il più atteso evento autunnale della zona! Tre giorni di prelibatezze a base di funghi porcini, musica dal vivo e tradizione.",
    image: "/images/kitchen/kitchen_3.jpg",
    category: "Eventi"
  },
  {
    id: 2,
    title: "Itinerario tra i vigneti: le 5 migliori cantine da visitare",
    date: "8 Settembre 2024",
    excerpt: "Scopri i tesori enologici del territorio con il nostro itinerario esclusivo tra le cantine più affascinanti della zona.",
    image: "/images/exterior/exterior_4.jpg",
    category: "Itinerari"
  },
  {
    id: 3,
    title: "L'evento dell'estate: il concerto sotto le stelle",
    date: "20 Agosto 2024",
    excerpt: "Una serata magica di musica classica nella piazza principale. L'appuntamento imperdibile dell'estate con l'orchestra sinfonica regionale.",
    image: "/images/exterior/exterior_2.jpg",
    category: "Eventi"
  },
  {
    id: 4,
    title: "I mercati contadini del territorio",
    date: "5 Agosto 2024",
    excerpt: "Ogni sabato mattina, i migliori prodotti locali ti aspettano nei mercati contadini. Frutta, verdura, formaggi e molto altro a km zero.",
    image: "/images/details/detail_3.jpg",
    category: "Territorio"
  }
];

export const heroImages = {
  main: "/images/hero/hero_1.jpg",
  villa: "/images/hero/hero_2.jpg",
  interior: "/images/exterior/exterior_1.jpg",
  aerial: "/images/exterior/exterior_3.jpg"
};

export const aboutInfo = {
  story: "Pina Country House nasce dalla passione della famiglia per l'ospitalità e l'amore incondizionato per la campagna. Dopo anni di attento restauro conservativo, abbiamo trasformato questo antico casale in un luogo dove i nostri ospiti possono staccare la spina e vivere l'autenticità del territorio. Ogni dettaglio è stato curato per preservare il fascino rustico della struttura, integrandolo con i comfort moderni che rendono il soggiorno indimenticabile.",
  location: "Siamo immersi nella quiete delle colline di Cava de' Tirreni, un punto strategico per esplorare la Costiera Amalfitana e le città d'arte della Campania. L'aria fresca, il silenzio e i profumi della natura saranno il tuo risveglio quotidiano.",
  directions: {
    car: "In auto: Uscita autostrada A3 Cava de' Tirreni, proseguire seguendo le indicazioni per il centro. La struttura si trova in Via Aniello Vitale 49 D.",
    publicTransport: "Mezzi pubblici: Dalla stazione ferroviaria di Cava de' Tirreni è disponibile servizio navetta su richiesta (prenotazione obbligatoria). Autobus di linea disponibili con fermata nelle vicinanze."
  }
};