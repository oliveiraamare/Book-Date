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
import { TagSelect } from 'react-native-tag-select-max';

import preferencias from '../../estilos/preferencias';
import compartilhado from '../../estilos/compartilhado';

import { AppBarHeader } from '../../componentes/header';
import { FraseTop } from '../../componentes/frase';
import TextoMultilinha from '../../componentes/textInput/TextMultiline';
import Checkbox from '../../componentes/Checkbox';
import { BotaoTouchableOpacity }from '../../componentes/botao';

// TODO ajeitar KeyboardAvoidingView

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
      contoFadas: false, 
      genero: [
        'Leitor',
        'Leitora',
        'Ambos'
      ]
    };
  }

  handlePreferencias = () => {
    this.salvarPreferencias();
    this.props.navigation.navigate('UploadImagem');
  }
 
  salvarPreferencias = () => {

    const citacao = this.state.citacao.length > 0 ? this.state.citacao : 'não informado';

    const singularidade =  this.state.singularidade.length > 0 ? this.state.singularidade : 'não informado';

    const { sinopse, aventura, prosa, misterio, contoFadas } = this.state;
    const generoLiterario = this.tag.itemsSelected; 
    const genero = this.genero.itemsSelected;    
    let preferencias = {
      citacao: citacao,
      singularidade: singularidade,
      sinopse: sinopse,
      generoLiterario: generoLiterario,
      genero: genero,
      aventura: aventura,
      prosa: prosa,
      misterio: misterio,
      contoFadas: contoFadas
    }
    AsyncStorage.setItem('preferencias', JSON.stringify(preferencias)).then(
      ()=>{
        alert('Itens salvos: ' + citacao + ' ' + singularidade + ' ' + sinopse + ' ' + aventura + ' ' + prosa + ' ' + misterio + ' ' + contoFadas + ' ' + generoLiterario + ' ' + genero);//colocar console.log depois
      }).catch( ()=>{
       alert('Itens não salvos');
      }
    );
  }

  render() {    
    return (
      <View style={compartilhado.container}>
        <ImageBackground
          source={require('../../imagens/fundo.jpg')} 
          style={compartilhado.imagemBackground}
        >
          <View style={compartilhado.imagemTransparente}>
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
                  subtitleStyle={preferencias.header} title={frase} subtitle={autor}
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
                <View style={{flexDirection: 'row', marginBottom: 15}}>
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
                
                <Text style={preferencias.texto}>
                  Quem você deseja encontrar?
                </Text> 
                <View style={{alignItems:'center'}}>
                  <TagSelect
                    data={this.state.genero}
                    max={1}
                    ref={(genero) => {
                      this.genero = genero;
                    }}
                    onMaxError={() => {
                      Alert.alert('Ops', 'Max reached' + JSON.stringify(this.genero.itemsSelected)+ ' ' + `Total: ${this.tag.totalSelected}`);
                    }}
                    itemStyle={preferencias.tagItem}
                    itemLabelStyle={preferencias.tagLabel}
                    itemStyleSelected={preferencias.tagItemSelecionado}
                    itemLabelStyleSelected={preferencias.tagLabelSelecionado}
                  />
                </View>
                <View style={{marginTop: 70}}>
                  <BotaoTouchableOpacity 
                    buttonStyle={preferencias.botao}
                    onPress={() => this.handlePreferencias()}
                    text="Continuar" 
                    textStyle={preferencias.botaoTexto}
                  />
                </View>
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const frase='Queria que existissem outras vidas, só para eu ter o prazer de te conhecer de novo.';
const autor='Lais Lourenço';

export default Preferencias;