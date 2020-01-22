import React, { Component } from "react";
import { 
  BackHandler,
  KeyboardAvoidingView,
  Text, 
  TouchableOpacity,
  View    
} from "react-native";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

//importando estilos
import styles from "../styles/login"

//importando componentes
import IconeSocial from "../componentes/iconeSocial";
import Header from "../componentes/header";
import TextoInputEmail from "../componentes/textoInputEmail";
import TextoInputSenha from "../componentes/textoInputSenha";
import BotaoTouchableOpacity from '../componentes/botaoTouchableOpacity'
import BotaoCadastro from '../componentes/BotaoCadastro'

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
    this.props.navigation.navigate('Home');
    // Return true to enable back button over ride.
    return true;
  }

  render() { 
    return (
      <View style={styles.container}>
        <Header title={frase} subtitle={autor}/>              
        <TextoInputEmail 
          value={this.props.user.email}
          onChangeText={email => this.props.updateEmail(email)}
        />            
        <TextoInputSenha
          value={this.props.user.password}
          onChangeText={password => this.props.updatePassword(password)}
        />         
        <BotaoTouchableOpacity 
          text="Login"
          onPress={() => this.props.login()}
		    />       
        <TouchableOpacity 
          style={styles.botaoEsqueceuLogin}
          onPress={() => this.props.navigation.navigate('ReenviarSenha')}>
            <Text style={{color: '#ff33cc'}}>Esqueceu seu login?</Text>
        </TouchableOpacity>
        <IconeSocial style={styles.textoSocial} />
        <BotaoCadastro 
          text1="Ainda não possui uma conta? "
          onPress={() => this.props.navigation.navigate('Cadastro')}
          text2="Cadastre-se">
        </BotaoCadastro>
      </View>
    )
  }
}

const frase='Nosso namoro começou há pouco, mas já sinto que estamos dando o primeiro passo em direção ao nosso "para sempre"'
const autor='Autor Desconhecido'

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)