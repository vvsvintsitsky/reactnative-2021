import React from 'react';
import {ID} from '../../api/types';
import {useGetProduct} from '../../api/useGetProduct';
import {useRefetch} from '../../api/useRefetch';

export function useProductDetailscreen({id}: {id: ID}) {
  const getProduct = useGetProduct({id});
  const {isLoading, data, refetch} = useRefetch(getProduct);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  return {isLoading, product: data, refetch};
}
