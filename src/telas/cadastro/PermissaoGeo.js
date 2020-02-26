import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';

import BotaoTouchableOpacity from '../../componentes/botoes/botaoTouchableOpacity';
import { AppBarHeader } from '../../componentes/tabBar/AppBarHeader';
import Header from '../../componentes/header/header';

import compartilhado from '../../estilos/compartilhado';
import permissaoGeo from '../../estilos/permissaoGeo';
import cor from '../../estilos/cores';

class PermissaoGeo extends Component {
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
          onPress={() => this.props.navigation.navigate('UploadImagem')} 
          title={"Cadê o Wally?"} 
          style={{color:cor.branco, fontSize:18}} 
        />
        <Header 
          subtitleStyle={permissaoGeo.header} 
          title={frase} 
          subtitle={autor} 
        />
        <View style={{margin:10, top:5}}>
          <Avatar.Icon 
            size={200} 
            icon="map-marker-radius"  
            style={permissaoGeo.avatar}
          />
          <Text style={permissaoGeo.texto}>
            Você precisa autorizar que acessemos sua localização para que possamos encontrar os leitores que cruzam o seu caminho
          </Text>  
        </View>
        <BotaoTouchableOpacity 
          buttonStyle={permissaoGeo.botao}
          onPress={() => this.props.navigation.navigate('Geolocalizacao')} 
          text="Bora lá" 
        />
      </View>
    );
  }
}

const frase='Você vai encontrar alguém que também queira te encontrar.';
const autor='Autor Desconhecido';

export default PermissaoGeo;