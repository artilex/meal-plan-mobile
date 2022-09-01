import React, {useEffect, useMemo, useState} from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import Modal from 'react-native-modal';
import {useTranslation} from 'react-i18next';

import {getShoppingListByDay} from 'src/services/api/shoppingList';
import {ShoppingProduct} from 'src/services/api/types';
import {COLOR} from 'src/constants/theme';
import {StyledText} from 'src/components';
import ProductCard from './components/ProductCard';
import s from './styles';

const ShoppingList = () => {
  const {t} = useTranslation();
  const [products, setProducts] = useState<ShoppingProduct[]>([]);
  const [loading, setLoading] = useState(false);

  const productsToBuy = useMemo(
    () => products.filter(item => !item.isActive),
    [products],
  );
  const productsInCart = useMemo(
    () => products.filter(item => item.isActive),
    [products],
  );

  useEffect(() => {
    setLoading(true);

    getShoppingListByDay('')
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  const handleCheckProduct = (productId: string, status: boolean) => {
    //
  };

  // TODO: Split by sections (categories and checked products)
  return (
    <View style={s.container}>
      <Modal isVisible={loading}>
        <ActivityIndicator size={'large'} color={COLOR.WHITE} />
      </Modal>

      <ScrollView
        contentContainerStyle={s.scrollView}
        showsVerticalScrollIndicator={false}>
        {products && products.length > 0 ? (
          <View key={1}>
            {productsToBuy.length > 0 && (
              <>
                <StyledText style={s.titleText}>
                  {t('shoppingList.products')}
                </StyledText>

                <View style={s.listWrapper}>
                  {productsToBuy.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      quantity={product.quantity}
                      isActive={product.isActive}
                      onCheck={handleCheckProduct}
                      isLast={productsToBuy.length - 1 === index}
                    />
                  ))}
                </View>
              </>
            )}

            {productsInCart.length > 0 && (
              <>
                <StyledText style={s.titleText}>
                  {t('shoppingList.inCart')}
                </StyledText>

                <View style={s.listWrapper}>
                  {productsInCart.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      quantity={product.quantity}
                      isActive={product.isActive}
                      onCheck={handleCheckProduct}
                      isLast={productsInCart.length - 1 === index}
                    />
                  ))}
                </View>
              </>
            )}
          </View>
        ) : (
          <View style={s.emptyList}>
            <StyledText>Empty...</StyledText>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default ShoppingList;
