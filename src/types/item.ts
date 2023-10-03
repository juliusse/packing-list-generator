export type Item = {
  order: number;
  itemCategory: string;
  name: string;
  weight?: number;
  amount?: number;
  type: "FIX" | "PER_DAY" | "NO_AMOUNT";
};
