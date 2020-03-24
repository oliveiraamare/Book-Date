//https://www.npmjs.com/package/age-calculator      
import React, { Component } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView, 
  Text,
  TextInput,
  View
} from 'react-native';
import { Container, Header, Content, ListItem, CheckBox,  Body } from 'native-base';
//import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import { AppBarHeader } from '../../../../componentes/header';
import { Avatar } from 'react-native-paper';
import Calendario from '../../../../componentes/DatePicker';
import TextoInput from '../../../../componentes/textInput/TextInput';
import {TopPreferencias} from '../../../../componentes/topPreferencias';



import {storage, database} from '../../../../firebase/acoes';
import { FraseTop } from '../../../../componentes/frase';

import editarPerfil from '../../../../estilos/editarPerfil';
import compartilhado from '../../../../estilos/compartilhado';
import cor from '../../../../estilos/cores';
import { TagSelect } from 'react-native-tag-select-max';

import TextoMultilinha from '../../../../componentes/textInput/TextMultiline';


let { AgeFromDateString } = require('age-calculator');

class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      nome: '',
      data: '',
      cidade: '',
      genero: [
        'Leitor',
        'Leitora',
        'Ambos'
      ],
      identificacao: [
        'Leitor',
        'Leitora'
      ],
      aventura: false,
      prosa: false,
      misterio: false,
      contoFadas: false,


      autor: {},
      generoLiterario: {},
      livro: {},
      preferencias: {},
      url: '',
      usuario: {}
    };
  }
  componentDidMount() {
    this.getAndLoadHttpUrl()
  }

  async getAndLoadHttpUrl() {
    var imagemStorage = storage('imagens/');
    var imagemUrl = await imagemStorage.getDownloadURL()
    this.setState({ url: imagemUrl });

    var usuarioDatabase = database('usuarios/');
    usuarioDatabase.once('value').then((snapshot) => {
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
    //const identificacao = this.tag.itemsSelected;    
    return (    
      <View style={compartilhado.container}>  
        <AppBarHeader 
          onPress={() => this.props.navigation.navigate('Perfil')} 
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
                source={{uri:this.state.url}} 
              />          
              <View style={editarPerfil.containerIcone}>
                <Icon.Button
                  name='edit'
                  backgroundColor='transparent'
                  color={cor.amarelo}
                  size={20}
                  style={editarPerfil.botaoEditar}
                  onPress={() => this.props.navigation.navigate('EditarPerfil')}
                />
              </View>     
            </View>   
            <View style={editarPerfil.info}>
            <Text style={editarPerfil.texto}>
              Nome
            </Text>   
            <TextoMultilinha
              inputStyle={editarPerfil.multilinha}
              placeHolder={this.state.usuario.nome}  
              multiline={true}
              maxLength={20}
              numberOfLines={1}  
              value={this.state.value}
              onChangeText={citacao => this.setState({ citacao })}
            />
            <Text style={editarPerfil.texto}>
              Cidade natal
            </Text>   
            <TextoMultilinha
              inputStyle={editarPerfil.multilinha}
              placeHolder={this.state.usuario.cidade}  
              multiline={true}
              maxLength={15}
              numberOfLines={1}  
              value={this.state.value}
              onChangeText={citacao => this.setState({ citacao })}
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
                data={this.state.identificacao}
                max={1}
                ref={(tag) => {
                  this.tag = tag;
                }}
                onMaxError={() => {
                  Alert.alert('Ops', 'Max reached' + JSON.stringify(this.tag.itemsSelected)+ ' ' + `Total: ${this.tag.totalSelected}`);
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
              inputStyle={editarPerfil.multilinha}
              placeHolder='Qual a sua citação favorita?'   
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
              placeHolder='Quais são as suas singularidades?'   
              multiline={true}
              maxLength={140}
              numberOfLines={4}  
              value={this.state.citacao}
              onChangeText={citacao => this.setState({ citacao })}
            />
            <Text style={editarPerfil.texto}>
              Sinopse da minha vida
            </Text> 
            <TextoMultilinha
              inputStyle={[editarPerfil.multilinha, editarPerfil.preferencias]}
              placeHolder='Se a sua vida fosse um livro, qual seria a sinopse?' 
              multiline={true}
              maxLength={200}
              numberOfLines={4}  
              value={this.state.citacao}
              onChangeText={citacao => this.setState({ citacao })}
            />            
            <Text style={editarPerfil.texto}>
              Meu top 3 de autores
            </Text> 
              <TopPreferencias 
                nomeIcone={'numeric-1'} 
                inputStyle={editarPerfil.textInput} 
                placeHolder={'Vinicius de Moraes'}
              />
              <TopPreferencias 
                nomeIcone={'numeric-2'} 
                inputStyle={editarPerfil.textInput} 
                placeHolder=''
              />
              <TopPreferencias 
                nomeIcone={'numeric-3'} 
                inputStyle={editarPerfil.textInput} 
                placeHolder=''
              />
            <Text style={editarPerfil.texto}>
              Meu top 3 de gênero literário
            </Text>  
              <TopPreferencias 
                nomeIcone={'numeric-1'} 
                inputStyle={editarPerfil.textInput} 
                placeHolder={'Vinicius de Moraes'}
              />
              <TopPreferencias 
                nomeIcone={'numeric-2'} 
                inputStyle={editarPerfil.textInput} 
                placeHolder=''
              />
              <TopPreferencias 
                nomeIcone={'numeric-3'} 
                inputStyle={editarPerfil.textInput} 
                placeHolder=''
              />
            <Text style={editarPerfil.texto}>
              Meu top 3 de livros
            </Text> 
              <TopPreferencias 
                nomeIcone={'numeric-1'} 
                inputStyle={editarPerfil.textInput} 
                placeHolder={'Vinicius de Moraes'}
              />
              <TopPreferencias 
                nomeIcone={'numeric-2'} 
                inputStyle={editarPerfil.textInput} 
                placeHolder=''
              />
              <TopPreferencias 
                nomeIcone={'numeric-3'} 
                inputStyle={editarPerfil.textInput} 
                placeHolder=''
              />
            <Text style={editarPerfil.texto}>
              Me mostre
            </Text> 
            <View style={{alignItems:'center'}}>
              <TagSelect
                data={this.state.genero}
                ref={(tag) => {
                  this.tag = tag;
                }}
                itemStyle={editarPerfil.tagItem}
                itemLabelStyle={editarPerfil.tagLabel}
                itemStyleSelected={editarPerfil.tagItemSelecionado}
                itemLabelStyleSelected={editarPerfil.tagLabelSelecionado}
              />
            </View>  
        
            
              
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