import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase, RouteProp} from '@react-navigation/native';

// types and interface
export type AppScreenNavigationType = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

export type AppScreenRouteType = {
  route: RouteProp<ParamListBase, keyof ParamListBase>;
};