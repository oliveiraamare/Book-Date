import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import compartilhado from "../styles/compartilhado";

class BotaoTouchableOpacity extends Component {
	render() {
		const {buttonStyle, onPress, text } = this.props;
		return (
      <TouchableOpacity 
       style={[buttonStyle, styles.botao]}
       onPress={() => onPress()}>
        <Text style={styles.texto}>{text}</Text>
      </TouchableOpacity>
		);
	}
}

BotaoTouchableOpacity.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  botao: {
    alignItems: 'center',
    backgroundColor: '#ff33cc',
    borderColor: '#ff33cc',
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 5,      
    width: 200, 
  },
  texto: {
    alignItems: 'center',
    alignSelf: 'center',
    color: compartilhado.corTexto.color,
    fontSize: 15,    
    justifyContent: 'center', 
  },  
  view: {
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',  
    width: '100%',     
  },
});

export default BotaoTouchableOpacity;