import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {MobilePhone, TradeItem} from './src/api/types';

import {Main} from './src/components/main/Main';
import {MobilePhoneDetails} from './src/components/mobile-phone-details/MobilePhoneDetails';

const items: TradeItem[] = Array.from({length: 3}, (_, index) => ({
  id: String(index),
  name: `Item_${index}`,
  description: '',
  currentPrice: 1,
  price: 2,
  hasDiscount: true,
  imageSrc: 'https://avatars.githubusercontent.com/u/17836706?v=4',
}));

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
  return (
    <SafeAreaView>
      <StatusBar />
      <MobilePhoneDetails mobilePhone={mobilePhone} />
      {/* <Main tradeItems={items} /> */}
    </SafeAreaView>
  );
};

export default App;
