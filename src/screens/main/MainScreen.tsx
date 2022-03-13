import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NetworkErrorModal} from '../../modals/network-error/NetworkErrorModal';
import {MainRoutes} from '../../navigation/MainRoutes';
import {StackRouteProps} from '../../navigation/types';

import {Main} from './Main';
import {useMainScreen} from './useMainScreen';

export function MainScreen({navigation}: StackRouteProps<MainRoutes.Main>) {
  const {isLoading, products, refetch, hasNetworkError, resetNetworkError} =
    useMainScreen();

  const onProductSelect = React.useCallback(
    (productId: string) => {
      navigation.navigate(MainRoutes.ProductDetails, {productId});
    },
    [navigation],
  );

  return (
    <SafeAreaView>
      <StatusBar />
      <Main
        tradeItems={products}
        refetch={refetch}
        isLoading={isLoading}
        onProductSelect={onProductSelect}
      />
      {hasNetworkError && (
        <NetworkErrorModal onTryAgain={refetch} onCancel={resetNetworkError} />
      )}
    </SafeAreaView>
  );
}
