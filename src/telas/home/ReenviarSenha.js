//https://stackoverflow.com/questions/54515444/how-to-reset-firebase-auth-password-in-react-native
//https://medium.com/@ericmorgan1/change-user-email-password-in-firebase-and-react-native-d0abc8d21618
import React, { Component } from 'react';
import { 
  ImageBackground,
  KeyboardAvoidingView,
  Text, 
  View    
} from 'react-native';

import { FraseTop } from '../../componentes/frase';
import TextoInput from '../../componentes/textInput/TextInput';
import { BotaoTransparente  } from '../../componentes/botao';

import compartilhado from '../../estilos/compartilhado';
import reenviarSenha from '../../estilos/reenviarSenha';

import Firebase from '../../../Firebase';
class ReenviarSenha extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    }
  }

  handleSenha = () => {
    const { email } = this.state;
    Firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then((user) => 
        alert('E-mail enviado com sucesso! Por favor verifique sua caixa de entrada e/ou spam!'),
        this.props.navigation.navigate('Login')
      )
      .catch(error => alert(error));
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
              subtitleStyle={reenviarSenha.header} title={frase} subtitle={autor}
            />
            <Text style={reenviarSenha.texto}>
              Escreva seu e-mail que iremos enviar-te um link para que resetes a sua senha
            </Text>              
            <KeyboardAvoidingView behavior="padding" enabled>   
              <TextoInput
                inputStyle={reenviarSenha.textoInput}        
                placeHolder='E-mail'
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />     
            </KeyboardAvoidingView>
            <BotaoTransparente 
              buttonStyle={reenviarSenha.botaoEnviar}
              onPress={() => this.handleSenha()}
              text="Enviar" 
              textStyle={reenviarSenha.botaoEnviarTexto}
            />      
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const frase='Se me esqueceres, só uma coisa, esquece-me bem devagarinho.';
const autor='Mario Quintana';

export default ReenviarSenha;