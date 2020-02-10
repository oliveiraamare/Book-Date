import React, { Component } from 'react';
import { 
  BackHandler,
  Text,
  View , 
} from 'react-native';

import sobre from '../../styles/sobre';
import compartilhado from '../../styles/compartilhado';

import HeaderBackButton from '../../componentes/headerBackButton';
import Header from '../../componentes/header';
import BotaoTouchableOpacity from '../../componentes/botaoTouchableOpacity';
import SelectUnico from '../../componentes/SelectUnico';
import Calendario from '../../componentes/DatePicker';
import TextoInput from '../../componentes/TextInput';

// TODO ajeitar KeyboardAvoidingView
// cadastro no banco

class Sobre extends Component {
  

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
      nome: '',
      cidade: ''
    };
  }

  render() {    
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        <HeaderBackButton
          text='' 
          onPress={() => this.props.navigation.navigate('Cadastro')}
        />        
        <Header subtitleStyle={sobre.header} title={frase} subtitle={autor} />  
        <Text style={sobre.texto1}>
          Fale um pouco sobre você
        </Text>
        <View style={{flex:1}}>
          <TextoInput
            inputStyle={sobre.nome}
            onChangeText={nome => this.setState({ nome })}
            placeHolder='Como se chama?'    
          />
          <SelectUnico />
          <TextoInput
            inputStyle={sobre.cidade}
            onChangeText={cidade => this.setState({ cidade })}
            placeHolder='Cidade Natal'
          />   
          <Calendario/>          
        </View>
        <BotaoTouchableOpacity 
          buttonStyle={sobre.botao}
          onPress={() => this.props.navigation.navigate('Regras')}
          text="Continuar" 
        />
      </View>
    )
  }
}

const frase='Queria que existissem outras vidas, só para eu ter o prazer de te conhecer de novo.';
const autor='Lais Lourenço';

export default Sobre;