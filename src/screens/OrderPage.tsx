/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Button, Checkbox } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const OrderPage = () => {
  const [counter, setCounter] = useState(0);
  const [initialCount, setInitialCount] = useState(0);

  const handleInitialCountChange = (value) => {
    setInitialCount(Number(value));
  };

  const handleReset = () => {
    setCounter(initialCount);
  };

  const handlePlus = () => {
    setCounter(counter + 1);
  };

  const handleMinus = () => {
    setCounter(counter - 1);
  };
  return (
    <View style={{ flex: 1 , padding:10}}>
      <View style={styles.header}>
        <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>
          Keranjang
        </Text>
      </View>
      <View style={{  marginTop:30 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
          <Checkbox style={{ marginRight: 10 }} value="test" accessibilityLabel="This is a dummy checkbox" />
          <View>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>Cuci Setrika</Text>
            <Text style={{ color: 'black' }}>jaket</Text>
            <Text style={{ color: 'black' }}>Rp 15.000</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 55, alignItems: 'center' }}>
            <TouchableOpacity onPress={handlePlus}>
              <Ionicons name='add' color="black" size={25} />
            </TouchableOpacity>
            <Text style={styles.counterValue}>{counter}</Text>
            <TouchableOpacity onPress={handleMinus}>
              <Ionicons name='remove' color="black" size={25} />
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 60 }}>
            <Text style={{ color: 'black' }}>Rp 15.000</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-evenly' }}>
          <Checkbox style={{ marginRight: 10 }} value="test" accessibilityLabel="This is a dummy checkbox" />
          <View style={{ width: 85 }}>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>Setrika</Text>
            <Text style={{ color: 'black' }}>pakaian</Text>
            <Text style={{ color: 'black' }}>Reguler Rp 15.000/kg</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 55, alignItems: 'center' }}>
            <TouchableOpacity onPress={handlePlus}>
              <Ionicons name='add' color="black" size={25} />
            </TouchableOpacity>
            <Text style={styles.counterValue}>{counter}</Text>
            <TouchableOpacity onPress={handleMinus}>
              <Ionicons name='remove' color="black" size={25} />
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 60 }}>
            <Text style={{ color: 'black' }}>Rp 15.000</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection:'row', marginTop:50, justifyContent:'space-evenly', alignItems:'center'}}>
        <Checkbox value="test" accessibilityLabel="This is a checkbox">Semua</Checkbox>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>Total Rp 100.000</Text>
      </View>
      <View style={{ marginTop:20 }}>
        <Button>Lanjut</Button>
      </View>
    </View>
  );
};

export default OrderPage;

const styles = StyleSheet.create({
  header: {
    alignSelf: 'center',
    marginTop: 20,
  },
  counterValue: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#007bff',
    marginHorizontal: 8,
  },
});