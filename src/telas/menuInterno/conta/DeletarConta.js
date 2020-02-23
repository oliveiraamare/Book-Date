import React, { Component } from 'react';
import { View } from 'react-native';
import { Paragraph } from 'react-native-paper';

import compartilhado from '../../../estilos/compartilhado';
import cor from '../../../estilos/cores';

import { AppBarHeader } from '../../../componentes/tabBar/AppBarHeader';
import BotaoTransparente from '../../../componentes/botoes/BotaoTransparente';

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
          style={{color:cor.branco}} 
        />
        <Header topbarStyle={{}} subtitleStyle={{alignSelf: 'flex-end'}} title={frase} subtitle={autor} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Paragraph style={{color:cor.branco, textAlign:'justify'}}>
            Você é um membro valiona da comunidade do Book Date. Se você conheceu alguém, nós te desejamos os melhor! Você sempre será bem-vindo no futuro.
          </Paragraph>
          <Paragraph style={{color:cor.branco, textAlign:'justify'}}>
          Você pode excluir sua conta a qualquer momento. Ao deletá-la, você perderá todos os dados e conteúdos contidos nela. 
          </Paragraph>
        </View>
        <BotaoTransparente
          onPress={() => this.props.navigation.navigate('DeletarConta')}
          texto="Deletar minha Conta"
          buttonStyle={{marginTop:50}}
        />
      </View>
    )
  }
}

const frase='Não vá embora, por favor. Tenha um pouco de fé em mim e um pouco de paciência. Por favor.';
const autor='50 Tons de Cinza';

export default DeletarConta;