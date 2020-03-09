import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity  } from 'react-native';

import cor from '../estilos/cores';

export const BotaoTouchableOpacity = ({ buttonStyle, text, onPress }) => {
		return (
      <TouchableOpacity 
       style={[styles.botaoTouchableOpacity, buttonStyle]}
       onPress={() => onPress()}>
        <Text style={styles.texto}>{text}</Text>
      </TouchableOpacity>
		);
}

const styles = StyleSheet.create({
  botaoTouchableOpacity: {
    alignItems: 'center',
    backgroundColor: cor.rosa,
    borderColor: cor.rosa,
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
  }
});

export default BotaoTouchableOpacity;