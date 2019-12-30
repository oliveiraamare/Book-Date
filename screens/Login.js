import React, { Component } from 'react';
import { 
  BackHandler,
  KeyboardAvoidingView,
  StyleSheet,
  Text, 
  TextInput,  
  TouchableOpacity, 
  View    
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { 
  getUser,
  login,
  updateEmail, 
  updatePassword
} from '../actions/usuario';
import Firebase from '../Firebase';

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
          
        <Text style={styles.texto}>
          Book Date
        </Text>

        <KeyboardAvoidingView behavior="padding" enabled>
        <TextInput
          style={styles.textoInput}
          value={this.props.user.email}
          onChangeText={email => this.props.updateEmail(email)}
          placeholder='Email'
          autoCapitalize='none'
        />
        <TextInput
          style={styles.textoInput}
          value={this.props.user.password}
          onChangeText={password => this.props.updatePassword(password)}
          placeholder='Password'
          secureTextEntry={true}
        />
        </KeyboardAvoidingView>
        
        <TouchableOpacity 
          style={styles.botaoLogin} 
          onPress={() => this.props.login()}>
            <Text style={styles.botaoTextoLogin}>Login</Text>                  
        </TouchableOpacity>
        <TouchableOpacity 
          buttonStyle={styles.botaoEsqueceuLogin}
          onPress={() => this.props.navigation.navigate('ReenviarSenha')}>
            <Text style={{color: '#3897f1'}}>Esqueceu seu login?</Text>
        </TouchableOpacity>
        
        <Text style={{position: 'absolute', bottom: 30 }}>
          Ainda não possui uma conta?
        </Text>
        
        <TouchableOpacity 
          style={{position: 'absolute', bottom: 5}}
          buttonStyle={styles.botaoCadastro}
          onPress={() => this.props.navigation.navigate('Cadastro')}>
            <Text style={{color: '#3897f1'}}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  botaoCadastro: {
    backgroundColor: 'transparent',
    height: 45,
    marginBottom: 100,
    marginTop: 100       
  },
  botaoEsqueceuLogin: {
      backgroundColor: 'transparent',
      height: 45,
      marginTop: 10
    },
  botaoLogin: {
    alignItems: 'center',
    backgroundColor: '#8ae7f7',
    borderColor: '#8ae7f7',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 5,
    paddingVertical: 5,      
    width: 350
  },
  botaoTextoLogin: {
    color: '#fff',
    fontSize: 15,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center'        
  },
  texto: {            
    position: 'absolute', 
    top: 70,
    backgroundColor: '#fff',
    color: 'black',
    fontSize: 50,     
    justifyContent: 'center',    
    textAlign: 'center'      
  },
  textoInput: {
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
    fontSize: 16,
    margin: 10,
    padding: 10,
    textAlign: 'center',
    width: 400  
  }
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)