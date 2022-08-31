import React from 'react';
import {ScrollView, View} from 'react-native';

import {useTranslation} from 'react-i18next';

import {ShoppingProduct} from 'src/services/api/types';
import {StyledText} from 'src/components';
import {listStyles as s} from './styles';
import ProductCard from './ProductCard';

type Props = {
  products: ShoppingProduct[];
};

const ShoppingProductList = React.memo(({products}: Props) => {
  const {t} = useTranslation();

  const renderCard = (item: ShoppingProduct, index: number) => (
    <ProductCard
      key={item.id}
      id={item.id}
      name={item.name}
      quantity={item.quantity}
      isActive={false}
      onCheck={() => null}
      isLast={index === products.length - 1}
    />
  );

  return (
    <ScrollView contentContainerStyle={s.scrollView}>
      {products.length > 0 && (
        <View style={s.container}>{products.map(renderCard)}</View>
      )}
    </ScrollView>
  );
});

export default ShoppingProductList;
