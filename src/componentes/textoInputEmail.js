import * as React from "react";
import { 
  StyleSheet, 
  TextInput, 
} from "react-native";

const TextoInputEmail = () => {
  return (
    <TextInput
      placeholder='Email'
      autoCapitalize='none'
      style={styles.textInput}
      keyboardAppearance = 'light'
      underlineColorAndroid= 'white'
      placeholderTextColor= 'green'
    />
  );
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

export default TextoInputEmail;