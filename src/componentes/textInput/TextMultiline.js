import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import cor from '../../estilos/cores';
import compartilhado from '../../estilos/compartilhado';

class TextoMultilinha extends Component {
  render() {
    const { 
      inputStyle, multiline, maxLength, 
      numberOfLines, placeHolder, ...otherProps 
    } = this.props;
    return (
      <View>
        <TextInput
          autoCapitalize='none'
          style={[styles.textInput, inputStyle]}
          placeholder={placeHolder}
          placeholderTextColor= {cor.pagina}
          selectionColor={cor.pagina}
          multiline={multiline}
          maxLength={maxLength}
          numberOfLines={numberOfLines} 
          {...otherProps}
        />      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {   
    alignContent: 'center',
    color: cor.pagina,
    fontFamily: compartilhado.fontePadrao.fontFamily,
    fontSize: 16,
    height: 50,
  }
});

export default TextoMultilinha;