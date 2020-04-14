import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Citacoes from './frases.json';

import cor from '../../estilos/cores';

class FrasesAleatorias extends Component {

  retornaCitacao() {
    return Citacoes[Math.floor(Math.random()*Citacoes.length)];
  }

  render() {
    const citacao = this.retornaCitacao();
    return (
      <View style={styles.frase}>
        <Text style={styles.citacao}>
          {citacao.texto}
        </Text>
        <Text style={styles.autor}>
          {citacao.autor}
        </Text>
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  autor: {
    color: cor.amarelo, 
    textAlign: 'center'
  },
  citacao: {
    color: cor.branco, 
    textAlign: 'center',
  },
  frase: {
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 14,
    padding: 8,
    position: 'absolute', 
    top: 240
  }
})


export default FrasesAleatorias;