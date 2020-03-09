import React, { Component } from 'react';
import { Image, View } from 'react-native';

import BotaoTransparente from '../../componentes/botoes/BotaoTransparente';
import { BotaoTouchableOpacity  } from '../../componentes/botao';
import FrasesAleatorias from '../../componentes/fraseAleatoria/FrasesAleatorias';

import compartilhado from '../../estilos/compartilhado';
import home from '../../estilos/home';

class Home extends Component {
  render() {
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        <Image 
          style={home.imagem}
          source={require('../../imagens/img-icone.png')}
        />        
        <View style={home.botoes}>
          <BotaoTouchableOpacity 
            buttonStyle={home.botaoLogin}
            onPress={() => this.props.navigation.navigate('Login')}
            text="Login" />           
          <BotaoTouchableOpacity 
            buttonStyle={home.botaoCadastro}
            onPress={() => this.props.navigation.navigate('Cadastro')}
            text="Cadastro" />    
        </View>
        <FrasesAleatorias />
        <View style={home.botaoTransparente}>
          <BotaoTransparente 
              onPress={() => this.props.navigation.navigate('TermoUso')}
              texto="Termos de Uso ">
            </BotaoTransparente>
            <BotaoTransparente 
              onPress={() => this.props.navigation.navigate('TermoPrivacidade')}
              texto="  Política de Privacidade">
            </BotaoTransparente>
        </View>
      </View>
    ) 
  }
}

export default Home;