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
    width: '100%',
    height: 40,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center', // center, space-around
    marginTop: 5,
    marginBottom: 5,
  },
  textStyle: {
    color: 'white',
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center', // center, space-around	  
  },  
  buttonStyle: {
    backgroundColor: '#8ae7f7',
    borderColor: '#8ae7f7',
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 5,      
    width: 250
  }
});

export default BotaoTouchableOpacity;