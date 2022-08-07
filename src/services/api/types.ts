export type Category = {
  id: string;
  name: string;
  nameEn: string;
};

export type Product = {
  id: string;
  name: string;
  category: {
    id: string;
    name: string;
  };
  image: string | null;
};

export type NewProduct = {
  name: string;
  categoryId: string;
  image?: string;
};

export type Recipe = {
  id: string;
  name: string;
  cover: string | null;
};

export type DetailRecipe = Recipe & {
  description: string;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
};

export type RecipeIngredient = {
  id: string;
  name: string;
  quantity: {
    value: number;
    unit: ProductUnit;
  };
  image: string | null;
};

export type ProductUnit = {
  id: string;
  name: string;
  shortName: string;
  nameEn?: string;
  shortNameEn?: string;
};

export type RecipeStep = {
  id: number;
  orderNumber: number;
  text: string;
  image: string | null;
};
