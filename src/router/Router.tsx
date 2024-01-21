/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import OrderPage from '../screens/OrderPage';
import ProfilePage from '../screens/ProfilePage';
import SplashPage from '../screens/SplashPage';
import RegisterPage from '../screens/RegisterPage';
import LoginPage from '../screens/LoginPage';
import CuciSetrika from '../screens/CuciSetrika';
import Setrika from '../screens/Setrika';
import KarpetPage from '../screens/KarpetPage';
import BedCoverPage from '../screens/BedCoverPage';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Order" component={OrderPage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="tab" component={TabNavigator} /> */}
      <Stack.Screen name="splash" component={SplashPage} />
      <Stack.Screen name="register" component={RegisterPage} />
      <Stack.Screen name="login" component={LoginPage} />
      <Stack.Screen name="Home" component={MainApp} />
      <Stack.Screen name="cuciSetrika" component={CuciSetrika} />
      <Stack.Screen name="Setrika" component={Setrika} />
      <Stack.Screen name="Karpet" component={KarpetPage} />
      <Stack.Screen name="BedCover" component={BedCoverPage} />
    </Stack.Navigator>
  );
};

export default Router;
