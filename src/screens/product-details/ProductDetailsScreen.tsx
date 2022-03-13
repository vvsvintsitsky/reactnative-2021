import React from 'react';
import {ID} from '../../api/types';

import {ProductDetails} from './ProductDetails';
import {useProductDetailscreen} from './useProductDetailscreen';

export function ProductDetailsScreen({productId}: {productId: ID}) {
  const {isLoading, product, refetch} = useProductDetailscreen({
    id: productId,
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
