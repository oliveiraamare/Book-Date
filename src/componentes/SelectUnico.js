import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Chevron } from 'react-native-shapes';
import RNPickerSelect from 'react-native-picker-select';

//https://www.npmjs.com/package/react-native-picker-select

const genero = [
  {
    label: 'Leitor',
    value: 'Leitor', 
    color: '#ff33cc'
  },
  {
    label: 'Leitora',
    value: 'Leitora', 
    color: '#ff33cc'
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

    return (
      <View style={styles.container}>     
        <RNPickerSelect
          Icon={() => {
            return <Chevron size={1.5} color="white" />;
          }}
          items={genero}
          onValueChange={value => {
            this.setState({
              escolha: value,
            });
          }}
          placeholder={placeholder}
          placeholderTextColor= 'white'
          style={{
            inputAndroid: {
              backgroundColor: 'transparent', 
              color: 'white', 
              height: 50,               
              paddingLeft: 20,
              paddingRight: 20, 
            },
            iconContainer: {
              alignSelf: 'flex-end',
              backgroundColor: 'transparent', 
              height: 20,
              width: 20,
              top: 15,
              right: 10,
            },
          }}
          textInputProps={{ 
            borderBottomWidth: 1,
            borderTopWidth: 1,
            underlineColorAndroid: '#CCCCCC'
          }}
          useNativeAndroidPickerStyle={false}
          value={this.state.escolha}
        />        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5, 
    marginTop: 5, 
  }
});