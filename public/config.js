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
const flipflops = { order: o++, itemCategory, name: "Flipflops", amount: 1, type: "FIX", weight: 300 };
const fahrradShirt = { order: o++, itemCategory, name: "Fahrradshirt", amount: 2, type: "FIX" };
const zipWanderhose = { order: o++, itemCategory, name: "Zipwanderhose", amount: 1, type: "FIX", weight: 415 };
const wanderhose = { order: o++, itemCategory, name: "Wanderhose", amount: 1, type: "FIX" };
const schlauchtuch = { order: o++, itemCategory, name: "Schlauchtuch", amount: 1, type: "FIX", weight: 40 };
const basecap = { order: o++, itemCategory, name: "Basecap", amount: 1, type: "FIX" };
const fahrradHandschuhe = { order: o++, itemCategory, name: "Fahrradhandschuhe", amount: 1, type: "FIX" };
const wandershirt = { order: o++, itemCategory, name: "Wandershirt", amount: 3, type: "FIX" };
const merinoUnterwaesche = { order: o++, itemCategory, name: "Merinounterwäsche", amount: 1, type: "FIX" };
const wanderSocken = { order: o++, itemCategory, name: "Wandersocken", amount: 2, type: "FIX", weight: 65 };
const wanderSchuhe = { order: o++, itemCategory, name: "Wanderschuhe", amount: 1, type: "FIX" };
const kletterHose = { order: o++, itemCategory, name: "Kletterhose", amount: 1, type: "FIX" };
const kletterShirt = { order: o++, itemCategory, name: "Klettershirt", amount: 0.5, type: "PER_DAY" };
const kletterPullover = { order: o++, itemCategory, name: "Kletterpullover", amount: 1, type: "FIX" };
const muetze = { order: o++, itemCategory, name: "Mütze", amount: 1, type: "FIX", weight: 70 };

// Hygiene
itemCategory = "Hygiene";
const zahnbuerste = { order: o++, itemCategory, name: "Zahnbürste", amount: 1, type: "FIX", weight: 400 };
const zahnpasta = { order: o++, itemCategory, name: "Zahnpasta", amount: 1, type: "FIX" };
const buerste = { order: o++, itemCategory, name: "Bürste", amount: 1, type: "FIX", weight: 50 };
const sonnencreme = { order: o++, itemCategory, name: "Sonnencreme", amount: 1, type: "FIX", weight: 200 };
const waschlappen = { order: o++, itemCategory, name: "Waschlappen", amount: 1, type: "FIX", weight: 30 };
const duschzeug = { order: o++, itemCategory, name: "Duschzeug", amount: 1, type: "FIX" };
const handtuch = { order: o++, itemCategory, name: "Handtuch", amount: 2, type: "FIX", weight: 170 };
const pinzetteScherePfeile = {
  order: o++,
  itemCategory,
  name: "Pinzette/Nagelschere/Pfeile",
  amount: 1,
  type: "FIX",
};
const ohrstaebchen = { order: o++, itemCategory, name: "Ohrstäbchen", type: "NO_AMOUNT" };
const taschentuecher = { order: o++, itemCategory, name: "Taschentücher", amount: 0.33, type: "PER_DAY" };
const handcreme = { order: o++, itemCategory, name: "Handcreme", type: "NO_AMOUNT" };

// Gadgets
itemCategory = "Misc/Technik";
const sonnenbrille = { order: o++, itemCategory, name: "Sonnenbrille", type: "NO_AMOUNT", weight: 30 };
const brille = { order: o++, itemCategory, name: "Brille", type: "NO_AMOUNT", weight: 90 };
const ersteHilfePlfasterIbu = {
  order: o++,
  itemCategory,
  name: "Erste-Hilfe/Pflaster/Ibu",
  type: "NO_AMOUNT",
};
const handy = { order: o++, itemCategory, name: "Handy", type: "NO_AMOUNT", weight: 170 };
const ladekabel = { order: o++, itemCategory, name: "Ladekabel", type: "NO_AMOUNT" };
const powerbank = { order: o++, itemCategory, name: "Powerbank (voll)", type: "NO_AMOUNT", weight: 380 };
const kindle = { order: o++, itemCategory, name: "Kindle/Tablet", type: "NO_AMOUNT", weight: 325 };
const stirnlampe = { order: o++, itemCategory, name: "Stirnlampe", type: "NO_AMOUNT", weight: 90 };
const buecher = { order: o++, itemCategory, name: "Bücher", type: "NO_AMOUNT" };
const kamera = { order: o++, itemCategory, name: "Kamera", type: "NO_AMOUNT" };
const picknickDecke = { order: o++, itemCategory, name: "Picknickdecke", type: "NO_AMOUNT" };
const kopfhoehrer = { order: o++, itemCategory, name: "Kopfhöhrer (NC?)", type: "NO_AMOUNT" };
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
const arbeitsLaptop = { order: o++, itemCategory, name: "Arbeitslaptop & Netzteil", type: "NO_AMOUNT" };
const kopfhoererKlinke = { order: o++, itemCategory, name: "Kopfhörer mit Klinke", type: "NO_AMOUNT" };
const dockingstationAdapter = { order: o++, itemCategory, name: "Dockingstation Adapter", type: "NO_AMOUNT" };

// Küche
itemCategory = "Küche";
const tupperbuechse = { order: o++, itemCategory, name: "Tupperbüchse", amount: 1, type: "FIX" };
const spork = { order: o++, itemCategory, name: "Spork/Löffel", amount: 1, type: "FIX", weight: 35 };
const taschenMesser = { order: o++, itemCategory, name: "Taschenmesser", amount: 1, type: "FIX" };
const kuechenRolle = { order: o++, itemCategory, name: "Küchenrolle", type: "NO_AMOUNT" };
const kleinePlastikbeutel = { order: o++, itemCategory, name: "Kleine Plastikbeutel", type: "NO_AMOUNT" };

// Essen
itemCategory = "Essen";
const nuesse = { order: o++, itemCategory, name: "Nüsse", amount: 1, type: "FIX" };
const schokokekse = { order: o++, itemCategory, name: "Schokokekse", amount: 0.33, type: "PER_DAY" };

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

      // Hygiene
      zahnbuerste,
      zahnpasta,
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
    ],
  },
  {
    name: "Wandern",
    items: [
      zipWanderhose,
      merinoUnterwaesche,

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
    name: "Workation",
    items: [arbeitsLaptop, dockingstationAdapter, kopfhoererKlinke],
  },
];

window.config = config;
