import React, { Component } from 'react';
import { 
  KeyboardAvoidingView,
  Text, 
  View    
} from 'react-native';

import Header from '../../componentes/header/header';
import TextoInputEmail from '../../componentes/textInput/textoInputEmail';
import BotaoTouchableOpacity from '../../componentes/botoes/botaoTouchableOpacity';
import BotaoTransparente from '../../componentes/botoes/BotaoTransparente';

import compartilhado from '../../estilos/compartilhado';
import reenviarSenha from '../../estilos/reenviarSenha';

class ReenviarSenha extends Component {
  state = {
      email: ''
  };
    
  render() {
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        <Header subtitleStyle={{color:'#ff33cc'}} title={frase} subtitle={autor}/>
        <Text style={reenviarSenha.texto}>
          Escreva seu e-mail que iremos enviar-te um link para que resetes a sua senha
        </Text>              
        <KeyboardAvoidingView behavior="padding" enabled>   
          <TextoInputEmail 
            inputStyle={reenviarSenha.textoInput}        
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />       
        </KeyboardAvoidingView>
        <BotaoTouchableOpacity 
          buttonStyle={reenviarSenha.botaoEnviar}
          onPress={() => this.props.navigation.navigate("ResetarSenha")}
          text="Enviar" 
        />      
        <BotaoTransparente 
          buttonStyle={reenviarSenha.botaoVoltar}
          onPress={() => this.props.navigation.navigate("Login")}
          texto="<- Voltar para o login">
        </BotaoTransparente>
      </View>
    )
  }
}

const frase='Se me esqueceres, só uma coisa, esquece-me bem devagarinho.';
const autor='Mario Quintana';

export default ReenviarSenha;