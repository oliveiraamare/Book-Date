import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Text } from 'react-native-paper';

import cor from '../estilos/cores';
import compartilhado from '../estilos/compartilhado';

export const AppBarHeader = ({ headerStyle, onPress, style, title }) => (
  <View>
    <View style={compartilhado.statusBar} />
    <Appbar style={[ styles.header, headerStyle ]}> 
      <Appbar.Action 
        icon='undo' 
        color={cor.amarelo}  
        onPress={() => onPress()} 
      />
      <Appbar.Content
        title={
          <Text style={[ styles.appBarHeader, style ]}>
            {title}
          </Text>
        }
      />
    </Appbar>  
  </View>
)

export const BarHeader = ({ headerStyle, style, title }) => (
  <View>
    <View style={compartilhado.statusBar} />
    <Appbar style={[ styles.header, headerStyle ]}> 
      <Appbar.Content
        title={
          <Text style={[ styles.appBarHeader, style ]}>
            {title}
          </Text>
        }
      />
    </Appbar>  
  </View>
)

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'transparent', 
    borderBottomColor: cor.pagina,
    borderBottomWidth: 0.18
  },
  appBarHeader: {
    color: cor.pagina, 
    fontFamily: compartilhado.fonteBotao.fontFamily,
    fontSize: 20
  },
})