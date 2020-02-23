import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

//importando estilos
import styles from "../../estilos/login"

const Frase = ({tela, texto}) => (
  handleLogin = () => {
    this.props.login()
    this.props.navigation.navigate({tela})
  },
  <TouchableOpacity 
    style={styles.botaoLogin} 
    onPress={() => this.props.login()}>
      <Text style={styles.botaoTextoLogin}>{texto}</Text>                  
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  frase: {
    position: 'absolute', 
    top: 70,
    backgroundColor: '#fff',
    color: 'black',
    fontSize: 50,     
    justifyContent: 'center',    
    textAlign: 'center'  
  },
});

export default Frase;