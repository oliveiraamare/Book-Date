import * as React from "react";
import { 
  KeyboardAvoidingView,
  StyleSheet, 
  TextInput, 
} from "react-native";
import { View } from "native-base";

const YELLOW = "#FFFF00";
const PINK = "#ff33cc";

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
    const { onFocus, onBlur, ...otherProps } = this.props;
    return (
      <View>
        <KeyboardAvoidingView behavior="padding" enabled>
          <TextInput
            autoCapitalize='characters'
            clearButtonMode='always'
            keyboardAppearance='dark'
            onBlur={this.handleBlur}
            onFocus={this.handleFocusEmail}
            placeholder='Email'
            placeholderTextColor= 'white'
            selectionColor={YELLOW}
            style={styles.textInput}
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
    color:'white',
    flex: 2,
    height: 70,
    justifyContent: 'center', 
    marginBottom: 160,
    marginTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    top: 0
  }
});

export default TextoInputEmail;