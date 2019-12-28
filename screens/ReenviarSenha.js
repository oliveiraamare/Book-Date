import React, { Component } from "react";
import { 
  KeyboardAvoidingView,
  StyleSheet,
  Text, 
  TextInput,  
  TouchableOpacity, 
  View    
} from "react-native";

class ReenviarSenha extends Component {
  state = {
      email: ''
  };
    
  render() {
    return (
      <View style={styles.container}>
          
        <View style={styles.texto}>
          <Text>
            Esqueceu como se entra?
          </Text>     
          <Text>
            Calma! Te dou mais uma chance, na verdade quantas necessitar ;)
          </Text> 
        </View>
                    
        <Text style={{justifyContent: 'center', textAlign: 'center'}}>
          Digite seu e-mail que enviaremos uma senha para recuperação.
        </Text>                

        <KeyboardAvoidingView behavior="padding" enabled>
          <TextInput
            style={styles.textoInput}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder='E-mail'
            autoCapitalize='none'            
          />
        </KeyboardAvoidingView>
          
        <TouchableOpacity style={styles.botaoEnviar} 
          onPress={() => this.props.navigation.navigate("ResetarSenha")}>
            <Text style={styles.botaoTextoEnviar}>Enviar</Text>                  
        </TouchableOpacity>
          
          
        <View style={styles.frases}>
          <Text >
            Se me esqueceres, só uma coisa,
          </Text>
          <Text>
            esquece-me bem devagarinho.
          </Text>               
          <Text style={{textAlign: 'right', color: 'red'}}>
            Mario Quintana
          </Text>
        </View>
        
        <TouchableOpacity 
          style={{position: 'absolute', bottom: 5}}
          buttonStyle={styles.botaoVoltarLogin}
          onPress={() => this.props.navigation.navigate("Login")}>
            <Text style={{color: '#3897f1', fontSize: 20}}>
              Voltar para o login
            </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  botaoEnviar: {
    alignItems: 'center',
    backgroundColor: '#8ae7f7',
    borderColor: '#8ae7f7',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 5,
    paddingVertical: 5,      
    width: 350
  },
  botaoTextoEnviar: {
    color: '#fff',
    fontSize: 15
  },
  botaoVoltarLogin: {
    backgroundColor: 'transparent',
    height: 45,
    marginBottom: 100,
    marginTop: 100       
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
    top: 90      
  },
  texto: {  
    backgroundColor: '#fff', 
    color: 'black',      
    fontSize: 20,   
    justifyContent: 'center', 
    position: 'absolute', 
    textAlign: 'center', 
    top: 100             
  },
  textoInput: {
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
    fontSize: 16,
    margin: 10,
    padding: 10,
    textAlign: 'center',
    textTransform: 'lowercase',
    width: 400  
  }   
})

export default ReenviarSenha;