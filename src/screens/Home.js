/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
  StyleSheet,
} from 'react-native';
import {images, SIZES, COLORS, FONTS} from '../helpers';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

export default function Home({navigation}) {
  useEffect(() => {}, []);

  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/home.jpg')}>
      <View
        style={{
          alignItems: 'center',
          marginTop: SIZES.height * 0.05,
          maxHeight: 50,
        }}>
        <Image
          style={{
            width: 100,
            maxHeight: 50,
            resizeMode: 'contain',
          }}
          source={images.logo}
        />
        <Text style={styles.title1}>Cinnamon Diseases</Text>
      </View>
      <View
       
        style={styles.overlay}>
        <View style={styles.rowNorm}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PlantUpload')}
            style={styles.slide1}>
            <View style={styles.centerFlex}>
              <Text style={styles.text001}>Capture</Text>
            </View>
          </TouchableOpacity>
        </View ><View style={styles.rowNorm}>
          <TouchableOpacity
            onPress={() => navigation.navigate('More')}
            style={styles.slide1}>
            <View style={styles.centerFlex}>
              <Text style={styles.text001}>Support</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.black},
  slide1: {
    marginTop: SIZES.height * 0.01,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    flex: 1,
    maxWidth: SIZES.width * 0.5,
    height: SIZES.width * 0.2,
  },
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  title2: {
    color: COLORS.white,
    fontWeight: 'bold',
    marginLeft: SIZES.width * 0.06,
    fontSize: 25,
  },
  text001: {
    color: COLORS.white,
    fontSize: 15,
  },
  overlay: {
    marginTop: SIZES.height * 0.3,
    height: SIZES.height * 0.3,
    // alignItems: 'center',
  },
  title1: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 40,
  },
  rowNorm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexWrap: 'wrap',
    maxWidth: SIZES.width,
    marginLeft: SIZES.width * 0.06,
    marginRight: SIZES.width * 0.06,
  },
});
