import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Vibration } from 'react-native';
import Fire from "../Fire";


export default function Shakee() {

  const [status, setShake] = useState('waiting...')

  const ONE_SECOND_IN_MS = 1000;  

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
  ];
  const shakeHelper = () => {
    state = Fire.shared.getShake();
    console.log(state)
    if(state == 'T'){
      Vibration.vibrate([0,1],true)
      setShake('Shaking');          
    }
    else{
        Vibration.cancel()
        setShake('waiting...');          
    }
  };

  const shake = () => {
    var no = setInterval(shakeHelper, 1000)
  };

  useEffect(() => {
    shake();
  },[])

  return (
    <View style={styles.container}>
        <Text style={styles.status}>{status}</Text>
      <StatusBar style="auto" />            
    </View>
    

  );
}

const styles = StyleSheet.create({
//color palette: https://www.color-hex.com/color-palette/76334

  container: {
    flex: 1,
    backgroundColor: '#931009',
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
  },
  status:{
    color:'#fff'
  }  
});

