import React, { Component } from 'react'
import { ScrollView, Switch, Text, View} from 'react-native'
import { ListItem } from 'react-native-elements'
import { Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import FrasesPerfil from '../../../componentes/fraseAleatoria/frasesPerfil'

import compartilhado from '../../../estilos/compartilhado';
import conta from '../../../estilos/conta';
import cor from '../../../estilos/cores';

class Conta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pushNotifications: true,
      isSwitchOn: false,
    };
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
              hideChevron
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
                <MaterialCommunityIcons name="bell-ring" color={cor.rosa} size={20} />
              }
              underlaycolor={cor.rosa}          
              textInputSelectTextOnFocus='true'
            />
            <ListItem
              containerStyle={conta.listItem}
              title="Meu Perfil"
              titleStyle={{color:cor.branco}}
              leftIcon={
                <MaterialCommunityIcons name="account-edit" color={cor.rosa} size={20} />
              }
              rightElement={
                <MaterialCommunityIcons name="chevron-right" color={cor.rosa} size={20} />
              }
              onPress={() => this.props.navigation.navigate('Perfil')}
              underlaycolor={cor.rosa}          
              textInputSelectTextOnFocus='true'
            />
            <ListItem
              containerStyle={conta.listItem}
              title="Configurações"
              titleStyle={{color:cor.branco}}
              leftIcon={
                <MaterialCommunityIcons name="cogs" color={cor.rosa} size={20} />
              } 
              rightElement={
                <MaterialCommunityIcons name="chevron-right" color={cor.rosa} size={20} />
              }
              onPress={() => this.props.navigation.navigate('Configuracao')}              
              underlaycolor={cor.rosa}          
              textInputSelectTextOnFocus='true'        
            />
            <ListItem
              containerStyle={conta.listItem}
              title="Sobre Nós"
              titleStyle={{color:cor.branco}}
              leftIcon={
                <MaterialCommunityIcons name="face-agent" color={cor.rosa} size={20} />
              } 
              rightElement={
                <MaterialCommunityIcons name="chevron-right" color={cor.rosa} size={20} />
              }
              onPress={() => this.props.navigation.navigate('SobreNos')}   
              underlaycolor={cor.rosa}          
              textInputSelectTextOnFocus='true'
            />
          </View>     
        </ScrollView>
      </View>
    )
  }
}

export default Conta;