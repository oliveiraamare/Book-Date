import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import cor from '../estilos/cores';

export const BotaoComTexto = ({ viewStyle, texto1Style, texto1, buttonStyle, onPress, texto2Style, texto2 }) => {
  return (
    <View style={[styles.view, viewStyle]}>
        <Text style={texto1Style}>{texto1}</Text>
      <TouchableOpacity 
        style={[styles.botaoComTexto, buttonStyle]}
        onPress={() => onPress()} 
      >
        <Text style={texto2Style}>{texto2}</Text>
      </TouchableOpacity>
    </View>		 
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

export const BotaoTouchableOpacity = ({ buttonStyle, onPress, textStyle, text }) => {
  return (
    <TouchableOpacity 
      style={[styles.botaoTouchableOpacity, buttonStyle]}
      onPress={() => onPress()}>
      <Text style={[styles.texto, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botaoComTexto: {
    backgroundColor: 'transparent',
    height: 45
  },
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
    width: 200
  },
  texto: {
    alignItems: 'center',
    alignSelf: 'center',
    color: cor.branco,
    fontSize: 15,    
    justifyContent: 'center'
  },
  textoTransparente: {
    color: cor.amarelo, 
    //fontWeight:'bold',
    fontSize: 15, 
    textAlign: 'center'
  },  
  viewStyle: {
    alignContent: 'space-around',
    bottom: 0, 
    flexDirection: "row",
    height: 30,
    justifyContent: 'center',
    position: 'absolute',
    width: '100%'  
  }
});

export default BotaoTouchableOpacity;