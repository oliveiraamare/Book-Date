import React, { Component } from 'react'
import { ScrollView, Switch, Text, View} from 'react-native'
import { ListItem } from 'react-native-elements'
import { Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import BotaoTransparente from '../../../componentes/botoes/BotaoTransparente';
import FrasesPerfil from '../../../componentes/fraseAleatoria/frasesPerfil'

import compartilhado from '../../../estilos/compartilhado';
import conta from '../../../estilos/conta';
import cor from '../../../estilos/cores';

import Firebase from '../../../../Firebase';

class Conta extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSwitchOn: false,
    };
  }

  handleLogout = () => {
    Firebase
      .auth()
      .signOut()
      .then(() => this.props.navigation.navigate('Login'))
      .catch(error => alert(error))
  }

  render() {
    return (
      <View style={compartilhado.container}>
      <View style={compartilhado.statusBar} />
        <ScrollView >
          <View style={conta.viewAvatar}>
            <View style={{marginRight: 15}}>
              <Avatar.Image size={200} source={require('../../../imagens/fotoPerfil.jpg')} />
            </View>    
            <View style={conta.viewTexto}>
              <Text style={{color: cor.cinza, fontSize: 20}}>
                Thellen Santiago
              </Text>
              <FrasesPerfil />
            </View>
          </View>
          <View>
            <ListItem
              title="Notificação Push"
              titleStyle={{color:cor.branco}}
              containerStyle={conta.listItem}
              rightElement={
                <Switch
                  value={this.state.isSwitchOn}
                  onValueChange={() =>
                    { this.setState({ isSwitchOn: !this.state.isSwitchOn }); }
                  }
                  trackColor={{true:cor.branco, false: cor.cinza}}
                  thumbColor={[this.state.isSwitchOn==true?cor.rosa:cor.branco]}    
                />
              }
              leftIcon={
                <MaterialCommunityIcons name="bell-ring" color={cor.rosaClaro} size={20} />
              }               
            />
            <ListItem
              containerStyle={conta.listItem}
              title="Meu Perfil"
              titleStyle={{color:cor.branco}}
              leftIcon={
                <MaterialCommunityIcons name="account-edit" color={cor.rosaClaro} size={20} />
              }
              rightElement={
                <MaterialCommunityIcons name="chevron-right" color={cor.rosaClaro} size={20} />
              }
              onPress={() => this.props.navigation.navigate('Perfil') }
            />
            <ListItem
              containerStyle={conta.listItem}
              title="Termos de Privacidade"
              titleStyle={{color:cor.branco}}
              leftIcon={
                <MaterialCommunityIcons name="sort-variant-lock" color={cor.rosaClaro} size={20} />
              } 
              rightElement={
                <MaterialCommunityIcons name="chevron-right" color={cor.rosaClaro} size={20} />
              }
              onPress={() => this.props.navigation.navigate('TermoPrivacidade')}                  
            />
            <ListItem
              containerStyle={conta.listItem}
              title="Termos de Uso"
              titleStyle={{color:cor.branco}}
              leftIcon={
                <MaterialCommunityIcons name="locker-multiple" color={cor.rosaClaro} size={20} />
              } 
              rightElement={
                <MaterialCommunityIcons name="chevron-right" color={cor.rosaClaro} size={20} />
              }
              onPress={() => this.props.navigation.navigate('TermoUso')}                  
            />
            <ListItem
              containerStyle={conta.listItem}
              title="Sobre Nós"
              titleStyle={{color:cor.branco}}
              leftIcon={
                <MaterialCommunityIcons name="face-agent" color={cor.rosaClaro} size={20} />
              } 
              rightElement={
                <MaterialCommunityIcons name="chevron-right" color={cor.rosaClaro} size={20} />
              }
              onPress={() => this.props.navigation.navigate('SobreNos')}   
            />
            <ListItem
              containerStyle={conta.listItem}
              title="Sair"
              titleStyle={{color:cor.branco}}
              leftIcon={
                <MaterialCommunityIcons name="account-arrow-right-outline" color={cor.rosaClaro} size={20} />
              } 
              rightElement={
                <MaterialCommunityIcons name="chevron-right" color={cor.rosaClaro} size={20} />
              }
              onPress={() => this.handleLogout()} 
            />
          </View>     
          <BotaoTransparente
            onPress={() => this.props.navigation.navigate('DeletarConta')}
            texto="Deletar Conta"
            buttonStyle={{marginTop:50}}
          />
        </ScrollView>
      </View>
    )
  }
}

export default Conta;