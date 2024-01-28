/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

const SplashPage = ({navigation}) => {

    useEffect(() => {
        setTimeout(() =>{
            navigation.replace('register');
        },3000)
    },[]);

    return (
        <View>
            <Text style={{color: 'black'}}>SplashPage</Text>
        </View>
    );
};

export default SplashPage;
//const styles = StyleSheet.create({});
