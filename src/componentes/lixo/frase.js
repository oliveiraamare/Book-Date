import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Frase = ({ title, subtitle }) => (
  <View style={styles.container} >
    <Text style={[ {flexBasis: 90}, styles.text]}>{title}</Text>
    <Text style={[ {flexBasis: 10}, styles.text]}>{subtitle}</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    color: 'white', 
    flex: 1
  }, 
  container: {
    alignItems: 'center',
    width: '100%',
    height: 80,
    flexDirection: 'row', // row
    backgroundColor: 'skyblue',
   
    
    marginTop: 20,
    marginBottom: 5,
  },
});

export default Frase;