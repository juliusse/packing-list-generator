export type ConfigurationItem = {
  order: number;
  itemCategory: string;
  name: string;
  weight?: number;
  amount?: number;
  type: "FIX" | "PER_DAY" | "NO_AMOUNT";
};

export type ConfigurationCategory = {
  name: string;
  items: ConfigurationItem[];
};

export type Configuration = {
  allCategories: ConfigurationCategory[];
  numberOfDays: number;
  selectedCategories: string[];
  showConfiguration: boolean;
  title: string;
};
