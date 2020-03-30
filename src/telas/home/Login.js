import React, { Component } from 'react';
import { 
  BackHandler,
  ImageBackground,
  Text, 
  TouchableOpacity,
  View    
} from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import { FraseTop } from '../../componentes/frase';
import TextoInput from '../../componentes/textInput/TextInput';
import { BotaoTransparente } from '../../componentes/botao';
import { BotaoComTexto } from '../../componentes/botao';

import login from '../../estilos/login';
import compartilhado from '../../estilos/compartilhado';
import cor from '../../estilos/cores';

import Firebase from '../../firebase/Firebase';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      esconderSenha: true,
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
    return true;
  }

  visibilidadeSenha = () => {
    this.setState({ esconderSenha: !this.state.esconderSenha });
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
          source={require('../../imagens/fundo.jpg')} 
          style={compartilhado.imagemBackground}
        >
          <View style={compartilhado.imagemTransparente}>
            <FraseTop 
              subtitleStyle={login.header} title={frase} subtitle={autor} 
            /> 
            <View style={{marginTop:80}}>
              <TextoInput
                inputStyle={login.textInput} 
                placeHolder='E-mail'
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />           
              <View>
                <TextoInput
                  inputStyle={login.textInput}
                  placeHolder='Senha'
                  maxLength={15}
                  secureTextEntry={this.state.esconderSenha}
                  value={this.state.senha}
                  onChangeText={senha => this.setState({ senha })}
                />     
                <TouchableOpacity 
                  activeOpacity={0.8} style={login.senha} 
                  onPress={this.visibilidadeSenha}
                >
                  { 
                    this.state.esconderSenha 
                    ?
                      <MaterialCommunityIcons name='eye-off' color={cor.branco} size={27} />
                    :
                      <MaterialCommunityIcons name='eye' color={cor.amarelo} size={27} />
                  } 
                </TouchableOpacity>
              </View>    
            </View>
            <TouchableOpacity 
              style={login.botaoEsqueceuLogin}
              onPress={() => this.props.navigation.navigate('ReenviarSenha')}>
                <Text style={{color: '#FFCC00'}}>Esqueceu seu login?</Text>
            </TouchableOpacity>   
            <BotaoTransparente 
              buttonStyle={login.botaoLogin}
              onPress={() => this.handleLogin()}
              text="Login" 
              textStyle={login.botaoLoginTexto}
            />                   
            <BotaoComTexto 
              viewStyle={login.botaoComTexto}
              texto1="Ainda não possui uma conta?"
              texto1Style={login.styleBotaoComTexto1}
              onPress={() => this.props.navigation.navigate('Cadastro')}
              texto2="Cadastre-se"
              texto2Style={login.styleBotaoComTexto2}
            />
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const frase='Nosso namoro começou há pouco, mas já sinto que estamos dando o primeiro passo em direção ao nosso "para sempre"';
const autor='Autor Desconhecido';

export default Login;