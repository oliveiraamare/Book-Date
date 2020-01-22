import React from 'react';
import { 
  BackHandler,
  StyleSheet,
  Text,
  TextInput,  
  TouchableOpacity,
  View 
} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { 
  cadastro,
  updateEmail, 
  updatePassword
} from '../actions/usuario'


class Cadastro extends React.Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount(){
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    this.props.navigation.navigate('Home');
    // Return true to enable back button over ride.
    return true;
  }

  handleLogin = () => {
    this.props.cadastro()
    this.props.navigation.navigate('Perfil')
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          value={this.props.user.email}
          onChangeText={email => this.props.updateEmail(email)}
          placeholder='Email'
          autoCapitalize='none'
        />
        <TextInput
          style={styles.inputBox}
          value={this.props.user.password}
          onChangeText={password => this.props.updatePassword(password)}
          placeholder='Password'
          secureTextEntry={true}
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={this.handleLogin}>
            <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  },
  inputBox: {
      width: '85%',
      margin: 10,
      padding: 15,
      fontSize: 16,
      borderColor: '#d3d3d3',
      borderBottomWidth: 1,
      textAlign: 'center'
  },
  button: {
      marginTop: 30,
      marginBottom: 20,
      paddingVertical: 5,
      alignItems: 'center',
      backgroundColor: '#FFA611',
      borderColor: '#FFA611',
      borderWidth: 1,
      borderRadius: 5,
      width: 200
  },
  buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff'
  },
  buttonSignup: {
    fontSize: 12
  }
})


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateEmail, updatePassword, cadastro }, dispatch)
}

const mapStateToProps = state => {
  return {
      user: state.user
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cadastro)