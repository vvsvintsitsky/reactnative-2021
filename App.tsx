import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ApiClient} from './src/api/client/ApiClient';
import {ApiClientContext} from './src/api/client/ApiClientContext';
import {API_BASE} from './src/api/constants';
import {MobilePhone} from './src/api/types';

import {MobilePhoneDetails} from './src/components/mobile-phone-details/MobilePhoneDetails';
import {MainScreen} from './src/main/MainScreen';

const mobilePhone: MobilePhone = {
  id: '0',
  name: 'Item_0',
  description:
    'The phone features a 6.088 inch HD+ (1560 x 720 pixel) resolution, 283ppi Super AMOLED display, a glass and plastic body, with Corning Gorilla Glass 5 protection on its front as well as its back. It is powered by a Qualcomm Snapdragon 665 SoC. It also has a 2.0, Type-C 1.0 reversible connector.',
  currentPrice: 1,
  price: 2,
  hasDiscount: true,
  imageSrc: 'https://avatars.githubusercontent.com/u/17836706?v=4',
  colors: ['Blue'],
};

const App = () => {
  const [apiClient] = React.useState(() => new ApiClient(API_BASE));
  return (
    <ApiClientContext.Provider value={apiClient}>
      <SafeAreaView>
        <StatusBar />
        {/* <MobilePhoneDetails mobilePhone={mobilePhone} /> */}
        <MainScreen />
      </SafeAreaView>
    </ApiClientContext.Provider>
  );
};

export default App;
