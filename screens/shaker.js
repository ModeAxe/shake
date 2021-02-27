import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Fire from "../Fire";


export default function Shaker() {

  const [status, shakeStaus] = useState('off')

  const setShake = () =>{
    if(status == 'off'){
      shakeStaus('on');
      Fire.shared.setShake('T');          
    }
    else{
      Fire.shared.setShake('F');
      shakeStaus('off');          
    }    
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={setShake}>
      <View style={styles.shaker}>
        <Text>SHAKE</Text>
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

