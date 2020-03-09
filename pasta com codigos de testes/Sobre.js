import React, { Component } from 'react';
import { 
  BackHandler,
  Text,
  View , 
} from 'react-native';

import sobre from '../../estilos/sobre';
import compartilhado from '../../estilos/compartilhado';
import cor from '../../estilos/cores';

import { AppBarHeader } from '../../componentes/tabBar/AppBarHeader';
import FraseTop from '../../componentes/header/header';
import { BotaoTouchableOpacity  } from '../../componentes/botao';
import SelectUnico from '../../componentes/SelectUnico';
import Calendario from '../../componentes/DatePicker';
import TextoInput from '../../componentes/textInput/TextInput';

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

    var cadastro = this.props.navigation.state.params.cadastro;

    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        <AppBarHeader 
          headerStyle={{
            backgroundColor:cor.preto, 
            borderBottomColor:cor.branco,
            borderBottomWidth:0.18
          }} 
          onPress={() => this.props.navigation.navigate('Cadastro')} 
          title={"Sobre Você"} 
          style={{color:cor.branco, fontSize:18}} 
        />        
        <FraseTop subtitleStyle={sobre.header} title={frase} subtitle={autor} />  
        <Text style={{color:cor.rosa}}>
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
          buttonStyle={sobre.botao}
          onPress={() =>  this.props.navigation.navigate('Preferencias', 
            {
              sobre: {nome: this.state.nome, cidade: this.state.cidade},
              cadastro
            })}
          text="Continuar" 
        />
      </View>
    )
  }
}

const frase='Queria que existissem outras vidas, só para eu ter o prazer de te conhecer de novo.';
const autor='Lais Lourenço';

export default Sobre;