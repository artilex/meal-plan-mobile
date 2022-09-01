import React from 'react';
import {ScrollView, View} from 'react-native';

import {StyledText} from 'src/components';
import ProductCard from './components/ProductCard';
import s from './styles';
import {ShoppingProductSection} from 'src/services/api/types';

const ShoppingList = () => {
  const productSections: ShoppingProductSection[] = [];

  const handleCheckProduct = (productId: string, status: boolean) => {
    //
  };

  return (
    <View style={s.container}>
      <ScrollView
        contentContainerStyle={s.scrollView}
        showsVerticalScrollIndicator={false}>
        {productSections && productSections.length > 0 ? (
          productSections.map(section =>
            section.products && section.products.length > 0 ? (
              <View key={section.name}>
                <StyledText style={s.titleText}>{section.name}</StyledText>

                <View style={s.listWrapper}>
                  {section.products.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      quantity={product.quantity}
                      isActive={product.isActive}
                      onCheck={handleCheckProduct}
                      isLast={section.products.length - 1 === index}
                    />
                  ))}
                </View>
              </View>
            ) : null,
          )
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
