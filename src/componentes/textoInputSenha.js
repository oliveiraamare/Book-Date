import * as React from "react";
import { 
  KeyboardAvoidingView,
  StyleSheet, 
  TextInput, 
  View
} from "react-native";

const PURPLE = "#9900cc";
const PINK = "#ff33cc";

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
    const { onFocus, onBlur, ...otherProps } = this.props;
    return (
      <View>
        <KeyboardAvoidingView behavior="padding" enabled>
          <TextInput
            placeholder='Password'
            secureTextEntry={true}
            selectionColor={PURPLE}
            underlineColorAndroid={
              isFocused ? PURPLE : PINK
            }
            onFocus={this.handleFocusPassword}
            onBlur={this.handleBlur}
            style={styles.textInput}
            {...otherProps}
            placeholderTextColor= 'white'
          />      
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    alignContent: 'center',
    color:'white',
    flex: 2,
    height: 70,
    justifyContent: 'center',
    marginBottom: 100, 
    marginTop: -150,
    paddingLeft: 10,
    paddingRight: 10,
    top: 0
  }
});

export default TextoInputSenha;