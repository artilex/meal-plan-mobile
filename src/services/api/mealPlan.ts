// TODO: Fetch this and all reference data in one request at the run of app and put them all to redux (After MVP)
import {MealPlan, MealType, Recipe} from './types';
import {sleep} from 'src/services/api/utils';
import {sameDays} from 'src/utils/dateUtils';
import {getRecipeById} from 'src/services/api/recipe';

export const MOCK_MEAL_TYPES: MealType[] = [
  {
    id: 1,
    name: 'Завтрак',
  },
  {
    id: 2,
    name: 'Обед',
  },
  {
    id: 3,
    name: 'Ужин',
  },
  {
    id: 4,
    name: 'Перекус',
  },
];

export let MOCK_MEAL_PLAN: MealPlan[] = [
  {
    id: 1,
    recipes: [
      {
        id: 1,
        recipe: {
          id: 'rp14',
          name: 'ПП-хачапури',
          cover:
            'https://sun2-9.userapi.com/impg/P1fP70PDYaRcr3HJ5zGn3CCDA_b9ZuNWAfArEg/5s_WenZrQGw.jpg?size=1280x1280&quality=95&sign=1658e82d2d49344bc3f301e205567a0e&type=album',
        },
        servingCount: 2,
        mealType: MOCK_MEAL_TYPES[0],
      },
      {
        id: 2,
        recipe: {
          id: 'rp19',
          name: 'Куриные котлеты с сыром',
          cover: null,
        },
        servingCount: 1,
        mealType: MOCK_MEAL_TYPES[1],
      },
      {
        id: 3,
        recipe: {
          id: 'rp10',
          name: 'Рис с овощами',
          cover: null,
        },
        servingCount: 1,
        mealType: MOCK_MEAL_TYPES[1],
      },
    ],
    products: [
      {
        id: 1,
        product: {
          id: 'p5',
          name: 'Огурцы',
          image: null,
        },
        quantity: {
          value: 2,
          unit: {
            id: 'pu2',
            name: 'штук',
            shortName: 'шт',
            nameEn: '',
            shortNameEn: '',
          },
        },
        mealType: MOCK_MEAL_TYPES[2],
      },
      {
        id: 2,
        product: {
          id: 'p4',
          name: 'Помидоры',
          image: null,
        },
        quantity: {
          value: 1,
          unit: {
            id: 'pu2',
            name: 'штук',
            shortName: 'шт',
            nameEn: '',
            shortNameEn: '',
          },
        },
        mealType: MOCK_MEAL_TYPES[2],
      },
      {
        id: 3,
        product: {
          id: 'p17',
          name: 'Творог Мягкий 5%',
          image: null,
        },
        quantity: {
          value: 100,
          unit: {
            id: 'pu1',
            name: 'грамм',
            shortName: 'г',
            nameEn: 'gram',
            shortNameEn: 'g',
          },
        },
        mealType: MOCK_MEAL_TYPES[0],
      },
    ],
    day: '2022-09-01T00:00:00.000Z',
  },
];

export const fetchMealPlanByDay = async (
  day: Date,
): Promise<MealPlan | undefined> => {
  await sleep(0.5);

  return MOCK_MEAL_PLAN.find(item => sameDays(new Date(item.day), day));
};

export const deleteMealPlanRecipe = async (
  mealPlanId: number,
  mealPlanRecipeId: number,
): Promise<MealPlan> => {
  await sleep(0.5);

  MOCK_MEAL_PLAN = MOCK_MEAL_PLAN.map(mealPlan => {
    if (mealPlan.id === mealPlanId) {
      return {
        ...mealPlan,
        recipes: mealPlan.recipes.filter(item => item.id !== mealPlanRecipeId),
      };
    }

    return mealPlan;
  });

  return MOCK_MEAL_PLAN.find(item => item.id === mealPlanId) as MealPlan;
};

export const deleteMealPlanProduct = async (
  mealPlanId: number,
  mealPlanProductId: number,
): Promise<MealPlan> => {
  await sleep(0.5);

  MOCK_MEAL_PLAN = MOCK_MEAL_PLAN.map(mealPlan => {
    if (mealPlan.id === mealPlanId) {
      return {
        ...mealPlan,
        products: mealPlan.products.filter(
          item => item.id !== mealPlanProductId,
        ),
      };
    }

    return mealPlan;
  });

  return MOCK_MEAL_PLAN.find(item => item.id === mealPlanId) as MealPlan;
};

export const addRecipeToMealPlan = async (
  mealTypeId: number,
  day: string,
  recipeIds: string[],
): Promise<MealPlan | void> => {
  const mealType = MOCK_MEAL_TYPES.find(item => item.id === mealTypeId);
  const recipes = await Promise.all(
    recipeIds.map(recipeId => getRecipeById(recipeId)),
  );

  if (recipes && recipes.length > 0 && mealType) {
    let mealPlan = MOCK_MEAL_PLAN.find(item =>
      sameDays(new Date(day), new Date(item.day)),
    );

    if (mealPlan && mealPlan.id) {
      MOCK_MEAL_PLAN = MOCK_MEAL_PLAN.map(item => {
        if (item.id === mealPlan?.id) {
          return {
            ...item,
            recipes: [
              ...item.recipes,
              ...recipes.map((recipe, index) => ({
                id: item.recipes.length + index + 1,
                mealType,
                // TODO: DO I NEED NESTED RECIPE???
                recipe: recipe as Recipe,
                // TODO: Implement it after MVP
                servingCount: 1,
                // TODO: Handle serving count for ingredients in shopping list screen
                ingredients: recipe?.ingredients ?? [],
              })),
            ],
          };
        }

        return item;
      });
    } else {
      MOCK_MEAL_PLAN = [
        ...MOCK_MEAL_PLAN,
        {
          id: MOCK_MEAL_PLAN.length + 1,
          recipes: recipes.map((item, index) => ({
            id: index + 1,
            mealType,
            // TODO: DO I NEED NESTED RECIPE???
            recipe: item as Recipe,
            // TODO: Implement it after MVP
            servingCount: 1,
          })),
          products: [],
          day,
        },
      ];
    }
  }

  return MOCK_MEAL_PLAN.find(item =>
    sameDays(new Date(item.day), new Date(day)),
  );
};
