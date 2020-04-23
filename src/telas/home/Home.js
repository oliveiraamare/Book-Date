import React, { Component } from 'react';
import {
  Alert,
  BackHandler,
  ImageBackground, 
  Text, 
  View 
} from 'react-native';

import { BotaoTransparente } from '../../componentes/botao';
import { BotaoTouchableOpacity  } from '../../componentes/botao';
import { Citacoes } from '../../componentes/fraseAleatoria/citacoes';

import compartilhado from '../../estilos/compartilhado';
import home from '../../estilos/home';

class Home extends Component {

  backAction = () => {
    Alert.alert('Tem certeza de que queres sair?', '"A verdade é a seguinte: Você vai se apaixonar! Não tem jeito! Nem tente fugir." - Sussuro.', 
    [
      {  
        text: "Cancelar",
        onPress: () => null,
        style: "cancel"
      },
      { text: "Sim", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backAction);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backAction);
  }

  render() {
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        <ImageBackground
          source={require('../../imagens/home.jpg')} 
          style={compartilhado.imagemBackground}
        >        
          <View style={compartilhado.imagemTransparente}>
            <Text style={home.bookDate}>Book Date</Text>  
            <Citacoes />
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
                buttonStyle={{marginRight:40}}
                onPress={() => this.props.navigation.navigate('TermoPrivacidade')}
                text="Política de Privacidade"
                textStyle={home.textoBotoesTermos} />
              <BotaoTransparente 
                onPress={() => this.props.navigation.navigate('TermoUso')}
                text="Termos de Uso"
                textStyle={home.textoBotoesTermos} />
            </View>        
          </View>
        </ImageBackground>
      </View>
    ) 
  }
}

export default Home;