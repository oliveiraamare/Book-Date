import Constants from 'expo-constants';
import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import compartilhado from '../styles/compartilhado';



const Header = ({ titleStyle, subtitleStyle, title, subtitle }) => {
  return (
    <View>
        <View style={styles.topbar}>
        <Text style={[styles.texto, titleStyle]}>{title}</Text>
        <Text style={[styles.texto, subtitleStyle]}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#ff33cc',
    height: Constants.statusBarHeight
  },
  texto:{
    color: compartilhado.corTexto.color,
    //importar fonte
  },
  topbar: {
    alignSelf: 'stretch',
    alignItems: 'center',
    height: 130,    
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },  
});

export default Header;