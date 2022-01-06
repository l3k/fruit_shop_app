import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {Fruits} from '../screens/Fruits';
import {Detail} from '../screens/Detail';
import {Checkout} from '../screens/Checkout';
import {SignIn} from '../screens/SignIn';

const {Navigator, Screen} = createNativeStackNavigator();

export type NavigationProps = {
  navigate: (
    screen: string,
    data?: {
      fruit: Object;
    },
  ) => void;
  goBack: () => void;
};

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="SignIn">
        <Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Screen
          name="Fruits"
          component={Fruits}
          options={{headerShown: false}}
        />
        <Screen
          name="Detail"
          component={Detail}
          options={{headerShown: false}}
        />
        <Screen
          name="Checkout"
          component={Checkout}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
}
