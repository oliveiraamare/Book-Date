import React, { Component } from 'react';
import { Text, View } from 'react-native';
import QUOTES from './frases.json';

import cor from '../../estilos/cores';

const defaultStyles = {
  fraseStyle: {
    alignItem: 'flex-end',
    borderRadius: 5,
    bottom: 100,    
    fontSize: 14,
    padding: 8,             
  },
};

class FrasesAleatorias extends Component {
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
        <Text style={{color: cor.branco, textAlign: 'right'}}>
          {q.texto}
        </Text>
        <Text style={{color: cor.vermelho, textAlign: 'right'}}>
          {q.autor}
        </Text>
      </View>      
    );
  }
}

export default FrasesAleatorias;