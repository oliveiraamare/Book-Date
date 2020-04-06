import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QUOTES from './frases.json';

import cor from '../../estilos/cores';

export const Citacoes = ({ container, textoStyle, autorStyle }) => {

  const quote = QUOTES[Math.floor(Math.random()*QUOTES.length)];

  return (
    <View style={[styles.frase, container]}>
      <Text style={[styles.texto, textoStyle]}>
        {quote.texto}
      </Text>
      <Text style={[styles.autor, autorStyle]}>
        {quote.autor}
      </Text>
    </View>     
  );
}

const styles = StyleSheet.create({
  autor: {
    color: cor.amarelo, 
    textAlign: 'center'
  },
  texto: {
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
});