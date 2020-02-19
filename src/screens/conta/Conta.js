import React, { Component } from 'react'
import { ScrollView, Switch, Text, View} from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import compartilhado from '../../styles/compartilhado';
import conta from '../../styles/conta';

import cor from '../../constantes/cores';

onPressOptions = () => {
  this.props.navigation.navigate('options')
}

onChangePushNotifications = () => {
  this.setState(state => ({
    pushNotifications: !state.pushNotifications,
  }))
}

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
              <Avatar
                rounded
                size="xlarge"
                source={{
                  uri: '../../assets/leitor.png',
                }}
              />
            </View>    
            <View style={conta.viewTexto}>
              <Text style={{color: cor.cinza, fontSize: 16}}>
                Elizabeth Bennet
              </Text>
              <Text style={{color: cor.cinza, fontSize: 11}}>
                Que não seja imortal, posto que é chama,
              </Text>
              <Text style={{color: cor.cinza, fontSize: 11}}>
                mas que seja infinito enquanto dure
              </Text>
            </View>
          </View>
          <View style={{marginTop: 30}}>
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
                  thumbColor={[this.state.isSwitchOn==true?cor.rosa:'white']}    
                />
              }
              leftIcon={
                <MaterialCommunityIcons name="bell-ring" color={cor.rosa} size={20} />
              }
              underlaycolor={cor.rosa}          
              textInputSelectTextOnFocus='true'
            />
            <ListItem
              // chevron
              title="Meu Perfil"
              titleStyle={{color:cor.branco}}
              rightElement={
                <MaterialCommunityIcons name="chevron-right" color={cor.rosa} size={20} />
              }
              onPress={() => this.onPressOptions()}
              containerStyle={conta.listItem}
              leftIcon={
                <MaterialCommunityIcons name="account-edit" color={cor.rosa} size={20} />
              }
              underlaycolor={cor.rosa}          
              textInputSelectTextOnFocus='true'
            />
            <ListItem
              title="Localização"
              titleStyle={{color:cor.branco}}
              rightElement={
                <MaterialCommunityIcons name="chevron-right" color={cor.rosa} size={20} />
              }
              onPress={() => this.onPressOptions()}
              containerStyle={conta.listItem}
              leftIcon={
                <MaterialCommunityIcons name="map-marker-distance" color={cor.rosa} size={20} />
              }
              underlaycolor={cor.rosa}          
              textInputSelectTextOnFocus='true'
            />
            <ListItem
              title="Configurações"
              titleStyle={{color:cor.branco}}
              rightElement={
                <MaterialCommunityIcons name="chevron-right" color={cor.rosa} size={20} />
              }
              onPress={() => this.onPressOptions()}
              containerStyle={conta.listItem}
              leftIcon={
                <MaterialCommunityIcons name="cogs" color={cor.rosa} size={20} />
              }    
              underlaycolor={cor.rosa}          
              textInputSelectTextOnFocus='true'        
            />
            <ListItem
              title="Sobre Nós"
              titleStyle={{color:cor.branco}}
              rightElement={
                <MaterialCommunityIcons name="chevron-right" color={cor.rosa} size={20} />
              }
              onPress={() => this.onPressOptions()}
              containerStyle={conta.listItem}
              leftIcon={
                <MaterialCommunityIcons name="face-agent" color={cor.rosa} size={20} />
              } 
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