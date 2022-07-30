import {Category} from './types';

export const PRODUCT_CATEGORIES: Category[] = [
  {
    id: 'pc1',
    nameEn: 'Vegetables',
    name: 'Овощи',
  },
  {
    id: 'pc2',
    nameEn: 'Fruit',
    name: 'Фрукты',
  },
  {
    id: 'pc3',
    nameEn: 'Dairy',
    name: 'Молочка',
  },
  {
    id: 'pc4',
    nameEn: 'Meat',
    name: 'Мясо',
  },
  {
    id: 'pc5',
    nameEn: 'Seafood and Fish',
    name: 'Морепродукты и Рыба',
  },
  {
    id: 'pc6',
    nameEn: 'Snacks',
    name: 'Снеки',
  },
  {
    id: 'pc7',
    nameEn: 'Baking',
    name: 'Для Выпечки',
  },
  {
    id: 'pc8',
    nameEn: 'Grains and Pasta',
    name: 'Крупы и Макароны',
  },
  {
    id: 'pc9',
    nameEn: 'Canned Foods',
    name: 'Консервированные продукты',
  },
  {
    id: 'pc10',
    nameEn: 'Frozen Foods',
    name: 'Замороженные продукты',
  },
  {
    id: 'pc11',
    nameEn: 'Sauces and Oils',
    name: 'Соусы и Масла',
  },
  {
    id: 'pc12',
    nameEn: 'Spices',
    name: 'Специи',
  },
  {
    id: 'pc13',
    nameEn: 'Beverages',
    name: 'Напитки',
  },
  {
    id: 'pc14',
    nameEn: 'Bread and Bakery',
    name: 'Хлебобулочные изделия',
  },
  {
    id: 'pc99',
    nameEn: 'Other',
    name: 'Другое',
  },

  {
    id: 'pc',
    nameEn: '',
    name: '',
  },
];

export const fetchCategories = async (): Promise<Category[]> => {
  return PRODUCT_CATEGORIES.filter(item => item.name);
};
