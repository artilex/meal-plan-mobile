export type ProductNavigatorParamList = {
  ProductListScreen: undefined;
  ProductEditScreen: {
    productId: string | null;
  };
};

export enum ScreenNames {
  ProductListScreen = 'ProductListScreen',
  ProductEditScreen = 'ProductEditScreen',
}
