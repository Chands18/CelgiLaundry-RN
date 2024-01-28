import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ArrowBackIcon, Button} from 'native-base';
import {Bear, ShopCart} from '../Assets';

const BonekaPage = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <ArrowBackIcon />
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
          Boneka
        </Text>
        <Image source={ShopCart} style={styles.imgStyle} />
      </View>
      <View style={styles.container}>
        <Image source={Bear} />
        <View>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 19}}>
            Besar
          </Text>
          <Text style={{color: 'black'}}>Rp 30.000/Pcs - 3 hari</Text>
        </View>
        <Button size="sm" width="16" height="10">
          PILIH
        </Button>
      </View>
      <View style={styles.container}>
        <Image source={Bear} />
        <View>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 19}}>
            Sedang
          </Text>
          <Text style={{color: 'black'}}>Rp 20.000/Pcs - 3 hari</Text>
        </View>
        <Button size="sm" width="16" height="10">
          PILIH
        </Button>
      </View>
      <View style={styles.container}>
        <Image source={Bear} />
        <View>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 19}}>
            Kecil
          </Text>
          <Text style={{color: 'black'}}>Rp 10.000/Pcs - 3 hari</Text>
        </View>
        <Button size="sm" width="16" height="10">
          PILIH
        </Button>
      </View>
    </View>
  );
};

export default BonekaPage;

const styles = StyleSheet.create({
  imgStyle: {
    width: 25,
    height: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginTop: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    alignItems: 'center',
  },
});
