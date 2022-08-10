import {PRODUCT_UNITS, PRODUCTS} from 'src/services/api/product';
import {sleep} from 'src/services/api/utils';
import {
  DetailRecipe,
  DraftRecipe,
  NewRecipeIngredient,
  NewRecipeStep,
  Recipe,
} from 'src/services/api/types';

let MOCK_RECIPES: DetailRecipe[] = [
  {
    id: 'rp1',
    name: 'Классические оладушки',
    cover:
      'https://www.clementoni.com/media/prod/no/35058/paradise-beach-500-pcs-high-quality-collection_LkQCtwj.jpg',
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp2',
    name: 'Паста с курицей в сливочном соусе',
    cover:
      'https://res.cloudinary.com/rebelwalls/image/upload/b_black,c_fit,f_auto,fl_progressive,q_auto,w_1333/v1428564372/article/R10391_image1',
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp3',
    name: 'Салат "Цезарь"',
    cover:
      'https://assets.entrepreneur.com/content/3x2/2000/20150225224437-computer.jpeg',
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp14',
    name: 'ПП-хачапури',
    cover:
      'https://sun2-9.userapi.com/impg/P1fP70PDYaRcr3HJ5zGn3CCDA_b9ZuNWAfArEg/5s_WenZrQGw.jpg?size=1280x1280&quality=95&sign=1658e82d2d49344bc3f301e205567a0e&type=album',
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp4',
    name: 'Треугольники из лаваша с бананом',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp5',
    name: 'Омлет "Рулет" с сыром и овощной салат',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp6',
    name: 'Овсяноблин с шоколадом',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp7',
    name: 'ПП-шаверма',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp8',
    name: 'Рубленные котлеты с сыром',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp9',
    name: 'Творожная запеканка с шоколадом',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp10',
    name: 'Рис с овощами',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp11',
    name: 'Запеканка с курицей и брокколи',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp12',
    name: 'Оладьи с шоколадом',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp13',
    name: 'ПП-пицца на сковороде',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp15',
    name: 'Рыбка с овощами',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp16',
    name: 'Творожная галета',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp17',
    name: 'Суп с куриными фрикадельками',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp18',
    name: 'Конвертики с курицей и грибами',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp19',
    name: 'Куриные котлеты с сыром',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp20',
    name: 'Кекс в микроволновке',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp21',
    name: 'Гречка с грибами и свининой',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp22',
    name: 'Омлет с овощами',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp23',
    name: 'ПП Люля-Кебаб из курицы',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp24',
    name: 'Творожная запеканка с нектарином',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp25',
    name: 'Вок с курицей',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp26',
    name: 'Рисовый блинчик',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp27',
    name: 'Салат с тунцом',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp28',
    name: 'Ленивые вареники с шоколадом',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
  {
    id: 'rp29',
    name: 'Мясные рулетики',
    cover: null,
    description: '',
    ingredients: [],
    steps: [],
  },
];

export const fetchRecipes = async (): Promise<Recipe[]> => {
  await sleep(1);

  return MOCK_RECIPES;
};

export const createDraftRecipe = async (
  draftRecipe: DraftRecipe,
): Promise<DetailRecipe> => {
  const recipeId = 'rp' + (MOCK_RECIPES.length + 1);

  MOCK_RECIPES.push({
    ...draftRecipe,
    id: recipeId,
    ingredients: [],
    steps: [],
  });

  return MOCK_RECIPES.find(item => item.id === recipeId) as DetailRecipe;
};

export const addRecipeIngredient = async (
  recipeId: string,
  newIngredient: NewRecipeIngredient,
): Promise<DetailRecipe> => {
  const recipe = MOCK_RECIPES.find(
    item => item.id === recipeId,
  ) as DetailRecipe;

  const product = PRODUCTS.find(prod => prod.id === newIngredient.productId);
  const quantityUnit = PRODUCT_UNITS.find(
    unit => unit.id === newIngredient.unitId,
  );

  if (product && quantityUnit) {
    const newRecipe = {
      ...recipe,
      ingredients: [
        ...recipe.ingredients,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          quantity: {
            value: newIngredient.quantity,
            unit: quantityUnit,
          },
        },
      ],
    };

    MOCK_RECIPES = MOCK_RECIPES.map(item => {
      if (item.id === newRecipe.id) {
        return newRecipe;
      }

      return item;
    });

    return newRecipe;
  }

  return recipe;
};

export const deleteRecipeIngredient = async (
  recipeId: string,
  ingredientId: string,
): Promise<DetailRecipe> => {
  const recipe = MOCK_RECIPES.find(
    item => item.id === recipeId,
  ) as DetailRecipe;

  const newRecipe = {
    ...recipe,
    ingredients: recipe.ingredients.filter(item => item.id !== ingredientId),
  };

  MOCK_RECIPES = MOCK_RECIPES.map(item => {
    if (item.id === newRecipe.id) {
      return newRecipe;
    }

    return item;
  });

  return newRecipe;
};

export const addRecipeStep = async (
  recipeId: string,
  recipeStep: NewRecipeStep,
): Promise<DetailRecipe> => {
  const recipe = MOCK_RECIPES.find(
    item => item.id === recipeId,
  ) as DetailRecipe;

  let orderNumber = 1;
  recipe.steps.forEach(step => {
    if (step.orderNumber >= orderNumber) {
      orderNumber = step.orderNumber + 1;
    }
  });

  const newRecipe = {
    ...recipe,
    steps: [
      ...recipe.steps,
      {
        id: recipeId + orderNumber,
        orderNumber: orderNumber,
        text: recipeStep.text,
        image: null,
      },
    ],
  };

  MOCK_RECIPES = MOCK_RECIPES.map(item => {
    if (item.id === newRecipe.id) {
      return newRecipe;
    }

    return item;
  });

  return newRecipe;
};

export const deleteRecipeStep = async (
  recipeId: string,
  stepId: string,
): Promise<DetailRecipe> => {
  const recipe = MOCK_RECIPES.find(
    item => item.id === recipeId,
  ) as DetailRecipe;

  const newRecipe = {
    ...recipe,
    steps: recipe.steps.filter(item => item.id !== stepId),
  };

  MOCK_RECIPES = MOCK_RECIPES.map(item => {
    if (item.id === newRecipe.id) {
      return newRecipe;
    }

    return item;
  });

  return newRecipe;
};

const steps = {
  first:
    'https://sun2-11.userapi.com/impg/sMvJwk1dA28R2ce1YVodBFuGY918queWZJpJWw/MkzJ0sGZlgI.jpg?size=1624x1624&quality=95&sign=ee17e3435650d638962109ef6a05b7c4&type=album',
  second:
    'https://sun2-9.userapi.com/impg/RnP3459VfxcWHAEkc0L6rrlt5jDp3TXcFcIXWQ/3Qxm6oO8cSk.jpg?size=1624x1624&quality=95&sign=a6d02ed732b45a5b5ef927240ef684c7&type=album',
  third:
    'https://sun2-10.userapi.com/impg/WCMC21f9XPuZJiuWTqWmYUKhDuo_OsxZklDGcA/wjCyMYYy_dI.jpg?size=1624x1624&quality=95&sign=b2ba7121923efc930d1febba1b3efc92&type=album',
  fourth:
    'https://sun2-12.userapi.com/impg/PLDAC9rWgzu9_5VGoU3sq_-D6upJaAbLgND_Fg/UDMASBmm_3g.jpg?size=1624x1624&quality=95&sign=93bc9894e6a26d56e10a8cdbe3113c86&type=album',
  fifth:
    'https://sun2-11.userapi.com/impg/JPAB9kPt_yZfNR4_KE6Yz1FYAFG5nxLuioW5UQ/rXy0hHg36VU.jpg?size=1624x1624&quality=95&sign=91fba3f7baf47d891d766af21e366ec9&type=album',
};
