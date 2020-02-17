import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { createSwitchNavigator } from 'react-navigation';

import PerfilMatch from '../screens/PerfilMatch';
import Notificacao from '../screens/Notificacao';
import Mensagem from '../screens/Mensagem';
import Perfil from '../screens/perfilUsuario/Perfil';

const NavegacaoSwitch = createSwitchNavigator(
  {
    screen: PerfilMatch,
    screen: Notificacao,
    screen: Mensagem,
    screen: Perfil
  },
)

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="PerfilMatch"
      tabBarOptions={{
        //https://reactnavigation.org/docs/en/bottom-tab-navigator.html#tabbaroptions
        activeTintColor: '#ff33cc',
        inactiveTintColor: '#CCCCCC',
        labelStyle: {
         // fontSize: 5,
          padding: 3
        },
        //showLabel:false, 
        style:{
          backgroundColor:'black'
        },
        tabStyle:{
          backgroundColor: 'transparent'
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={PerfilMatch}
        options={{
          //tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notificacao"
        component={Notificacao}
        options={{
          //tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell-ring" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Mensagem"
        component={Mensagem}
        options={{
          //tabBarLabel: 'Messenger',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="forum-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          //tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-edit" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function NavegacaoInterna() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
