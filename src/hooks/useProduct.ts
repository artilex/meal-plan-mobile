import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NewProduct, Product} from 'src/services/api/types';
import {productActions, RootState} from 'src/store';
import {RequestStatus} from 'src/store/types';

export const useProduct = (
  searchText: string = '',
  selectedCategory: string,
) => {
  const [products, setProducts] = useState<Product[]>([]);

  const dispatch = useDispatch();
  const categoryList = useSelector((state: RootState) => state.product.list);
  const requestStatus = useSelector((state: RootState) => state.product.status);
  const loading = requestStatus === RequestStatus.Loading;
  const refreshing = requestStatus === RequestStatus.Refreshing;

  useEffect(() => {
    if (categoryList && categoryList.length > 0) {
      // TODO: Implement search and filter on BE
      //  OR implement these in Redux?
      const filteredProducts = _filterProducts(
        categoryList,
        searchText,
        selectedCategory,
      );

      setProducts(filteredProducts);
    }
  }, [categoryList, searchText, selectedCategory]);

  const refreshProducts = () => {
    dispatch(productActions.refresh());
  };

  const createProduct = (newProduct: NewProduct) => {
    dispatch(productActions.create(newProduct));
  };

  const deleteProduct = (productId: string) => {
    dispatch(productActions.delete(productId));
  };

  const updateProduct = (
    productId: string,
    productData: Partial<NewProduct>,
  ) => {
    dispatch(productActions.update({productId, productData}));
  };

  return {
    products,
    loading,
    refreshing,
    refreshProducts,
    createProduct,
    deleteProduct,
    updateProduct,
  };
};

const _filterProducts = (
  products: Product[],
  searchText?: string,
  categoryId?: string,
): Product[] => {
  const foundProducts = searchText
    ? products.filter(product => {
        const productName = product.name.toLocaleLowerCase();
        const search = searchText.toLocaleLowerCase();

        return productName.includes(search);
      })
    : products;

  return categoryId
    ? foundProducts.filter(product => product.category.id === categoryId)
    : foundProducts;
};
