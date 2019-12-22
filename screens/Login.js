import React, { Component } from "react";
import { 
    Button,
    StyleSheet,
    KeyboardAvoidingView,
    Text, 
    TextInput,  
    TouchableOpacity, 
    View    
} from "react-native";

class Login extends Component {
    state = {
        email: '',
        password: ''
    };
    
    render() {
        return (
            <View style={styles.container}>
                
                <Text style={styles.texto}>
                    Book Date
                </Text>
                <KeyboardAvoidingView behavior="padding" enabled>
                <TextInput
                    style={styles.textoInput}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholder='E-mail'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.textoInput}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    placeholder='Senha'
                    secureTextEntry={true}
                />
                </KeyboardAvoidingView>
                
                <TouchableOpacity style={styles.botaoLogin} 
                  onPress={() => this.props.navigation.navigate("Login")}
                >
                    <Text style={styles.botaoTextoLogin}>Login</Text>                  
                </TouchableOpacity>

                <TouchableOpacity 
                  buttonStyle={styles.botaoEsqueceuLogin}
                  onPress={() => this.props.navigation.navigate("ResetLogin")}
                >
                    <Text style={{color: '#3897f1'}}>Esqueceu seu login?</Text>
                </TouchableOpacity>
                
                <Text style={{position: 'absolute', bottom: 30 }}>Ainda não possui uma conta?</Text>
                <TouchableOpacity 
                    style={{position: 'absolute', bottom: 5}}
                    buttonStyle={styles.botaoCadastro}
                    onPress={() => this.props.navigation.navigate("Signup")}
                >
                    <Text style={{color: '#3897f1'}}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    botaoCadastro: {
        backgroundColor: 'transparent',
        height: 45,
        marginBottom: 100,
        marginTop: 100       
    },
    botaoEsqueceuLogin: {
          backgroundColor: 'transparent',
          height: 45,
          marginTop: 10
      },
    botaoLogin: {
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
    botaoTextoLogin: {
        color: '#fff',
        fontSize: 15,
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center'        
    },
    texto: {            
        position: 'absolute', 
        top: 70,
        backgroundColor: '#fff',
        color: 'black',
        fontSize: 50,     
        justifyContent: 'center',    
        textAlign: 'center'      
    },
    textoInput: {
        borderBottomWidth: 1,
        borderColor: '#d3d3d3',
        fontSize: 16,
        margin: 10,
        padding: 10,
        textAlign: 'center',
        width: 400  
    }
})

export default Login;