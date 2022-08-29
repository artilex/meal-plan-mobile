export type Category = {
  id: string;
  name: string;
  nameEn: string;
};

export type SimpleProduct = {
  id: string;
  name: string;
  image: string | null;
};

export type Product = SimpleProduct & {
  category: {
    id: string;
    name: string;
  };
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
  text: string;
  image: string | null;
};

export type DeleteMealPlanItem = {
  mealPlanId: number;
  mealPlanItemId: number;
};

export type MealType = {
  id: number;
  name: string;
};

export type MealPlan = {
  id: number;
  recipes: MealPlanRecipe[];
  products: MealPlanProduct[];
  day: string;
};

export type MealPlanRecipe = {
  id: number;
  mealType: MealType;
  recipe: Recipe;
  servingCount: number;
};

export type MealPlanProduct = {
  id: number;
  mealType: MealType;
  product: SimpleProduct;
  quantity: {
    value: number;
    unit: ProductUnit;
  };
};
