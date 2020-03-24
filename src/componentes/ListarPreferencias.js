//https://www.npmjs.com/package/age-calculator      
import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native';

import { MaterialCommunityIcons } from 'react-native-vector-icons';
import TextoInput from './textInput/TextInput';

import cor from '../estilos/cores';

class ListarPreferencias extends Component {
  state = {
    isFocused: false
  };

  handleFocus = event => {
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleBlur = event => {
    this.setState({ isFocused: false });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  render() {

    const { isFocused } = this.state;
    const 
    { 
      nomeIcone,
      inputStyle, onBlur, onFocus, multiline,
      maxLength, numberOfLines, placeHolder, ...otherProps 
    } = this.props;

    return (    
      <View>  
        <View style={styles.container}>
          <MaterialCommunityIcons name={nomeIcone} color={cor.amarelo} size={20} />
          <TextoInput
            autoCapitalize='none'
            style={[styles.textInput, inputStyle]}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            placeholder={placeHolder}
            placeholderTextColor= {cor.branco}
            selectionColor={cor.branco}
            underlineColorAndroid=
            {
              isFocused ? cor.amarelo : cor.branco
            }
          />
        </View>
            
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    alignContent:'space-between' ,
    flexDirection: 'row'
  },
  textInput: {   
    alignContent: 'center',
    borderWidth: 20,
    color: cor.branco,
    height: 50,
    margin: 15
  }
});

export default ListarPreferencias;