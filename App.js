import React, { Component } from "react";
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import NavegacaoSwitch from "./navigation/NavegacaoSwitch";
import reducer from './reducers';

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);

export default class App extends Component {
  render() {
    <View style={styles.container}>
      <Text style={styles.headerText}>Press Hardware back button and see the alert message {"\n"}</Text>        
    </View>
    return (
      <Provider store={store}>
        <NavegacaoSwitch />
      </Provider>
    )
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