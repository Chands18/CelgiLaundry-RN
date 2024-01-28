import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ArrowBackIcon, Button} from 'native-base';
import {Shoe, ShopCart} from '../Assets';

const SepatuPage = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <ArrowBackIcon />
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
          Sepatu
        </Text>
        <Image source={ShopCart} style={styles.imgStyle} />
      </View>
      <View style={styles.container}>
        <Image source={Shoe} />
        <View>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 19}}>
            Deep Clean
          </Text>
          <Text style={{color: 'black'}}>Rp 35.000/Pcs - 3 hari</Text>
        </View>
        <Button size="sm" width="16" height="10">
          PILIH
        </Button>
      </View>
      <View style={styles.container}>
        <Image source={Shoe} />
        <View>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 19}}>
            Unyellow
          </Text>
          <Text style={{color: 'black'}}>Rp 85.000/Pcs - 3 hari</Text>
        </View>
        <Button size="sm" width="16" height="10">
          PILIH
        </Button>
      </View>
      <View style={{marginTop: 100, alignItems: 'center'}}>
        <Button size="lg" width="48" height="16">
          Lanjut
        </Button>
      </View>
    </View>
  );
};

export default SepatuPage;

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
