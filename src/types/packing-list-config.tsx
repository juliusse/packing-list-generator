import { Category } from "./category";

export type PackingListConfig = {
  allCategories: Category[];
  numberOfDays: number;
  selectedCategories: string[];
  showConfiguration: boolean;
  title: string;
};
