import React, { Component } from 'react';
import { 
  Alert,
  AsyncStorage,
  ImageBackground,
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

import TextoMultilinha from '../../componentes/textInput/TextMultiline';
import { TagSelect } from 'react-native-tag-select-max';
import Checkbox from '../../componentes/Checkbox';

// TODO ajeitar KeyboardAvoidingView
// cadastro no banco

class Preferencias extends Component {

  constructor(props) {
    super(props);
    this.state = {
      citacao: '',
      singularidade: '',
      sinopse: '',
      generoLiterario: [
        'Aventura',
        'Biografia',
        'Drama',
        'Fantasia',
        'Ficção',
        'Infantil',
        'Mistério',
        'Policial',
        'Romance',
        'Terror'
      ],    
      aventura: false,
      prosa: false,
      misterio: false,
      contoFadas: false  
    };
  }

  handleLogin = () => {
    this.salvarPreferencias();
    this.props.navigation.navigate('UploadImagem');
  }
 
  salvarPreferencias = () => {
    const { citacao, singularidade, sinopse, aventura, prosa, misterio, contoFadas } = this.state;
    const generoLiterario = this.tag.itemsSelected;    
    let preferencias = {
      citacao: citacao,
      singularidade: singularidade,
      sinopse: sinopse,
      generoLiterario: generoLiterario,
      aventura: aventura,
      prosa: prosa,
      misterio: misterio,
      contoFadas: contoFadas
    }
    AsyncStorage.setItem('preferencias', JSON.stringify(preferencias)).then(
      ()=>{
        alert('Itens salvos: ' + citacao + ' ' + singularidade + ' ' + sinopse + ' ' + aventura + ' ' + prosa + ' ' + misterio + ' ' + contoFadas + ' ' + generoLiterario);//colocar console.log depois
      }).catch( ()=>{
       alert('Itens não salvos');
      }
    );
  }

  render() {    
    return (
      <View style={compartilhado.container}>
        <ImageBackground
          source={require('../../imagens/black.jpeg')} 
          style={compartilhado.imagemBackground}
        >
          <AppBarHeader 
            onPress={() => this.props.navigation.navigate('Cadastro')} 
            title={"Peculiariedades"} 
          />  
          <ScrollView>
            <KeyboardAvoidingView 
              style={{justifyContent: "flex-end", flex: 1 }} 
              behavior='padding' 
              enabled 
              disableIntervalMomentum={true}
            >
              <FraseTop 
                subtitleStyle={{alignSelf: 'flex-end'}} title={frase} subtitle={autor}
              />            
              <Text style={preferencias.texto}>
                Fale um pouco sobre as suas peculiaridades
              </Text>
              <TextoMultilinha
                inputStyle={preferencias.citacao}
                placeHolder='Qual a sua citação favorita?'   
                multiline={true}
                maxLength={180}
                numberOfLines={4}  
                value={this.state.citacao}
                onChangeText={citacao => this.setState({ citacao })}
              />
              <TextoMultilinha
                inputStyle={preferencias.citacao}
                placeHolder='Quais são as suas singularidades?' 
                multiline={true}
                maxLength={140}
                numberOfLines={4}     
                value={this.state.singularidade}
                onChangeText={singularidade => this.setState({ singularidade })}
              />
              <TextoMultilinha
                inputStyle={preferencias.citacao}
                placeHolder='Se a sua vida fosse um livro, qual seria a sinopse?' 
                multiline={true}
                maxLength={200}
                numberOfLines={4}     
                value={this.state.sinopse}
                onChangeText={sinopse => this.setState({ sinopse })}
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
              <Text style={preferencias.texto}>
                Quais genêros literários você mais gosta? Escolha até três tipos
              </Text>
              <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={true}
              >
                <TagSelect
                  data={this.state.generoLiterario}
                  max={3}
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
              </ScrollView>   
              <View style={{marginTop: 100}}>
                <BotaoTouchableOpacity 
                  buttonStyle={preferencias.botao}
                  text="Continuar" 
                  onPress={() => this.handleLogin()}
                />
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </ImageBackground>
      </View>
    )
  }
}

const frase='Queria que existissem outras vidas, só para eu ter o prazer de te conhecer de novo.';
const autor='Lais Lourenço';

export default Preferencias;