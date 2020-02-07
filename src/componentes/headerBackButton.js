import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  Image,
  StyleSheet,
  Text,
  TouchableOpacity, 
  View } 
from 'react-native';

class HeaderBackButton extends Component {
	render() {
		const {onPress} = this.props;
		return (
    <View style={styles.topbar}>
      <TouchableOpacity    
       style={styles.botao}
       onPress={() => onPress()}>
        <Image
          style={styles.imagem}
          source={require('../assets/arrow.png')} />
        <Text style={styles.texto}>Voltar</Text>
      </TouchableOpacity>
    </View>
		);
	}
}


HeaderBackButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  botao: {
    alignSelf: 'flex-start',
    flexDirection: 'row'   
  },
  imagem: {
    height: 30,
    width: 30
  },
  texto:{
    alignSelf: 'center',
    color: '#ff33cc'
  },
  topbar: {
    height: 30,  
    marginBottom: 5,
    marginTop: 5,  
    paddingLeft: 10,
    paddingRight: 10,
    top: 7  
  },  
});

export default HeaderBackButton;