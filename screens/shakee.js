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
  const shake = () => {
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

  useEffect(() => {
    shake();
  },[])

  return (
    <View style={styles.container}>
        <Text>{status}</Text>
{/* 
      <TouchableOpacity onPress={shake}>      
      <View style={styles.shakee}>
          <Text>Shakee</Text>
      </View>      
      </TouchableOpacity> */}
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

