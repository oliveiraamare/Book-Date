import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { CheckBox } from 'react-native-elements'

import compartilhado from '../estilos/compartilhado';


const WHITE = '#ffffff';
const PINK = '#ff33cc';

class Checkbox extends Component {
  state = {
    checked: false
  };

  render() {
    const { checked } = this.state;
    const { title, ...otherProps } = this.props;
    return (
      <View style={styles.container}>
        <CheckBox
          title={title}
          checkedIcon='user-circle' 
          uncheckedIcon='circle-o'
          uncheckedColor='#ff33cc'
          checked={checked}
          checkedColor='#ff33cc'
          size={20}
          onPress={() => this.setState({ checked: !checked })}
          containerStyle={{ backgroundColor: 'black', borderColor: 'transparent' }}
          textStyle={{fontSize: 14, paddingLeft: 10, color:'white' }}
          {...otherProps}
        />          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {   
    borderWidth: 20,
    color: compartilhado.corTexto.color,
    flex: 1,   
    height: 40, 
    marginBottom: 10,
    marginTop: 0
  }
});

export default Checkbox;