import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

class BotaoComTexto extends Component {
	render() {
		const { text1, text2, onPress} = this.props;
		return (
      <View style={styles.view}>
          <Text style={{color: 'white', fontSize: 15, fontWeight:'bold'}}>{text1}</Text>
        <TouchableOpacity 
          style={styles.buttonStyle}
			    onPress={() => onPress()}>
            <Text style={{color: '#FFCC00', fontSize: 15}}>{text2}</Text>
		    </TouchableOpacity>
      </View>		  
		);
	}
}

const styles = StyleSheet.create({
  view: {
    alignContent: 'space-around',
    bottom: 0, 
    
    flexDirection: "row",
    height: 30,
    justifyContent: 'center',
    marginTop: 20,
    position: 'absolute',
    width: '100%'    
  },
  textStyle: {
    alignItems: 'center',
    color: '#3897f1',
    justifyContent: 'center'  
  },  
  buttonStyle: {
    backgroundColor: 'transparent',
    height: 45,
  }
});

export default BotaoComTexto;