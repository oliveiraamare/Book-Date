import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Chevron } from 'react-native-shapes';
import RNPickerSelect from 'react-native-picker-select';

import cor from '../estilos/cores';

//https://www.npmjs.com/package/react-native-picker-select

const genero = [
  {
    label: 'Leitor',
    value: 'leitor', 
    color: cor.rosa
  },
  {
    label: 'Leitora',
    value: 'leitora', 
    color: cor.rosa
  }
];
export default class SelectUnico extends Component {

  constructor(props) {
    super(props);
    this.state = {     
      escolha: undefined,
    };    
  }

  render() {

    const placeholder = {
      label: 'Como se identifica?',
      value: null,
      color: 'transparent',       
    };
    const { value, onValueChange, ...otherProps } = this.props;

    return (
      <View style={styles.container}>     
        <RNPickerSelect
          Icon={() => {
            return <Chevron size={1.5} color="white" />
          }}
          items={genero}
          onValueChange={value => {
            this.setState({
              escolha: {onValueChange},
            });
              //alert(value)
          }}
          placeholder={placeholder}
          placeholderTextColor={cor.branco}
          style={{
            inputAndroid: styles.inputAndroid,
            iconContainer: styles.iconContainer,
          }}
          textInputProps={{ 
            borderBottomWidth: 1,
            borderTopWidth: 1,
            underlineColorAndroid: cor.cinza
          }}
          useNativeAndroidPickerStyle={false}
          value={value}
          {...otherProps}
        />        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5, 
    marginTop: 5
  },
  iconContainer: {
    alignSelf: 'flex-end',
    backgroundColor: 'transparent', 
    height: 20,
    width: 20,
    top: 15,
    right: 10
  },
  inputAndroid: {
    backgroundColor: 'transparent', 
    color: cor.branco, 
    height: 50,               
    paddingLeft: 20,
    paddingRight: 20 
  }
});