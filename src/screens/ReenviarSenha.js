import React, { Component } from 'react';
import { 
  KeyboardAvoidingView,
  StyleSheet,
  Text, 
  TextInput,  
  TouchableOpacity, 
  View    
} from 'react-native';

import Header from '../componentes/header';
import TextoInputEmail from '../componentes/textoInputEmail';
import BotaoTouchableOpacity from '../componentes/botaoTouchableOpacity';
import BotaoTransparente from '../componentes/BotaoTransparente';




import compartilhado from '../styles/compartilhado';
import reenviarSenha from '../styles/reenviarSenha';

class ReenviarSenha extends Component {
  state = {
      email: ''
  };
    
  render() {
    return (
      <View style={compartilhado.container}>
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