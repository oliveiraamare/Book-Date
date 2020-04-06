import React, { Component } from 'react'
import { 
  AsyncStorage,
  ImageBackground,
  ScrollView, 
  Switch, 
  Text, 
  View
} from 'react-native'
import { ListItem } from 'react-native-elements'
import { Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import BotaoTransparente from '../../../componentes/botoes/BotaoTransparente';
import { Citacoes } from '../../../componentes/fraseAleatoria/citacoes';

import compartilhado from '../../../estilos/compartilhado';
import conta from '../../../estilos/conta';
import cor from '../../../estilos/cores';

import Firebase from '../../../firebase/Firebase';

class Conta extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usuarioLogado: {},
      isSwitchOn: false,
      imagem: null
    };
  }

  componentDidMount() {
    this.dadosUsuarioLogado();
  }

  dadosUsuarioLogado = async() => {
    var usuarioLogado = await AsyncStorage.getItem('usuarioLogado');
    usuarioLogado = JSON.parse(usuarioLogado);
    this.setState({usuarioLogado});

    var imagem = usuarioLogado.imagem;
    if (imagem != null){
      this.setState({ imagem });  
    } else {
      imagem = '../../../imagens/icone.png'
      this.setState({ imagem });
    } 
  }

  handleLogout = () => {
    this.removeDadosAsync();
    Firebase.auth().signOut()
    .then(() => 
      console.log('Usuário fez logout!'))
    .catch(error => alert('Ocorreu um erro no logout' + error));
  }

  removeDadosAsync = async() => {
    try {
      await AsyncStorage.clear();
      console.log('Storage limpo com sucesso');
    } catch (error) {
      console.log('Falha ao limpar o Storage', error.message);
    }
  }
  
  render() {
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        <ImageBackground
          source={require('../../../imagens/fundoInterno.jpg')}
          style={compartilhado.imagemBackground}
        >
          <ScrollView>
            <Citacoes 
              container={conta.containerCitacao} 
              textoStyle={conta.citacao} autorStyle={conta.autor} 
            />
            <View style={conta.viewAvatar}>
              <View style={conta.viewImagem}>
                {
                  this.state.imagem == '../../../imagens/icone.png'
                  ? <Avatar.Image 
                      size={200} 
                      source={require('../../../imagens/icone.png')}
                    />
                  : <Avatar.Image 
                      size={200} 
                      source={{ uri: this.state.imagem }}  
                    />
                }
                </View>    
              <View style={conta.viewTexto}>
                <Text style={{color: cor.amarelo, fontSize: 20, textAlign: "justify"}}>
                  {this.state.usuarioLogado.nome}
                </Text>
              </View>
            </View>

            <View style={{marginTop: 70}}>
              <ListItem
                containerStyle={conta.listItem}
                title="Meu Perfil"
                titleStyle={{color:cor.branco}}
                leftIcon={
                  <MaterialCommunityIcons name="account-edit" color={cor.amarelo} size={20} />
                }
                rightElement={
                  <MaterialCommunityIcons name="chevron-right" color={cor.amarelo} size={20} />
                }
                onPress={() => this.props.navigation.navigate('Perfil') }
              />
              <ListItem
                containerStyle={conta.listItem}
                title="Termos de Privacidade"
                titleStyle={{color:cor.branco}}
                leftIcon={
                  <MaterialCommunityIcons name="view-headline" color={cor.amarelo} size={20} />
                } 
                rightElement={
                  <MaterialCommunityIcons name="chevron-right" color={cor.amarelo} size={20} />
                }
                onPress={() => this.props.navigation.navigate('TermoPrivacidade')}                  
              />
              <ListItem
                containerStyle={conta.listItem}
                title="Termos de Uso"
                titleStyle={{color:cor.branco}}
                leftIcon={
                  <MaterialCommunityIcons name="view-headline" color={cor.amarelo} size={20} />
                } 
                rightElement={
                  <MaterialCommunityIcons name="chevron-right" color={cor.amarelo} size={20} />
                }
                onPress={() => this.props.navigation.navigate('TermoUso')}                  
              />
              <ListItem
                containerStyle={conta.listItem}
                title="Sobre Nós"
                titleStyle={{color:cor.branco}}
                leftIcon={
                  <MaterialCommunityIcons name="face-agent" color={cor.amarelo} size={20} />
                } 
                rightElement={
                  <MaterialCommunityIcons name="chevron-right" color={cor.amarelo} size={20} />
                }
                onPress={() => this.props.navigation.navigate('SobreNos')}   
              />
              <ListItem
                containerStyle={conta.listItem}
                title="Sair"
                titleStyle={{color:cor.branco}}
                leftIcon={
                  <MaterialCommunityIcons name="account-arrow-right-outline" color={cor.amarelo} size={20} />
                } 
                rightElement={
                  <MaterialCommunityIcons name="chevron-right" color={cor.amarelo} size={20} />
                }
                onPress={() => this.handleLogout()} 
              />
            </View>     
            <BotaoTransparente
              buttonStyle={{marginTop:50, marginBottom: 60}}
              onPress={() => this.props.navigation.navigate('DeletarConta')}
              texto="Deletar Conta"              
            />
          </ScrollView>
        </ImageBackground>
      </View>
    )
  }
}

export default Conta;