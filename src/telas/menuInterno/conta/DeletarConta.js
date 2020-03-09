import React, { Component } from 'react';
import { View } from 'react-native';
import { Paragraph } from 'react-native-paper';

import compartilhado from '../../../estilos/compartilhado';
import deletarConta from '../../../estilos/deletarConta';
import cor from '../../../estilos/cores';

import { AppBarHeader } from '../../../componentes/tabBar/AppBarHeader';
import BotaoTransparente from '../../../componentes/botoes/BotaoTransparente';
import FraseTop from '../../../componentes/frase';

class DeletarConta extends Component {
  render() {      
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        <AppBarHeader 
          headerStyle={{
            backgroundColor:cor.preto, 
            borderBottomColor:cor.branco,
            borderBottomWidth:0.18
          }} 
          onPress={() => this.props.navigation.navigate('')} 
          title={"Apagar Conta"} 
          style={{color:cor.branco, fontSize:18}} 
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
          onPress={() => this.props.navigation.navigate('')}
          texto="Deletar minha Conta"
          buttonStyle={{marginTop:80}}
        />
      </View>
    )
  }
}

const frase='Não vá embora, por favor. Tenha um pouco de fé em mim e um pouco de paciência. Por favor.';
const autor='50 Tons de Cinza';

export default DeletarConta;