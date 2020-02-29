import React, { Component } from 'react';
import { View } from 'react-native';

import compartilhado from '../../../estilos/compartilhado';
import cor from '../../../estilos/cores';

import { AppBarHeader } from '../../../componentes/tabBar/AppBarHeader';
class EditarPerfil extends Component {
  render() {      
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        <AppBarHeader 
          headerStyle={{
            backgroundColor:cor.preto, 
            borderBottomColor:cor.branco,
            borderBottomWidth:0.18
          }} 
          onPress={() => this.props.navigation.navigate('')} 
          title={"Apagar Conta"} 
          style={{color:cor.branco, fontSize:18}} 
        />
      </View>
    )
  }
}

export default EditarPerfil;