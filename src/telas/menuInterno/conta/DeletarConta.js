import React, { Component } from 'react';
import '@firebase/firestore';

import compartilhado from '../../../estilos/compartilhado';
import deletarConta from '../../../estilos/deletarConta';

import BotaoTransparente from '../../../componentes/botoes/BotaoTransparente';

import Firebase from '../../../firebase/Firebase';

class DeletarConta extends Component {

  handleDelete = () => {
    var usuarioLogado = Firebase.auth().currentUser;

    /**
     * var storageRef = storage('imagem');
    storageRef.delete().then(() => {
      console.log('Imagem deletada com sucesso no storage');
    }).catch(error => {
      console.log('Erro ao deletar a imagem no storage: ', error.message);
    });    

     */

    collection('usuarios').doc(usuarioUid()).delete()
    .then(() => {
      console.log('Usuário deletado com sucesso no firestore');
    })
    .catch(error => {
      console.log('Erro ao deletar o usuário no firestore: ', error.message);
    })

    /*usuarioLogado.delete()
    .then(() => {
      console.log('Usuário deletado com sucesso no Auth');
      Alert.alert(
        'Tchauzinho!', 'Foi divertido te conhecer. Esperamos um dia rever-te!'
      );
    })
    .catch( error => {
      console.log('Erro ao deletar o usuário no Auth: ', error.message);
      //Alert.alert('Ops', 'Falha na rede, tente novamente mais tarde');
    })*/

    removeDadosAsync();
  }

  removeDadosAsync = async() => {
    try {
      await AsyncStorage.clear();
      console.log('Storage limpo com sucesso');
    } catch (error) {
      console.log('Falha ao limpar o Storage', error.message);
    }
  }

  render() {      
    return (
      <View style={compartilhado.container}>
        <ImageBackground
          source={require('../../../imagens/fundo.jpg')} 
          style={compartilhado.imagemBackground}
        >
          <AppBarHeader 
            onPress={() => this.props.navigation.navigate('Conta')} 
            title={'Deletar Conta'} 
          />   
          <FraseTop subtitleStyle={deletarConta.headerSubtitleStyle} title={frase} subtitle={autor} />
          <View style={deletarConta.containerView}>
            <Paragraph style={deletarConta.paragrafoPrincipal}>
              Você é um membro valioso do Book Date. 
            </Paragraph>
            <Paragraph style={deletarConta.paragrafo}>
              Se você conheceu alguém, nós te desejamos os melhor! Você sempre será bem-vindo no futuro.
            </Paragraph>
            <Paragraph style={deletarConta.paragrafo}>
              Você pode excluir sua conta a qualquer momento mas ao deletá-la, perderá todos os dados e conteúdos contidos nela. 
            </Paragraph>
            <Paragraph style={deletarConta.paragrafo}>
              Esperamos rever-te em breve!
            </Paragraph>
          </View>        
          <BotaoTransparente
            buttonStyle={{marginTop:80}}
            onPress={() => this.handleDelete()} 
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