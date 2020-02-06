import * as React from 'react';
import { 
  KeyboardAvoidingView,
  StyleSheet, 
  TextInput, 
} from 'react-native';
import { View } from 'native-base';

import compartilhado from '../styles/compartilhado';


const YELLOW = '#FFFF00';
const PINK = '#ff33cc';

class TextoInputEmail extends React.Component {
  state = {
    isFocused: false
  };

  handleFocusEmail = event => {
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
    const { inputStyle, onBlur, onFocus,...otherProps } = this.props;
    return (
      <View>
        <KeyboardAvoidingView behavior="padding" enabled>
          <TextInput
            style={[inputStyle, styles.textInput]}
            onBlur={this.handleBlur}
            onFocus={this.handleFocusEmail}
            placeholder='Email'
            placeholderTextColor= 'white'
            selectionColor={YELLOW}
            underlineColorAndroid={
              isFocused ? YELLOW : PINK
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

export default TextoInputEmail;