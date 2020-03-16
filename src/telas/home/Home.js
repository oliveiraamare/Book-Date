import React, { Component } from 'react';
import { ImageBackground, Text, View } from 'react-native';

import { BotaoTransparente } from '../../componentes/botao';
import { BotaoTouchableOpacity  } from '../../componentes/botao';
import FrasesAleatorias from '../../componentes/fraseAleatoria/FrasesAleatorias';

import compartilhado from '../../estilos/compartilhado';
import home from '../../estilos/home';

class Home extends Component {
  render() {
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        <ImageBackground
          source={require('../../imagens/home.jpg')} 
          style={compartilhado.imagemBackground}
        >        
          <View style={home.imagemBackground}>
            <Text style={home.bookDate}>Book Date</Text>  
            <FrasesAleatorias />
            <View style={home.botoesAcao}>
              <BotaoTouchableOpacity 
                buttonStyle={home.botaoLogin}
                onPress={() => this.props.navigation.navigate('Login')}
                text="Login" 
                textStyle={home.botoesAcaoTexto} />           
              <BotaoTouchableOpacity 
                buttonStyle={home.botaoCadastro}
                onPress={() => this.props.navigation.navigate('Cadastro')}
                text="Cadastro" 
                textStyle={home.botoesAcaoTexto} />    
            </View>
            <View style={home.botoesTermos}>
              <BotaoTransparente 
                buttonStyle={{marginRight:10}}
                onPress={() => this.props.navigation.navigate('TermoUso')}
                text="Termos de Uso" />
              <BotaoTransparente 
                onPress={() => this.props.navigation.navigate('TermoPrivacidade')}
                text="Política de Privacidade" />
            </View>        
          </View>
        </ImageBackground>
      </View>
    ) 
  }
}

export default Home;