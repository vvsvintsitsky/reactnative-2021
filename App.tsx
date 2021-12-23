import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ApiClient} from './src/api/client/ApiClient';
import {ApiClientContext} from './src/api/client/ApiClientContext';
import {API_BASE} from './src/api/constants';

import {MainScreen} from './src/screens/main/MainScreen';
import {ProductDetailsScreen} from './src/screens/product-details/ProductDetailsScreen';

const App = () => {
  const [apiClient] = React.useState(() => new ApiClient(API_BASE));
  return (
    <ApiClientContext.Provider value={apiClient}>
      <SafeAreaView>
        <StatusBar />
        <ProductDetailsScreen productId="1" />
        {/* <MainScreen /> */}
      </SafeAreaView>
    </ApiClientContext.Provider>
  );
};

export default App;
