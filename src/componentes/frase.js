import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import cor from '../estilos/cores';

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
    color: cor.branco,
    fontWeight: 'bold',
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
    color: cor.amarelo
  }
});