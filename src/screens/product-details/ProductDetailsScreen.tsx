import React from 'react';
import {MainRoutes} from '../../navigation/MainRoutes';
import {StackRouteProps} from '../../navigation/types';

import {ProductDetails} from './ProductDetails';
import {useProductDetailscreen} from './useProductDetailscreen';

export function ProductDetailsScreen({
  route,
}: StackRouteProps<MainRoutes.ProductDetails>) {
  const {isLoading, product, refetch} = useProductDetailscreen({
    id: route.params.productId,
  });

  return (
    <ProductDetails
      tradeItem={product}
      currentImageIndex={1}
      refetch={refetch}
      isLoading={isLoading}
    />
  );
}
