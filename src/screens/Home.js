import React, { Component } from "react";
import { Image, View } from "react-native";

import BotaoTransparente from "../componentes/BotaoTransparente";
import BotaoTouchableOpacity from "../componentes/botaoTouchableOpacity";
import FrasesAleatorias from "../componentes/FrasesAleatorias";

import compartilhado from "../styles/compartilhado";
import home from "../styles/home";


class Home extends Component {
  render() {
    return (
      <View style={compartilhado.container}>

        <View style={compartilhado.statusBar} />
        <Image 
          style={home.imagem}
          source={require('../assets/img-icone.png')}
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