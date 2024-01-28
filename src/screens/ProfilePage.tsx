/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ArrowBackIcon } from 'native-base';
import { ProfilePict, ShopCart } from '../Assets';

const ProfilePage = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
          Profile
        </Text>
      </View>
      <View style={styles.photo}>
        <View style={styles.borderphoto}>
          <Image source={ProfilePict} style={styles.photocontainer} />
        </View>
      </View>
      <View style={{ flexDirection:'column' }}>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Akun Saya</Text>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Ubah Kata Sandi</Text>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Keluar Akun</Text>
      </View>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  imgStyle: {
    width: 25,
    height: 25,
  },
  header: {
    alignSelf: 'center',
    marginTop: 20,
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  borderphoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 120,
    height: 120,
    borderRadius: 120,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photocontainer: {
    padding: 24,
    width: 100,
    height: 100,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
  },
});