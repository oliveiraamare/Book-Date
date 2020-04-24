import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View 
} from 'react-native';

import cor from '../../estilos/cores'
import compartilhado from '../../estilos/compartilhado';

class BotaoTransparente extends Component {
	render() {
		const { buttonStyle, onPress, texto } = this.props;
		return (
      <View style={[styles.botaoTransparente, buttonStyle]}>
        <TouchableOpacity 
          style={{backgroundColor:'transparent'}}
			    onPress={() => onPress()}>
            <Text style={styles.textStyle}>{texto}</Text>
		    </TouchableOpacity>
      </View>		  
		);
	}
}

const styles = StyleSheet.create({
  textStyle: {
    color: cor.amarelo, 
    fontFamily: compartilhado.fonteBotao.fontFamily,  
    fontSize: 17, 
    textAlign: 'center'
  },  
  botaoTransparente: {
    bottom: 0, 
    marginBottom: 20,
    marginTop: 20  
  },
});

export default BotaoTransparente;