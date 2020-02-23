import React, { Component } from 'react';
import { 
  KeyboardAvoidingView,
  StyleSheet, 
  TextInput, 
} from 'react-native';
import { View } from 'native-base';

import compartilhado from '../../estilos/compartilhado';


const WHITE = '#ffffff';
const PINK = '#ff33cc';

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
    const { inputStyle, onBlur, onFocus, placeHolder, ...otherProps } = this.props;
    return (
      <View>
        <KeyboardAvoidingView behavior="padding" enabled>
          <TextInput
            autoCapitalize='none'
            style={[styles.textInput, inputStyle]}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            placeholder={placeHolder}
            placeholderTextColor= 'white'
            selectionColor={WHITE}
            underlineColorAndroid={
              isFocused ? PINK : WHITE
            }
            {...otherProps}
          />      
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {   
    alignContent: 'center',
    borderWidth: 20,
    color: compartilhado.corTexto.color,
    height: 50,
  }
});

export default TextoInput;