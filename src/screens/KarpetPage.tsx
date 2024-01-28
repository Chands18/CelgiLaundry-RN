import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ArrowBackIcon, Button} from 'native-base';
import {Carpet, ShopCart} from '../Assets';

const KarpetPage = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <ArrowBackIcon />
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
          Karpet
        </Text>
        <Image source={ShopCart} style={styles.imgStyle} />
      </View>
      <View style={styles.container}>
        <Image source={Carpet} />
        <View>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 19}}>
            Medium
          </Text>
          <Text style={{color: 'black'}}>Rp 19.000/Meter - 7 hari</Text>
        </View>
        <Button size="sm" width="16" height="10">
          PILIH
        </Button>
      </View>
      <View style={styles.container}>
        <Image source={Carpet} />
        <View>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 19}}>
            Medium
          </Text>
          <Text style={{color: 'black'}}>Rp 25.000/Meter - 5 hari</Text>
        </View>
        <Button size="sm" width="16" height="10">
          PILIH
        </Button>
      </View>
      <View style={styles.container}>
        <Image source={Carpet} />
        <View>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 19}}>
            Lebar
          </Text>
          <Text style={{color: 'black'}}>Rp 27.000/Pcs - 3 hari</Text>
        </View>
        <Button size="sm" width="16" height="10">
          PILIH
        </Button>
      </View>
      <View style={styles.container}>
        <Image source={Carpet} />
        <View>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 19}}>
            Bulu
          </Text>
          <Text style={{color: 'black'}}>Rp 20.000/Pcs - 5 hari</Text>
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

export default KarpetPage;

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
