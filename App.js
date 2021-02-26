import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {

  const [shake, setShake] = useState('none')

  const shakee = () => {
    setShake('True');
  }
  const shaker = () => {
    setShake('False');
  }
  
  return (
    <View style={styles.container}>
      <Text>{shake}</Text>
      <View style={styles.shaker}>
        <Button title='Shaker' onPress={shaker}/>
      </View>

      <View style={styles.shakee}>
      <Button title='Shakee' onPress={shakee}/>
      </View>      
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

