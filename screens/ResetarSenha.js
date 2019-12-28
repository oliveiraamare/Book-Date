import React, { Component } from "react";
import { 
    KeyboardAvoidingView,
    StyleSheet,
    Text, 
    TextInput,  
    TouchableOpacity, 
    View    
} from "react-native";

class ResetarSenha extends Component {
    state = {
        senhaAtual: '',
        novaSenha: '',
        confirmarSenha: ''
    };
    
    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.texto}>
                    <Text>
                        Reset sua senha
                    </Text>     
                </View>             

                <KeyboardAvoidingView behavior="padding" enabled>
                    <TextInput
                        style={styles.textoInput}
                        value={this.state.senhaAtual}
                        onChangeText={senhaAtual => this.setState({ senhaAtual })}
                        placeholder='Senha atual'
                    />
                    <TextInput
                        style={styles.textoInput}
                        value={this.state.novaSenha}
                        onChangeText={novaSenha => this.setState({ novaSenha })}
                        placeholder='Nova senha'
                    />
                    <TextInput
                        style={styles.textoInput}
                        value={this.state.confirmarSenha}
                        onChangeText={confirmarSenha => this.setState({ confirmarSenha })}
                        placeholder='confirme a nova senha'
                    />
                </KeyboardAvoidingView>
                
                <TouchableOpacity style={styles.botaoEnviar} 
                  onPress={() => this.props.navigation.navigate("NovaSenha")}
                >
                    <Text style={styles.botaoTextoEnviar}>Enviar</Text>                  
                </TouchableOpacity>
                
                
                <View style={styles.frases}>
                    <Text>
                        É tão delicada a linha entre lembrar e esquecer 
                    </Text>
                    <Text>
                        que muitas vezes pra te apagar sem querer te trago de volta a vida
                    </Text>               
                    <Text style={{textAlign: 'right', color: 'red'}}>
                        Tudo Nela Brilha e Queima 
                    </Text>
                </View>
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
        width: 200
    },
    botaoTextoEnviar: {
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
        width: 200  
    }
})

export default ResetarSenha;