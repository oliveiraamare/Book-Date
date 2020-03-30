import { StyleSheet } from 'react-native';

import cor from '../estilos/cores';

const geo = StyleSheet.create({
  texto: {
    color: cor.branco,
    fontSize: 17,
    fontWeight: "bold",  
    marginBottom: 60  
  },
  viewLocal: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  }
})

export default geo;