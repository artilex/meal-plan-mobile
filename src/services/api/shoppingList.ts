import {ShoppingProduct} from 'src/services/api/types';
import {sameDays} from 'src/utils/dateUtils';
import {MOCK_MEAL_PLAN} from 'src/services/api/mealPlan';
import {sleep} from 'src/services/api/utils';

const MOCK = [
  {
    name: 'Title 1',
    products: [
      {
        id: '1',
        image: null,
        name: 'Product Name 1',
        quantity: {
          unit: {
            id: '1',
            name: 'Tttt',
            shortName: 'Tt',
          },
          value: 1,
        },
        isActive: false,
      },
      {
        id: '3',
        image: null,
        name: 'Product Name 3',
        quantity: {
          unit: {
            id: '1',
            name: 'Tttt',
            shortName: 'Tt',
          },
          value: 1,
        },
        isActive: true,
      },
    ],
  },
  {
    name: 'Title 2',
    products: [
      {
        id: '2',
        image: null,
        name: 'Product Name 2',
        quantity: {
          unit: {
            id: '1',
            name: 'Tttt',
            shortName: 'Tt',
          },
          value: 1,
        },
        isActive: false,
      },
    ],
  },
];

export const getShoppingListByDay = async (
  // TODO: Implement day later
  day: string,
): Promise<ShoppingProduct[]> => {
  await sleep(0.1);

  console.log(day);
  const currentMealPlan = MOCK_MEAL_PLAN.find(item =>
    sameDays(new Date(item.day), new Date()),
  );

  let products = currentMealPlan?.products.reduce(
    (result: ShoppingProduct[], product) => {
      if (
        result.some(
          item =>
            item.id === product.product.id &&
            item.quantity.unit.id === product.quantity.unit.id,
        )
      ) {
        result = result.map(item => {
          if (
            item.id === product.product.id &&
            item.quantity.unit.id === product.quantity.unit.id
          ) {
            return {
              ...item,
              quantity: {
                unit: item.quantity.unit,
                value: item.quantity.value + product.quantity.value,
              },
            };
          }

          return item;
        });
      } else {
        result = [
          ...result,
          {
            ...product.product,
            isActive: false,
            quantity: product.quantity,
          },
        ];
      }

      return result;
    },
    [],
  );

  if (!products) {
    products = [];
  }

  for (let recipe of currentMealPlan?.recipes ?? []) {
    for (let product of recipe.ingredients ?? []) {
      if (
        products.some(
          item =>
            item.id === product.id &&
            item.quantity.unit.id === product.quantity.unit.id,
        )
      ) {
        products = products.map(item => {
          if (
            item.id === product.id &&
            item.quantity.unit.id === product.quantity.unit.id
          ) {
            return {
              ...item,
              quantity: {
                unit: item.quantity.unit,
                value: item.quantity.value + product.quantity.value,
              },
            };
          }

          return item;
        });
      } else {
        products = [
          ...products,
          {
            ...product,
            isActive: false,
            quantity: product.quantity,
          },
        ];
      }
    }
  }

  return products ?? [];
};
