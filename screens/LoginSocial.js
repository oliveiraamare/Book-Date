import React, { Component } from "react";
import { 
    StyleSheet,
    Text,   
    TouchableOpacity, 
    View    
} from "react-native";

class LoginSocial extends Component {    
    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.texto}>
                    <Text>
                        Fique à vontade para se conectar
                    </Text>
                    <Text>
                        com suas redes sociais! 
                    </Text>                       
                </View>        

                <TouchableOpacity 
                  style={styles.botaoLoginSocial} 
                  onPress={() => this.props.navigation.navigate("Facebook")}>
                    <Text style={styles.botaoTextoLogin}>Facebook</Text>                  
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.botaoLoginSocial} 
                  onPress={() => this.props.navigation.navigate("Google")}>
                    <Text style={styles.botaoTextoLogin}>Google</Text>                  
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.botaoLoginSocial} 
                  onPress={() => this.props.navigation.navigate("Instagram")}>
                    <Text style={styles.botaoTextoLogin}>Instagram</Text>                  
                </TouchableOpacity>
                
                <Text>
                    Nunca postaremos nada nelas ;)
                </Text> 
                
                <View style={styles.frases}>
                    <Text >
                        Um dia alguém entrará em sua vida
                    </Text>
                    <Text >
                        e te fará entender
                    </Text>
                    <Text>
                        por que nunca deu certo com ninguém antes.
                    </Text>               
                    <Text 
                      style={{textAlign: 'right', color: 'red'}}>
                        Autor Desconhecido
                    </Text>
                </View>
                
                <TouchableOpacity 
                  style={{position: 'absolute', bottom: 5}}
                  buttonStyle={styles.botaoVoltarLogin}
                  onPress={() => this.props.navigation.navigate("Login")}>
                    <Text style={{color: '#3897f1', fontSize: 15}}>Voltar para o login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    botaoLoginSocial: {
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
    botaoVoltarLogin: {
        backgroundColor: 'transparent',
        height: 45,
        marginBottom: 100,
        marginTop: 100       
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
    frases: {
        justifyContent: 'center',         
        textAlign: 'center',
        top: 100      
    },
    texto: {  
        backgroundColor: '#fff', 
        color: 'black',      
        fontSize: 20,   
       justifyContent: 'center', 
        position: 'absolute', 
        textAlign: 'center', 
        top: 100             
    }
})

export default LoginSocial;