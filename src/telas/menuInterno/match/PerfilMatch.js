//https://www.npmjs.com/package/age-calculator      
import React, { Component } from 'react';
import {
  Image,
  ImageBackground, 
  ScrollView, 
  Text,
  View
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Preferencias } from '../../../componentes/topPreferencias';

import perfilMatch from '../../../estilos/perfilMatch';
import compartilhado from '../../../estilos/compartilhado';
import cor from '../../../estilos/cores';

let { AgeFromDateString } = require('age-calculator');

var  um, dois, tres;

export const matchPerfil = (match) => {
  console.log('iiiiiiiiiiiiiiiiitem', match)
  getAndLoadDados(match);

}
class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: {},
      preferencias: {},
      aventura: '',
      prosa: '',
      misterio: '',
      contoFadas: '',
      autor: '',
      generoLiterario: {},
      livro: '',
      match: {},
      data: {}
    };
    const { navigation }  = this.props;
    const userData = navigation.getParam('item', null);
  }


  render() {
   // const item = this.props.navigation.state.params.item
    var dtNasc = this.state.usuario.dtNasc;
    let idade = new AgeFromDateString(dtNasc).age;
    return (    
      <View style={compartilhado.container}> 
        <View style={compartilhado.statusBar}/>
        <ImageBackground style={compartilhado.imagemBackground}> 
          <ScrollView style={perfilMatch.scrollView}>        
            <Image
              source={require('../../../imagens/perfil.jpg')} 
              style={perfilMatch.imagemFrame}
            /> 
            <Image
              source={{uri:this.state.usuario.imagem}}
              style={perfilMatch.imagemPerfil}
            />            
            <View style={perfilMatch.containerInfo}>

              <View style={perfilMatch.containerNome}>
                <Text style={perfilMatch.nome}>
                  {this.state.match.nome}
                </Text>
              </View>

              <Text style={perfilMatch.descricaoIdadeCidade}>
                {idade} anos, {this.state.usuario.cidade}
              </Text> 

              {
                this.state.preferencias.citacao == 'não informado' ? 
                  null
                : <Text style={perfilMatch.citacao}>
                    "{this.state.preferencias.citacao}"
                  </Text>   
              }  
              
              { 
                (
                  this.state.aventura == 'false' && this.state.contoFadas == 'false' &&
                  this.state.misterio == 'false' && this.state.prosa == 'false'              
                ) ? null :   
                  
                <View style={perfilMatch.preferencias}>
                  <Text style={perfilMatch.perguntas}>
                    O que estais a buscar?
                  </Text>
                  <View style={perfilMatch.checkboxContainer}>
                    {
                      this.state.aventura == false ? 
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
                          containerStyle={perfilMatch.checkbox}
                          textStyle={perfilMatch.checkboxTexto}
                        /> 
                    }
                    {
                      this.state.prosa == false ? 
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
                          containerStyle={perfilMatch.checkbox}
                          textStyle={perfilMatch.checkboxTexto}
                        /> 
                    }
                    {
                      this.state.misterio == false ? 
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
                          containerStyle={perfilMatch.checkbox}
                          textStyle={perfilMatch.checkboxTexto}
                        /> 
                    }
                    {
                      this.state.contoFadas == false ? 
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
                          containerStyle={perfilMatch.checkbox}
                          textStyle={perfilMatch.checkboxTexto}
                        /> 
                    }
                  </View>
                </View>
              }

              <Text style={perfilMatch.perguntas}>
                Se a sua vida fosse um livro, qual seria a sinopse?
              </Text>
              <Text style={perfilMatch.respostas}>
                {this.state.preferencias.sinopse}
              </Text> 

              {
                this.state.preferencias.singularidade == 'não informado' ? 
                  null
                : <View>
                    <Text style={perfilMatch.perguntas}>
                      Peculiaridades
                    </Text>
                    <Text style={perfilMatch.respostas}>
                      {this.state.preferencias.singularidade}
                    </Text>  
                  </View>
              }
                  
              <View style={perfilMatch.preferenciasLiterarias}>
                <Text style={perfilMatch.perguntas}>
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
                      tituloStyle={perfilMatch.preferenciasLiterariasResposta}
                      titulo="Autor"
                      opcao1={um}
                      opcao2={dois}
                      opcao3={tres}
                    />                  
                }

                <Preferencias 
                  tituloStyle={perfilMatch.preferenciasLiterariasResposta}
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
                      tituloStyle={perfilMatch.preferenciasLiterariasResposta}
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