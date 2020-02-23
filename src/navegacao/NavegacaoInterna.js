import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Match from '../telas/menuInterno/match/Match';
import Notificacao from '../telas/menuInterno/Notificacao';
import Mensagem from '../telas/menuInterno/mensagem/Mensagem';
import Conta from '../telas/menuInterno/conta/Conta';

import Perfil from '../telas/menuInterno/conta/perfil/Perfil';
import SobreNos from '../telas/menuInterno/conta/SobreNos';

import TermoPrivacidade from '../telas/termos/TermoPrivacidade';
import TermoUso from '../telas/termos/TermoUso';

import DeletarConta from '../telas/menuInterno/conta/DeletarConta';

import cor from '../estilos/cores';

const Tab = createBottomTabNavigator();
const ContaStack = createStackNavigator();
const MatchStack = createStackNavigator();
const MensagemStack = createStackNavigator();
const NotificacaoStack = createStackNavigator();

export default function NavegacaoInterna() {  
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Match"
        tabBarOptions={{
          //https://reactnavigation.org/docs/en/bottom-tab-navigator.html#tabbaroptions
          activeTintColor: cor.rosa,
          inactiveTintColor: cor.cinza,
          labelStyle: { padding: 3 },
          style:{ backgroundColor:'black' },
          tabStyle:{ backgroundColor: 'transparent' }
        }}  
      >
        <Tab.Screen 
          name="Bookshop" 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-heart" color={color} size={size} />
            ),
          }}
        >
          {() => (
            <MatchStack.Navigator headerMode="none">
              <MatchStack.Screen name="Bookshop" component={Match} />
            </MatchStack.Navigator>
          )}
        </Tab.Screen>   
        <Tab.Screen 
          name="Notificações" 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell-ring" color={color} size={size} />
            ),
          }}
        >
          {() => (
            <NotificacaoStack.Navigator headerMode="none">
              <NotificacaoStack.Screen name="Notificações" component={Notificacao} />
            </NotificacaoStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen 
          name="Mensagem" 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="forum-outline" color={color} size={size} />
            ),
          }}
        >
          {() => (
            <MensagemStack.Navigator headerMode="none">
              <MensagemStack.Screen name="Mensagem" component={Mensagem} />      
            </MensagemStack.Navigator>
          )}
        </Tab.Screen>       
        <Tab.Screen 
          name="Conta" 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-edit" color={color} size={size} />
            ),
          }}
        >
          {() => (
            <ContaStack.Navigator headerMode="none">
              <ContaStack.Screen name="Conta" component={Conta} />
              <ContaStack.Screen name="Perfil" component={Perfil} />
              <ContaStack.Screen name="SobreNos" component={SobreNos} />           
              <ContaStack.Screen name="TermoPrivacidade" component={TermoPrivacidade} />
              <ContaStack.Screen name="TermoUso" component={TermoUso} />
              <ContaStack.Screen name="DeletarConta" component={DeletarConta} />
            </ContaStack.Navigator>
          )}
        </Tab.Screen>         
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//https://reactnavigation.org/docs/en/stack-navigator.html#navigationoptions-used-by-stacknavigator
//https://snack.expo.io/@oliveiraamare/5fcd36?platform=android&name=createStackNavigator%20%C2%B7%20React%20Navigation&dependencies=%40react-native-community%2Fmasked-view%40%5E0.1.1%2C%40react-navigation%2Fnative%405.0.4%2C%40react-navigation%2Fbottom-tabs%405.0.4%2C%40react-navigation%2Fdrawer%405.0.4%2C%40react-navigation%2Fmaterial-bottom-tabs%405.0.4%2C%40react-navigation%2Fmaterial-top-tabs%405.0.4%2C%40react-navigation%2Fnative-stack%405.0.4%2C%40react-navigation%2Fstack%405.0.4%2Creact-native-gesture-handler%401.5.2%2Creact-native-reanimated%401.4.0%2Creact-native-safe-area-context%400.6.0%2Creact-native-screens%402.0.0-alpha.12&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F5.x%2Fsimple-stack.js
//https://snack.expo.io/@oliveiraamare/c813ca
