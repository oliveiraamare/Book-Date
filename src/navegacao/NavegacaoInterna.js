//https://reactnavigation.org/docs/screen-options-resolution/
//https://reactnavigation.org/docs/stack-navigator/
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import cor from '../estilos/cores';

import Conta from '../telas/menuInterno/conta/Conta';
import Match from '../telas/menuInterno/match/Match';
import Mensagem from '../telas/menuInterno/mensagem/Mensagem';
import BookShelf from '../telas/menuInterno/BookShelf';

import EditarPerfil from '../telas/menuInterno/conta/perfil/edicaoPerfil/EditarPerfil';
import EditarPreferencias from '../telas/menuInterno/conta/perfil/edicaoPerfil/EditarPreferencias';
import EditarTopTres from '../telas/menuInterno/conta/perfil/edicaoPerfil/EditarTopTres';
import DeletarConta from '../telas/menuInterno/conta/DeletarConta';
import Perfil from '../telas/menuInterno/conta/perfil/Perfil';
import PerfilMatch from '../telas/menuInterno/match/PerfilMatch';
import SobreNos from '../telas/menuInterno/conta/SobreNos';
import TermoPrivacidade from '../telas/menuInterno/conta/termos/TermoPrivacidade';
import TermoUso from '../telas/menuInterno/conta/termos/TermoUso';
import { usuariosMatch } from '../acoes/usuariosMatch';
import { usuarioLogado } from '../acoes/usuarioLogado';

const Tab = createBottomTabNavigator();

function HomeTabs({ navigation, route }) {
  return (
    <Tab.Navigator
      initialRouteName="Loading"
      tabBarOptions={{
        //https://reactnavigation.org/docs/en/bottom-tab-navigator.html#tabbaroptions
        activeTintColor: cor.amarelo,
        inactiveTintColor: cor.cinza,
        labelStyle: { padding: 3 },
        style:{ 
          backgroundColor: cor.pretoTransparente, 
          bottom: 0, 
          height: 55,
          left: 0,
          position: 'absolute',
          right: 0
        }
      }}  
    >
      <Tab.Screen
        name="BookLovers" component={Match} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="BookShelf" component={BookShelf} 
        options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="library-shelves" color={color} size={size} />
            )
          }}
      />
      <Tab.Screen 
        name="Mensagem" component={Mensagem} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="forum-outline" color={color} size={size} />
          ),
        }}
      />
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

export default function NavegacaoInterna() {
  return (
    
    usuariosMatch(),
    usuarioLogado(),

    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomeTabs} />   
        <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
        <Stack.Screen name="EditarPreferencias" component={EditarPreferencias} />
        <Stack.Screen name="EditarTopTres" component={EditarTopTres} />
        <Stack.Screen name="DeletarConta" component={DeletarConta} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="PerfilMatch" component={PerfilMatch} 
          options={({route, navigation}) => (
            {route: {route}, navigation: {navigation}}
          )}
        />
        <Stack.Screen name="SobreNos" component={SobreNos} />
        <Stack.Screen name="TermoPrivacidade" component={TermoPrivacidade} />
        <Stack.Screen name="TermoUso" component={TermoUso} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
