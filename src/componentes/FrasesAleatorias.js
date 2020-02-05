import React from 'react';
import { Text, View } from 'react-native';
import QUOTES from './frases.json';

const defaultStyles = {
  fraseStyle: {
    alignItem: 'flex-end',
    borderRadius: 5,
    bottom: 100,    
    fontSize: 14,
    padding: 8,             
  },
};

class FrasesAleatorias extends React.Component {
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
        <Text style={{color: 'white', textAlign: 'right'}}>
          {q.texto}
        </Text>
        <Text style={{color: 'red', textAlign: 'right'}}>
          {q.autor}
        </Text>
      </View>      
    );
  }
}

export default FrasesAleatorias;