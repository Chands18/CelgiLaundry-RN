/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Bear, Carpet, Logo1, Shoe, SteamIron, Towel, WashMachine } from '../Assets';
import { Center, HStack } from 'native-base';

const HomePage = ({ navigation }: {navigation: any}) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.page}>
          <Image source={Logo1} style={styles.imgStyle} />
          <Text style={styles.text}>Hai, Samsul</Text>
        </View>
        <View style={styles.btmContainer}>
          <Text style={styles.textLayanan}>Jenis Layanan</Text>
        </View>
        <HStack space={3} justifyContent="center" height={115}>
          <TouchableOpacity onPress={() => navigation.navigate('cuciSetrika')}>
            <Center size="110" rounded="lg" shadow={3} style={{ backgroundColor: '#4CB9E7' }} ><Image source={WashMachine} style={styles.imgStyle2} /></Center>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Setrika')}>
          <Center size="110" rounded="lg" shadow={3} style={{ backgroundColor: '#4CB9E7' }} ><Image source={SteamIron} style={styles.imgStyle2} /></Center>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Karpet')}>
          <Center size="110" rounded="lg" shadow={3} style={{ backgroundColor: '#4CB9E7' }} ><Image source={Carpet} style={styles.imgStyle2} /></Center>
          </TouchableOpacity>
        </HStack>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.text2}>Cuci Setrika</Text>
          <Text style={styles.text3}>Setrika</Text>
          <Text style={styles.text4}>Karpet</Text>
        </View>
        <View style={{margin: 10}}/>
        <HStack space={3} justifyContent="center" height={115}>
          <TouchableOpacity onPress={() => navigation.navigate('BedCover')}>
            <Center size="110" rounded="lg" shadow={3} style={{ backgroundColor: '#4CB9E7' }} ><Image source={Towel} style={styles.imgStyle2} /></Center>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Sepatu')}>
          <Center size="110" rounded="lg" shadow={3} style={{ backgroundColor: '#4CB9E7' }} ><Image source={Shoe} style={styles.imgStyle2} /></Center>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Boneka')}>
          <Center size="110" rounded="lg" shadow={3} style={{ backgroundColor: '#4CB9E7' }} ><Image source={Bear} style={styles.imgStyle2} /></Center>
          </TouchableOpacity>
        </HStack>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.text2}>Bed Cover</Text>
          <Text style={styles.text5}>Sepatu</Text>
          <Text style={styles.text4}>Boneka</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'lightgrey',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: 'flex-end',
    padding: 10,
    height: 200,
  },
  imgStyle: {
    marginTop: 10,
    width: 90,
    height: 90,
  },
  text: {
    alignSelf: 'flex-start',
    left: 10,
    fontSize: 25,
    top: 20,
    color: 'black',
  },
  textLayanan: {
    color: 'black',
    fontSize: 25,
  },
  btmContainer: {
    padding: 10,
    marginTop: 30,
    marginBottom: 30,
  },
  imgStyle2: {
    width: 70,
    height: 70,
  },
  text2: {
    fontSize: 15,
    color: 'black',
    left: 38,
  },
  text3: {
    fontSize: 15,
    color: 'black',
    right: 20,
  },
  text4: {
    fontSize: 15,
    color: 'black',
    right: 60,
  },
  text5: {
    fontSize: 15,
    color: 'black',
    right: 10,
  },
});