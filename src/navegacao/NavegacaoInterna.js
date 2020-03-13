import * as React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import cor from '../estilos/cores';

import Conta from '../telas/menuInterno/conta/Conta';
import Match from '../telas/menuInterno/match/Match';
import Mensagem from '../telas/menuInterno/mensagem/Mensagem';
import Notificacao from '../telas/menuInterno/Notificacao';

import PerfilMatch from '../telas/menuInterno/match/PerfilMatch';

import DeletarConta from '../telas/menuInterno/conta/DeletarConta';
import Perfil from '../telas/menuInterno/conta/perfil/Perfil';
import SobreNos from '../telas/menuInterno/conta/SobreNos';
import TermoPrivacidade from '../telas/menuInterno/conta/termos/TermoPrivacidade';
import TermoUso from '../telas/menuInterno/conta/termos/TermoUso';


import Login from '../telas/home/Login';

function FeedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function AccountScreen() {
  return <View />;
}

function SettingsScreen() {
  return <View />;
}

const Tab = createBottomTabNavigator();

function HomeTabs({ navigation, route }) {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: cor.amarelo,
        inactiveTintColor: cor.cinza,
        labelStyle: { padding: 3 },
        style:{ backgroundColor:'black' },
        tabStyle:{ backgroundColor: 'transparent' }
      }}  
    >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Notificacao" component={Notificacao} />
      <Tab.Screen name="Account" component={Conta} />
      <Tab.Screen 
        name="Conta" component={Conta} 
        options=
        {{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-edit" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="SobreNos" component={SobreNos} />
        <Stack.Screen name="TermoPrivacidade" component={TermoPrivacidade} />
        <Stack.Screen name="TermoUso" component={TermoUso} />
        <Stack.Screen name="DeletarConta" component={DeletarConta} />
        <Stack.Screen name="Login" component={Login} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
