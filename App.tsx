// import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import Router from './src/router/Router';
import SplashScreen from 'react-native-splash-screen';

const MainApp = () => {
  // const {isLoading} = useSelector((state) => state.globalReducer);
  return (
    <NavigationContainer>
        <Router />
        {/* <FlashMessage position="top" />
        {isLoading && <Loading />} */}
    </NavigationContainer>
  )
}

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NativeBaseProvider>
      <MainApp/>
    </NativeBaseProvider>
  );
};

export default App;

//const styles = StyleSheet.create({})
