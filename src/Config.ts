export type Item = {
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
    name: "Klettern",
    items: [{ name: "Exen", amount: 12, type: "FIX" }],
  },
  {
    name: "Zelten",
    items: [{ name: "Zelt", amount: 1, type: "FIX" }],
  },
  {
    name: "Klettern",
    items: [{ name: "Exen", amount: 12, type: "FIX" }],
  },
  {
    name: "Zelten",
    items: [{ name: "Zelt", amount: 1, type: "FIX" }],
  },
  {
    name: "Klettern",
    items: [{ name: "Exen", amount: 12, type: "FIX" }],
  },
  {
    name: "Zelten",
    items: [{ name: "Zelt", amount: 1, type: "FIX" }],
  },
  {
    name: "Klettern",
    items: [{ name: "Exen", amount: 12, type: "FIX" }],
  },
  {
    name: "Zelten",
    items: [{ name: "Zelt", amount: 1, type: "FIX" }],
  },
];

export default config;
