/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import SepatuPage from '../screens/SepatuPage';
import BonekaPage from '../screens/BonekaPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EditAkunPage from '../screens/EditAkunPage';
import KeranjangPage from '../screens/KeranjangPage';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        }
        if (route.name === 'Order') {
          iconName = focused
            ? 'file-tray'
            : 'file-tray-outline';
        }
        if (route.name === 'Profile') {
          iconName = focused
            ? 'person'
            : 'person-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#40A2D8',
      tabBarInactiveTintColor: 'gray',
      headerShown:false,
    })}>
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
      screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="tab" component={TabNavigator} /> */}
      <Stack.Screen name="splash" component={SplashPage} />
      <Stack.Screen name="register" component={RegisterPage} />
      <Stack.Screen name="login" component={LoginPage} />
      <Stack.Screen name="Home" component={MainApp} />
      <Stack.Screen name="cuciSetrika" component={CuciSetrika} />
      <Stack.Screen name="Setrika" component={Setrika} />
      <Stack.Screen name="Karpet" component={KarpetPage} />
      <Stack.Screen name="BedCover" component={BedCoverPage} />
      <Stack.Screen name="Sepatu" component={SepatuPage} />
      <Stack.Screen name="Boneka" component={BonekaPage} />
      <Stack.Screen name="EditAkun" component={EditAkunPage} />
      <Stack.Screen name="Keranjang" component={KeranjangPage} />
    </Stack.Navigator>
  );
};

export default Router;
