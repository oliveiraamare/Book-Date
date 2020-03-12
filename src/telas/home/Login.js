import React, { Component } from 'react';
import { 
  BackHandler,
  ImageBackground,
  Text, 
  TouchableOpacity,
  View    
} from 'react-native';

import Firebase from '../../../Firebase';

import login from '../../estilos/login';
import compartilhado from '../../estilos/compartilhado';

import { FraseTop } from '../../componentes/frase';
import TextoInput from '../../componentes/textInput/TextInput';
import { BotaoTouchableOpacity } from '../../componentes/botao';
import BotaoComTexto from '../../componentes/botoes/BotaoComTexto';
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: ''
    }
  }

  //Colocar em um componente separado
  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }    
  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }    
  onBackPress = () => {
    this.props.navigation.navigate('Home');
    // Return true to enable back button over ride.
    return true;
  }

  handleLogin = () => {
    const { email, senha } = this.state
    Firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(() => this.props.navigation.navigate('NavegacaoInterna'))
      .catch(error => alert(error))
  }

  render() { 
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        <ImageBackground
          source={require('../../imagens/black.jpeg')} 
          style={compartilhado.imagemBackground}
        >
          <FraseTop 
            subtitleStyle={login.header} title={frase} subtitle={autor} 
          />              
          <TextoInput
            inputStyle={login.inputEmail} 
            placeHolder='E-mail'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />           
          <TextoInput
            inputStyle={login.inputSenha}        
            placeHolder='Senha'
            secureTextEntry={true}
            value={this.state.senha}
            onChangeText={senha => this.setState({ senha })}
          />   
          <TouchableOpacity 
            style={login.botaoEsqueceuLogin}
            onPress={() => this.props.navigation.navigate('ReenviarSenha')}>
              <Text style={{color: '#FFCC00'}}>Esqueceu seu login?</Text>
          </TouchableOpacity>   
          <BotaoTouchableOpacity 
            buttonStyle={login.botaoLogin}
            text="Login" 
            onPress={() => this.handleLogin()}
          />                   
          <BotaoComTexto 
            text1="Ainda não possui uma conta? "
            onPress={() => this.props.navigation.navigate('Cadastro')}
            text2="Cadastre-se">
          </BotaoComTexto>
        </ImageBackground>
      </View>
    )
  }
}

const frase='Nosso namoro começou há pouco, mas já sinto que estamos dando o primeiro passo em direção ao nosso "para sempre"';
const autor='Autor Desconhecido';

export default Login;