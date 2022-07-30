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
