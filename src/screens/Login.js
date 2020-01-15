import React, { Component } from "react";
import { 
  BackHandler,
  KeyboardAvoidingView,
  Text, 
  
  View    
} from "react-native";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

//importando estilos
import styles from "../styles/login"

//importando componentes
import IconeSocial from "../componentes/iconeSocial";
import Header from "../componentes/header";
import Frase from "../componentes/frase";
import TextoInputEmail from "../componentes/textoInputEmail";
import TextoInputSenha from "../componentes/textoInputSenha";
import BotaoTouchableOpacity from '../componentes/botaoTouchableOpacity'
import BotaoTouchableOpacityTransparent from '../componentes/botaoTouchableOpacityTransparent'

// importando ações firebase
import { 
  getUser,
  login,
  updateEmail, 
  updatePassword
} from "../actions/usuario";
import Firebase from "../../Firebase";


class Login extends Component {

  handleLogin = () => {
    this.props.login()
    this.props.navigation.navigate('Perfil')
  }

  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.getUser(user.uid)
        if (this.props.user != null) {
            this.props.navigation.navigate('Perfil')
        } else {
          this.props.navigation.navigate('Cadastro')
        }
      }
    })
  }

  //colocar em um arquivo a parte
  componentWillUnmount(){
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    this.props.navigation.navigate('HomeLogin');
    // Return true to enable back button over ride.
    return true;
  }

  render() { 
    return (
      <View style={styles.container}>
        <Header title={titulo}/>
        <Frase style={styles.frase} title={frase} subtitle={autor} /> 
        <Text style={styles.textoSocial}>{social}</Text> 
        <IconeSocial style={styles.iconeSocial} />
        <Text style={styles.textoSocial}>ou então...</Text>
        <KeyboardAvoidingView behavior="padding" enabled >
          <TextoInputEmail 
            value={this.props.user.email}
            onChangeText={email => this.props.updateEmail(email)}
          />        
          <TextoInputSenha
            value={this.props.user.password}
            onChangeText={password => this.props.updatePassword(password)}
          />
        </KeyboardAvoidingView>
        <BotaoTouchableOpacity 
          text="Login"
          buttonStyle={styles.touchableOpacity}  
          onPress={() => this.props.login()}
		    />
        <BotaoTouchableOpacityTransparent 
          text="Esqueceu seu login?"
          buttonStyle={styles.botaoEsqueceuLogin}
          onPress={() => this.props.navigation.navigate('ReenviarSenha')}
		    />
        <Text style={styles.textoSocial}>
          Ainda não possui uma conta?
        </Text>
        <BotaoTouchableOpacityTransparent 
          text="Cadastre-se"
          buttonStyle={styles.botaoEsqueceuLogin}
          onPress={() => this.props.navigation.navigate('Cadastro')}>
        </BotaoTouchableOpacityTransparent>
      </View>
    )
  }
}

const titulo='Login';
const frase='Nosso namoro começou há pouco, mas já sinto que estamos dando o primeiro passo em direção ao nosso "para sempre"'
const autor='Autor Desconhecido'
const social = 'Fique à vontade para se conectar com as suas redes sociais!'


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)