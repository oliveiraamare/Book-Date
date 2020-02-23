import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import compartilhado from '../../../../estilos/compartilhado';

class Configuracao extends Component {
  render() {      
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Socorro</Text>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
          />
        </View>
      </View>
    )
  }
}

export default Configuracao;