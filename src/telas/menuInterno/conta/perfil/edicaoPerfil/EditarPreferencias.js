//https://www.npmjs.com/package/age-calculator      
import React, { Component } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView, 
  Text,
  View
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { TagSelect } from 'react-native-tag-select-max';

import editarPreferencias from '../../../../../estilos/editarPreferencias';
import compartilhado from '../../../../../estilos/compartilhado';
import cor from '../../../../../estilos/cores';

import { AppBarHeader } from '../../../../../componentes/header';

import { usuarioUid, collection } from '../../../../../firebase/acoes';

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

  async getAndLoadDados() {
    var uid = usuarioUid();
    var data = collection('usuarios').doc(uid);
    data.get().then((doc) => {
      
      var usuario = doc.data(); this.setState({usuario});

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
    })
    .catch(function(error) {
      console.log("Erro ao pegar dados do usuário: " + error + ' ' + error.message);
    });
  }

  handleUpdate = () => {
    this.updateDados();
    this.props.navigation.navigate('EditarPerfil');
  }

  updateDados = () => {
    const buscando = this.buscando.itemsSelected;  
    var fire = collection('usuarios').doc(usuarioUid());
    fire.update({
      "preferencias.aventura": this.state.aventura,
      "preferencias.prosa": this.state.prosa,
      "preferencias.misterio": this.state.misterio,
      "preferencias.contoFadas": this.state.contoFadas,
      buscando: buscando[0],     
    })
    .then(() => 
      console.log('update feito com sucesso'))
    .catch(error => { console.log('erro no updateDados: ' + error.message + ' ' + error)})
  }

  render() {
    return (    
      <View style={compartilhado.container}>  
        <AppBarHeader 
          onPress={() => 
            this.handleUpdate()
          } 
          title={"Editar Preferências"} 
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
      </View>
    );
  }
}

export default EditarPreferencias;