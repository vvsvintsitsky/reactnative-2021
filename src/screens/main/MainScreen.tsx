import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {MainRoutes} from '../../navigation/MainRoutes';
import {RouteProps} from '../../navigation/types';

import {Main} from './Main';
import {useMainScreen} from './useMainScreen';

export function MainScreen({navigation}: RouteProps<MainRoutes.Main>) {
  const {isLoading, products, refetch} = useMainScreen();

  const onProductSelect = React.useCallback(
    (productId: string) => {
      console.log(`\n\n\n\n\nprid: ${productId}\n\n\n\n\n\n\n`);
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
    </SafeAreaView>
  );
}
