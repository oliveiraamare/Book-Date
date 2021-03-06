import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { CheckBox } from 'react-native-elements'

import cor from '../estilos/cores';
class Checkbox extends Component {
  render() {
    const { checked, title, onPress, ...otherProps } = this.props;
    return (
      <View style={styles.container}>
        <CheckBox
          checked={checked}
          onPress={() => onPress()}
          title={title}
          checkedIcon='user-circle' 
          uncheckedIcon='circle-o'
          uncheckedColor={cor.amarelo}
          checkedColor={cor.creme}
          size={20}
          containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
          textStyle={styles.textStyle} 
          {...otherProps}
        />          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {   
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 20,
    color: cor.pagina, 
    flex: 1,   
    height: 40, 
    marginBottom: 10,
    marginTop: 0
  },
  textStyle: {
    color: cor.pagina,    
    fontSize: 13, 
    paddingLeft: 10 
  }
});

export default Checkbox;