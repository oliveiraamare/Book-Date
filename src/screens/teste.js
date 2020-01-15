import React, { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLandscape: {
    backgroundColor: '#000',
  },
  box: {
    backgroundColor: 'red',
    height: 100,
  },
});

// const screen = Dimensions.get('screen');

const useScreenDimensions = () => {
  const [screenData, setScreenData] = useState(Dimensions.get('screen'));

  useEffect(() => {
    const onChange = result => {
      setScreenData(result.screen);
    };

    Dimensions.addEventListener('change', onChange);

    return () => Dimensions.removeEventListener('change', onChange);
  });

  return {
    ...screenData,
    isLandscape: screenData.width > screenData.height,
  };
};

export default () => {
  const screenData = useScreenDimensions();

  console.log(screenData);
  return (
    <View
      style={[
        styles.container,
        screenData.isLandscape && styles.containerLandscape,
      ]}
    >
      <View style={[styles.box, { width: screenData.width / 2 }]} />
    </View>
  );
};


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

export default class general extends Component {
  
  constructor(props) {
    super(props);
    const { width, height} = Dimensions.get("window")
    this.state = {
      width,
      height
    }
  }
  onLayout() {
    const { width, height} = Dimensions.get("window")
    this.setState({
      width,
      height
    }) 
  }// width: this.state.width < this.state.height ? this.state.width : this.state.height,
  /**<Text>Width: {this.state.width}</Text>
        <Text>Height: {this.state.height}</Text> */

  render() {    
    return (
      <View style={styles.container} onLayout={() => this.onLayout()}>    
         <Text style={{backgroundColor:'green',  flex: 2, margin: 10, top: 30, height: this.state.height * 0.2, width: this.state.width * 0.96}}>header</Text>  
          <Text style={{backgroundColor:'pink', flex: 2, margin: 10, top: 30,}}>frase</Text>  
          
          <Text style={{backgroundColor:'pink', flex: 1, margin: 10, top: 40,}}>Faça login com suas redes sociais</Text> 
          <View style={{margin: 5, flex: 3, top: 50, flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
         </View>       
         <Text style={{backgroundColor:'pink', flex: 1, margin: 10, top: 40,}}>ou então</Text> 
          
          <Text style={{backgroundColor:'purple', flex: 2, margin: 10, top: 50,}}>email</Text>  
          <Text style={{backgroundColor:'yellow', flex: 2, margin: 10, top: 53,}}>senha</Text>  
          <Text style={{backgroundColor:'black', flex: 3, margin: 10, top:45,}}>login</Text>  
          <Text style={{backgroundColor:'brown', flex: 2, margin: 10, top: 30,}}>esqueceu o login</Text>    
          <Text style={{backgroundColor:'gold', flex: 1, margin: 10, bottom: 0,}}>cadastre-se</Text>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },

});

AppRegistry.registerComponent('general', () => general);