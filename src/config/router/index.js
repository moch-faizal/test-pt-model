import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import {Easing} from 'react-native-reanimated';
import {BottomNavigator} from '../../components';
import {Cart, DetailProduct, Home} from '../../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const openTransition = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeTransition = {
  animation: 'timming',
  config: {
    duration: 200,
    easing: Easing.linear,
  },
};

const MainApp = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pesanan" component={Home} />
      <Tab.Screen name="Keranjang" component={Cart} />
      <Tab.Screen name="Pesan" component={Home} />
      <Tab.Screen name="Profil" component={Home} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainApp"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: openTransition,
          close: closeTransition,
        },
      }}
      headerMode="float"
      animation="fade">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailProduct"
        component={DetailProduct}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
