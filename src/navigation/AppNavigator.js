import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoard from '../screens/OnBoard';
import Home from '../screens/Home';
import Result from '../screens/Result';
import PlantUpload from '../screens/PlantUpload';
import TestChart from '../screens/chart';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';
import Login from '../screens/Login';
import Register from '../screens/Register';
// import backimg from '../assets/images/arrow-back-12-512.png';
const Stack = createStackNavigator();
// const ActionBarImage = () => {
//   return (
//     <View style={{ flexDirection: 'row' }}>
//       <Image
//         source={backimg}
//         tintColor='#2d3436'
//         style={{
//           tintColor: 'white',
//           width: 25,
//           height: 25,
//           borderRadius: 40 / 2,
//           marginLeft: 15,
//         }}
//       />
//     </View>
//   );
// };
function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoard"
        screenOptions={{
          headerShown: TapGestureHandler,
        }}>
        {/* <Stack.Screen
          name="Chart"
          // options={{  }}
          component={TestChart}
          options={{
            headerShown: true,
            title: 'Daily Analysis',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: () => <ActionBarImage />,
          }}
        /> */}
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name="OnBoard"
          options={{ headerShown: false }}
          component={OnBoard}
        />
        <Stack.Screen
          name="PlantUpload"
          options={{ headerShown: false }}
          component={PlantUpload}
        />
        <Stack.Screen
          name="Result"
          options={{ headerShown: false }}
          component={Result}
        />
          <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name="Register"
          options={{headerShown: false}}
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
