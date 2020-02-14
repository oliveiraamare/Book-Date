import * as React from "react";
import { 
  KeyboardAvoidingView,
  StyleSheet, 
  TextInput, 
  View
} from 'react-native';

import compartilhado from '../styles/compartilhado';

const WHITE = '#ffffff';
const PINK = '#ff33cc';

class TextoInputSenha extends React.Component {
  state = {
    isFocused: false
  };

  handleFocusPassword = event => {
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
    const { inputStyle, onBlur, onFocus, ...otherProps } = this.props;
    return (
      <View>
        <KeyboardAvoidingView behavior="padding" enabled>
          <TextInput
            style={[inputStyle, styles.textInput]}
            onBlur={this.handleBlur}
            onFocus={this.handleFocusPassword}
            placeholder='Password'
            placeholderTextColor={WHITE}
            secureTextEntry={true}
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
    flex: 1,
    height: 70
  }
});

export default TextoInputSenha;