import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { createSwitchNavigator } from 'react-navigation';

import Match from '../telas/menuInterno/match/Match';
import Notificacao from '../telas/menuInterno/Notificacao';
import Mensagem from '../telas/menuInterno/mensagem/Mensagem';
import Conta from '../telas/menuInterno/conta/Conta';

const NavegacaoSwitch = createSwitchNavigator(
  {
    screen: Conta,
    screen: Mensagem,
    screen: Notificacao,
    screen: Match
  },
)

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Match"
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
        name="Bookshop"
        component={Match}
        options={{
          //tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notificações"
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
        name="Conta"
        component={Conta}
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