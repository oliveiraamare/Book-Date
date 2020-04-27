//https://www.npmjs.com/package/age-calculator      
//https://stackoverflow.com/questions/45388957/how-to-pass-parameters-to-screen-in-stacknavigator
import React, { Component } from 'react';
import {
  YellowBox,
  Image,
  ImageBackground, 
  ScrollView, 
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Preferencias } from '../../../componentes/topPreferencias';

import perfilBooklover from '../../../estilos/perfilBooklover';
import compartilhado from '../../../estilos/compartilhado';
import cor from '../../../estilos/cores';

let { AgeFromDateString } = require('age-calculator');
YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);
class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: {},
      preferencias: '',
      autor: {},
      livro: {},
      generoLiterario: {}
    };
  }

  componentDidMount() {
    this.recuperarDados();
  }

  recuperarDados() {
    const dados = this.props.route.params.item;
    this.setState({ dados });

    const preferencias = this.props.route.params.item.preferencias;
    this.setState({ preferencias });

    const autor = this.props.route.params.item.preferencias.autor;
    this.setState({ autor });

    const livro = this.props.route.params.item.preferencias.livro;
    this.setState({ livro });
    
    const generoLiterario = this.props.route.params.item.preferencias.generoLiterario;
    this.setState({ generoLiterario });
  }

  render() {
    var dtNasc = this.state.dados.dtNasc;
    let idade = new AgeFromDateString(dtNasc).age;
    return (    
      <View style={compartilhado.container}> 
        <View style={compartilhado.statusBar}/>
        <ImageBackground style={compartilhado.imagemBackground}> 
          <ScrollView style={perfilBooklover.scrollView}>        
            <Image
              source={require('../../../imagens/perfil.jpg')} 
              style={perfilBooklover.imagemFrame}
            /> 

            {
              this.state.dados.imagem == null
              ? <Image
                  source={require('../../../imagens/match.jpg')}
                  style={perfilBooklover.imagemPerfil}
                />    
              : <Image
                  source={{uri:this.state.dados.imagem}}
                  style={perfilBooklover.imagemPerfil}
                />       
            }     

            <View style={perfilBooklover.containerInfo}>

              <View style={perfilBooklover.containerNome}>
                <Text style={perfilBooklover.nome}>
                  {this.state.dados.nome}
                </Text>
              </View>

              <Text style={perfilBooklover.descricaoIdadeCidade}>
                {idade} anos, {this.state.dados.cidade}
              </Text> 

              {
                this.state.preferencias.citacao == 'não informado' ? 
                  null
                : <Text style={perfilBooklover.citacao}>
                    "{this.state.preferencias.citacao}"
                  </Text>   
              }  
              
              { 
                (
                  this.state.preferencias.aventura == false && this.state.preferencias.contoFadas == false &&
                  this.state.preferencias.misterio == false && this.state.preferencias.prosa == false             
                ) ? null :   
                  
                <View style={perfilBooklover.preferencias}>
                  <Text style={perfilBooklover.perguntas}>
                    O que estais a buscar?
                  </Text>
                  <View style={perfilBooklover.checkboxContainer}>
                    {
                      this.state.preferencias.aventura == false ? 
                        null
                      : <CheckBox
                          disabled={true}
                          title='Aventura'
                          checkedIcon='user-circle' 
                          uncheckedIcon='circle-o'
                          uncheckedColor={cor.amarelo}
                          checked={true}
                          checkedColor={cor.amarelo}
                          size={20}
                          containerStyle={perfilBooklover.checkbox}
                          textStyle={perfilBooklover.checkboxTexto}
                        /> 
                    }
                    {
                      this.state.preferencias.prosa == false ? 
                        null
                      : <CheckBox
                          disabled={true}
                          title='Prosa'
                          checkedIcon='user-circle' 
                          uncheckedIcon='circle-o'
                          uncheckedColor={cor.amarelo}
                          checked={true}
                          checkedColor={cor.amarelo}
                          size={20}
                          containerStyle={perfilBooklover.checkbox}
                          textStyle={perfilBooklover.checkboxTexto}
                        /> 
                    }
                    {
                      this.state.preferencias.misterio == false ? 
                        null
                      : <CheckBox
                          disabled={true}
                          title='Misterio'
                          checkedIcon='user-circle' 
                          uncheckedIcon='circle-o'
                          uncheckedColor={cor.amarelo}
                          checked={true}
                          checkedColor={cor.amarelo}
                          size={20}
                          containerStyle={perfilBooklover.checkbox}
                          textStyle={perfilBooklover.checkboxTexto}
                        /> 
                    }
                    {
                      this.state.preferencias.contoFadas == false ? 
                        null
                      : <CheckBox
                          disabled={true}
                          title='Conto de Fadas'
                          checkedIcon='user-circle' 
                          uncheckedIcon='circle-o'
                          uncheckedColor={cor.amarelo}
                          checked={true}
                          checkedColor={cor.amarelo}
                          size={20}
                          containerStyle={perfilBooklover.checkbox}
                          textStyle={perfilBooklover.checkboxTexto}
                        /> 
                    }
                  </View>
                </View>
              }

              <Text style={perfilBooklover.perguntas}>
                Se a sua vida fosse um livro, qual seria a sinopse?
              </Text>
              <Text style={perfilBooklover.respostas}>
                {this.state.preferencias.sinopse}
              </Text> 

              {
                this.state.preferencias.singularidade == 'não informado' ? 
                  null
                : <View>
                    <Text style={perfilBooklover.perguntas}>
                      Peculiaridades
                    </Text>
                    <Text style={perfilBooklover.respostas}>
                      {this.state.preferencias.singularidade}
                    </Text>  
                  </View>
              }

              <View style={perfilBooklover.preferenciasLiterarias}>
                <Text style={perfilBooklover.perguntas}>
                  Top preferências literárias
                </Text>

                {
                  this.state.autor[0] == 'não informado' ? null 
                  :   
                    um = this.state.autor[0],
                    dois = (
                      this.state.autor[1] == 'não informado' ? null : this.state.autor[1]
                    ),
                    tres = (
                      this.state.autor[2] == 'não informado' ? null : this.state.autor[2]
                    ),                    
                    <Preferencias 
                      tituloStyle={perfilBooklover.preferenciasLiterariasResposta}
                      titulo="Autor"
                      opcao1={um}
                      opcao2={dois}
                      opcao3={tres}
                    />                  
                }

                <Preferencias 
                  tituloStyle={perfilBooklover.preferenciasLiterariasResposta}
                  titulo="Gênero"
                  opcao1={this.state.generoLiterario[0]}
                  opcao2={this.state.generoLiterario[1]}
                  opcao3={this.state.generoLiterario[2]}
                />
                
                {
                  this.state.livro[0] == 'não informado' ? null 
                  : um = this.state.livro[0],
                    dois = (
                      this.state.livro[1] == 'não informado' ? null : this.state.livro[1]
                    ),
                    tres = (
                      this.state.livro[2] == 'não informado' ? null : this.state.livro[2]
                    ),    
                    <Preferencias 
                      tituloStyle={perfilBooklover.preferenciasLiterariasResposta}
                      titulo="Livro"
                      opcao1={um}
                      opcao2={dois}
                      opcao3={tres}
                    /> 
                }
              </View>           
            </View>                                           
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

export default Perfil;