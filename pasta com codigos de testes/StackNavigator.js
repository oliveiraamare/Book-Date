// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.

//https://reactnavigation.org/docs/en/tab-based-navigation.html#customizing-the-appearance 

import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import compartilhado from '../estilos/compartilhado';


import Perfil from '../telas/Perfil';

function DetailsScreen() {
    return (
      <View style={compartilhado.container}>
        <Text>Details!</Text>
      </View>
    );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor:'black'}}>
      <Perfil />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{
      headerTintColor: '#ffffff',
      headerStyle: { backgroundColor: '#ff33cc',},
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen}
        options={{
          title: 'Book Date',
          headerStyle: {
            height: 80,
            backgroundColor: '#ff33cc', 
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 14, 
            //estilos do component Text
          },

        }}
        



        />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#ff33cc',
          inactiveTintColor: '#cccccc',
          activeBackgroundColor: 'black', 
          inactiveBackgroundColor: 'black', 
          //labelStyle:{}
//        style
          

        }}

      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
