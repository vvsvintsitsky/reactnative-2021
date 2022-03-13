import React from 'react';
import {TradeItemOption} from '../../api/types';
import {useAuthenticationState} from '../../authentication/useAuthenticationState';
import {MainRoutes} from '../../navigation/MainRoutes';
import {Modals} from '../../navigation/Modals';
import {StackRouteProps} from '../../navigation/types';

import {ProductDetails} from './ProductDetails';
import {useProductDetailscreen} from './useProductDetailscreen';

export function ProductDetailsScreen({
  route,
  navigation,
}: StackRouteProps<MainRoutes.ProductDetails>) {
  const {isLoading, product, refetch} = useProductDetailscreen({
    id: route.params.productId,
  });

  const {authentication} = useAuthenticationState();
  const [selectedColor, setSelectedColor] = React.useState<TradeItemOption>();

  const onAddToCart = React.useCallback(() => {
    if (!authentication) {
      return navigation.navigate(Modals.LoginToContinue);
    }

    if (!selectedColor) {
      return navigation.navigate(Modals.SelectColor);
    }

    return navigation.navigate(Modals.ProductAddedToCart);
  }, [navigation, authentication, selectedColor]);

  return (
    <ProductDetails
      tradeItem={product}
      currentImageIndex={1}
      refetch={refetch}
      isLoading={isLoading}
      onAddToCart={onAddToCart}
      selectColor={setSelectedColor}
      selectedColor={selectedColor}
    />
  );
}
