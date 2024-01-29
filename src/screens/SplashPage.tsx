/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Logo1 } from '../Assets';

const SplashPage = ({ navigation } : {navigation: any}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('register');
        }, 3000);
    }, [navigation]);

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%' }}>
            <Image source={Logo1} style={styles.imgStyle} />
            <View style={{ justifyContent: 'center', flexDirection: 'column' }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 35, alignSelf: 'center' }}>E-Laundry</Text>
                <Text style={{ color: 'black', fontSize: 20 }}>Solusi kebersihan & perawatan anda</Text>
            </View>
        </View>
    );
};

export default SplashPage;
const styles = StyleSheet.create({
    imgStyle: {
        marginTop: 10,
        width: 150,
        height: 150,
    },
});
