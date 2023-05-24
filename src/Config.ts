export type Item = {
  itemCategory: string;
  name: string;
  amount: number;
  type: "FIX" | "PER_DAY";
};

export type Category = {
  name: string;
  items: Item[];
};

let itemCategory = "";
// Kleidung
itemCategory = "Kleidung";
const socken: Item = { itemCategory, name: "Socken", amount: 0.3, type: "PER_DAY" };
const dickeSocken: Item = { itemCategory, name: "Dicke Socken", amount: 1, type: "FIX" };
const unterwaesche: Item = { itemCategory, name: "Unterwäsche", amount: 1, type: "PER_DAY" };
const jeans: Item = { itemCategory, name: "Jeans", amount: 1, type: "FIX" };
const kurzeHose: Item = { itemCategory, name: "Kurze Hose", amount: 1, type: "FIX" };
const tShirt: Item = { itemCategory, name: "T-Shirt", amount: 0.5, type: "PER_DAY" };
const pullover: Item = { itemCategory, name: "Pullover", amount: 1, type: "FIX" };
const fleeceJacke: Item = { itemCategory, name: "Fleecejacke", amount: 1, type: "FIX" };
const schlafshirt: Item = { itemCategory, name: "Schlafshirt", amount: 1, type: "FIX" };
const jogginghose: Item = { itemCategory, name: "Jogginghose (Kurz/Lang)", amount: 1, type: "FIX" };
const regenjacke: Item = { itemCategory, name: "Regenjacke", amount: 1, type: "FIX" };
const softshelljacke: Item = { itemCategory, name: "Softshelljacke", amount: 1, type: "FIX" };
const badehose: Item = { itemCategory, name: "Badehose", amount: 1, type: "FIX" };
const flipflops: Item = { itemCategory, name: "Flipflops", amount: 1, type: "FIX" };
const fahrradShirt: Item = { itemCategory, name: "Fahrradshirt", amount: 2, type: "FIX" };
const zipWanderhose: Item = { itemCategory, name: "Zipwanderhose", amount: 1, type: "FIX" };
const schlauchtuch: Item = { itemCategory, name: "Schlauchtuch", amount: 1, type: "FIX" };
const basecap: Item = { itemCategory, name: "Basecap", amount: 1, type: "FIX" };
const fahrradHandschuhe: Item = { itemCategory, name: "Fahrradhandschuhe", amount: 1, type: "FIX" };

// Hygiene
itemCategory = "Hygiene";
const zahnbuerste: Item = { itemCategory, name: "Zahnbürste", amount: 1, type: "FIX" };
const zahnpasta: Item = { itemCategory, name: "Zahnpasta", amount: 1, type: "FIX" };
const buerste: Item = { itemCategory, name: "Bürste", amount: 1, type: "FIX" };
const sonnencreme: Item = { itemCategory, name: "Sonnencreme", amount: 1, type: "FIX" };
const waschlappen: Item = { itemCategory, name: "Waschlappen", amount: 1, type: "FIX" };
const duschzeug: Item = { itemCategory, name: "Duschzeug", amount: 1, type: "FIX" };
const handtuch: Item = { itemCategory, name: "Handtuch", amount: 2, type: "FIX" };
const pinzetteScherePfeile: Item = { itemCategory, name: "Pinzette/Nagelschere/Pfeile", amount: 1, type: "FIX" };

// Gadgets
itemCategory = "Misc/Technik";
const sonnenbrille: Item = { itemCategory, name: "Sonnenbrille", amount: 1, type: "FIX" };
const brille: Item = { itemCategory, name: "Brille", amount: 1, type: "FIX" };
const ersteHilfePlfasterIbu: Item = { itemCategory, name: "Erste-Hilfe/Pflaster/Ibu", amount: 1, type: "FIX" };
const handy: Item = { itemCategory, name: "Handy", amount: 1, type: "FIX" };
const ladekabel: Item = { itemCategory, name: "Ladekabel", amount: 1, type: "FIX" };
const powerbank: Item = { itemCategory, name: "Powerbank (voll)", amount: 1, type: "FIX" };
const kindle: Item = { itemCategory, name: "Kindle/Tablet", amount: 1, type: "FIX" };
const stirnlampe: Item = { itemCategory, name: "Stirnlampe", amount: 1, type: "FIX" };
const buecher: Item = { itemCategory, name: "Bücher", amount: 1, type: "FIX" };
const kamera: Item = { itemCategory, name: "Kamera", amount: 1, type: "FIX" };
const picknickDecke: Item = { itemCategory, name: "Picknickdecke", amount: 1, type: "FIX" };
const kopfhoehrer: Item = { itemCategory, name: "Kopfhöhrer (NC?)", amount: 1, type: "FIX" };
const spiele: Item = { itemCategory, name: "Spiele", amount: 1, type: "FIX" };
const plastiktueten: Item = { itemCategory, name: "Plastiktüten", amount: 1, type: "FIX" };
const stoffbeutel: Item = { itemCategory, name: "Stoffbeutel", amount: 1, type: "FIX" };
const kleineWassersaecke: Item = { itemCategory, name: "Wassersack (5/10L)", amount: 1, type: "FIX" };

// Küche
itemCategory = "Küche";
const tupperbuechse: Item = { itemCategory, name: "Tupperbüchse", amount: 1, type: "FIX" };
const spork: Item = { itemCategory, name: "Spork/Löffel", amount: 1, type: "FIX" };
const taschenMesser: Item = { itemCategory, name: "Taschenmesser", amount: 1, type: "FIX" };

// Essen
itemCategory = "Essen";
const nuesse: Item = { itemCategory, name: "Nüsse", amount: 1, type: "FIX" };
const schokokekse: Item = { itemCategory, name: "Schokokekse", amount: 0.33, type: "FIX" };

// Werkzeug
itemCategory = "Werkzeug";
const schraubenzieher: Item = { itemCategory, name: "Schraubenzieher", amount: 1, type: "FIX" };
const imbus: Item = { itemCategory, name: "Imbus", amount: 1, type: "FIX" };
const spannerSchluessel: Item = { itemCategory, name: "Spanner-Schlüssel", amount: 1, type: "FIX" };
const schlauch: Item = { itemCategory, name: "Schlauch", amount: 2, type: "FIX" };
const luftpumpe: Item = { itemCategory, name: "Luftpumpe", amount: 1, type: "FIX" };
const kettenoel: Item = { itemCategory, name: "Kettenöl", amount: 1, type: "FIX" };


// Fahrrad
itemCategory = "Fahrrad";
const fahrradTasche: Item = { itemCategory, name: "Fahrradtasche", amount: 2, type: "FIX" };
const wasserRollSack: Item = { itemCategory, name: "Wasserrollsack", amount: 1, type: "FIX" };
const lenkerTasche: Item = { itemCategory, name: "Lenkertasche", amount: 1, type: "FIX" };
const werkzeugTasche: Item = { itemCategory, name: "Werkzeugtasche", amount: 1, type: "FIX" };
const fahrradSpanngurte: Item = { itemCategory, name: "Fahrradspanngurte", amount: 6, type: "FIX" };

const config: Category[] = [
  {
    name: "Klettern",
    items: [
      { itemCategory: "Kletterequipment", name: "Exen", amount: 12, type: "FIX" },
      { itemCategory: "Kletterequipment", name: "Klettergurt", amount: 1, type: "FIX" },
      { itemCategory: "Kletterequipment", name: "Sicherungsgerät", amount: 1, type: "FIX" },
      { itemCategory: "Kletterequipment", name: "Schlingen/Karabiner/Tuber", amount: 1, type: "FIX" },
      { itemCategory: "Kletterequipment", name: "Helm", amount: 1, type: "FIX" },
      { itemCategory: "Kletterequipment", name: "Kletterschuhe", amount: 2, type: "FIX" },
      // { name: "Kletterhose", amount: 1, type: "FIX" },
      // { name: "Klettershirt", amount: 0.34, type: "PER_DAY" },
    ],
  },
  {
    name: "Boofen",
    items: [
      { itemCategory: "Zelten", name: "Schlafsack", amount: 1, type: "FIX" },
      { itemCategory: "Zelten", name: "Stabile Malerplane", amount: 1, type: "FIX" },
      { itemCategory: "Zelten", name: "Isomatte", amount: 1, type: "FIX" },
      { itemCategory: "Zelten", name: "Kissen", amount: 1, type: "FIX" },
      // { name: "Merinounterwäsche", amount: 1, type: "FIX" },
      // { name: "Handcreme", amount: 1, type: "FIX" },
      // { name: "Klopapier", amount: 0.1, type: "PER_DAY" },
      // { name: "Feuchttücher", amount: 0.1, type: "PER_DAY" },
      { itemCategory: "Küche", name: "Spork", amount: 1, type: "FIX" },
      { itemCategory: "Küche", name: "Messer", amount: 1, type: "FIX" },
      { itemCategory: "Küche", name: "Küchenrolle", amount: 1, type: "FIX" },
      { itemCategory: "Küche", name: "Kleine Plastikbeutel", amount: 1, type: "FIX" },
      { itemCategory: "Küche", name: "Geschirrtuch", amount: 1, type: "FIX" },
      { itemCategory: "Küche", name: "Teller", amount: 1, type: "FIX" },
      { itemCategory: "Küche", name: "Schüssel", amount: 1, type: "FIX" },
      { itemCategory: "Küche", name: "Becher", amount: 1, type: "FIX" },
      { itemCategory: "Küche", name: "Weinflaschenöffner", amount: 1, type: "FIX" },
      // { name: "Stirnlampe", amount: 1, type: "FIX" },
      // { name: "Kerzen", amount: 5, type: "FIX" },
    ],
  },
  {
    name: "Fahrradtour",
    items: [
      // Kleidung
      { itemCategory: unterwaesche.itemCategory, name: unterwaesche.name, amount: 3, type: "FIX" },
      socken,
      jeans,
      { itemCategory: tShirt.itemCategory, name: tShirt.name, amount: 2, type: "FIX" },
      fleeceJacke,
      fahrradShirt,
      zipWanderhose,
      jogginghose,
      regenjacke,
      softshelljacke,
      schlauchtuch,
      badehose,
      flipflops,
      basecap,
      schlafshirt,
      dickeSocken,
      fahrradHandschuhe,

      // Hygiene
      zahnbuerste,
      zahnpasta,
      buerste,
      sonnencreme,
      waschlappen,
      handtuch,
      duschzeug,
      pinzetteScherePfeile,

      // Misc/Technik
      picknickDecke,
      sonnenbrille,
      brille,
      ersteHilfePlfasterIbu,
      handy,
      ladekabel,
      powerbank,
      kindle,
      stirnlampe,
      buecher,
      kamera,
      kopfhoehrer,
      spiele,
      plastiktueten,
      stoffbeutel,
      kleineWassersaecke,

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

export default config;
