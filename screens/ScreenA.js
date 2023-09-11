import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const ScreenA = () => {
    const navigation=useNavigation();

  return (
    <View style={{marginTop: 50,alignItems:'center', justifyContent: 'center',}}>
     
      <TouchableOpacity
        onPress={()=> navigation.navigate("screenB")}
        style={{backgroundColor: 'red', height: 50, width: 100, borderRadius:10,}}>
        <Text>screenA</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>screenB</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>screenC</Text>
      </TouchableOpacity>

    
    </View>
  );
};

export default ScreenA;

const styles = StyleSheet.create({});
