import Constants from 'expo-constants';

import React, { Component } from "react";
import { 
  BackHandler,
  Image,
  StyleSheet,
  Text, 
  TouchableOpacity, 
  View
} from "react-native";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

//importando estilos
import styles from "../styles/login"
import compartilhado from "../styles/compartilhado"

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
      <View style={compartilhado.container}>
        <Header title={frase} subtitle={autor}/>              
      
      <TextoInputEmail 
          value={this.props.user.email}
          onChangeText={email => this.props.updateEmail(email)}
        />     
          
        <TouchableOpacity 
          style={x.botaoEntrarCadastrar} 
          onPress={() => this.props.navigation.navigate('Cadastro')}>
            <Text style={x.botaoTextoEntrarCadastrar}>Cadastre-se</Text>     
        </TouchableOpacity>              
        
        <View style={x.frases}>
          <Text style={{textAlign: 'right', color: '#fff',}}>
            Cada qual sabe amar a seu modo;  
          </Text>
          <Text style={{textAlign: 'right'}}>
            o modo, pouco importa;
          </Text>
          <Text style={{textAlign: 'right', color: '#fff',}}>
            o essencial é que saiba amar
          </Text>               
          <Text style={{textAlign: 'right', color: 'red'}}>
            Machado de Assis
          </Text>
        </View>
        
        <TouchableOpacity 
          style={{position: 'absolute', bottom: 35}}
          buttonStyle={x.botaoSocialTermoPrivacidade}
          onPress={() => this.props.navigation.navigate('LoginSocial')}>
            <Text style={{color: '#3897f1', fontSize: 20}}>
              Conexão via rede social
            </Text>
        </TouchableOpacity>
        
        <View 
          style={{position: 'absolute', bottom: 10, flexDirection:'row',   
            justifyContent: 'space-between'}}>
              <TouchableOpacity 
                buttonStyle={x.botaoSocialTermoPrivacidade}
                onPress={() => this.props.navigation.navigate("TermoUso")}>
                  <Text style={{color: '#3897f1', fontSize: 13}}>
                    Temos de uso     -
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                buttonStyle={x.botaoSocialTermoPrivacidade}
                onPress={() => this.props.navigation.navigate("TermoPrivacidade")}>
                  <Text style={{color: '#3897f1', fontSize: 13}}>     
                    Privacidade
                  </Text>
              </TouchableOpacity>
        </View>



        <BotaoCadastro 
          text1="Ainda não possui uma conta? "
          onPress={() => this.props.navigation.navigate('Cadastro')}
          text2="Cadastre-se">
        </BotaoCadastro>
      </View>
    )
  }
}

const x = StyleSheet.create({
  botaoEntrarCadastrar: {
      alignItems: 'center',
      backgroundColor: '#8ae7f7',
      borderColor: '#8ae7f7',
      borderRadius: 10,
      borderWidth: 1,
      marginTop: 20,
      marginBottom: 5,
      paddingVertical: 5,      
      width: 250, flex: 1,
  },
  botaoSocialTermoPrivacidade: {
      backgroundColor: 'transparent',
      height: 45,
      marginBottom: 200,
      marginTop: 200    , flex: 1,   
  },
  botaoTextoEntrarCadastrar: {
      color: '#fff',
      fontSize: 15, flex: 1,
  },    
  frases: {
      justifyContent: 'center',         
      textAlign: 'center',
      top: 80,
      color: '#fff',flex: 1,
  },
})

const frase='Nosso namoro começou há pouco, mas já sinto que estamos dando o primeiro passo em direção ao nosso "para sempre"'
const autor='Autor Desconhecido'

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateEmail, getUser }, dispatch)
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)