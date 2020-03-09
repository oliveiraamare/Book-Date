import React, {Component} from 'react';
import { 
  BackHandler,
  KeyboardAvoidingView,
  Text,  
  View 
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
  cadastro,
  updateEmail, 
  updatePassword
} from '../../acoes/usuario';

import styles from '../../estilos/cadastro';
import cor from '../../estilos/cores';
import compartilhado from '../../estilos/compartilhado';

import { AppBarHeader } from '../../componentes/tabBar/AppBarHeader';
import FraseTop from '../../componentes/header/header';
import { BotaoTouchableOpacity  } from '../../componentes/botao';
import TextoInput from '../../componentes/textInput/TextInput';

// TODO ajeitar KeyboardAvoidingView
// cadastro no banco

class Cadastro extends Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount(){
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    this.props.navigation.navigate('Home');
    // Return true to enable back button over ride.
    return true;
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: ''
    };
  }
 
  handleLogin = () => {
    this.props.navigation.navigate('Sobre', 
    {
      cadastro: {email: this.state.email, senha: this.state.senha}
    })
  }

  render() {
    
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        <AppBarHeader 
          headerStyle={{
            backgroundColor:cor.preto, 
            borderBottomColor:cor.branco,
            borderBottomWidth:0.18
          }} 
          onPress={() => this.props.navigation.navigate('Login')} 
          title={"Cadastro"} 
          style={{color:cor.branco, fontSize:18}} 
        />              
        <FraseTop subtitleStyle={styles.header} title={frase} subtitle={autor} />  
        <Text style={styles.texto}>
          Para começarmos, digite um e-mail e senha de preferência.
        </Text>
        <KeyboardAvoidingView style={{justifyContent: "flex-end"}} behavior = 'padding' enabled>
          <TextoInput
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeHolder='E-mail'
            inputStyle={styles.textInput}
          />
          <TextoInput
            value={this.state.senha}
            onChangeText={senha => this.setState({ senha })}
            placeHolder='Senha'
            secureTextEntry={true}
            inputStyle={styles.textInput}
          />     
        </KeyboardAvoidingView>
        <BotaoTouchableOpacity 
          buttonStyle={styles.botao}
          onPress={this.handleLogin}
          text="Continuar" 
        />
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