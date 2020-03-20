import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import cor from '../estilos/cores';

export const Preferencias = ({ tituloStyle, titulo, opcao1, opcao2, opcao3 }) => (
  <View>
    <Text style={tituloStyle}>{titulo}</Text>
    <View style={{flexDirection:'row'}}>
      <MaterialCommunityIcons 
        name='numeric-1-box-multiple-outline' 
        color={cor.amarelo} 
        size={20} 
      />
      <Text style={styles.opcao}>{opcao1}</Text> 
    </View>
    <View style={{flexDirection:'row'}}>
      <MaterialCommunityIcons 
        name='numeric-2-box-multiple-outline' 
        color={cor.amarelo} 
        size={20} 
      />
      <Text style={styles.opcao}>{opcao2}</Text> 
    </View>   
    <View style={{flexDirection:'row'}}>
      <MaterialCommunityIcons 
        name='numeric-3-box-multiple-outline' 
        color={cor.amarelo} 
        size={20}       
      />
      <Text style={styles.opcao}>{opcao3}</Text> 
    </View>   
  </View>
)

const styles = StyleSheet.create({
  opcao: {
    color: cor.amareloA,
		fontSize: 12,
		paddingBottom: 5,
		paddingHorizontal: 5,
		paddingLeft: 5,
		paddingRight: 5,
		paddingTop: 5,
		textAlign: 'justify'
  }
})