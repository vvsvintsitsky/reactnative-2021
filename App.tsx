import React from 'react';

import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {ApiClient} from './src/api/client/ApiClient';
import {ApiClientContext} from './src/api/client/ApiClientContext';
import {API_BASE} from './src/api/constants';

import {MainScreen} from './src/screens/main/MainScreen';
import {ProductDetailsScreen} from './src/screens/product-details/ProductDetailsScreen';
import {MainRoutes} from './src/navigation/MainRoutes';
import {
  MainHeaderRight,
  MainHeaderLeft,
  MainHeaderTitle,
} from './src/screens/main/MainHeader';
import {
  ProductDetailsHeaderLeft,
  ProductDetailsHeaderRight,
} from './src/screens/product-details/ProductDetailsHeader';
import {DrawerRoutes} from './src/navigation/DrawerRoutes';
import {TrashScreen} from './src/screens/trash/TrashScreen';

const Drawer = createDrawerNavigator();
const MainRoutesStack = createNativeStackNavigator();

const headerOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#008ACE',
  },
  headerTintColor: '#ffffff',
  headerTitleStyle: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 20,
  },
  headerTitleAlign: 'center',
};

function MainNavigationStack() {
  return (
    <MainRoutesStack.Navigator
      initialRouteName={MainRoutes.Main}
      screenOptions={headerOptions}>
      <MainRoutesStack.Screen
        name={MainRoutes.Main}
        component={MainScreen}
        options={{
          title: MainHeaderTitle,
          headerLeft: () => <MainHeaderLeft />,
          headerRight: () => <MainHeaderRight />,
        }}
      />
      <MainRoutesStack.Screen
        name={MainRoutes.ProductDetails}
        component={ProductDetailsScreen}
        options={{
          title: '',
          headerLeft: () => <ProductDetailsHeaderLeft />,
          headerRight: () => <ProductDetailsHeaderRight />,
        }}
      />
    </MainRoutesStack.Navigator>
  );
}

const App = () => {
  const [apiClient] = React.useState(() => new ApiClient(API_BASE));

  return (
    <ApiClientContext.Provider value={apiClient}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={DrawerRoutes.Main}
          screenOptions={{headerShown: false}}>
          <Drawer.Screen
            name={DrawerRoutes.Main}
            component={MainNavigationStack}
          />
          <Drawer.Screen name={DrawerRoutes.Trash} component={TrashScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ApiClientContext.Provider>
  );
};

export default gestureHandlerRootHOC(App);
