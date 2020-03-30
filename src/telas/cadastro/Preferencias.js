import React, { Component } from 'react';
import { 
  Alert,
  AsyncStorage,
  BackHandler,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View , 
} from 'react-native';
import { TagSelect } from 'react-native-tag-select-max';

import { AppBarHeader } from '../../componentes/header';
import { FraseTop } from '../../componentes/frase';
import TextoMultilinha from '../../componentes/textInput/TextMultiline';
import Checkbox from '../../componentes/Checkbox';
import { BotaoTouchableOpacity }from '../../componentes/botao';

import preferencias from '../../estilos/preferencias';
import compartilhado from '../../estilos/compartilhado';

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
        'Mistério',
        'Poesia',
        'Policial',
        'Romance',
        'Terror'
      ],  
      genero: [],
      aventura: this.aventura,
      prosa: this.prosa,
      misterio: this.misterio,
      contoFadas: this.contoFadas, 
      buscando: [
        'Leitor',
        'Leitora',
        'Ambos'
      ],
      busco: []
    };
  }

  componentDidMount() {
    this.recuperaDados();
    BackHandler.addEventListener('hardwareBackPress', this.onBack);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBack);
  }

  onBack = () => {
    this.props.navigation.navigate('Cadastro');    
    return true;
  }

  handlePreferencias = () => {
    this.salvarPreferencias();
    this.props.navigation.navigate('UploadImagem');
  }

  recuperaDados = async() => {
    await AsyncStorage.getItem('preferencias').then((preferencias) => {
      if (preferencias != null){
        var preferencias = JSON.parse(preferencias);

        var citacao = preferencias.citacao; 
        if (citacao != 'não informado') {
          this.setState({ citacao });
        } ;
        
        var singularidade = preferencias.singularidade;
        if (singularidade != 'não informado') {
          this.setState({ singularidade });
        };
        
        var sinopse = preferencias.sinopse; this.setState({ sinopse });

        var aventura = preferencias.aventura; 
        if(aventura == undefined){
          this.setState({ aventura: false });
        } else {
          this.setState({ aventura });
        };

        var prosa = preferencias.prosa;
        if(prosa == undefined){
          this.setState({ prosa: false });
        } else {
          this.setState({ prosa });
        };

        var misterio = preferencias.misterio;
        if(misterio == undefined){
          this.setState({ misterio: false });
        } else {
          this.setState({ misterio });
        };

        var contoFadas = preferencias.contoFadas;
        if(contoFadas == undefined){
          this.setState({ contoFadas: false });
        } else {
          this.setState({ contoFadas });
        };
                
        var buscando = preferencias.buscando; 
        if(buscando != undefined){
          busco = [buscando];     
          this.setState({ busco });
        }

        var generoLiterario = preferencias.generoLiterario; 
        var genero = Object.assign([], generoLiterario);
        if(genero.length != 0 && genero.length === 3){
          this.setState({ genero });
        }
        
      } else {
        var aventura = false; this.setState({ aventura });
        var prosa = false; this.setState({ prosa });
        var misterio = false; this.setState({ misterio });
        var contoFadas = false; this.setState({ contoFadas });
      }
    }).done();
  }
 
  salvarPreferencias = async() => {
    const citacao = this.state.citacao.length > 0 ? this.state.citacao : 'não informado';
    const singularidade =  this.state.singularidade.length > 0 ? this.state.singularidade : 'não informado';

    const { sinopse, aventura, prosa, misterio, contoFadas } = this.state;
    const generoLiterario = this.generoLiterario.itemsSelected; 
    const buscando = this.buscando.itemsSelected;    
    
    const preferencias = {
      citacao: citacao,
      singularidade: singularidade,
      sinopse: sinopse,
      generoLiterario: {
        0: generoLiterario[0],
        1: generoLiterario[1],
        2: generoLiterario[2]
      },
      buscando: buscando[0],
      aventura: aventura,
      prosa: prosa,
      misterio: misterio,
      contoFadas: contoFadas
    }
    await AsyncStorage.setItem('preferencias', JSON.stringify(preferencias)).then(
      ()=>{
        console.log('Itens salvos: ' + citacao + ' ' + singularidade + ' ' + sinopse + ' ' + aventura + ' ' + prosa + ' ' + misterio + ' ' + contoFadas + ' ' + generoLiterario + ' ' + buscando);
      }).catch(error => {
        console.log('Os itens da preferência não foram salvos: ', error.message);
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
              <KeyboardAvoidingView behavior='padding'>
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
                  <Checkbox 
                    title='Mistério'
                    checked={this.state.misterio}
                    onPress={checked => this.setState({ misterio: !this.state.misterio })}                   
                  />
                  <Checkbox title='Conto de Fadas'
                    checked={this.state.contoFadas}
                    onPress={checked => this.setState({ contoFadas: !this.state.contoFadas })}                  
                  />
                </View>         
                <Text style={preferencias.texto}>
                  Quais desses genêros literários você mais gosta? Escolha três tipos
                </Text>
                <ScrollView
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator={true}
                >
                  <TagSelect
                    value={this.state.genero}
                    data={this.state.generoLiterario}
                    max={3}
                    ref={(generoLiterario) => {
                      this.generoLiterario = generoLiterario;
                    }}
                    onMaxError={() => {
                      Alert.alert('Ops', 'Escolha três opções')
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
                <View style={{alignItems:'center', marginBottom: 70}}>
                  <TagSelect
                    value={this.state.busco}
                    data={this.state.buscando}
                    max={1}
                    ref={(buscando) => {
                      this.buscando = buscando;
                    }}
                    onMaxError={() => {
                      Alert.alert('Ops', 'Escolha somente uma opção')
                    }}
                    itemStyle={preferencias.tagItem}
                    itemLabelStyle={preferencias.tagLabel}
                    itemStyleSelected={preferencias.tagItemSelecionado}
                    itemLabelStyleSelected={preferencias.tagLabelSelecionado}
                  /> 
                </View>  
                <BotaoTouchableOpacity 
                  buttonStyle={preferencias.botao}
                  onPress={() => this.handlePreferencias()}
                  text="Continuar" 
                  textStyle={preferencias.botaoTexto}
                />
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const frase='"Queria que existissem outras vidas, só para eu ter o prazer de te conhecer de novo."';
const autor='Lais Lourenço';

export default Preferencias;