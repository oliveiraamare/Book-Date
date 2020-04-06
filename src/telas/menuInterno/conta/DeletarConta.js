//https://www.npmjs.com/package/react-native-dialog
import React, { Component } from 'react';
import { 
  Alert,
  AsyncStorage, 
  ImageBackground, 
  View 
} from 'react-native';
import Dialog from "react-native-dialog";
import { Paragraph } from 'react-native-paper';
import '@firebase/firestore';
import  * as firebase from 'firebase';

import { FraseTop } from '../../../componentes/frase';
import BotaoTransparente from '../../../componentes/botoes/BotaoTransparente';
import { AppBarHeader } from '../../../componentes/header';

import compartilhado from '../../../estilos/compartilhado';
import deletarConta from '../../../estilos/deletarConta';

import { usuario } from '../../../firebase/acoes';
import {   
  deletarStorage,
  deletarDatabase,
  deletarCollection
} from '../../../firebase/deletarUsuario';
class DeletarConta extends Component {

  constructor(props) {
    super(props);
    this.state = {
      popoUpVisivel: false,
      senha: ''
    };
  }

  deletarBanco = () => {
    var usuarioLogado = usuario();
   
    var email = usuarioLogado.email;
    var senha = this.state.senha;

    const credential = firebase.auth.EmailAuthProvider.credential(email, senha);
    usuarioLogado.reauthenticateWithCredential(credential).then(() => 
    {
      console.log('Usuario reautenticado');

      usuarioLogado.delete().then(() => {
        console.log('Usuário deletado com sucesso no Auth');
      })

      deletarStorage();
      deletarDatabase();
      deletarCollection();
      
      Alert.alert(
        'Tchauzinho!', 'Foi divertido te conhecer. Esperamos um dia rever-te!'
      );
    }).catch(error => {
      console.log('Erro ao reautenticar o usuário: ', error.message);
      Alert.alert('Ops', 'Falha na rede, tente novamente mais tarde');
    });
    this.removeDadosAsync();
  }

  removeDadosAsync = async() => {
    try {
      await AsyncStorage.clear();
      console.log('Storage limpo com sucesso');
    } catch (error) {
      console.log('Falha ao limpar o Storage', error.message);
    }
  }

  showDialog() {
    this.setState({ popoUpVisivel: true });
  };
 
  handleCancel() {
    this.setState({ popoUpVisivel: false });
  };
 
  handleDelete = (senha) => {
    this.deletarBanco();
    this.setState({ popoUpVisivel: false });
  };

  render() {      
    return (
      <View style={compartilhado.container}>
        <ImageBackground
          source={require('../../../imagens/fundoInterno.jpg')} 
          style={compartilhado.imagemBackground}
        >
          <AppBarHeader 
            onPress={() => this.props.navigation.navigate('Conta')} 
            title={'Deletar Conta'} 
          />   
          <FraseTop 
            subtitleStyle={deletarConta.headerSubtitleStyle} 
            title={frase} subtitle={autor} 
          />
          <View style={deletarConta.containerView}>
            <Paragraph style={deletarConta.paragrafoPrincipal}>
              Você é um membro valioso do Book Date. 
            </Paragraph>
            <Paragraph style={deletarConta.paragrafo}>
              Você pode excluir sua conta a qualquer momento mas ao deletá-la, perderá todos os dados e conteúdos contidos nela. 
            </Paragraph>
            <Paragraph style={deletarConta.paragrafo}>
              Se você conheceu alguém, nós te desejamos os melhor! Você sempre será bem-vindo no futuro.
            </Paragraph>
            <Paragraph style={deletarConta.paragrafo}>
              Esperamos rever-te em breve!
            </Paragraph>
          </View>        
          <Dialog.Container visible={this.state.popoUpVisivel}>
            <Dialog.Description>
              Para continuar, por favor, rensira a sua senha. 
            </Dialog.Description>
            <Dialog.Input  
              wrapperStyle={deletarConta.popUp}
              onChangeText={senha => this.setState({ senha })}
            />
            <Dialog.Button 
              label="Cancelar" 
              onPress={() => this.handleCancel()} 
            />
            <Dialog.Button 
              label="Deletar" 
              onPress={() => this.handleDelete()} 
            />
          </Dialog.Container>
          <BotaoTransparente
            buttonStyle={{marginTop:80}}
            onPress={() => this.showDialog()} 
            texto="Deletar minha Conta"
          />
        </ImageBackground>
      </View>
    )
  }
}

const frase='Não vá embora, por favor. Tenha um pouco de fé em mim e um pouco de paciência. Por favor.';
const autor='50 Tons de Cinza';

export default DeletarConta;