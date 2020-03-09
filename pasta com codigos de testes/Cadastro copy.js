import React, {Component} from 'react';
import { 
  KeyboardAvoidingView,
  ScrollView,
  Text,  
  View 
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AppBarHeader } from '../../componentes/header';
import { FraseTop } from '../../componentes/frase';

import { BotaoTouchableOpacity  } from '../../componentes/botao';
import SelectUnico from '../../componentes/SelectUnico';
import Calendario from '../../componentes/DatePicker';
import TextoInput from '../../componentes/textInput/TextInput';
import { AsyncStorage } from 'react-native';

import { 
  cadastro,
  updateEmail, 
  updatePassword
} from '../../acoes/usuario';

import cadastro from '../../estilos/cadastro';
import cor from '../../estilos/cores';
import compartilhado from '../../estilos/compartilhado';
import sobre from '../../estilos/sobre';



// TODO ajeitar KeyboardAvoidingView
// cadastro no banco
//BackHandler

class Cadastro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: ''
    };
  }
 
  componentDidMount = () => AsyncStorage.getItem('email').then((value) => this.setState({ 'email': value }))
   
  setEmail = (value) => {
     AsyncStorage.setItem('email', value);
     this.setState({ 'email': value });
  }

  handleLogin = () => {
    this.props.navigation.navigate('Sobre')
  }

  render() {
    return (
      <View style={compartilhado.container}>
        <AppBarHeader 
          onPress={() => this.props.navigation.navigate('Login')} 
          title={"Cadastro"} 
        />              
        <ScrollView>
          <KeyboardAvoidingView style={{justifyContent: "flex-end"}} behavior = 'padding' enabled>
            <FraseTop subtitleStyle={cadastro.header} title={frase} subtitle={autor} />  
            <Text style={cadastro.texto}>
              Para começarmos, digite um e-mail e senha de preferência.
            </Text>
            <TextoInput
              value={this.state.email}
              onChangeText={this.setEmail}
              placeHolder='E-mail'
              inputStyle={cadastro.textInput}
            />
            <TextoInput
              value={this.state.senha}
              onChangeText={senha => this.setState({ senha })}
              placeHolder='Senha'
              secureTextEntry={true}
              inputStyle={cadastro.textInput}
            />     
            <Text style={cadastro.texto}>
              Fale um pouco sobre você
            </Text>
            <View style={{flex:1}}>
              <TextoInput
                inputStyle={sobre.textInput}
                onChangeText={nome => this.setState({ nome })}
                placeHolder='Como se chama?'    
              />
              <SelectUnico />
              <TextoInput
                inputStyle={sobre.textInput}
                onChangeText={cidade => this.setState({ cidade })}
                placeHolder='Qual é a sua cidade natal'
              />   
              <Calendario/>          
            </View>        
            <BotaoTouchableOpacity 
              buttonStyle={cadastro.botao}
              onPress={this.handleLogin}
              text="Continuar" 
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    )
  }
}

const frase='Seja bem vindo a minha vida, está meio desarrumada, mas se você quiser ficar mais um pouco arrumamos juntos (..) é você quem eu tanto esperei!';
const autor='Vilma Galvão';

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateEmail, updatePassword, cadastro }, dispatch)
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro)