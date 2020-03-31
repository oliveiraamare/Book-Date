import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import cor from '../../estilos/cores';

class BotaoGradiente extends Component {
  render() {
    const { text } = this.props;
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#FFB302', '#FFBA01', '#FEC300', '#FFCF00', '#FED901', '#FFDF01']}
          start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
          style={{ height: 37, width: 90, alignItems: 'center', borderRadius: 100 }}
        >
          <TouchableOpacity disabled>
            <Text style={styles.buttonText}>
              {text}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignContent:'center',
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    margin: 5,
    marginBottom: 10,
    marginTop: 10
  },
  buttonText: {
    color: cor.branco,
    marginLeft: 1,
    marginRight: 1,
    padding: 15,
    textAlign: 'center',    
    width: 200
  }
});

export default BotaoGradiente;