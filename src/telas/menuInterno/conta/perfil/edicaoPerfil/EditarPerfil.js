//https://www.npmjs.com/package/age-calculator      
//https://www.npmjs.com/package/react-native-root-toaster
import React, { Component } from 'react';
import {
  Alert,
  AsyncStorage,
  KeyboardAvoidingView,
  ScrollView, 
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem } from 'react-native-elements';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { TagSelect } from 'react-native-tag-select-max';
import { RootToaster, Toast } from 'react-native-root-toaster';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import editarPerfil from '../../../../../estilos/editarPerfil';
import compartilhado from '../../../../../estilos/compartilhado';
import cor from '../../../../../estilos/cores';

import { AppBarHeader } from '../../../../../componentes/header';
import { FraseTop } from '../../../../../componentes/frase';
import Calendario from '../../../../../componentes/DatePicker';
import TextoMultilinha from '../../../../../componentes/textInput/TextMultiline';

import { usuarioUid, collection } from '../../../../../firebase/acoes';
import { uploadImagem } from '../../../../../firebase/acoes';
import { usuarioLogado } from '../../../../../acoes/usuarioLogado';

class Perfil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usuario: {},
      nome: '',
      cidade: '',
      data: '', 
      imagem: null,
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
    this.forceUpdate();
    this.getAndLoadDados();
  }

  handleUpdate() {
    this.updateDados();
    Toast.show('Alterações salvas!');
    setTimeout(() => {
      this.props.navigation.navigate('Perfil');
    }, 2000);   
  }

  confirmacaoImagem() {
    Toast.show('Sua imagem será salva');
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
            <RootToaster 
              defaultDuration={2000} defaultColor={cor.amarelo} 
            />   
            <FraseTop title={frase} subtitle={autor} />   
            <View style={editarPerfil.containerImagem}>
              {
                this.state.imagem == '../../../../../imagens/icone.png'
                ? 
                  <TouchableHighlight onPress={()=>this._pegarDaGaleria()}>                
                    <View>
                      <Avatar.Image 
                        size={220} 
                        style={editarPerfil.imagemPerfil}
                        source={require('../../../../../imagens/icone.png')}
                      />          
                      <View style={editarPerfil.containerIcone}>
                        <Icon.Button
                          name='edit'
                          backgroundColor='transparent'
                          color={cor.amarelo}
                          size={20}
                          style={editarPerfil.botaoEditar}
                          onPress={() => this._pegarDaGaleria()}
                        />
                      </View>     
                    </View>          
                  </TouchableHighlight>
                : <TouchableHighlight onPress={()=>this._pegarDaGaleria()}>
                    <View>
                      <Avatar.Image 
                        size={220} 
                        style={editarPerfil.imagemPerfil}
                        source={{uri:this.state.imagem}} 
                      />          
                      <View style={editarPerfil.containerIcone}>
                        <Icon.Button
                          name='edit'
                          backgroundColor='transparent'
                          color={cor.amarelo}
                          size={20}
                          style={editarPerfil.botaoEditar}
                          onPress={() => this._pegarDaGaleria()}
                        />
                      </View>     
                    </View>    
                  </TouchableHighlight>  
              }
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
                format="DD-MM-YYYY"
                placeholder={this.state.usuario.dtNasc}
                maxDate={this.state.usuario.dtNasc}
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

  getAndLoadDados = async() => {
    var usuarioLogado = await AsyncStorage.getItem('usuarioLogado');
    usuarioLogado = JSON.parse(usuarioLogado);

    var usuario = usuarioLogado; this.setState({usuario});

    var imagem = usuario.imagem;

    if (imagem != null){
      this.setState({ imagem });  
    } else {
      imagem = '../../../../../imagens/icone.png'
      this.setState({ imagem });
    } 

    var nome = usuarioLogado.nome; this.setState({nome});
    var cidade = usuarioLogado.cidade; this.setState({cidade});

    var sexo = usuarioLogado.sexo;  
    sx = [sexo];     
    this.setState({sx});

    var citacao = usuarioLogado.preferencias.citacao; this.setState({citacao});
    var singularidade = usuarioLogado.preferencias.singularidade; 
    this.setState({singularidade});
    var sinopse = usuarioLogado.preferencias.sinopse; this.setState({sinopse});
  }

  updateDados = () => {
    const sexo = this.sexo.itemsSelected;  

    if(this.state.data == '') {
      this.state.data = this.state.usuario.dtNasc
    };

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
    .then(() => {
      usuarioLogado(),
      console.log('Update dos dados da tela EditarPerfil feito com sucesso.');
    })
    .catch(error => { 
      console.log('Erro no update da tela EditarPerfil: ' + error.message);
    })
  }

  _pegarDaGaleria = async () => {
    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        base64: true,
        aspect: [10, 10],
      });

      if (!pickerResult.cancelled) {
        this.setState({ imagem: pickerResult.uri});

       uploadImagem(usuarioUid(), pickerResult.uri)
        .then(() => {
          this.confirmacaoImagem();
          console.log('Chamei o uploadImagem na tela de EditarPerfil');
        })
        .catch(error => {
          console.log('Erro pegar a imagem na teka de EditarPerfil: ' + error.message);
        });        
      } 
    }
  }  
}

const frase='"Minha vida é como um livro, cada dia uma página, a cada hora um novo texto, a cada minuto uma palavra, e neste segundo um sim ou não que pode mudar minha história"';
const autor='Elan klever';

export default Perfil;