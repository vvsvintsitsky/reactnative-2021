import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ID} from '../api/types';
import {MainRoutes} from './MainRoutes';

type RootStackParamList = {
  Main: undefined;
  ProductDetails: {productId: ID};
};

export type RouteProps<T extends MainRoutes> = NativeStackScreenProps<
  RootStackParamList,
  T
>;
