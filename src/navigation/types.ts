export type DrawerParamList = {
  ProductListScreen: undefined;
  ProductEditScreen: {
    productId: string | null;
  };
};

export enum ScreenNames {
  ProductListScreen = 'ProductListScreen',
  ProductEditScreen = 'ProductEditScreen',
}
