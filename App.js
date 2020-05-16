import React, { Component } from 'react';
import NavegacaoSwitch from './src/navegacao/NavegacaoSwitch';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

export default class App extends Component {
  state = {
    fontLoaded: false,
  }

  componentDidMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    await Font.loadAsync({
      'goudy-old-style': require('./src/fontes/goudy-old-style.ttf'),      
      'goudy-old-style-bold-italic': require('./src/fontes/goudy-old-style-bold-italic.ttf'),
      'goudy-old-style-italic-bt': require('./src/fontes/goudy-old-style-italic-bt.ttf'), 
      'Old_Script': require('./src/fontes/Old_Script.ttf')
    });;

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;  // render some progress indicator
    }
    return (
      <NavegacaoSwitch />
    )
  }
}