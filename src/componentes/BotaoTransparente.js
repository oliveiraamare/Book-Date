import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class BotaoTransparente extends Component {
	render() {
		const { onPress, texto } = this.props;
		return (
      <View style={styles.botaoTransparente}>
        <TouchableOpacity 
          style={{backgroundColor: 'transparent'}}
			    onPress={() => onPress()}>
            <Text style={styles.textStyle}>{texto}</Text>
		    </TouchableOpacity>
      </View>		  
		);
	}
}

BotaoTransparente.propTypes = {
  //text1: PropTypes.string.isRequired,
  //text2: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  textStyle: {
    color: '#ff33cc', 
    fontSize: 15, 
    textAlign: 'center'
  },  
  botaoTransparente: {
    bottom: 0, 
    marginBottom: 20,
    marginTop: 20  
  },
});

export default BotaoTransparente;