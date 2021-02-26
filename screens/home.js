import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';


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
      <View style={styles.shaker}>
        <Text>Shaker</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={shakee}>      
      <View style={styles.shakee}>
          <Text>Shakee</Text>
      </View>      
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shaker:{
    backgroundColor: '#87ceeb',
    padding: 20,
  },
  shakee:{
    backgroundColor: '#ffb4b4',
    padding: 20,
  }  
});

