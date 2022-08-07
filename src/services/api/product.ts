// import {api} from './client';
import {NewProduct, Product, ProductUnit} from './types';
import {PRODUCT_CATEGORIES} from './category';
import {sleep} from './utils';

export const PRODUCT_UNITS: ProductUnit[] = [
  {
    id: 'pu1',
    name: 'грамм',
    shortName: 'г',
    nameEn: 'gram',
    shortNameEn: 'g',
  },
  {
    id: 'pu2',
    name: 'штук',
    shortName: 'шт',
    nameEn: '',
    shortNameEn: '',
  },
  {
    id: 'pu3',
    name: 'упаковок',
    shortName: 'упак',
    nameEn: '',
    shortNameEn: '',
  },
];

export let PRODUCTS = [
  {
    id: 'p1',
    name: 'Шампиньоны свежие',
    category: 'pc1',
    image: '',
  },
  {
    id: 'p2',
    name: 'Лук репчатый',
    category: 'pc1',
    image: null,
  },
  {
    id: 'p3',
    name: 'Овощная смесь',
    category: 'pc10',
    image: null,
  },
  {
    id: 'p4',
    name: 'Помидоры',
    category: 'pc1',
    image: null,
  },
  {
    id: 'p1234',
    name: 'Помидоры Черри',
    category: 'pc1',
    image: null,
  },
  {
    id: 'p5',
    name: 'Огурцы',
    category: 'pc1',
    image: null,
  },
  {
    id: 'p6',
    name: 'Листья салата',
    category: 'pc1',
    image: null,
  },
  {
    id: 'p611',
    name: 'Зеленый лук',
    category: 'pc1',
    image: null,
  },
  {
    id: 'p7',
    name: 'Чеснок',
    category: 'pc1',
    image: null,
  },
  {
    id: 'p8',
    name: 'Морковь',
    category: 'pc1',
    image: null,
  },
  {
    id: 'p811',
    name: 'Пекинская капуста',
    category: 'pc1',
    image: null,
  },
  {
    id: 'p812',
    name: 'Цветная капуста',
    category: 'pc1',
    image: null,
  },
  {
    id: 'p813',
    name: 'Брокколи',
    category: 'pc1',
    image: null,
  },
  {
    id: 'p814',
    name: 'Перец сладкий красный',
    category: 'pc1',
    image: null,
  },
  {
    id: 'p111',
    name: 'Картофель',
    category: 'pc1',
    image: null,
  },
  {
    id: 'p119',
    name: 'Кабачок',
    category: 'pc1',
    image: null,
  },
  {
    id: 'p1112',
    name: 'Редиска',
    category: 'pc1',
    image: null,
  },
  {
    id: 'p9',
    name: 'Нектарин',
    category: 'pc2',
    image: null,
  },
  {
    id: 'p221',
    name: 'Авакадо',
    category: 'pc2',
    image: null,
  },
  {
    id: 'p10',
    name: 'Бананы',
    category: 'pc2',
    image: null,
  },
  {
    id: 'p11',
    name: 'Апельсины',
    category: 'pc2',
    image: null,
  },
  {
    id: 'p12',
    name: 'Яблоко зеленное',
    category: 'pc2',
    image: null,
  },
  {
    id: 'p12222',
    name: 'Яблоко красное',
    category: 'pc2',
    image: null,
  },
  {
    id: 'p112',
    name: 'Груша',
    category: 'pc2',
    image: null,
  },
  {
    id: 'p113',
    name: 'Лимон',
    category: 'pc2',
    image: null,
  },
  {
    id: 'p13',
    name: 'Киви',
    category: 'pc2',
    image: null,
  },
  {
    id: 'p2313',
    name: 'Клубника',
    category: 'pc2',
    image: null,
  },
  {
    id: 'p221322',
    name: 'Черешня',
    category: 'pc2',
    image: null,
  },
  {
    id: 'p14',
    name: 'Йогурт натуральный 3,5%',
    category: 'pc3',
    image: null,
  },
  {
    id: 'p15',
    name: 'Творог 5%',
    category: 'pc3',
    image: null,
  },
  {
    id: 'p16',
    name: 'Сыр 45%',
    category: 'pc3',
    image: null,
  },
  {
    id: 'p17',
    name: 'Творог Мягкий 5%',
    category: 'pc3',
    image: null,
  },
  {
    id: 'p18',
    name: 'Молоко 3,2%',
    category: 'pc3',
    image: null,
  },
  {
    id: 'p318',
    name: 'Сливочное масло',
    category: 'pc3',
    image: null,
  },
  {
    id: 'p19',
    name: 'Сливки 10%',
    category: 'pc3',
    image: null,
  },
  {
    id: 'p20',
    name: 'Сливки 20%',
    category: 'pc3',
    image: null,
  },
  {
    id: 'p21',
    name: 'Кефир 3,2%',
    category: 'pc3',
    image: null,
  },
  {
    id: 'p321',
    name: 'Сыр творожный',
    category: 'pc3',
    image: null,
  },
  {
    id: 'p3223',
    name: 'Сыр Сиртаки Фета',
    category: 'pc3',
    image: null,
  },
  {
    id: 'p22',
    name: 'Куриное филе',
    category: 'pc4',
    image: null,
  },
  {
    id: 'p422',
    name: 'Грудка индейки',
    category: 'pc4',
    image: null,
  },
  {
    id: 'p423',
    name: 'Говядина',
    category: 'pc4',
    image: null,
  },
  {
    id: 'p424',
    name: 'Фарш говяжий',
    category: 'pc4',
    image: null,
  },
  {
    id: 'p23',
    name: 'Минтай',
    category: 'pc5',
    image: null,
  },
  {
    id: 'p24',
    name: 'Треска',
    category: 'pc5',
    image: null,
  },
  {
    id: 'p25',
    name: 'Яйца',
    category: 'pc7',
    image: null,
  },
  {
    id: 'p26',
    name: 'Тонкий Лаваш',
    category: 'pc14',
    image: null,
  },
  {
    id: 'p27',
    name: 'Рисовая мука',
    category: 'pc7',
    image: null,
  },
  {
    id: 'p28',
    name: 'Разрыхлитель',
    category: 'pc7',
    image: null,
  },
  {
    id: 'p29',
    name: 'Макароны твердых сортов',
    category: 'pc8',
    image: null,
  },
  {
    id: 'p30',
    name: 'Горький Шоколад 75%',
    category: 'pc6',
    image: null,
  },
  {
    id: 'p31',
    name: 'Миндаль',
    category: 'pc6',
    image: null,
  },
  {
    id: 'p32',
    name: 'Кешью',
    category: 'pc6',
    image: null,
  },
  {
    id: 'p33',
    name: 'Хлебцы Dr. Korner сладкие',
    category: 'pc6',
    image: null,
  },
  {
    id: 'p34',
    name: 'Овсянка',
    category: 'pc8',
    image: null,
  },
  {
    id: 'p35',
    name: 'Томатная паста',
    category: 'pc9',
    image: null,
  },
  {
    id: 'p36',
    name: 'Гречка',
    category: 'pc8',
    image: null,
  },
  {
    id: 'p37',
    name: 'Рис басмати',
    category: 'pc8',
    image: null,
  },
  {
    id: 'p737',
    name: 'Рис жасмин',
    category: 'pc8',
    image: null,
  },
  {
    id: 'p38',
    name: 'Булгур',
    category: 'pc8',
    image: null,
  },
  {
    id: 'p738',
    name: 'Пшено',
    category: 'pc8',
    image: null,
  },
  {
    id: 'p39',
    name: 'Соевый соус',
    category: 'pc9',
    image: null,
  },
  {
    id: 'p40',
    name: 'Оливковое масло',
    category: 'pc11',
    image: null,
  },
  {
    id: 'p41',
    name: 'Соль',
    category: 'pc12',
    image: null,
  },
  {
    id: 'p42',
    name: 'Черный перец молотый',
    category: 'pc12',
    image: null,
  },
  {
    id: 'p43',
    name: 'Семга слабосоленая',
    category: 'pc5',
    image: null,
  },
  {
    id: 'p44',
    name: 'Хлеб цельнозерновой',
    category: 'pc14',
    image: null,
  },
  {
    id: 'p45',
    name: 'Семечки подсолнуха',
    category: 'pc6',
    image: null,
  },
  {
    id: 'p46',
    name: 'Лавровый лист',
    category: 'pc12',
    image: null,
  },
  {
    id: 'p47',
    name: 'Зеленный чай',
    category: 'pc13',
    image: null,
  },
  {
    id: 'p48',
    name: 'Кофе',
    category: 'pc13',
    image: null,
  },
  {
    id: 'p49',
    name: 'Кофе 3 в 1',
    category: 'pc13',
    image: null,
  },
  {
    id: 'p50',
    name: 'Корица',
    category: 'pc12',
    image: null,
  },
  {
    id: 'p51',
    name: 'Маслины',
    category: 'pc9',
    image: null,
  },
  {
    id: 'p52',
    name: 'Стручковая фасоль',
    category: 'pc10',
    image: null,
  },
  {
    id: 'p53',
    name: 'Брынза соленая',
    category: 'pc3',
    image: null,
  },

  {
    id: 'p',
    name: '',
    category: 'pc7',
    image: null,
  },
];
// TODO: I get freeze when I have many items before loading
// TODO: So, when BE will be ready, move items from redux and only keep in local state,
// TODO: Also, don't show all list, only items for search or filtered items

const _getCategoryById = (categoryId: string) => {
  const category = PRODUCT_CATEGORIES.find(item => item.id === categoryId);

  if (!category) {
    return {id: '_', name: '_'};
  }

  return {id: category.id, name: category.name};
};

export const fetchProducts = async (): Promise<Product[]> => {
  await sleep(1);
  // TODO: Remove sort and map when it will be implemented on BE
  return PRODUCTS.filter(item => item.name)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(product => ({
      ...product,
      category: _getCategoryById(product.category),
    }));
  // return api.get('/api/some/endpoint');
};

export const getProductById = async (
  id: string,
): Promise<Product | undefined> => {
  const product = PRODUCTS.find(item => item.id === id);

  if (!product) {
    return;
  }

  return {
    ...product,
    category: _getCategoryById(product.category),
  };
};

export const createProduct = async (
  product: NewProduct,
): Promise<Product[]> => {
  await sleep(0);
  PRODUCTS.push({
    id: new Date().getTime().toString(),
    name: product.name,
    category: product.categoryId,
    image: product.image ?? null,
  });

  return fetchProducts();
};

export const updateProduct = async (
  productId: string,
  productData: Partial<NewProduct>,
): Promise<Product[]> => {
  await sleep(0);
  PRODUCTS = PRODUCTS.map(old => {
    if (old.id === productId) {
      return {
        ...old,
        name: productData.name ?? '',
        category: productData.categoryId ?? '',
      };
    }

    return old;
  });

  return fetchProducts();
};

export const deleteProduct = async (productId: string): Promise<Product[]> => {
  await sleep(0);
  PRODUCTS = PRODUCTS.filter(item => item.id !== productId);

  return fetchProducts();
};

export const fetchProductUnits = async () => {
  return PRODUCT_UNITS;
};

// TODO: After MVP split products on user products and global products
// TODO: This function will use search for global products
export const searchProducts = async (text: string): Promise<Product[]> => {
  await sleep(1);
  return PRODUCTS.filter(product => {
    const productName = product.name.toLocaleLowerCase();
    const search = text.toLocaleLowerCase();

    return productName.includes(search);
  })
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(product => ({
      ...product,
      category: _getCategoryById(product.category),
    }));
};
