import React, { Component } from "react";
import { 
  Image,
  StyleSheet,
  Text, 
  TouchableOpacity, 
  View
} from "react-native";

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.imagem}
          source={require('../assets/img-icone.png')}
        />

        <TouchableOpacity 
          style={styles.botaoEntrarCadastrar} 
          onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.botaoTextoEntrarCadastrar}>
              Entrar
            </Text>                  
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.botaoEntrarCadastrar} 
          onPress={() => this.props.navigation.navigate('Cadastro')}>
            <Text style={styles.botaoTextoEntrarCadastrar}>Cadastre-se</Text>     
        </TouchableOpacity>              
        
        <View style={styles.frases}>
          <Text style={{textAlign: 'right'}}>
            Cada qual sabe amar a seu modo;  
          </Text>
          <Text style={{textAlign: 'right'}}>
            o modo, pouco importa;
          </Text>
          <Text style={{textAlign: 'right'}}>
            o essencial é que saiba amar
          </Text>               
          <Text style={{textAlign: 'right', color: 'red'}}>
            Machado de Assis
          </Text>
        </View>
        
        <TouchableOpacity 
          style={{position: 'absolute', bottom: 35}}
          buttonStyle={styles.botaoSocialTermoPrivacidade}
          onPress={() => this.props.navigation.navigate('LoginSocial')}>
            <Text style={{color: '#3897f1', fontSize: 20}}>
              Conexão via rede social
            </Text>
        </TouchableOpacity>
        
        <View 
          style={{position: 'absolute', bottom: 10, flexDirection:'row',   
            justifyContent: 'space-between'}}>
              <TouchableOpacity 
                buttonStyle={styles.botaoSocialTermoPrivacidade}
                onPress={() => this.props.navigation.navigate("TermoUso")}>
                  <Text style={{color: '#3897f1', fontSize: 13}}>
                    Temos de uso     -
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                buttonStyle={styles.botaoSocialTermoPrivacidade}
                onPress={() => this.props.navigation.navigate("TermoPrivacidade")}>
                  <Text style={{color: '#3897f1', fontSize: 13}}>     
                    Privacidade
                  </Text>
              </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  botaoEntrarCadastrar: {
      alignItems: 'center',
      backgroundColor: '#8ae7f7',
      borderColor: '#8ae7f7',
      borderRadius: 10,
      borderWidth: 1,
      marginTop: 20,
      marginBottom: 5,
      paddingVertical: 5,      
      width: 250
  },
  botaoSocialTermoPrivacidade: {
      backgroundColor: 'transparent',
      height: 45,
      marginBottom: 200,
      marginTop: 200       
  },
  botaoTextoEntrarCadastrar: {
      color: '#fff',
      fontSize: 15,
  },    
  container: {
      alignItems: 'center',
      backgroundColor: '#fff',
      flex: 1,
      justifyContent: 'center'        
  },
  frases: {
      justifyContent: 'center',         
      textAlign: 'center',
      top: 80,
      
  },
  imagem:{
    height: 100,
    position: 'absolute', 
    top: 100,
    width: 100            
  }
})

export default Home;