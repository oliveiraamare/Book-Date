import React from 'react';
import { 
  StyleSheet,
  TouchableHighlight, 
  View
} from 'react-native';

import { SocialIcon } from 'react-native-elements';

const IconeSocial = () => {
  return (
    <View style={styles.icone}>
      <TouchableHighlight          
      onPress={() => this.props.navigation.navigate('Cadastro')}>
        <SocialIcon type='google' iconSize={23} raised={false} />
      </TouchableHighlight>
      <TouchableHighlight          
        onPress={() => this.props.navigation.navigate('Cadastro')}>
          <SocialIcon type='facebook' iconSize={23} raised={false} />
      </TouchableHighlight>
      <TouchableHighlight          
        onPress={() => this.props.navigation.navigate('Cadastro')}>
          <SocialIcon type='instagram' iconSize={23} raised={false} />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  icone: {
    width: '100%',
    height: 60,
    flexDirection: 'row', // row
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'space-around', // center, space-around
    marginTop: 5,
    marginBottom: 5,
  },
});

export default IconeSocial;