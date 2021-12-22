import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Main} from './src/components/main/Main';
import {MobilePhoneDetails} from './src/components/mobile-phone-details/MobilePhoneDetails';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <MobilePhoneDetails />
    </SafeAreaView>
  );
};

export default App;
