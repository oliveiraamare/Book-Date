import React, { Component } from 'react';
import { 
  BackHandler,
  Text,
  View , 
} from 'react-native';
import {Icon} from 'react-native-elements';

import sobre from '../../estilos/sobre';
import compartilhado from '../../estilos/compartilhado';

import HeaderBackButton from '../../../componentes/header/headerBackButton';
import FraseTop from '../../../componentes/header/header';
import BotaoTouchableOpacity from '../../../componentes/botoes/botaoTouchableOpacity';

import TextoInput from '../../../componentes/textInput/TextInput';
import Tag from '../../../componentes/Tag';

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
        <FraseTop subtitleStyle={{alignSelf: 'flex-end'}} title={frase} subtitle={autor} />  
        <Text style={{color:'#ff33cc',  
    fontSize: 15 ,  
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'justify'}}>
          Insira até três preferências literárias, separando-as por vírgula.
        </Text>
        <View style={{flex:1}}>
          <Tag 
            leftElement=
            {
              <Icon 
                name={'book-outline'} 
                type={'material-community'} 
                color={'#ffffff'}
              />
            }
            placeholder='Gênero literário'
            inputContainerStyle={{marginBottom: 10,  marginTop: 5, top: -40}}
            tagStyle={ {backgroundColor: '#ff33cc', borderColor: '#ff33cc', height: 20, marginTop: -50}}
          />
          <Tag 
            leftElement=
            {
              <Icon 
                name={'face'} 
                type={'material-io'} 
                color={'#ffffff'}/>
            }
            placeholder='Autor kjgghmhvhvhm'
            inputContainerStyle={{marginBottom: -10,  marginTop: 5, top:-90}}
            tagStyle={ {backgroundColor: '#ff33cc',
    borderColor: '#ff33cc', height: 20, marginTop: -80}}
          />
          <Tag 
            leftElement=
            {
              <Icon 
              name={'book-open-variant'} 
                type={'material-community'} 
                color={'#ffffff'}/>
            }
            placeholder='Livro kjlkhkfjlh'
            inputContainerStyle={{marginBottom: 10,  marginTop: 5, top:-130}}
            tagStyle={ {backgroundColor: '#ff33cc',
    borderColor: '#ff33cc', height: 20,}}
          />
            
        </View>
        <BotaoTouchableOpacity 
          buttonStyle={sobre.botao}
          onPress={() => this.props.navigation.navigate('Regras')}
          text="Continuar" 
          tagStyle={{ backgroundColor: '#ff33cc',
    borderColor: '#ff33cc', height: 20, }}
        />
      </View>
    )
  }
}

const frase='Queria que existissem outras vidas, só para eu ter o prazer de te conhecer de novo.';
const autor='Lais Lourenço';

export default Sobre;