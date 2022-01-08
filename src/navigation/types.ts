import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ID} from '../api/types';
import {MainRoutes} from './MainRoutes';

type RootStackParamList = {
  [MainRoutes.Main]: undefined;
  [MainRoutes.ProductDetails]: {productId: ID};
};

export type StackRouteProps<T extends MainRoutes> = NativeStackScreenProps<
  RootStackParamList,
  T
>;
