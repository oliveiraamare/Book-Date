import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import cor from '../estilos/cores';
import compartilhado from '../estilos/compartilhado';

export const FraseTop = ({ topbarStyle, titleStyle, subtitleStyle, title, subtitle }) => {
  return (
    <View>
      <View style={[styles.topbar, topbarStyle]}>
        <Text style={[styles.titulo, titleStyle]}>{title}</Text>
        <Text style={[styles.subtitulo, subtitleStyle]}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo:{
    color: cor.pagina,
    fontFamily: compartilhado.fonteCitacao.fontFamily,
    fontSize: 17,
    marginTop: 20,
    textAlign: "justify"
  },
  topbar: {
    alignSelf: 'stretch',
    alignItems: 'center',
    height: 100,    
    justifyContent: 'center',
    padding: 10
  },  
  subtitulo: {
    alignSelf: 'flex-end',
    color: cor.amarelo,
    fontFamily: compartilhado.fonteAutor.fontFamily,
    fontSize: 15
  }
});