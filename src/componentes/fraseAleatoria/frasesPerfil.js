import React, { Component } from 'react';
import { Text, View } from 'react-native';
import QUOTES from './frases.json';

import cor from '../../estilos/cores';

const defaultStyles = {
  fraseStyle: {
    alignSelf: 'center',
    borderRadius: 5, 
    fontSize: 14,
    marginTop: 25,     
    textAlign:'justify'        
  },
};

export default class FrasesPerfil extends Component {
  static defaultProps = {
    fraseStyle: {},
  };

  constructor(props) {
    super(props);
    this.styles = {
      fraseStyle: {
        ...defaultStyles.fraseStyle,
        ...this.props.fraseStyle,
      },
    };
  }

  getQuote() {
    return QUOTES[Math.floor(Math.random()*QUOTES.length)];
  }

  render() {
    const q = this.getQuote();
    return (
      <View style={this.styles.fraseStyle}>
        <Text style={{color: cor.branco, textAlign: 'center'}}>
          {q.texto}
        </Text>
        <Text style={{color: cor.amarelo, textAlign: 'center'}}>
          {q.autor}
        </Text>
      </View>      
    );
  }
}