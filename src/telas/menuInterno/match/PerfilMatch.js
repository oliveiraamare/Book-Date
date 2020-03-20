//https://www.npmjs.com/package/age-calculator      
import React, { Component } from 'react';
import {
  ImageBackground, Image,
  ScrollView, 
  Text,
  View,
  Vibration
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Dimensions, StyleSheet } from 'react-native';

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

import Firebase from '../../../../Firebase';

import { Preferencias } from '../../../componentes/topPreferencias';

import perfil from '../../../estilos/perfilMatch';
import compartilhado from '../../../estilos/compartilhado';

import cor from '../../../estilos/cores';
let { AgeFromDateString } = require('age-calculator');

class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autor: '',
      generoLiterario: {},
      livro: '',
      preferencias: {},
      url: '',
      usuario: {}
    };
  }
  componentDidMount() {
    this.getAndLoadHttpUrl()
  }

  async getAndLoadHttpUrl() {
     var ref = Firebase.storage().ref('imagens/' + 'TElode8r55OPlcduRoKU1hLuyNE2')
     var imagem = await ref.getDownloadURL()
     this.setState({ url: imagem });

    Firebase.database().ref('usuarios/' + 'TElode8r55OPlcduRoKU1hLuyNE2').once('value')
    .then((snapshot) => {
      var usuario = snapshot.val();
      this.setState({usuario});
      var preferencias = usuario.preferencias;
      this.setState({preferencias});
      var autor = usuario.preferencias.autor;
      this.setState({autor});
      var generoLiterario = usuario.preferencias.generoLiterario;
      this.setState({generoLiterario});
      var livro = usuario.preferencias.livro;
      this.setState({livro});
    });
}

  render() {
    var dtNasc = this.state.usuario.dtNasc
    let idade = new AgeFromDateString(dtNasc).age;
    var x = this.state.url
    console.log(x)
    return (    
      <View style={compartilhado.container}> 
        <View style={compartilhado.statusBar}/>
        <ImageBackground style={compartilhado.imagemBackground}> 
          <ScrollView style={perfil.scrollView}>        
            <Image
              source={require('../../../imagens/perfil.jpg')} 
              style={perfil.imagemFrame}
            /> 
            <Image
              source={{uri:x}}
              style={perfil.imagemPerfil}
            />            
            <View style={perfil.containerInfo}>
              <View style={perfil.containerNome}>
                <Text style={perfil.nome}>
                  {this.state.usuario.nome}
                </Text>
              </View>
              <Text style={perfil.descricaoIdadeCidade}>
                {idade} anos, {this.state.usuario.cidade}
              </Text>
              <Text style={perfil.citacao}>
                '{this.state.preferencias.citacao}'
              </Text>      
              <View style={perfil.preferencias}>
                <Text style={perfil.perguntas}>
                  O que estais a buscar?
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <CheckBox
                    title='Aventura'
                    checkedIcon='user-circle' 
                    uncheckedIcon='circle-o'
                    uncheckedColor={cor.amarelo}
                    checked={true}
                    checkedColor={cor.amarelo}
                    size={20}
                    containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    textStyle={{fontSize: 14, color:cor.branco}}
                  />  
                  <CheckBox
                    title='Mistério'
                    checkedIcon='user-circle' 
                    uncheckedIcon='circle-o'
                    uncheckedColor={cor.amarelo}
                    checked={true}
                    checkedColor={cor.amarelo}
                    size={20}
                    containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent'}}
                    textStyle={{fontSize: 14, paddingLeft: 10,color:cor.branco}}
                  />  
                </View>
              </View>
              <Text style={perfil.perguntas}>
                Se a sua vida fosse um livro, qual seria a sinopse?
              </Text>
              <Text style={perfil.respostas}>
                {this.state.preferencias.sinopse}
              </Text>         
              <Text style={perfil.perguntas}>
                Peculiaridades
              </Text>
              <Text style={perfil.respostas}>
                {this.state.preferencias.singularidade}
              </Text>        
              <View style={perfil.preferenciasLiterarias}>
                <Text style={perfil.perguntas}>
                  Top 3 de preferências literárias
                </Text>
                <Preferencias 
                  tituloStyle={perfil.preferenciasLiterariasResposta}
                  titulo="Autor"
                  opcao1={this.state.autor[0]}
                  opcao2={this.state.autor[1]}
                  opcao3={this.state.autor[2]}
                />
                <Preferencias 
                  tituloStyle={perfil.preferenciasLiterariasResposta}
                  titulo="Gênero"
                  opcao1={this.state.generoLiterario[0]}
                  opcao2={this.state.generoLiterario[1]}
                  opcao3={this.state.generoLiterario[2]}
                />
                <Preferencias 
                  tituloStyle={perfil.preferenciasLiterariasResposta}
                  titulo="Livro"
                  opcao1={this.state.livro[0]}
                  opcao2={this.state.livro[1]}
                  opcao3={this.state.livro[2]}
                /> 
              </View>          
            </View>                                
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

export default Perfil;