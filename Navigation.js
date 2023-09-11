import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';
import ScreenC from './screens/ScreenC';


const Stack = createNativeStackNavigator();

const config={
  animation:'spring',
  config:{
    stiffness:1000,
    damping:50,   
    mess:3,
    overshootClamping:false,
    restDisplacementThreshold:0.1,
    restSpeedThreshold:0.01,
  }
}


const Navigation = () => {
  return (
   <NavigationContainer>
        <Stack.Navigator screenOptions={{
          gestureEnabled:true,
          transitionSpec:{
            open:config,
            close:config,
          }
        }}>
            <Stack.Screen name="ScreenA" component={ScreenA} options={{headerShown:false}} />
            <Stack.Screen name="screenB" component={ScreenB} options={{headerShown:false}} />
            <Stack.Screen name="screenC" component={ScreenC} options={{headerShown:false}} />
        </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})