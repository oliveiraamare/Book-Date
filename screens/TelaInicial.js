import React, { Component } from "react";
import { 
    Button,
    Image,
    KeyboardAvoidingView,
    StyleSheet,
    Text, 
    TextInput,  
    TouchableOpacity, 
    View
} from "react-native";

class SocialLogin extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image}
      source={require('./assets/img-icone.png')}        />
                      <TouchableOpacity style={styles.botaoLogin} 
                  onPress={() => this.props.navigation.navigate("Entrar")}
                >
                    <Text style={styles.botaoTextoLogin}>Entrar</Text>                  
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoLogin} 
                  onPress={() => this.props.navigation.navigate("Register")}
                >
                    <Text style={styles.botaoTextoLogin}>Cadastre-se</Text>              
                </TouchableOpacity>              
                
                <View style={styles.frases}>
                    <Text style={{justifyContent: 'right', textAlign: 'right'}}>
                        Cada qual sabe amar a seu modo;  
                    </Text>
                    <Text style={{justifyContent: 'right', textAlign: 'right'}}>o modo, pouco importa;</Text>
                    <Text style={{justifyContent: 'right', textAlign: 'right'}}>
                        o essencial é que saiba amar
                    </Text>               
                    <Text style={{justifyContent: 'right', textAlign: 'right', color: 'red'}}>
                        Machado de Assis
                    </Text>
                </View>
                
                <TouchableOpacity 
                    style={{position: 'absolute', bottom: 35}}
                    buttonStyle={styles.botaoCadastro}
                    onPress={() => this.props.navigation.navigate("Login")}
                >
                    <Text style={{color: '#3897f1', fontSize: '20'}}>Conexão via rede social</Text>
                </TouchableOpacity>
                <View style={{position: 'absolute', bottom: 10, flexDirection:'row', justifyContent: 'space-between'}}>
                <TouchableOpacity 
                    buttonStyle={styles.botaoCadastro}
                    onPress={() => this.props.navigation.navigate("Login")}
                >
                    <Text style={{color: '#3897f1', fontSize: '13'}}>Temos de uso    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    buttonStyle={styles.botaoCadastro}
                    onPress={() => this.props.navigation.navigate("Login")}
                >
                    <Text style={{color: '#3897f1', fontSize: '13'}}>     Privacidade</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    botaoLogin: {
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
    botaoTextoLogin: {
        color: '#fff',
        fontSize: 15,
    },
    botaoCadastro: {
        backgroundColor: 'transparent',
        height: 45,
        marginBottom: 200,
        marginTop: 200       
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
    image:{
      height: 100,
      position: 'absolute', 
      top: 100,
      width: 100            
    }
})

export default SocialLogin;