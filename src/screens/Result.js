import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import LinearGradient from 'react-native-linear-gradient';
export default function OnBoard({navigation, route}) {
  // const {resData} = route.params;
  const result = {
    symptoms: [
      '1. Nutritious',
      '2. Hydrating',
      '3. Boosts Immunity',
      '4. Promotes Digestion',
      '5. Great for Skin and Hair',
      '6. Supports Heart Health',
      '7. Promotes Weight Loss',
    ],
    solutions: [
      'Aute dolore consectetur dolore',
      ' ut excepteur officia et commodo do.',
    ],
  };
  // const result = resData.result.detail;
  // console.log('hello from res', resData);
  console.log(result);
  const api = {foo: 'bar', foz: 'baz'};
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/cocoOnb.jpg')}>
      <LinearGradient
        colors={['transparent', COLORS.primary, COLORS.primary]}
        style={styles.overlay}>
        {/* <Text style={styles.title2}>{result.name}</Text> */}
        <View style={{alignItems: 'center', paddingHorizontal: 20}}>
          <Text style={styles.title}>Coconuts have numerous benefits</Text>
          {result.symptoms &&
            result.symptoms.map(list => (
              <Text style={styles.des} key={list.index}>
                {list}
              </Text>
            ))}
          {/* <Text style={styles.title}>Solutions</Text> */}
          {/* 
          {result.solutions &&
            result.solutions.map(list => ( */}
          <Text style={styles.des}>
            Overall, incorporating coconut into your diet and beauty routine can
            have many health and beauty benefits.
          </Text>
          {/* // ))} */}
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>Home</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    flex: 1,
  },
  overlay: {
    marginTop: SIZES.height * 0.2,
    height: SIZES.height * 0.8,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: COLORS.third,
    height: 40,
    width: 100,
    borderRadius: 20,
    margin: 10,
    marginTop: 20,
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
    color: COLORS.white,
    fontSize: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  des: {
    color: COLORS.black,
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 20,
    borderRadius: 50,
    margin: 5,
    padding: 5,
    fontWeight: 'bold',
    marginTop: 10,
    backgroundColor: 'white',
  },
  title2: {
    // marginTop: SIZES.height * 0.1,
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
});
