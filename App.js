import React, { Component } from "react";
import NavegacaoSwitch from "./navigation/NavegacaoSwitch";
import TermoUso from "./termos/TermoUso"
import { Platform, StyleSheet, View, Text, Alert, BackHandler  } from 'react-native';

export default class App extends Component {
    
    render() {
        <View style={styles.container}>
        <Text style={styles.headerText}>Press Hardware back button and see the alert message {"\n"}</Text>        
      </View>
        return <NavegacaoSwitch />
        //return <TermoUso />
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    headerText: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      fontWeight: "bold"
    },
  
  });