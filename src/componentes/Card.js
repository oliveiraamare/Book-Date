import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

import cor from '../estilos/cores';

export const CardComTitulo = ({ styleCard, titulo, paragrafo, autor, left}) => (
  <Card style={styleCard}>          
    <Card.Title
      title={titulo}
      titleStyle={styles.titulo}
      style={styles.containerCard}
      left={left}    
    />
    <Card.Content style={styles.containerCard}>
      <Paragraph style={styles.paragrafo}>{paragrafo}</Paragraph>
      <Paragraph style={styles.paragrafoAutor}>{autor}</Paragraph>
    </Card.Content>
  </Card> 
)

export const Cards = ({ styleCard, paragrafo, autor }) => (
  <Card style={styleCard}>          
    <Card.Content style={styles.containerCard}>
      <Paragraph style={styles.paragrafo}>{paragrafo}</Paragraph>
      <Paragraph style={styles.paragrafoAutor}>{autor}</Paragraph>
    </Card.Content>
  </Card>      
)

const styles = StyleSheet.create({
  containerCard:{
    backgroundColor: cor.cinzaEscuro, 
    borderRadius: 20
  },
  paragrafo: {
    color:cor.branco, 
    textAlign:'justify' 
  },
  paragrafoAutor: {
    alignSelf: 'flex-end', 
    color: cor.rosa, 
    fontWeight: 'bold'
  },
  titulo: {
    color: cor.branco, 
    fontSize: 17, 
    fontWeight: 'bold'
  }
})