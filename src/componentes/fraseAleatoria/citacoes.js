import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QUOTES from './frases.json';

import cor from '../../estilos/cores';
import compartilhado from '../../estilos/compartilhado';

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
    fontFamily: compartilhado.fonteAutor.fontFamily,
    fontSize: 15,
    marginTop: 5,
    textAlign: 'center'
  },
  texto: {
    color: cor.pagina, 
    fontFamily: compartilhado.fonteCitacao.fontFamily,
    fontSize: 16.7,
    textAlign: 'center'
  },
  frase: {
    alignItems: 'center',
    alignSelf: 'center',
    padding: 5,
    position: 'absolute', 
    top: 240
  }
});