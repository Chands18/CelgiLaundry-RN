import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {ArrowBackIcon, Button} from 'native-base';
import {ShopCart, Towel} from '../Assets';

const BedCoverPage = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{marginBottom: 10}}>
        <View style={styles.header}>
          <ArrowBackIcon />
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            Bed Cover
          </Text>
          <Image source={ShopCart} style={styles.imgStyle} />
        </View>
        <View style={styles.container}>
          <Image source={Towel} />
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 19}}>
              Kecil
            </Text>
            <Text style={{color: 'black'}}>Rp 17.000/Pcs - 3 hari</Text>
          </View>
          <Button size="sm" width="16" height="10">
            PILIH
          </Button>
        </View>
        <View style={styles.container}>
          <Image source={Towel} />
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 19}}>
              Besar
            </Text>
            <Text style={{color: 'black'}}>Rp 23.000/Pcs - 3 hari</Text>
          </View>
          <Button size="sm" width="16" height="10">
            PILIH
          </Button>
        </View>
        <View style={styles.container}>
          <Image source={Towel} />
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 19}}>
              Jumbo
            </Text>
            <Text style={{color: 'black'}}>Rp 27.000/Pcs - 3 hari</Text>
          </View>
          <Button size="sm" width="16" height="10">
            PILIH
          </Button>
        </View>
        <View style={styles.container}>
          <Image source={Towel} />
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 19}}>
              Besar Express
            </Text>
            <Text style={{color: 'black'}}>Rp 25.000/Pcs - 2 hari</Text>
          </View>
          <Button size="sm" width="16" height="10">
            PILIH
          </Button>
        </View>
        <View style={styles.container}>
          <Image source={Towel} />
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 19}}>
              Kecil Express
            </Text>
            <Text style={{color: 'black'}}>Rp 25.000/Pcs - 2 hari</Text>
          </View>
          <Button size="sm" width="16" height="10">
            PILIH
          </Button>
        </View>
        <View style={styles.container}>
          <Image source={Towel} />
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 19}}>
              Kecil Express 1 Hari
            </Text>
            <Text style={{color: 'black'}}>Rp 25.000/Pcs - 1 hari</Text>
          </View>
          <Button size="sm" width="16" height="10">
            PILIH
          </Button>
        </View>
        <View style={styles.container}>
          <Image source={Towel} />
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 19}}>
              Kecil Express 5 Jam
            </Text>
            <Text style={{color: 'black'}}>Rp 30.000/Pcs - 5 Jam</Text>
          </View>
          <Button size="sm" width="16" height="10">
            PILIH
          </Button>
        </View>
        <View style={styles.container}>
          <Image source={Towel} />
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 19}}>
              Jumbo 1 Hari
            </Text>
            <Text style={{color: 'black'}}>Rp 37.000/Pcs - 1 hari</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default BedCoverPage;

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
