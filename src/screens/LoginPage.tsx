/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {Input, Stack, Button, VStack} from 'native-base';

const LoginPage = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleContainer}>Masuk</Text>
        <Text style={styles.titleSubContainer}>Pengguna Masuk E-Laundry</Text>
      </View>
      <Stack space={4} w="100%" maxW="300px" mx="auto">
        <Text style={styles.title}>Nomor Telepon</Text>
        <Input variant="filled" placeholder="+62" />
        <Text style={styles.title}>Kata Sandi</Text>
        <Input variant="filled" placeholder="xxx" />
      </Stack>
      <View style={styles.btnContainer}>
        <VStack space={5}>
        <Button
          size="md"
          variant="solid"
          bg="cyan.500"
          width="200"
          onPress={() => navigation.navigate('Home')}>
          MASUK
        </Button>
        <Button
          size="md"
          variant="solid"
          bg="cyan.500"
          width="200"
          onPress={() => navigation.navigate('register')}>
          BUAT AKUN
        </Button>
        </VStack>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingVertical: 26,
    flex: 1,
  },
  title: {
    color: 'black',
  },
  titleContainer: {
    color: 'black',
    fontSize: 30,
  },
  titleSubContainer: {
    color: 'black',
    fontSize: 20,
    marginBottom: 25,
  },
  btnContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
});