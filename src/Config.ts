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

const config: Category[] = [
  {
    name: "Allgemein",
    items: [
      { name: "Socken", itemCategory: "Kleidung", amount: 0.3, type: "PER_DAY" },
      { name: "Unterwäsche", itemCategory: "Kleidung", amount: 1, type: "PER_DAY" },
      { name: "Jeans", itemCategory: "Kleidung", amount: 1, type: "FIX" },
      { name: "Kurze Hose", itemCategory: "Kleidung", amount: 1, type: "FIX" },
      { name: "T-Shirt", itemCategory: "Kleidung", amount: 0.5, type: "PER_DAY" },
      { name: "Pullover", itemCategory: "Kleidung", amount: 1, type: "FIX" },
      { name: "Schlafshirt", itemCategory: "Kleidung", amount: 1, type: "FIX" },
      { name: "Jogginghose (Kurz/Lang)", itemCategory: "Kleidung", amount: 1, type: "FIX" },
      { name: "Regenjacke", itemCategory: "Kleidung", amount: 1, type: "FIX" },
      { name: "Softshelljacke", itemCategory: "Kleidung", amount: 1, type: "FIX" },
      { name: "Badehose", itemCategory: "Kleidung", amount: 1, type: "FIX" },
      { name: "Flipflops", itemCategory: "Kleidung", amount: 1, type: "FIX" },

      { name: "Zahnbürste", itemCategory: "Hygiene", amount: 1, type: "FIX" },
      { name: "Zahnpasta", itemCategory: "Hygiene", amount: 1, type: "FIX" },
      { name: "Bürste", itemCategory: "Hygiene", amount: 1, type: "FIX" },
      { name: "Sonnencreme", itemCategory: "Hygiene", amount: 1, type: "FIX" },
      { name: "Waschlappen", itemCategory: "Hygiene", amount: 1, type: "FIX" },
      { name: "Duschzeug", itemCategory: "Hygiene", amount: 1, type: "FIX" },
      { name: "Handtuch", itemCategory: "Hygiene", amount: 1, type: "FIX" },
      { name: "Pinzette/Nagelschere/Pfeile", itemCategory: "Hygiene", amount: 1, type: "FIX" },

      { name: "Sonnebrille", itemCategory: "Gadgets", amount: 1, type: "FIX" },
      { name: "Brille", itemCategory: "Gadgets", amount: 1, type: "FIX" },
      { name: "Erste-Hilfe/Pflaster/Ibu", itemCategory: "Gadgets", amount: 1, type: "FIX" },
      { name: "Handy", itemCategory: "Gadgets", amount: 1, type: "FIX" },
      { name: "Ladekabel", itemCategory: "Gadgets", amount: 1, type: "FIX" },
      { name: "Powerbank (voll)", itemCategory: "Gadgets", amount: 1, type: "FIX" },
      { name: "Kindle/Tablet", itemCategory: "Gadgets", amount: 1, type: "FIX" },
      { name: "Stirnlampe", itemCategory: "Gadgets", amount: 1, type: "FIX" },
      { name: "Bücher", itemCategory: "Gadgets", amount: 1, type: "FIX" },
      { name: "Kamera", itemCategory: "Gadgets", amount: 1, type: "FIX" },
    ],
  },
  {
    name: "Klettern",
    items: [
      { itemCategory: "Kletterequipment", name: "Exen", amount: 12, type: "FIX" },
      { itemCategory: "Hygiene", name: "Handcreme", amount: 1, type: "FIX" },
    ],

  },
  {
    name: "Zelten",
    items: [{ itemCategory: "Camping", name: "Zelt", amount: 1, type: "FIX" }],
  },
];

export default config;
