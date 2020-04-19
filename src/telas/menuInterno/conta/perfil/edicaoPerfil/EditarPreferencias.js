//https://www.npmjs.com/package/age-calculator      
import React, { Component } from 'react';
import {
  Alert,
  AsyncStorage,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView, 
  Text,
  View
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { TagSelect } from 'react-native-tag-select-max';
import { RootToaster, Toast } from 'react-native-root-toaster';

import { AppBarHeader } from '../../../../../componentes/header';

import editarPreferencias from '../../../../../estilos/editarPreferencias';
import compartilhado from '../../../../../estilos/compartilhado';
import cor from '../../../../../estilos/cores';

import { usuarioUid, collection } from '../../../../../firebase/acoes';
import { usuario_logado_dados } from '../../../../../acoes/dados_usuario_logado';

class EditarPreferencias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: {},
      busco: [],
      buscando: [
        'Leitor',
        'Leitora',
        'Ambos'
      ],      
      aventura: this.aventura,
      prosa: this.prosa,
      misterio: this.misterio,
      contoFadas: this.contoFadas
    };
  }

  componentDidMount() {
    this.getAndLoadDados()
  }

  render() {
    return (    
      <View style={compartilhado.container}>  
        <ImageBackground 
          source={require('../../../../../imagens/editarPerfil.jpg')}
          style={compartilhado.imagemBackground}
        > 
          <AppBarHeader 
            onPress={() => 
              this.handleUpdate()
            } 
            title={"Editar Preferências"} 
          />          
          <RootToaster 
            defaultDuration={2000} defaultColor={cor.amarelo} 
          />     
          <ScrollView style={editarPreferencias.scrollView}>  
            <KeyboardAvoidingView 
              style={{justifyContent: "flex-end", flex: 1 }} 
              behavior='padding' 
              enabled 
            >    
              <View style={editarPreferencias.info}>
                <Text style={editarPreferencias.texto}>
                  Estou tentando encontrar
                </Text>
                <View style={editarPreferencias.checkboxContainer}>
                  <CheckBox
                    title='Aventura'
                    checkedIcon='user-circle' 
                    uncheckedIcon='circle-o'
                    uncheckedColor={cor.amarelo}
                    checked={this.state.aventura}
                    checkedColor={cor.amarelo}
                    size={20}
                    containerStyle={editarPreferencias.checkbox}
                    textStyle={editarPreferencias.checkboxTexto}
                    onPress={checked => this.setState({ aventura: !this.state.aventura })} 
                  /> 
                  <CheckBox
                    title='Prosa'
                    checkedIcon='user-circle' 
                    uncheckedIcon='circle-o'
                    uncheckedColor={cor.amarelo}
                    checked={this.state.prosa}
                    checkedColor={cor.amarelo}
                    size={20}
                    containerStyle={editarPreferencias.checkbox}
                    textStyle={editarPreferencias.checkboxTexto}
                    onPress={checked => this.setState({ prosa: !this.state.prosa })} 
                  /> 
                  <CheckBox
                    title='Misterio'
                    checkedIcon='user-circle' 
                    uncheckedIcon='circle-o'
                    uncheckedColor={cor.amarelo}
                    checked={this.state.misterio}
                    checkedColor={cor.amarelo}
                    size={20}
                    containerStyle={editarPreferencias.checkbox}
                    textStyle={editarPreferencias.checkboxTexto}
                    onPress={checked => this.setState({ misterio: !this.state.misterio })} 
                  />
                  <CheckBox
                    title='Conto de Fadas'
                    checkedIcon='user-circle' 
                    uncheckedIcon='circle-o'
                    uncheckedColor={cor.amarelo}
                    checked={this.state.contoFadas}
                    checkedColor={cor.amarelo}
                    size={20}
                    containerStyle={editarPreferencias.checkbox}
                    textStyle={editarPreferencias.checkboxTexto}
                    onPress={checked => this.setState({ contoFadas: !this.state.contoFadas })} 
                  /> 
                </View>    
                <Text style={editarPreferencias.texto}>
                  Estou buscando
                </Text> 
                <View style={{alignItems:'center'}}>
                  <TagSelect
                    value={this.state.busco}
                    data={this.state.buscando}
                    max={1}
                    ref={(buscando) => {
                      this.buscando = buscando;
                    }}
                    onMaxError={() => {
                      Alert.alert('Ops', 'Max reached' + JSON.stringify(this.buscando.itemsSelected)+ ' ' + `Total: ${this.buscando.totalSelected}`);
                    }}
                    itemStyle={editarPreferencias.tagItem}
                    itemLabelStyle={editarPreferencias.tagLabel}
                    itemStyleSelected={editarPreferencias.tagItemSelecionado}
                    itemLabelStyleSelected={editarPreferencias.tagLabelSelecionado}
                  /> 
                </View>         
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }

  getAndLoadDados= async() => {
    var usuarioLogado = await AsyncStorage.getItem('usuarioLogado');
    usuarioLogado = JSON.parse(usuarioLogado);

    var usuario = usuarioLogado; this.setState({usuario});

    var preferencias = usuario.preferencias;

    var aventura = preferencias.aventura;
    this.setState({aventura});
    var prosa = preferencias.prosa;
    this.setState({prosa});
    var misterio = preferencias.misterio;
    this.setState({misterio})
    var contoFadas = preferencias.contoFadas;
    this.setState({contoFadas});

    var buscando = usuario.buscando;  
    busco = [buscando];     
    this.setState({busco});
  }

  handleUpdate = () => {
    this.updateDados();
    Toast.show('Alterações salvas!');
    setTimeout(() => {
      this.props.navigation.navigate('EditarPerfil');
    }, 2000);   
  }

  updateDados = () => {
    const buscando = this.buscando.itemsSelected;  
    collection('usuarios').doc(usuarioUid())
      .update({
        "preferencias.aventura": this.state.aventura,
        "preferencias.prosa": this.state.prosa,
        "preferencias.misterio": this.state.misterio,
        "preferencias.contoFadas": this.state.contoFadas,
        buscando: buscando[0],     
      })
      .then(() => 
        usuario_logado_dados(),
        console.log('Update dos dados da tela EditarPreferencias feito com sucesso.')
      )
      .catch(error => { 
        console.log('Erro o update da tela EditarPreferencias: ' + error.message)
      })
  }
}

export default EditarPreferencias;