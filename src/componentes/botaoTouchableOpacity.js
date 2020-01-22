import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

class BotaoTouchableOpacity extends Component {
	render() {
		const { text, onPress} = this.props;
		return (
      <View style={styles.view}>
        <TouchableOpacity 
          style={styles.buttonStyle}
			    onPress={() => onPress()}
		    >
			    <Text style={styles.textStyle}>{text}</Text>
		    </TouchableOpacity>
      </View>
		  
		);
	}
}

BotaoTouchableOpacity.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    marginBottom: 5,
    marginTop: -70,    
    width: '100%'
  },
  textStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    color: 'white',
    fontSize: 15,    
    justifyContent: 'center', 
  },  
  buttonStyle: {
    backgroundColor: '#ff33cc',
    borderColor: '#ff33cc',
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 5,      
    width: 250
  }
});

export default BotaoTouchableOpacity;