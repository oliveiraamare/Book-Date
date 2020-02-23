import React, { Component } from 'react'
import { ScrollView, Switch, Text, View} from 'react-native'

import compartilhado from '../../../../estilos/compartilhado';


class Conta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pushNotifications: true,
      isSwitchOn: false,
    };
  }
  render() {
    return (
      <View style={compartilhado.container}>
      <View style={compartilhado.statusBar} />
       <Text>oi</Text>
      </View>
    )
  }
}

export default Conta;