//https://www.npmjs.com/package/age-calculator      
import React, { Component } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView, 
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem } from 'react-native-elements'
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { TagSelect } from 'react-native-tag-select-max';

import * as ImagePicker from 'expo-image-picker';

import editarPerfil from '../../../../../estilos/editarPerfil';
import compartilhado from '../../../../../estilos/compartilhado';
import cor from '../../../../../estilos/cores';

import { AppBarHeader } from '../../../../../componentes/header';
import { FraseTop } from '../../../../../componentes/frase';
import Calendario from '../../../../../componentes/DatePicker';
import TextoMultilinha from '../../../../../componentes/textInput/TextMultiline';

import { uploadImagem } from '../../../../../acoes/recuperarCadastro'

import { usuarioUid, collection } from '../../../../../firebase/acoes';

class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: {},
      nome: '',
      cidade: '',
      data: '', 
      sexo: [
        'Leitor',
        'Leitora'
      ],      
      citacao: '',
      singularidade: '',
      sinopse: '',
      sx: []
    };
  }
  componentDidMount() {
    this.getAndLoadDados()
  }

  getAndLoadDados() {
    var uid = usuarioUid();
    var data = collection('usuarios').doc(uid);
    data.get().then((doc) => {
      
      var usuario = doc.data(); this.setState({usuario});
      
      var nome = usuario.nome; this.setState({nome});
      var cidade = usuario.cidade; this.setState({cidade});

      var sexo = usuario.sexo;  
      sx = [sexo];     
      this.setState({sx});

      var citacao = usuario.preferencias.citacao; this.setState({citacao});
      var singularidade = usuario.preferencias.singularidade; this.setState({singularidade});
      var sinopse = usuario.preferencias.sinopse; this.setState({sinopse});
    })
    .catch(function(error) {
      console.log("Erro ao pegar dados do usuário: " + error + ' ' + error.message);
    });
  }

  handleUpdate = () => {
    this.updateDados();
    this.props.navigation.navigate('Perfil');
  }

  updateDados = () => {
    const sexo = this.sexo.itemsSelected;  
    var fire = collection('usuarios').doc(usuarioUid());
    fire.update({
      nome: this.state.nome,
      cidade: this.state.cidade,
      dtNasc: this.state.data, 
      sexo: sexo[0],  
      "preferencias.citacao": this.state.citacao,
      "preferencias.singularidade": this.state.singularidade,
      "preferencias.sinopse": this.state.sinopse      
    })
    .then(() => 
      console.log('update feito com sucesso'))
    .catch(error => { console.log('erro no updateDados: ' + error.message + ' ' + error)})
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3]
    })
    console.log(result);
    if (!result.cancelled) {
      uploadImagem(usuarioUid(), result.uri)
      .then(() => console.log('consegui chamar o uploadImagem'))
      .catch((error)=>{console.log('pickImage: '+ error.message  + ' ' + error)});
    }
  }

  render() {
    return (    
      <View style={compartilhado.container}>  
        <AppBarHeader 
          onPress={() => 
            this.handleUpdate()
          } 
          title={"Editar Perfil"} 
        />              
        <ScrollView style={editarPerfil.scrollView}>  
          <KeyboardAvoidingView 
            style={{justifyContent: "flex-end", flex: 1 }} 
            behavior='padding' 
            enabled 
          >    
            <FraseTop title={frase} subtitle={autor} />    
            <View style={editarPerfil.containerImagem}>
              
                <Avatar.Image 
                  size={220} 
                  style={editarPerfil.imagemPerfil}
                  source={{uri:this.state.usuario.imagem}} 
                />          
                <View style={editarPerfil.containerIcone}>
                  <Icon.Button
                    name='edit'
                    backgroundColor='transparent'
                    color={cor.amarelo}
                    size={20}
                    style={editarPerfil.botaoEditar}
                    onPress={() => this.pickImage()}
                  />
                </View>     
              
            </View>   
            <View style={editarPerfil.info}>
              <Text style={editarPerfil.texto}>
                Nome
              </Text>   
              <TextoMultilinha
                inputStyle={editarPerfil.multilinha}
                multiline={true}
                maxLength={20}
                numberOfLines={1}  
                value={this.state.nome}
                onChangeText={nome => this.setState({ nome })}
              />
              <Text style={editarPerfil.texto}>
                Cidade natal
              </Text>   
              <TextoMultilinha
                inputStyle={editarPerfil.multilinha}
                multiline={true}
                maxLength={20}
                numberOfLines={1}  
                value={this.state.cidade}
                onChangeText={cidade => this.setState({ cidade })}
              />
              <Text style={editarPerfil.texto}>
                Ano de nascimento
              </Text>   
              <Calendario
                date={this.state.data}
                onDateChange={data => this.setState({ data })}
                placeholder={this.state.usuario.dtNasc}
                dateInputStyle={[editarPerfil.multilinha, editarPerfil.dateInput]}
              /> 
              <Text style={editarPerfil.texto}>
                Me identifico como
              </Text> 
              <View style={{alignItems:'center'}}>
                <TagSelect
                  value={this.state.sx}
                  data={this.state.sexo}
                  max={1}
                  ref={(sexo) => {
                    this.sexo = sexo;
                  }}
                  onMaxError={() => {
                    Alert.alert('Ops', 'Max reached' + JSON.stringify(this.sexo.itemsSelected)+ ' ' + `Total: ${this.sexo.totalSelected}`);
                  }}
                  itemStyle={editarPerfil.tagItem}
                  itemLabelStyle={editarPerfil.tagLabel}
                  itemStyleSelected={editarPerfil.tagItemSelecionado}
                  itemLabelStyleSelected={editarPerfil.tagLabelSelecionado}
                />
              </View> 
              <Text style={editarPerfil.texto}>
                Minha citação favorita
              </Text> 
              <TextoMultilinha
                inputStyle={[editarPerfil.multilinha, editarPerfil.preferencias]}
                multiline={true}
                maxLength={180}
                numberOfLines={4}  
                value={this.state.citacao}
                onChangeText={citacao => this.setState({ citacao })}
              />
              <Text style={editarPerfil.texto}>
                Minha(s) singularidade(s)
              </Text> 
              <TextoMultilinha
                inputStyle={[editarPerfil.multilinha, editarPerfil.preferencias]}
                multiline={true}
                maxLength={140}
                numberOfLines={4}  
                value={this.state.singularidade}
                onChangeText={singularidade => this.setState({ singularidade })}
              />
              <Text style={editarPerfil.texto}>
                Sinopse da minha vida
              </Text> 
              <TextoMultilinha
                inputStyle={[editarPerfil.multilinha, editarPerfil.preferencias]}
                multiline={true}
                maxLength={200}
                numberOfLines={4}  
                value={this.state.sinopse}
                onChangeText={sinopse => this.setState({ sinopse })}
              />         
              <Text style={editarPerfil.texto}>
                Meus top três
              </Text>
              <ListItem
                containerStyle={editarPerfil.listItem}
                title="Editar meus top três"
                titleStyle={{color:cor.branco}}
                rightElement={
                  <MaterialCommunityIcons name="chevron-right" color={cor.amarelo} size={20} />
                }
                onPress={() => this.props.navigation.navigate('EditarTopTres') }
              />
              <Text style={editarPerfil.texto}>
                Minhas preferências
              </Text>
              <ListItem
                containerStyle={editarPerfil.listItem}
                title="Editar minhas preferências"
                titleStyle={{color:cor.branco}}
                rightElement={
                  <MaterialCommunityIcons name="chevron-right" color={cor.amarelo} size={20} />
                }
                onPress={() => this.props.navigation.navigate('EditarPreferencias') }
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}
const frase='"Minha vida é como um livro, cada dia uma página, a cada hora um novo texto , a cada minuto uma palavra, e neste segundo um sim ou não que pode mudar minha história"';
const autor='Elan klever';

export default Perfil;