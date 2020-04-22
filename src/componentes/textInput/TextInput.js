import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import cor from '../../estilos/cores';

class TextoInput extends Component {
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
      inputStyle, onBlur, onFocus, multiline,
      maxLength, numberOfLines, placeHolder, ...otherProps 
    } = this.props;

    return (
      <View>
        <TextInput
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
    borderWidth: 20,
    color: cor.branco,
    fontFamily: 'palatino-linotype',
    fontSize: 16,
    height: 50,
    margin: 15
  }
});

export default TextoInput;