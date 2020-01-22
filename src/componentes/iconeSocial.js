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
        <SocialIcon type='google' iconSize={21} raised={false} />
      </TouchableHighlight>
      <TouchableHighlight          
        onPress={() => this.props.navigation.navigate('Cadastro')}>
          <SocialIcon type='facebook' iconSize={21} raised={false} />
      </TouchableHighlight>
      <TouchableHighlight          
        onPress={() => this.props.navigation.navigate('Cadastro')}>
          <SocialIcon type='instagram' iconSize={21} raised={false} />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  icone: { 
    alignItems: 'center',
    bottom: 0,
    flex: 1,
    flexDirection: 'row', 
    height: 50, 
    justifyContent: 'space-around',
    marginTop: 110,
    marginBottom: 110, 
    position: 'absolute',
    width: '100%'
  },
});

export default IconeSocial;