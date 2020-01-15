import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

class BotaoTouchableOpacityTransparent extends Component {
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

BotaoTouchableOpacityTransparent.propTypes = {
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
    color: '#3897f1',
    alignItems: 'center',
    justifyContent: 'center', // center, space-around	  
  },  
  buttonStyle: {
    backgroundColor: 'transparent',
    height: 45,
  }
});

export default BotaoTouchableOpacityTransparent;