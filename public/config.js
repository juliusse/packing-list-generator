let itemCategory = "";
let o = 1;
// Kleidung
itemCategory = "Kleidung";
const socken = { order: o++, itemCategory, name: "Socken", amount: 0.3, type: "PER_DAY" };
const dickeSocken = { order: o++, itemCategory, name: "Dicke Socken", amount: 1, type: "FIX" };
const unterwaesche = { order: o++, itemCategory, name: "Unterwäsche", amount: 1, type: "PER_DAY", weight: 65 };
const jeans = { order: o++, itemCategory, name: "Jeans", amount: 1, type: "FIX" };
const kurzeHose = { order: o++, itemCategory, name: "Kurze Hose", amount: 1, type: "FIX" };
const tShirt = { order: o++, itemCategory, name: "T-Shirt", amount: 0.5, type: "PER_DAY" };
const pullover = { order: o++, itemCategory, name: "Pullover", amount: 1, type: "FIX" };
const fleeceJacke = { order: o++, itemCategory, name: "Fleecejacke", amount: 1, type: "FIX", weight: 330 };
const schlafshirt = { order: o++, itemCategory, name: "Schlafshirt", amount: 1, type: "FIX" };
const jogginghose = {
  order: o++,
  itemCategory,
  name: "Jogginghose (Kurz/Lang)",
  amount: 1,
  type: "FIX",
  weight: 300,
};
const regenjacke = { order: o++, itemCategory, name: "Regenjacke", amount: 1, type: "FIX", weight: 485 };
const softshelljacke = {
  order: o++,
  itemCategory,
  name: "Softshelljacke",
  amount: 1,
  type: "FIX",
  weight: 570,
};
const badehose = { order: o++, itemCategory, name: "Badehose", amount: 1, type: "FIX", weight: 150 };
const fahrradShirt = { order: o++, itemCategory, name: "Fahrradshirt", amount: 2, type: "FIX" };
const zipWanderhose = { order: o++, itemCategory, name: "Zipwanderhose", amount: 1, type: "FIX", weight: 415 };
const wanderhose = { order: o++, itemCategory, name: "Wanderhose", amount: 1, type: "FIX" };
const schlauchtuch = { order: o++, itemCategory, name: "Schlauchtuch", amount: 1, type: "FIX", weight: 40 };
const dickeOma = { order: o++, itemCategory, name: "Winderbuff", amount: 1, type: "FIX" };
const basecap = { order: o++, itemCategory, name: "Basecap", amount: 1, type: "FIX" };
const fahrradHandschuhe = { order: o++, itemCategory, name: "Fahrradhandschuhe", amount: 1, type: "FIX" };
const wandershirt = { order: o++, itemCategory, name: "Wandershirt", amount: 3, type: "FIX" };
const merinoUnterwaesche = { order: o++, itemCategory, name: "Merinounterwäsche", amount: 1, type: "FIX" };
const wanderSocken = { order: o++, itemCategory, name: "Wandersocken", amount: 2, type: "FIX", weight: 65 };
const kletterHose = { order: o++, itemCategory, name: "Kletterhose", amount: 1, type: "FIX" };
const kletterShirt = { order: o++, itemCategory, name: "Klettershirt", amount: 0.5, type: "PER_DAY" };
const kletterPullover = { order: o++, itemCategory, name: "Kletterpullover", amount: 1, type: "FIX" };
const muetze = { order: o++, itemCategory, name: "Mütze", amount: 1, type: "FIX", weight: 70 };

// Schuhe
itemCategory = "Schuhe";
const flipflops = { order: o++, itemCategory, name: "Flipflops", amount: 1, type: "FIX", weight: 300 };
const wanderSchuhe = { order: o++, itemCategory, name: "Wanderschuhe", amount: 1, type: "FIX" };
const turnSchuhe = { order: o++, itemCategory, name: "Turnschuhe", amount: 1, type: "FIX" };

// Hygiene
itemCategory = "Hygiene";
const zahnbuerste = { order: o++, itemCategory, name: "Zahnbürste / Zahnpasta", amount: 1, type: "FIX", weight: 150 };
const buerste = { order: o++, itemCategory, name: "Bürste", amount: 1, type: "FIX", weight: 50 };
const sonnencreme = { order: o++, itemCategory, name: "Sonnencreme", amount: 1, type: "FIX", weight: 200 };
const waschlappen = { order: o++, itemCategory, name: "Waschlappen", amount: 1, type: "FIX", weight: 30 };
const klopapier = { order: o++, itemCategory, name: "Klopapier", amount: 0.33, type: "PER_DAY", weight: 200 };
const duschzeug = { order: o++, itemCategory, name: "Duschzeug", amount: 1, type: "FIX" };
const handtuch = { order: o++, itemCategory, name: "Handtuch", amount: 2, type: "FIX", weight: 170 };
const pinzetteScherePfeile = {
  order: o++,
  itemCategory,
  name: "Pinzette/Nagelschere/Pfeile",
  amount: 1,
  type: "NO_AMOUNT",
};
const ohrstaebchen = { order: o++, itemCategory, name: "Ohrstäbchen", type: "NO_AMOUNT" };
const taschentuecher = { order: o++, itemCategory, name: "Taschentücher", amount: 0.33, type: "PER_DAY" };
const handcreme = { order: o++, itemCategory, name: "Handcreme", type: "NO_AMOUNT" };

// Zelten
itemCategory = "Zelten";

const zelt = { order: o++, itemCategory, name: "Zelt", type: "NO_AMOUNT", weight: 3000 };
const zeltLappen = { order: o++, itemCategory, name: "Zeltlappen", type: "NO_AMOUNT" };
const zeltPlane = { order: o++, itemCategory, name: "Zeltplane", type: "NO_AMOUNT" };
const schlafsack = { order: o++, itemCategory, name: "Schlafsack", type: "NO_AMOUNT", weight: 1200 };
const isomatte = { order: o++, itemCategory, name: "Isomatte", type: "NO_AMOUNT", weight: 800 };
const campingStuhl = { order: o++, itemCategory, name: "Campingstuhl", type: "NO_AMOUNT", weight: 2000 };

// Misc
itemCategory = "Misc";
const sonnenbrille = { order: o++, itemCategory, name: "Sonnenbrille", type: "NO_AMOUNT", weight: 30 };
const brille = { order: o++, itemCategory, name: "Brille", type: "NO_AMOUNT", weight: 90 };
const ersteHilfePlfasterIbu = {
  order: o++,
  itemCategory,
  name: "Erste-Hilfe/Pflaster/Ibu",
  type: "NO_AMOUNT",
};

const stirnlampe = { order: o++, itemCategory, name: "Stirnlampe", type: "NO_AMOUNT", weight: 90 };
const buecher = { order: o++, itemCategory, name: "Bücher", type: "NO_AMOUNT" };

const picknickDecke = { order: o++, itemCategory, name: "Picknickdecke", type: "NO_AMOUNT" };

const spiele = { order: o++, itemCategory, name: "Spiele", type: "NO_AMOUNT" };
const plastiktueten = { order: o++, itemCategory, name: "Plastiktüten", type: "NO_AMOUNT" };
const stoffbeutel = { order: o++, itemCategory, name: "Stoffbeutel", type: "NO_AMOUNT" };
const kleineWassersaecke = { order: o++, itemCategory, name: "Wassersack (5/10L)", type: "NO_AMOUNT" };
const gpsTracks = { order: o++, itemCategory, name: "GPS Tracks", type: "NO_AMOUNT" };
const wanderstoecker = { order: o++, itemCategory, name: "Wanderstöcker", type: "NO_AMOUNT" };
const knieBandage = { order: o++, itemCategory, name: "Kniebandage", type: "NO_AMOUNT" };
const naehzeug = { order: o++, itemCategory, name: "Nähzeug", type: "NO_AMOUNT", weight: 30 };
const kleinerSchlafsack = {
  order: o++,
  itemCategory,
  name: "Kleiner Schlafsack",
  weight: 1100,
  type: "NO_AMOUNT",
};
const pilgerausweis = { order: o++, itemCategory, name: "Pilgerausweis", type: "NO_AMOUNT" };
const wanderfuehrer = { order: o++, itemCategory, name: "Wanderführer", type: "NO_AMOUNT", weight: 240 };
const tagebuch = { order: o++, itemCategory, name: "Tagebuch", type: "NO_AMOUNT", weight: 170 };
const schafsWolle = { order: o++, itemCategory, name: "Schafswolle", type: "NO_AMOUNT" };
const fingertape = { order: o++, itemCategory, name: "Fingertape", type: "NO_AMOUNT", weight: 40 };
const vorhaengeschloss = { order: o++, itemCategory, name: "Vorhängeschloss", type: "NO_AMOUNT" };
const ausweiskopie = { order: o++, itemCategory, name: "Ausweiskopie", type: "NO_AMOUNT" };
const portemonaie = {
  order: o++,
  itemCategory,
  name: "Portem. (Perso, Krankenk, Visa)",
  type: "NO_AMOUNT",
};
const haekelzeug = { order: o++, itemCategory, name: "Häkelzeug", type: "NO_AMOUNT" };
const snacks = { order: o++, itemCategory, name: "Snacks", type: "NO_AMOUNT" };
const thermosKanne = { order: o++, itemCategory, name: "Thermoskanne", type: "NO_AMOUNT" };

// Technik
itemCategory = "Technik";
const handy = { order: o++, itemCategory, name: "Handy", type: "NO_AMOUNT", weight: 170 };
const ladekabel = { order: o++, itemCategory, name: "Ladekabel", type: "NO_AMOUNT" };
const powerbank = { order: o++, itemCategory, name: "Powerbank (voll)", type: "NO_AMOUNT", weight: 380 };
const kindle = { order: o++, itemCategory, name: "Kindle/Tablet", type: "NO_AMOUNT", weight: 325 };
const kamera = { order: o++, itemCategory, name: "Kamera", type: "NO_AMOUNT" };
const kopfhoehrer = { order: o++, itemCategory, name: "Kopfhöhrer (NC?)", type: "NO_AMOUNT" };
const arbeitsLaptop = { order: o++, itemCategory, name: "Arbeitslaptop & Netzteil", type: "NO_AMOUNT" };
const kopfhoererKlinke = { order: o++, itemCategory, name: "Kopfhörer mit Klinke", type: "NO_AMOUNT" };
const dockingstationAdapter = { order: o++, itemCategory, name: "Dockingstation Adapter", type: "NO_AMOUNT" };
const gamingLaptop = { order: o++, itemCategory, name: "Gaminglaptop & Netzteil", type: "NO_AMOUNT" };
const controller = { order: o++, itemCategory, name: "Controller", type: "NO_AMOUNT" };
const maus = { order: o++, itemCategory, name: "Maus", type: "NO_AMOUNT" };
const bluetoothSpeaker = { order: o++, itemCategory, name: "Bluetooth Speaker", type: "NO_AMOUNT" };

// Küche
itemCategory = "Küche";
const tupperbuechse = { order: o++, itemCategory, name: "Tupperbüchse", amount: 1, type: "FIX" };
const spork = { order: o++, itemCategory, name: "Spork/Löffel", amount: 1, type: "FIX", weight: 35 };
const taschenMesser = { order: o++, itemCategory, name: "Taschenmesser", amount: 1, type: "FIX" };
const kuechenRolle = { order: o++, itemCategory, name: "Küchenrolle", type: "NO_AMOUNT" };
const kleinePlastikbeutel = { order: o++, itemCategory, name: "Kleine Plastikbeutel", type: "NO_AMOUNT" };
const campingKocher = { order: o++, itemCategory, name: "Campingkocher", type: "NO_AMOUNT" };
const gaskartusche = { order: o++, itemCategory, name: "Gaskartusche", amount: 0.2, type: "PER_DAY" };
const topfPfanne = { order: o++, itemCategory, name: "Topf/Pfanne", type: "NO_AMOUNT" };
const schuessel = { order: o++, itemCategory, name: "Schüssel", type: "NO_AMOUNT" };
const becher = { order: o++, itemCategory, name: "Becher (zb Unionbecher)", type: "NO_AMOUNT" };
const messerGabelLoeffel = { order: o++, itemCategory, name: "Messer/Gabel/Löffel", type: "NO_AMOUNT" };
const geschirrHandtuch = { order: o++, itemCategory, name: "Geschirrhandtuch", type: "NO_AMOUNT" };
const spuelzeug = { order: o++, itemCategory, name: "Spülmittel/Schwamm", type: "NO_AMOUNT" };

// Essen
itemCategory = "Essen";
const schokokekse = { order: o++, itemCategory, name: "Schokokekse", amount: 0.33, type: "PER_DAY" };
const muesli = { order: o++, itemCategory, name: "Müsli", amount: 0.33, type: "PER_DAY" };
const joghurt = { order: o++, itemCategory, name: "Joghurt", amount: 0.33, type: "PER_DAY" };
const apfel = { order: o++, itemCategory, name: "Apfel", amount: 1, type: "PER_DAY" };
const banane = { order: o++, itemCategory, name: "Banane", amount: 1, type: "PER_DAY" };
const nuesse = { order: o++, itemCategory, name: "Nussmix", amount: 0.33, type: "PER_DAY", weight: 200 };
const mueslieriegel = { order: o++, itemCategory, name: "Müslieriegel", amount: 1, type: "PER_DAY" };
const brotscheiben = { order: o++, itemCategory, name: "Brotscheiben", amount: 0.33, type: "PER_DAY" };
const aufstrich = { order: o++, itemCategory, name: "Aufstrich", amount: 0.33, type: "PER_DAY" };
const schokocreme = { order: o++, itemCategory, name: "Schokocreme", amount: 0.1, type: "PER_DAY" };
const fertigessenAbendbrot = { order: o++, itemCategory, name: "Fertigessen Abendbrot", amount: 1, type: "FIX", weight: 800 };

// Werkzeug
itemCategory = "Werkzeug";
const schraubenzieher = { order: o++, itemCategory, name: "Schraubenzieher", type: "NO_AMOUNT" };
const imbus = { order: o++, itemCategory, name: "Imbus", type: "NO_AMOUNT" };
const spannerSchluessel = { order: o++, itemCategory, name: "Spanner-Schlüssel", type: "NO_AMOUNT" };
const schlauch = { order: o++, itemCategory, name: "Schlauch", amount: 2, type: "FIX" };
const luftpumpe = { order: o++, itemCategory, name: "Luftpumpe", type: "NO_AMOUNT" };
const kettenoel = { order: o++, itemCategory, name: "Kettenöl", type: "NO_AMOUNT" };

// Fahrrad
itemCategory = "Fahrrad";
const fahrradSpanngurte = { order: o++, itemCategory, name: "Fahrradspanngurte", amount: 6, type: "FIX" };

// Klettern
itemCategory = "Klettern";
const kletterGurt = { order: o++, itemCategory, name: "Klettergurt", type: "NO_AMOUNT" };
const kletterHelm = { order: o++, itemCategory, name: "Kletterhelm", type: "NO_AMOUNT" };
const kletterSchuhe = { order: o++, itemCategory, name: "Kletterschuhe", type: "NO_AMOUNT" };
const kletterBrille = { order: o++, itemCategory, name: "Kletterbrille", type: "NO_AMOUNT" };
const sicherungsgeraet = { order: o++, itemCategory, name: "Sicherungsgerät", type: "NO_AMOUNT" };
const exen = { order: o++, itemCategory, name: "Exen", amount: 12, type: "FIX" };
const chalk = { order: o++, itemCategory, name: "Chalk", type: "NO_AMOUNT" };
const karabinerSchlingenTube = {
  order: o++,
  itemCategory,
  name: "Karabiner, Schlingen, Tuber",
  type: "NO_AMOUNT",
};

// Winterurlaub
itemCategory = "Winterurlaub";
const ski = { order: o++, itemCategory, name: "Ski", type: "NO_AMOUNT" };
const skistoecker = { order: o++, itemCategory, name: "Skistöcker", type: "NO_AMOUNT" };
const skibrille = { order: o++, itemCategory, name: "Skibrille", type: "NO_AMOUNT" };
const skihelm = { order: o++, itemCategory, name: "Skihelm", type: "NO_AMOUNT" };
const skisocken = { order: o++, itemCategory, name: "Skisocken", amount: 2, type: "FIX" };
const skihose = { order: o++, itemCategory, name: "Skihose", amount: 1, type: "FIX" };
const skipullover = { order: o++, itemCategory, name: "Skipullover", amount: 1, type: "FIX" };
const skijacke = { order: o++, itemCategory, name: "Skijacke", amount: 1, type: "FIX" };
const skischuhe = { order: o++, itemCategory, name: "Skischuhe", amount: 1, type: "FIX" };
const skihandschuhe = { order: o++, itemCategory, name: "SKihandschuhe", amount: 1, type: "FIX" };

// Taschen
itemCategory = "Taschen";
const fahrradTasche = { order: o++, itemCategory, name: "Fahrradtasche", amount: 2, type: "FIX" };
const wasserRollSack = { order: o++, itemCategory, name: "Wasserrollsack", amount: 1, type: "FIX" };
const lenkerTasche = { order: o++, itemCategory, name: "Lenkertasche", amount: 1, type: "FIX" };
const werkzeugTasche = { order: o++, itemCategory, name: "Werkzeugtasche", amount: 1, type: "FIX" };
const wanderRucksack = {
  order: o++,
  itemCategory,
  name: "Wanderrucksack",
  amount: 1,
  type: "FIX",
  weight: 850,
};
const kleinerQuechuaRucksack = {
  order: o++,
  itemCategory,
  name: "Kleiner Quechua Rucksack",
  amount: 1,
  type: "FIX",
  weight: 100,
};

const config = [
  {
    name: "Basics",
    items: [
      // Kleidung
      unterwaesche,
      socken,
      tShirt,
      jeans,
      kurzeHose,
      fleeceJacke,
      pullover,
      dickeSocken,
      schlafshirt,
      jogginghose,
      regenjacke,
      softshelljacke,
      schlauchtuch,
      badehose,
      flipflops,
      turnSchuhe,

      // Hygiene
      zahnbuerste,
      buerste,
      sonnencreme,
      waschlappen,
      handtuch,
      duschzeug,
      pinzetteScherePfeile,
      ohrstaebchen,
      taschentuecher,

      // Misc
      sonnenbrille,
      brille,
      ersteHilfePlfasterIbu,
      plastiktueten,
      handy,
      ladekabel,
      powerbank,
      kindle,
      stirnlampe,
      buecher,
      kopfhoehrer,
      kamera,
      spiele,
      kleinePlastikbeutel,
      naehzeug,
      portemonaie,
      tagebuch,
      haekelzeug,
      snacks,
    ],
  },
  {
    name: "Wandern",
    items: [
      zipWanderhose,
      merinoUnterwaesche,
      picknickDecke,
      knieBandage,

      wandershirt,
      wanderhose,
      wanderSocken,
      wanderSchuhe,

      wanderRucksack,
      kleinerQuechuaRucksack,

      tupperbuechse,
      wanderstoecker,
    ],
  },
  {
    name: "Klettern",
    items: [
      kletterHose,
      zipWanderhose,
      kletterShirt,
      kletterPullover,

      wanderSchuhe,

      tupperbuechse,
      handcreme,
      picknickDecke,

      kletterGurt,
      sicherungsgeraet,
      exen,
      chalk,
      karabinerSchlingenTube,
      kletterBrille,
      kletterHelm,
      kletterSchuhe,
    ],
  },
  {
    name: "Fahrradtour",
    items: [
      // Kleidung
      fahrradShirt,
      zipWanderhose,
      basecap,
      fahrradHandschuhe,

      // Misc/Technik
      picknickDecke,
      stoffbeutel,
      kleineWassersaecke,
      gpsTracks,
      knieBandage,

      // Küche
      tupperbuechse,
      spork,
      taschenMesser,

      // Essen
      nuesse,
      schokokekse,

      // Fahrrad
      fahrradTasche,
      wasserRollSack,
      lenkerTasche,
      werkzeugTasche,
      fahrradSpanngurte,

      // Werkzeug
      schraubenzieher,
      imbus,
      spannerSchluessel,
      schlauch,
      luftpumpe,
      kettenoel,
    ],
  },
  {
    name: "Jakobsweg",
    items: [
      muetze,
      schlauchtuch,
      { ...tShirt, type: "FIX", amount: 1 },
      { ...unterwaesche, type: "FIX", amount: 3 },
      badehose,
      jogginghose,
      schlafshirt,

      zipWanderhose,
      fleeceJacke,
      softshelljacke,
      regenjacke,
      { ...wandershirt, amount: 2 },
      wanderSocken,
      wanderSchuhe,

      wanderRucksack,
      kleinerQuechuaRucksack,
      kleinerSchlafsack,

      knieBandage,

      tupperbuechse,
      spork,
      kuechenRolle,

      pilgerausweis,
      wanderfuehrer,
      schafsWolle,
      fingertape,
      vorhaengeschloss,
      ausweiskopie,
    ],
  },
  {
    name: "Skiurlaub",
    items: [
      ski,
      skistoecker,

      skischuhe,
      skihandschuhe,
      skisocken,
      skihose,
      merinoUnterwaesche,

      skipullover,
      dickeOma,
      skijacke,

      skibrille,
      skihelm,
    ],
  },
  {
    name: "Workation",
    items: [arbeitsLaptop, dockingstationAdapter, kopfhoererKlinke],
  },
  {
    name: "FeWo",
    items: [
      gamingLaptop,
      maus,
      bluetoothSpeaker,
      controller,

      picknickDecke,
    ],
  },
  {
    name: "Camping",
    items: [
      // Kleidung
      merinoUnterwaesche,

      // Hygiene
      klopapier,

      // Zeltplatz
      zelt,
      zeltLappen,
      zeltPlane,
      schlafsack,
      isomatte,
      campingStuhl,

      // kochen
      campingKocher,
      gaskartusche,
      topfPfanne,

      spork,
      schuessel,
      becher,
      messerGabelLoeffel,

      taschenMesser,
      kuechenRolle,
      geschirrHandtuch,
      spuelzeug,

      // Essen
      muesli,
      joghurt,
      apfel,
      banane,
      nuesse,
      mueslieriegel,
      brotscheiben,
      aufstrich,
      schokocreme,
      fertigessenAbendbrot,


      // Misc
      kleinePlastikbeutel,
      thermosKanne,
      picknickDecke,

    ],
  },
];

window.config = config;
