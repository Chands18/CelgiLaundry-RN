import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ArrowBackIcon, Button} from 'native-base';
import {Hoodie, Pakaian, Pants, Shirt1, ShopCart} from '../Assets';

const CuciSetrika = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <ArrowBackIcon />
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
          Cuci Setrika
        </Text>
        <Image source={ShopCart} style={styles.imgStyle} />
      </View>
      <View style={styles.container}>
        <Image source={Shirt1} />
        <View>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 19}}>
            Baju
          </Text>
          <Text style={{color: 'black'}}>Rp 15.000</Text>
        </View>
        <Button size="sm" width="16" height="10">
          PILIH
        </Button>
      </View>
      <View style={styles.container}>
        <Image source={Hoodie} />
        <View>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 19}}>
            Jaket
          </Text>
          <Text style={{color: 'black'}}>Rp 15.000</Text>
        </View>
        <Button size="sm" width="16" height="10">
          PILIH
        </Button>
      </View>
      <View style={styles.container}>
        <Image source={Pants} />
        <View>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 19}}>
            Celana
          </Text>
          <Text style={{color: 'black'}}>Rp 15.000</Text>
        </View>
        <Button size="sm" width="16" height="10">
          PILIH
        </Button>
      </View>
      <View style={styles.container}>
        <Image source={Pakaian} />
        <View>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 19}}>
            Pakaian
          </Text>
          <Text style={{color: 'black'}}>Reguler Rp 6.000/kg</Text>
          <Text style={{color: 'black'}}>Express Rp 12.000/kg</Text>
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

export default CuciSetrika;

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
