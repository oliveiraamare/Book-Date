import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity  } from 'react-native';

import cor from '../estilos/cores';

export const BotaoTouchableOpacity = ({ buttonStyle, onPress, textStyle, text }) => {
  return (
    <TouchableOpacity 
      style={[styles.botaoTouchableOpacity, buttonStyle]}
      onPress={() => onPress()}>
      <Text style={[styles.texto, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

export const BotaoTransparente = ({ buttonStyle, onPress, textStyle, text }) => {
  return (
    <TouchableOpacity 
     style={[styles.botaoTransparente, buttonStyle]}
     onPress={() => onPress()}>
      <Text style={[styles.textoTransparente, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botaoTransparente:{
    backgroundColor:'transparent'
  },
  botaoTouchableOpacity: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: cor.branco,
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 5,      
    width: 200, 
  },
  texto: {
    alignItems: 'center',
    alignSelf: 'center',
    color: cor.branco,
    fontSize: 15,    
    justifyContent: 'center', 
  },
  textoTransparente: {
    color: cor.amarelo, 
    //fontWeight:'bold',
    fontSize: 15, 
    textAlign: 'center'
  },  
});

export default BotaoTouchableOpacity;