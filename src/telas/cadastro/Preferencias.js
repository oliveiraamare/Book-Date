import React, { Component } from 'react';
import { 
  AsyncStorage,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View , 
} from 'react-native';

import preferencias from '../../estilos/preferencias';
import compartilhado from '../../estilos/compartilhado';

import { AppBarHeader } from '../../componentes/header';
import { BotaoTouchableOpacity }from '../../componentes/botao';
import { FraseTop } from '../../componentes/frase';

import TextoInput from '../../componentes/textInput/TextInput';
import { TagSelect } from 'react-native-tag-select-max';
import Checkbox from '../../componentes/Checkbox';


// TODO ajeitar KeyboardAvoidingView
// cadastro no banco

class Preferencias extends Component {

  constructor(props) {
    super(props);
    this.state = {
      citacao: '',
      generoLiterario: [
        'Acadêmico',
        'Aventura',
        'Biografia',
        'Drama',
        'Espírita',
        'Evangélico',
        'Fantasia',
        'Ficção Científica',
        'Infantil',
        'Mistério',
        'Policial',
        'Romance',
        'Sobrenatural',
        'Teórico',
        'Terror'
      ],    
      aventura: false,
      prosa: false,
      misterio: false,
      contoFadas: false  
    };
  }

  handleLogin = () => {
    this.salvarPreferencias()
   // this.props.navigation.navigate('Cadastro')
  }
 
  salvarPreferencias = () => {
    const { aventura, prosa, misterio, contoFadas, citacao } = this.state;
    const generoLiterario = this.tag.itemsSelected;    
    let preferencias = {
      citacao: citacao,
      generoLiterario: generoLiterario ,
      aventura: aventura,
      prosa: prosa,
      misterio: misterio,
      contoFadas: contoFadas
    }
    AsyncStorage.setItem('preferencias', JSON.stringify(preferencias)).then(
      ()=>{
        alert('Itens salvos: ' + citacao + ' ' + generoLiterario + ' ' + aventura + ' ' + prosa + ' ' + misterio + ' ' + contoFadas);//colocar console.log depois
      }).catch( ()=>{
       alert('Itens não salvos')
      }
    );
  }

  render() {    
    return (
      <View style={compartilhado.container}>
       <AppBarHeader 
          onPress={() => this.props.navigation.navigate('Cadastro')} 
          title={"Preferências"} 
        />  
        <ScrollView>
          <KeyboardAvoidingView 
            style={{justifyContent: "flex-end", flex: 1 }} 
            behavior='height' 
            enabled 
          >
            <FraseTop 
              subtitleStyle={{alignSelf: 'flex-end'}} title={frase} subtitle={autor}
            />            
            <Text style={preferencias.texto}>
              Fale um pouco sobre as suas preferências
            </Text>
            <TextoInput
              inputStyle={preferencias.citacao}
              placeHolder='Qual a sua citação favorita?'    
              value={this.state.citacao}
              onChangeText={citacao => this.setState({ citacao })}
            />
            <Text style={preferencias.texto}>
              Escolha até três genêros literários
            </Text>
            <TagSelect
              data={this.state.generoLiterario}
              ref={(tag) => {
                this.tag = tag;
              }}
              onMaxError={() => {
                Alert.alert('Ops', 'Max reached' + JSON.stringify(this.tag.itemsSelected)+ ' ' + `Total: ${this.tag.totalSelected}`);
              }}
              itemStyle={preferencias.tagItem}
              itemLabelStyle={preferencias.tagLabel}
              itemStyleSelected={preferencias.tagItemSelecionado}
              itemLabelStyleSelected={preferencias.tagLabelSelecionado}
            />
            <Text style={preferencias.texto}>
              Quais encantamentos buscas no Book Date?
            </Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Checkbox 
                title='Aventura'  
                checked={this.state.aventura}
                onPress={checked => this.setState({ aventura: !this.state.aventura })}                  
              />
              <Checkbox 
                title='Prosa' 
                checked={this.state.prosa}
                onPress={checked => this.setState({ prosa: !this.state.prosa })}                  
              />
            </View>
            <View style={{flexDirection: 'row', marginBottom: 30}}>
              <Checkbox title='Mistério'
                checked={this.state.misterio}
                onPress={checked => this.setState({ misterio: !this.state.misterio })}                   
              />
              <Checkbox title='Conto de Fadas'
                checked={this.state.contoFadas}
                onPress={checked => this.setState({ contoFadas: !this.state.contoFadas })}                  
              />
            </View>            
            <View style={{marginTop: 100}}>
              <BotaoTouchableOpacity 
                buttonStyle={preferencias.botao}
                text="Continuar" 
                onPress={() => this.handleLogin()}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    )
  }
}

const frase='Queria que existissem outras vidas, só para eu ter o prazer de te conhecer de novo.';
const autor='Lais Lourenço';

export default Preferencias;