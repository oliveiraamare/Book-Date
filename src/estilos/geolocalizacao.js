import { StyleSheet } from 'react-native';

import cor from '../estilos/cores';

const geo = StyleSheet.create({
  nome: {
    color: cor.branco,
    fontSize: 17,
    fontWeight: "bold",  
    marginBottom: 10 
  },
  texto: {
    color: cor.branco,
    fontSize: 17,
    fontWeight: "bold",  
    marginBottom: 80  
  },
  viewLocal: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  }
})

export default geo;