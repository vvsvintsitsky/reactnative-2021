import {StackScreenProps} from '@react-navigation/stack';
import {ID} from '../api/types';
import {MainRoutes} from './MainRoutes';
import {Modals} from './Modals';

type RootStackParamList = {
  [MainRoutes.Main]: undefined;
  [MainRoutes.ProductDetails]: {productId: ID};
  [Modals.LoginToContinue]: undefined;
  [Modals.ProductAddedToCart]: undefined;
  [Modals.SelectColor]: undefined;
};

export type StackRouteProps<T extends MainRoutes> = StackScreenProps<
  RootStackParamList,
  T
>;
