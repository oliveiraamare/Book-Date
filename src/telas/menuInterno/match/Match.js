import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import compartilhado from '../../../estilos/compartilhado';

class Match extends Component {
  render() {      
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Socorro</Text>
          <Button
        title="Go to Details"
        onPress={() => this.props.navigation.navigate('Home')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
      </View>
    )
  }
}

export default Match;