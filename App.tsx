import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ApiClient} from './src/api/client/ApiClient';
import {ApiClientContext} from './src/api/client/ApiClientContext';
import {API_BASE} from './src/api/constants';

import {MainScreen} from './src/screens/main/MainScreen';
import {ProductDetailsScreen} from './src/screens/product-details/ProductDetailsScreen';
import {MainRoutes} from './src/navigation/MainRoutes';
import {MainHeader} from './src/screens/main/MainHeader';
import {ProductDetailsHeader} from './src/screens/product-details/ProductDetailsHeader';

const MainRoutesStack = createNativeStackNavigator();

const App = () => {
  const [apiClient] = React.useState(() => new ApiClient(API_BASE));

  return (
    <ApiClientContext.Provider value={apiClient}>
      <NavigationContainer>
        <MainRoutesStack.Navigator initialRouteName={MainRoutes.Main}>
          <MainRoutesStack.Screen
            name={MainRoutes.Main}
            component={MainScreen}
            options={{header: () => <MainHeader />}}
          />
          <MainRoutesStack.Screen
            name={MainRoutes.ProductDetails}
            component={ProductDetailsScreen}
            options={{header: () => <ProductDetailsHeader />}}
          />
        </MainRoutesStack.Navigator>
      </NavigationContainer>
    </ApiClientContext.Provider>
  );
};

export default App;
