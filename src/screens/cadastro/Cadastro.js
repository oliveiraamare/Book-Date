import React from 'react';
import { 
  BackHandler,
  KeyboardAvoidingView,
  Text,
  TextInput,  
  View 
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
  cadastro,
  updateEmail, 
  updatePassword
} from '../../actions/usuario';

import styles from '../../styles/cadastro';
import compartilhado from '../../styles/compartilhado';

import HeaderBackButton from '../../componentes/headerBackButton';
import Header from '../../componentes/header';
import BotaoTouchableOpacity from '../../componentes/botaoTouchableOpacity';

// TODO ajeitar KeyboardAvoidingView
// cadastro no banco

class Cadastro extends React.Component {

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

  handleLogin = () => {
    this.props.cadastro()
    this.props.navigation.navigate('Perfil')
  }

  render() {
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        <HeaderBackButton
          onPress={() => this.props.navigation.navigate('Home')}
        />        
        <Header subtitleStyle={styles.header} title={frase} subtitle={autor} />  
        <Text style={styles.texto}>
          Para começarmos, digite um e-mail e senha de preferência.
        </Text>
        <KeyboardAvoidingView style={{justifyContent: "flex-end"}} behavior = 'padding' enabled>
          <TextInput
            style={styles.textInput}
            value={this.props.user.email}
            onChangeText={email => this.props.updateEmail(email)}
            placeholder='Email'
            autoCapitalize='none'
          />
          <TextInput
            style={styles.textInput}
            value={this.props.user.password}
            onChangeText={password => this.props.updatePassword(password)}
            placeholder='Password'
            secureTextEntry={true}
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

const frase='Seja bem vindo a minha vida, está meio desarrumada, mas se você quiser ficar mais um pouco arrumamos juntos (..) é você quem eu tanto esperei!'
const autor='Vilma Galvão'

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateEmail, updatePassword, cadastro }, dispatch)
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro)