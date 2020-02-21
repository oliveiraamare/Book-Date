import React, { Component } from 'react';
import { 
  BackHandler,
  Text,
  View , 
} from 'react-native';
import { Icon } from 'react-native-elements';

import sobre from '../../styles/sobre';
import preferencias from '../../styles/preferencias';
import compartilhado from '../../styles/compartilhado';

import HeaderBackButton from '../../componentes/headerBackButton';
import Header from '../../componentes/header';
import BotaoTouchableOpacity from '../../componentes/botaoTouchableOpacity';

import TextoInput from '../../componentes/TextInput';
import Tag from '../../componentes/Tag';
import Checkbox from '../../componentes/Checkbox';


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
      citacao: '',
      checked: false,
    };
  }

  render() {    
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        <HeaderBackButton
          text='' 
          onPress={() => this.props.navigation.navigate('Sobre')}
        />        
        <Header subtitleStyle={{alignSelf: 'flex-end'}} title={frase} subtitle={autor} />
        <View style={{flex:1}}>
          <Text style={preferencias.texto1}>
            Quais encantamentos buscas no Book Date?
          </Text>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Checkbox title='Aventura' />
            <Checkbox title='Prosa' />
          </View>
          <View style={{flexDirection: 'row', marginBottom: 30}}>
            <Checkbox title='Mistério' />
            <Checkbox title='Conto de Fadas' />
          </View>
          <Text style={preferencias.texto2}>
            Fale um pouco sobre as suas preferências
          </Text>
          <TextoInput
            inputStyle={preferencias.citacao}
            onChangeText={citacao => this.setState({ citacao })}
            placeHolder='Qual a sua citação favorita?'    
          />
          <Tag 
            leftElement=
              {
                <Icon 
                  name={'book-open-variant'} type={'material-community'} color={'#ff33cc'}
                />
              }
            label='separe por vírgula'
            placeholder='Insira os seus três gêneros literários preferidos'
            containerStyle= {preferencias.tag} 
            style={preferencias.tagStyle}          
          />                
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