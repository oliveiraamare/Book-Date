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
import { BotaoTouchableOpacity  } from '../../componentes/botao';
import BotaoTransparente from '../../componentes/botoes/BotaoTransparente';

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
      .then((user) => alert('E-mail enviado com sucesso! Por favor verifique sua caixa de entrada e/ou spam!'))
      .catch(error => alert(error));
    this.props.navigation.navigate('Login');
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
          <BotaoTouchableOpacity 
            buttonStyle={reenviarSenha.botaoEnviar}
            text="Enviar" 
            onPress={() => this.handleSenha()}
          />      
          <BotaoTransparente 
            buttonStyle={reenviarSenha.botaoVoltar}
            texto="<- Voltar para o login"
            onPress={() => this.props.navigation.navigate("Login")}
          >
          </BotaoTransparente>
        </ImageBackground>
      </View>
    )
  }
}

const frase='Se me esqueceres, só uma coisa, esquece-me bem devagarinho.';
const autor='Mario Quintana';

export default ReenviarSenha;