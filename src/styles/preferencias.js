import { StyleSheet,Platform } from 'react-native';

const styles = StyleSheet.create({
  citacao: {
    borderBottomWidth: 1,
    borderColor: 'transparent',
    marginBottom: 30, 
    marginTop: 5, 
    paddingLeft: 20,
    paddingRight: 20
  },
  tag: {
    marginBottom: 10, 
    marginTop: 10,
    paddingLeft: 0, 
    paddingRight: 0
  },
  tagStyle: {
    marginBottom: 90,
    marginLeft: 0, 
    paddingLeft: 0, 
    paddingRight: 0
  },
  texto1: {
    color:'#ff33cc',  
    fontSize: 15 ,  
    marginBottom: 5,
    marginTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'justify'
  },
  texto2: {
    color:'#ff33cc',  
    fontSize: 15 ,  
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'justify'
  }
})

export default styles;