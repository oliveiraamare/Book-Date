import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { createSwitchNavigator } from 'react-navigation';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Match from '../telas/menuInterno/match/Match';
import Notificacao from '../telas/menuInterno/Notificacao';
import Mensagem from '../telas/menuInterno/mensagem/Mensagem';
import Conta from '../telas/menuInterno/conta/Conta';

import cor from '../estilos/cores';

const NavegacaoSwitch = createSwitchNavigator(
  {
    screen: Conta,
    screen: Mensagem,
    screen: Notificacao,
    screen: Match
  },
)

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const ContaStack = createStackNavigator();
const MatchStack = createStackNavigator();
const MensagemStack = createStackNavigator();
const NotificacaoStack = createStackNavigator();
const HomeStack = createStackNavigator();

export default function NavegacaoInterna() {  
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Match"
        tabBarOptions={{
          //https://reactnavigation.org/docs/en/bottom-tab-navigator.html#tabbaroptions
          activeTintColor: cor.rosa,
          inactiveTintColor: cor.cinza,
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
        <Tab.Screen name="Second">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Home" component={HomeScreen} />
              <HomeStack.Screen name="Details" component={DetailsScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
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
              <MatchStack.Screen name="Details" component={DetailsScreen} />
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
              <MensagemStack.Screen name="Details" component={DetailsScreen} />
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
              <ContaStack.Screen name="Details" component={DetailsScreen} />
            </ContaStack.Navigator>
          )}
        </Tab.Screen>        
      </Tab.Navigator>
    </NavigationContainer>
  );
}