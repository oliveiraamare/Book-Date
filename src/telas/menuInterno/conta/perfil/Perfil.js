//https://www.npmjs.com/package/age-calculator      
import React, { Component } from 'react';
import {
  AsyncStorage,
  Image,
  ImageBackground, 
  ScrollView, 
  Text,
  View
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Preferencias } from '../../../../componentes/topPreferencias';

import perfil from '../../../../estilos/perfil';
import compartilhado from '../../../../estilos/compartilhado';
import cor from '../../../../estilos/cores';

import { usuarioLogado } from '../../../../acoes/usuarioLogado';

let { AgeFromDateString } = require('age-calculator');

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
      imagem: null
    };
  }

  componentDidMount() {
    this.forceUpdate();
    usuarioLogado();
    this.getAndLoadDados();
  }

  render() {

    var dtNasc = this.state.usuario.dtNasc;
    let idade = new AgeFromDateString(dtNasc).age;

    return (    
      <View style={compartilhado.container}> 
        <View style={compartilhado.statusBar}/>
        <ImageBackground style={compartilhado.imagemBackground}> 
          <ScrollView style={perfil.scrollView}>        
            <Image
              source={require('../../../../imagens/perfil.jpg')} 
              style={perfil.imagemFrame}
            /> 
            {
              this.state.imagem == '../../../../imagens/leitura.png'
              ? <Image
                  source={require('../../../../imagens/leitura.png')}
                  style={perfil.imagemPerfil}
                />    
              : <Image
                  source={{uri:this.state.imagem}}
                  style={perfil.imagemPerfil}
                />       
            }          
            <View style={perfil.containerInfo}>
              <View style={perfil.containerNome}>
                <Icon.Button
                  name='edit'
                  backgroundColor='transparent'
                  onPress={() => this.props.navigation.navigate('EditarPerfil')}
                  style={perfil.botaoEditar}
                >
                  {this.state.usuario.nome} 
                </Icon.Button>
              </View>
              <Text style={perfil.descricaoIdadeCidade}>
                {idade} anos, {this.state.usuario.cidade}
              </Text>
              <Text style={perfil.citacao}>
                "{this.state.preferencias.citacao}"
              </Text>                    
              { 
                (
                  this.state.aventura == false && this.state.contoFadas == false &&
                  this.state.misterio == false && this.state.prosa == false             
                ) 
                ? <View>
                    <Text style={perfil.perguntas}>
                      O que estais a buscar?
                    </Text>
                    <Text style={perfil.respostas}>
                      não informado
                    </Text> 
                  </View>
                :                    
                <View style={perfil.preferencias}>
                  <Text style={perfil.perguntas}>
                    O que estais a buscar?
                  </Text>
                  <View style={perfil.checkboxContainer}>
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
                          containerStyle={perfil.checkbox}
                          textStyle={perfil.checkboxTexto}
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
                          containerStyle={perfil.checkbox}
                          textStyle={perfil.checkboxTexto}
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
                          containerStyle={perfil.checkbox}
                          textStyle={perfil.checkboxTexto}
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
                          containerStyle={perfil.checkbox}
                          textStyle={perfil.checkboxTexto}
                        /> 
                    }
                  </View>
                </View>
              }
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
                  Top preferências literárias
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

  getAndLoadDados = async() => {
    var usuario = await AsyncStorage.getItem('usuarioLogado');
    usuario = JSON.parse(usuario); this.setState({usuario});

    var imagem = usuario.imagem;
    if (imagem != null){
      this.setState({ imagem });  
    } else {
      imagem = '../../../../imagens/leitura.png'
      this.setState({ imagem });
    } 

    //console.log(usuario)
    var preferencias = usuario.preferencias;
    this.setState({preferencias});

    var aventura = preferencias.aventura;
    this.setState({aventura});
    var prosa = preferencias.prosa;
    this.setState({prosa});
    var misterio = preferencias.misterio;
    this.setState({misterio})
    var contoFadas = preferencias.contoFadas;
    this.setState({contoFadas});
    
    var autor = usuario.preferencias.autor;
    this.setState({autor});
    var generoLiterario = usuario.preferencias.generoLiterario;
    this.setState({generoLiterario});
    var livro = usuario.preferencias.livro;
    this.setState({livro});
  }
}

export default Perfil;