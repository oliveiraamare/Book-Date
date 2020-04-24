import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import cor from '../estilos/cores';
import compartilhado from '../estilos/compartilhado';
compartilhado

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

export const BotaoInterligado = ({ buttonStyle, onPress, textStyle, text }) => {
  return (
    <TouchableOpacity 
      disabled
      style={[styles.botaoInterligado, buttonStyle]}
    >
      <Text style={[styles.botaoInterligadoTexto, textStyle]}>{text}</Text>
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
  botaoInterligado: {
    backgroundColor: 'transparent',
    borderColor: cor.amarelo,
    borderWidth: 1,
    borderRadius: 70, 
    height: 55,
    justifyContent: 'center',       
    width: 220   
  },
  botaoInterligadoTexto: { 
    color: cor.pagina,
    fontFamily: compartilhado.fontePadrao.fontFamily,
    fontWeight:'bold'
  },
  botaoTouchableOpacity: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: cor.pagina,
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 5,      
    width: 200
  },
  texto: {
    alignItems: 'center',
    alignSelf: 'center',
    color: cor.pagina,
    fontFamily: compartilhado.fonteBotao.fontFamily,
    fontSize: compartilhado.fonteBotao.fontSize,
    justifyContent: 'center'
  },
  textoTransparente: {
    color: cor.pagina, 
    fontFamily: compartilhado.fonteBotao.fontFamily,
    fontSize: compartilhado.fonteBotao.fontSize,
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