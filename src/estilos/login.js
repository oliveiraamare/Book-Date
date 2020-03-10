import { StyleSheet,Platform } from 'react-native';

const styles = StyleSheet.create({
  botaoEsqueceuLogin: {
    alignItems:'flex-end',    
    marginBottom: 20,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  botaoLogin: {
    alignSelf: 'center',
    marginBottom: 20, 
    marginTop: 20
  },  
  header: {
    alignSelf: 'flex-end'
  },
  inputEmail: {
    marginBottom: 20, 
    marginTop: 70,
    paddingLeft: 10,
    paddingRight: 10
  },
  inputSenha: {
    marginBottom: 5, 
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10, 
  }
})

export default styles;