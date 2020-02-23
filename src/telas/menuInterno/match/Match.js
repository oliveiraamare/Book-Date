import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import compartilhado from '../../../estilos/compartilhado';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { createSwitchNavigator } from 'react-navigation';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
