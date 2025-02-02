export type ConfigurationItem = {
  order: number;
  itemCategory: string;
  name: string;
  weight?: number;
  amount?: number;
  type: "FIX" | "PER_DAY" | "NO_AMOUNT";
};

export type Activity = {
  name: string;
  items: ConfigurationItem[];
};

export type Configuration = {
  numberOfDays: number;
  title: string;
};
