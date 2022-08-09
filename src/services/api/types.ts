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

export type DraftRecipe = {
  name: string;
  description: string;
  cover: string | null;
};

export type NewRecipe = {
  name: string;
  description: string;
  ingredients: NewRecipeIngredient[];
  steps: NewRecipeStep[];
};

export type NewRecipeIngredient = {
  productId: string;
  quantity: number;
  unitId: string;
};

export type RecipeIngredient = {
  id: string; // TODO: productId
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
  id: string;
  orderNumber: number;
  text: string;
  image: string | null;
};

export type NewRecipeStep = {
  orderNumber: number;
  text: string;
};
