import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Constants from 'expo-constants';

const Header = ({ title }) => {
  return (
    <View>
      <View style={styles.statusBar} />
        <View style={styles.topbar}>
        <Text>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#C2185B',
    height: Constants.statusBarHeight
  },
  topbar: {
    alignSelf: 'stretch',
    height: 42,
    flexDirection: 'row', // row
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center', // center, space-around
    paddingLeft: 10,
    paddingRight: 10
  },  
});

export default Header;