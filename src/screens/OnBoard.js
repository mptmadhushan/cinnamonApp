/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import {images, SIZES, COLORS, FONTS} from '../helpers';
export default function OnBoard({navigation}) {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/cinBg.jpg')}>
      <View
        style={styles.overlay}>
        <Image
          style={{
            width: 100,
            maxHeight: 100,
            
            resizeMode: 'contain',
          }}
          source={images}
        />
        <Text style={styles.title2}>Preserving the Sweetness</Text>
        <Text style={styles.title}>Identifying Cinnamon Diseases to Safeguard Your Spice</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>Get started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    flex: 1,
  },
  overlay: {
    marginTop: SIZES.height * 0.4,
    // backgroundColor: 'rgba(255,0,0,0.5)',
    height: SIZES.height * 0.6,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: COLORS.primary,
    height: 40,
    width: 100,
    borderRadius: 20,
    margin: 10,
    marginTop: SIZES.height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.third,
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowOpacity: 0.98,
    shadowRadius: 16.0,
    elevation: 24,
  },
  btnText: {
    color: COLORS.white,
  },
  title: {
    color: COLORS.secondary,
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  title2: {
    marginTop: SIZES.height * 0.02,
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
});
