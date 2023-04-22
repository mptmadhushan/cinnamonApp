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
import More from '../screens/MoreInfo';
import Register from '../screens/Register';
// import backimg from '../assets/images/arrow-back-12-512.png';
const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoard"
        screenOptions={{
          headerShown: TapGestureHandler,
        }}>
       
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
         <Stack.Screen
          name="More"
          options={{headerShown: false}}
          component={More}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
