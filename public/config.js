let itemCategory = "";
// Kleidung
itemCategory = "Kleidung";
const socken = { itemCategory, name: "Socken", amount: 0.3, type: "PER_DAY" };
const dickeSocken = { itemCategory, name: "Dicke Socken", amount: 1, type: "FIX" };
const unterwaesche = { itemCategory, name: "Unterwäsche", amount: 1, type: "PER_DAY" };
const jeans = { itemCategory, name: "Jeans", amount: 1, type: "FIX" };
const kurzeHose = { itemCategory, name: "Kurze Hose", amount: 1, type: "FIX" };
const tShirt = { itemCategory, name: "T-Shirt", amount: 0.5, type: "PER_DAY" };
const pullover = { itemCategory, name: "Pullover", amount: 1, type: "FIX" };
const fleeceJacke = { itemCategory, name: "Fleecejacke", amount: 1, type: "FIX" };
const schlafshirt = { itemCategory, name: "Schlafshirt", amount: 1, type: "FIX" };
const jogginghose = { itemCategory, name: "Jogginghose (Kurz/Lang)", amount: 1, type: "FIX" };
const regenjacke = { itemCategory, name: "Regenjacke", amount: 1, type: "FIX" };
const softshelljacke = { itemCategory, name: "Softshelljacke", amount: 1, type: "FIX" };
const badehose = { itemCategory, name: "Badehose", amount: 1, type: "FIX" };
const flipflops = { itemCategory, name: "Flipflops", amount: 1, type: "FIX" };
const fahrradShirt = { itemCategory, name: "Fahrradshirt", amount: 2, type: "FIX" };
const zipWanderhose = { itemCategory, name: "Zipwanderhose", amount: 1, type: "FIX" };
const wanderhose = { itemCategory, name: "Wanderhose", amount: 1, type: "FIX" };
const schlauchtuch = { itemCategory, name: "Schlauchtuch", amount: 1, type: "FIX" };
const basecap = { itemCategory, name: "Basecap", amount: 1, type: "FIX" };
const fahrradHandschuhe = { itemCategory, name: "Fahrradhandschuhe", amount: 1, type: "FIX" };
const wandershirt = { itemCategory, name: "Wandershirt", amount: 3, type: "FIX" };
const merinoUnterwaesche = { itemCategory, name: "Merinounterwäsche", amount: 1, type: "FIX" };
const wanderSocken = { itemCategory, name: "Wandersocken", amount: 2, type: "FIX" };
const wanderSchuhe = { itemCategory, name: "Wanderschuhe", amount: 1, type: "FIX" };
const kletterHose = { itemCategory, name: "Kletterhose", amount: 1, type: "FIX" };
const kletterShirt = { itemCategory, name: "Klettershirt", amount: 0.5, type: "PER_DAY" };
const kletterPullover = { itemCategory, name: "Klettershirt", amount: 1, type: "FIX" };

// Hygiene
itemCategory = "Hygiene";
const zahnbuerste = { itemCategory, name: "Zahnbürste", amount: 1, type: "FIX" };
const zahnpasta = { itemCategory, name: "Zahnpasta", amount: 1, type: "FIX" };
const buerste = { itemCategory, name: "Bürste", amount: 1, type: "FIX" };
const sonnencreme = { itemCategory, name: "Sonnencreme", amount: 1, type: "FIX" };
const waschlappen = { itemCategory, name: "Waschlappen", amount: 1, type: "FIX" };
const duschzeug = { itemCategory, name: "Duschzeug", amount: 1, type: "FIX" };
const handtuch = { itemCategory, name: "Handtuch", amount: 2, type: "FIX" };
const pinzetteScherePfeile = {
  itemCategory,
  name: "Pinzette/Nagelschere/Pfeile",
  amount: 1,
  type: "FIX",
};

// Gadgets
itemCategory = "Misc/Technik";
const sonnenbrille = { itemCategory, name: "Sonnenbrille", type: "NO_AMOUNT" };
const brille = { itemCategory, name: "Brille", type: "NO_AMOUNT" };
const ersteHilfePlfasterIbu = {
  itemCategory,
  name: "Erste-Hilfe/Pflaster/Ibu",
  type: "NO_AMOUNT",
};
const handy = { itemCategory, name: "Handy", type: "NO_AMOUNT" };
const ladekabel = { itemCategory, name: "Ladekabel", type: "NO_AMOUNT" };
const powerbank = { itemCategory, name: "Powerbank (voll)", type: "NO_AMOUNT" };
const kindle = { itemCategory, name: "Kindle/Tablet", type: "NO_AMOUNT" };
const stirnlampe = { itemCategory, name: "Stirnlampe", type: "NO_AMOUNT" };
const buecher = { itemCategory, name: "Bücher", type: "NO_AMOUNT" };
const kamera = { itemCategory, name: "Kamera", type: "NO_AMOUNT" };
const picknickDecke = { itemCategory, name: "Picknickdecke", type: "NO_AMOUNT" };
const kopfhoehrer = { itemCategory, name: "Kopfhöhrer (NC?)", type: "NO_AMOUNT" };
const spiele = { itemCategory, name: "Spiele", type: "NO_AMOUNT" };
const plastiktueten = { itemCategory, name: "Plastiktüten", type: "NO_AMOUNT" };
const stoffbeutel = { itemCategory, name: "Stoffbeutel", type: "NO_AMOUNT" };
const kleineWassersaecke = { itemCategory, name: "Wassersack (5/10L)", type: "NO_AMOUNT" };
const gpsTracks = { itemCategory, name: "GPS Tracks", type: "NO_AMOUNT" };
const wanderstoecker = { itemCategory, name: "Wanderstöcker", type: "NO_AMOUNT" };

// Küche
itemCategory = "Küche";
const tupperbuechse = { itemCategory, name: "Tupperbüchse", amount: 1, type: "FIX" };
const spork = { itemCategory, name: "Spork/Löffel", amount: 1, type: "FIX" };
const taschenMesser = { itemCategory, name: "Taschenmesser", amount: 1, type: "FIX" };

// Essen
itemCategory = "Essen";
const nuesse = { itemCategory, name: "Nüsse", amount: 1, type: "FIX" };
const schokokekse = { itemCategory, name: "Schokokekse", amount: 0.33, type: "PER_DAY" };

// Werkzeug
itemCategory = "Werkzeug";
const schraubenzieher = { itemCategory, name: "Schraubenzieher", type: "NO_AMOUNT" };
const imbus = { itemCategory, name: "Imbus", type: "NO_AMOUNT" };
const spannerSchluessel = { itemCategory, name: "Spanner-Schlüssel", type: "NO_AMOUNT" };
const schlauch = { itemCategory, name: "Schlauch", amount: 2, type: "FIX" };
const luftpumpe = { itemCategory, name: "Luftpumpe", type: "NO_AMOUNT" };
const kettenoel = { itemCategory, name: "Kettenöl", type: "NO_AMOUNT" };

// Fahrrad
itemCategory = "Fahrrad";
const fahrradSpanngurte = { itemCategory, name: "Fahrradspanngurte", amount: 6, type: "FIX" };

// Klettern
itemCategory = "Klettern";
const kletterGurt = { itemCategory, name: "Klettergurt", type: "NO_AMOUNT" };
const kletterHelm = { itemCategory, name: "Kletterhelm", type: "NO_AMOUNT" };
const kletterSchuhe = { itemCategory, name: "Kletterschuhe", type: "NO_AMOUNT" };
const kletterBrille = { itemCategory, name: "Kletterbrille", type: "NO_AMOUNT" };
const sicherungsgeraet = { itemCategory, name: "Sicherungsgerät", type: "NO_AMOUNT" };
const exen = { itemCategory, name: "Exen", amount: 12, type: "FIX" };
const chalk = { itemCategory, name: "Chalk", type: "NO_AMOUNT" };
const karabinerSchlingenTube = {
  itemCategory,
  name: "Karabiner, Schlingen, Tuber",
  type: "NO_AMOUNT",
};

// Taschen
itemCategory = "Taschen";
const fahrradTasche = { itemCategory, name: "Fahrradtasche", amount: 2, type: "FIX" };
const wasserRollSack = { itemCategory, name: "Wasserrollsack", amount: 1, type: "FIX" };
const lenkerTasche = { itemCategory, name: "Lenkertasche", amount: 1, type: "FIX" };
const werkzeugTasche = { itemCategory, name: "Werkzeugtasche", amount: 1, type: "FIX" };
const wanderRucksack = { itemCategory, name: "Wanderrucksack", amount: 1, type: "FIX" };
const kleinerQuechuaRucksack = {
  itemCategory,
  name: "Kleiner Quechua Rucksack",
  amount: 1,
  type: "FIX",
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
];

window.config = config;
