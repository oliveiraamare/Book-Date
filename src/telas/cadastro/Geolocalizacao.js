//https://heartbeat.fritz.ai/how-to-use-the-geolocation-api-in-a-react-native-app-b5e611b00a0c
//https://reactnativemaster.com/react-native-geolocation-example/

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

import { BotaoTouchableOpacity  } from '../../componentes/botao';
import { AppBarHeader } from '../../componentes/tabBar/AppBarHeader';
import { FraseTop } from '../../componentes/frase';

import compartilhado from '../../estilos/compartilhado';
import geolocalizacao from '../../estilos/geolocalizacao';
import cor from '../../estilos/cores';


class Geolocalizacao extends Component {
  state= {
    location:null,
    geocode:null,
    errorMessage:""
  }
  componentDidMount(){
    this.getLocationAsync()
  }
  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.props.navigation.navigate('PermissaoGeo');
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    if (status == 'granted') {
      this.props.navigation.navigate('Regras', {geocode});
    }

    let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.BestForNavigation});
    const { latitude , longitude } = location.coords
    this.getGeocodeAsync({latitude, longitude})
    this.setState({ location: {latitude, longitude}});

  };
  getGeocodeAsync= async (location) => {
    let geocode = await Location.reverseGeocodeAsync(location)
    this.setState({ geocode})
  }

  render() {
    const {location,geocode, errorMessage } = this.state
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        <AppBarHeader 
          headerStyle={{
            backgroundColor:cor.preto, 
            borderBottomColor:cor.branco,
            borderBottomWidth:0.18
          }} 
          onPress={() => this.props.navigation.navigate('PermissaoGeo')} 
          title={"Queremos te Encontrar"} 
          style={{color:cor.branco, fontSize:18}} 
        />
        <FraseTop 
          subtitleStyle={{alignSelf:'flex-end', color: cor.rosa}} 
          title={frase} 
          subtitle={autor} 
        />
        <View style={geolocalizacao.viewContainer}>
          <Text style={geolocalizacao.titulo}>Você está aqui!</Text>
          <Text style={geolocalizacao.texto}>{geocode ? geocode[0].country :""}</Text>
          <Text style={geolocalizacao.texto}>{geocode ? geocode[0].region :""}</Text>
          <Text style={geolocalizacao.texto}>{geocode ? geocode[0].street :""}</Text>
          <Text style={geolocalizacao.texto}>{location ? `${location.latitude}, ${location.longitude}` :""}</Text>
          <Text style={geolocalizacao.permissaoNegada}>{errorMessage}</Text>
        </View>        
        <BotaoTouchableOpacity 
          buttonStyle={geolocalizacao.botao}
          onPress={() => this.props.navigation.navigate('Regras')} 
          text="Continuar" 
        />
      </View>
    );
  }
}

const frase='Só de vez em quando é que você encontra alguém com uma precença e eletricidade que combina com a tua no ato.';
const autor='Charles Bukowski';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  overlay:{
    backgroundColor:"#00000070",
    height:"100%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
  heading1:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:30,
    margin:20
  },
  heading2:{
    color:"#fff",
    margin:5,
    fontWeight:"bold",
    fontSize:15
  },
  heading3:{
    color:"#fff",
    margin:5
  }
});

export default Geolocalizacao;