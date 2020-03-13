import React, { Component } from 'react';
import { ImageBackground, View } from 'react-native';
import { Paragraph } from 'react-native-paper';

import compartilhado from '../../../estilos/compartilhado';
import deletarConta from '../../../estilos/deletarConta';

import { AppBarHeader } from '../../../componentes/header';
import BotaoTransparente from '../../../componentes/botoes/BotaoTransparente';
import { FraseTop } from '../../../componentes/frase';

import Firebase from '../../../../Firebase';

class DeletarConta extends Component {

  handleDelete = () => {
    var user = Firebase.auth().currentUser;
      user.delete()
      .then(() => 
        alert('Usuário deletado com sucesso!'),
        this.props.navigation.navigate('Login')
      )
      .catch(error => alert(error))
  }

  render() {      
    return (
      <View style={compartilhado.container}>
        <ImageBackground
          source={require('../../../imagens/black.jpeg')} 
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
              Você pode excluir sua conta a qualquer momento. Ao deletá-la, você perderá todos os dados e conteúdos contidos nela. 
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