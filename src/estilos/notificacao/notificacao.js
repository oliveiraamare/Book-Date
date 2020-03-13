import { StyleSheet } from 'react-native';

import cor from '../cores';

const notificacao = StyleSheet.create({
  header: {
    backgroundColor: 'transparent', 
    borderBottomColor: cor.branco,
    borderBottomWidth: 0.18
  },
  appBarHeader: {
    color: cor.branco, 
    fontSize: 18
  }
})

export default notificacao;