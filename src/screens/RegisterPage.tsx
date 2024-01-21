/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Input, Stack, Button} from 'native-base';

const RegisterPage = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleContainer}>Buat Akun</Text>
        <Text style={styles.titleSubContainer}>Pengguna Daftar E-Laundry</Text>
      </View>
      <Stack space={4} w="100%" maxW="300px" mx="auto">
        <Text style={styles.title}>Nama Pengguna</Text>
        <Input variant="filled" placeholder="John Doe" />
        <Text style={styles.title}>Nomor Telephone</Text>
        <Input variant="filled" placeholder="cth : 0813xxxxxxx" />
        <Text style={styles.title}>Email</Text>
        <Input variant="filled" placeholder="cth : john@gmail.com" />
        <Text style={styles.title}>Kata Sandi</Text>
        <Input variant="filled" placeholder="xxx" />
        <Text style={styles.title}>Ulangi Sandi</Text>
        <Input variant="filled" placeholder="xxx" />
      </Stack>
      <View style={styles.btnContainer}>
        <Button
          size="md"
          variant="solid"
          bg="cyan.500"
          width="200"
          onPress={() => navigation.navigate('login')}>
          DAFTAR
        </Button>
      </View>
    </View>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingVertical: 26,
    marginTop: 0,
    flex: 1,
  },
  title: {
    color: 'black',
  },
  btnContainer: {
    marginTop: 50,
    alignItems: 'center',
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
});
