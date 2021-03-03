import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


export default function Home( {navigation} ) {

  const shakee = () => {
    navigation.navigate('Shakee')
  }
  const shaker = () => {
    navigation.navigate('Shaker')
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={shaker}>
        <Image style={styles.buttons} source = {require('../assets/shaker.png')}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={shakee}>
      <Image style={styles.buttons} source = {require('../assets/shakee.png')}/>  
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

//color palette: https://www.color-hex.com/color-palette/76334

  container: {
    flex: 1,
    backgroundColor: '#b1cdab',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shaker:{
    backgroundColor: '#ffdb58',
    padding: 20,
  },
  shakee:{
    backgroundColor: '#ffdb58',
    padding: 20,
  },
  buttons:{
    width: 200,
    height: 200,
    resizeMode: 'stretch',    

  }  
});

