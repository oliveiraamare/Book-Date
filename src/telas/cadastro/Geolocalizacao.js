import React, { Component } from 'react';
import { 
  AsyncStorage, 
  ImageBackground,
  Text, 
  View 
} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

import { BotaoTouchableOpacity  } from '../../componentes/botao';
import { AppBarHeader } from '../../componentes/header';
import { FraseTop } from '../../componentes/frase';

import compartilhado from '../../estilos/compartilhado';
import geo from '../../estilos/geolocalizacao';

class Geolocalizacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      geocode: null,
      errorMessage: ''
    };
  }

  componentDidMount() {
    this.getLocationAsync()
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.props.navigation.navigate('PermissaoGeo');
    }
    if (status == 'granted') {
      //this.props.navigation.navigate('Regras');
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

  salvarGeo = () => {
    const { location, geocode } = this.state
    const pais = geocode  ? `${geocode[0].isoCountryCode}` : '';
    const estado = geocode ? `${geocode[0].region}` : '';
    const rua = geocode ? geocode[0].street : '';
    const latitude = location ? `${location.latitude}` : '';
    const longitude = location ? `${location.longitude}` : '';

    let geolocalizacao = {
      pais: pais,
      estado: estado,
      rua: rua,
      latitude: latitude,
      longitude: longitude
    }
    AsyncStorage.setItem('geolocalizacao', JSON.stringify(geolocalizacao)).then(
      ()=>{
        alert('Itens salvos: ' + pais + ' ' + estado + ' ' + rua + ' ' + latitude + ' ' + longitude);//colocar console.log depois
      }).catch( ()=>{
       alert('Itens não salvos')
      }
    );
  }

  handleGeo = () => {
    this.salvarGeo();
    this.props.navigation.navigate('Regras');
  }

  render() {
    const { location, geocode, errorMessage } = this.state
    return (
      <View style={compartilhado.container}>
        <ImageBackground
          source={require('../../imagens/fundo.jpg')} 
          style={compartilhado.imagemBackground}
        >
          <View style={compartilhado.imagemTransparente}>
            <AppBarHeader 
              onPress={() => this.props.navigation.navigate('PermissaoGeo')} 
              title={"Queremos te Encontrar"} 
            />  
            <FraseTop 
              subtitleStyle={geo.header} 
              title={frase} 
              subtitle={autor} 
            />      
            <View style={geo.viewContainer}>
              <Text style={geo.titulo}>O usuário não vai ver isso</Text>
              <Text style={geo.titulo}>Você está aqui!</Text>
              <Text style={geo.texto}>{geocode ? `${geocode[0].isoCountryCode}`:''}</Text>
              <Text style={geo.texto}>{geocode ? `${geocode[0].region}`:''}</Text>
              <Text style={geo.texto}>{geocode ? geocode[0].street :""}</Text>
              <Text style={geo.texto}>{location ? `${location.latitude}, ${location.longitude}` :""}</Text>
              <Text style={geo.permissaoNegada}>{errorMessage}</Text>
            </View>
            <BotaoTouchableOpacity 
              buttonStyle={geo.botao}
              onPress={() => this.handleGeo()}
              text="Continuar" 
              textStyle={geo.botaoTexto}
            />
          </View>
        </ImageBackground>
      </View> 
    );
  }
}

const frase='Só de vez em quando é que você encontra alguém com uma precença e eletricidade que combina com a tua no ato.';
const autor='Charles Bukowski';

export default Geolocalizacao;