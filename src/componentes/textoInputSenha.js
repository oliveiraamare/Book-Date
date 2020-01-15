import * as React from "react";
import { 
  StyleSheet, 
  TextInput, 
} from "react-native";

const PURPLE = "#9900cc";
const PINK = "#ff33cc";

class TextoInputSenha extends React.Component {
  state = {
    isFocused: false
  };

  handleFocusEmail = event => {
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
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
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: 50,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  }
});

export default TextoInputSenha;