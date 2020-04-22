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
      'palatino-linotype': require('./src/fontes/palatino-linotype.ttf'),
      'palatino-linotype-bold-italic': require('./src/fontes/palatino-linotype-bold-italic.ttf'),
      'palatino-linotype-bold': require('./src/fontes/palatino-linotype-bold.ttf'),
      'palatino-linotype-italic': require('./src/fontes/palatino-linotype-italic.ttf'),
      
      
      

      'adobe-garamond-pro-italic': require('./src/fontes/adobe-garamond-pro-italic.otf'),
      'adobe-garamond-pro': require('./src/fontes/adobe-garamond-pro.otf'),
      'adobe-garamond-pro-bold': require('./src/fontes/adobe-garamond-pro-bold.otf'),
      
      'goudy-old-style': require('./src/fontes/goudy-old-style.ttf'),
      'goudy-old-style-bold': require('./src/fontes/goudy-old-style-bold.ttf'),
      'goudy-old-style-mt-std-italic': require('./src/fontes/goudy-old-style-mt-std-italic.otf'),
      'goudy-old-style-bold-italic': require('./src/fontes/goudy-old-style-bold-italic.ttf'),
      'goudy-old-style-italic-bt': require('./src/fontes/goudy-old-style-italic-bt.ttf'),


      
      
      
      'LymboDemo': require('./src/fontes/LymboDemo.ttf')   
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