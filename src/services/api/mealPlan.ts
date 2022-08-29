// TODO: Fetch this and all reference data in one request at the run of app and put them all to redux (After MVP)
import {MealPlan, MealType} from './types';
import {sleep} from 'src/services/api/utils';
import {sameDays} from 'src/utils/dateUtils';

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

export const MOCK_MEAL_PLAN: MealPlan[] = [
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
