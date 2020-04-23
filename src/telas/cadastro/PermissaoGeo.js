import React, { Component } from 'react';
import { 
  AsyncStorage, 
  BackHandler,
  ImageBackground,
  Text, 
  View 
} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { PulseIndicator } from 'react-native-indicators';

import { AppBarHeader } from '../../componentes/header';
import { FraseTop } from '../../componentes/frase';

import compartilhado from '../../estilos/compartilhado';
import geo from '../../estilos/geolocalizacao';
import cor from '../../estilos/cores';

class PermissaoGeo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      geocode: null,
      nome: ''
    };
  }

  componentDidMount() {
    this.getLocationAsync();
    this.getAndLoadDados();
    BackHandler.addEventListener('hardwareBackPress', this.onBack);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBack);
  }

  onBack = () => {
    this.props.navigation.navigate('Geolocalizacao');    
    return true;
  }

  getAndLoadDados = async() => {
    var usuario = await AsyncStorage.getItem('cadastro');
    usuario = JSON.parse(usuario);
    var nome = usuario.nome; this.setState({ nome });  
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') {
      this.props.navigation.navigate('Geolocalizacao');
    };

    if (status == 'granted') {
      /*setTimeout(() => {
        this.salvarGeo(),
        this.props.navigation.navigate('Regras');
      }, 4000);*/
    };

    let location = await Location.getCurrentPositionAsync({
      accuracy:Location.Accuracy.BestForNavigation
    });

    const { latitude , longitude } = location.coords;

    this.getGeocodeAsync({latitude, longitude})
    this.setState({ location: {latitude, longitude}});
  };

  getGeocodeAsync= async (location) => {
    let geocode = await Location.reverseGeocodeAsync(location)
    this.setState({ geocode})
  }

  salvarGeo = async() => {
    const { location } = this.state
    const latitude = location ? `${location.latitude}` : '';
    const longitude = location ? `${location.longitude}` : '';

    const geolocalizacao = {
      latitude: latitude,
      longitude: longitude
    };

    await AsyncStorage.setItem('geolocalizacao', JSON.stringify(geolocalizacao)).then(
      ()=>{
        console.log('Os itens de localização foram salvos no async.')
      }).catch(error => {
        console.log('Os itens de geolocalização não foram salvos: ', error.message)
      }
    );
  }

  render() {
    return (
      <View style={compartilhado.container}>
        <ImageBackground
          source={require('../../imagens/fundo.jpg')} 
          style={compartilhado.imagemBackground}
        >
          <View style={compartilhado.imagemTransparente}>
            <AppBarHeader 
              onPress={() => this.props.navigation.navigate('Geolocalizacao')} 
              title={"Queremos te Encontrar"} 
            />  
            <FraseTop 
              title={frase} 
              subtitle={autor} 
            />       
            <View style={geo.viewLocal}>
              <Text style={geo.nome}>
                Só uns segundinhos, {this.state.nome}.
              </Text>  
              <Text style={geo.texto}>
                Estamos buscando a sua localização atual.
              </Text>  
              <PulseIndicator 
                color={cor.pagina_transparente}
                size={120}
                animating={true}
                interaction={true}
              />  
            </View>
          </View>
        </ImageBackground>
      </View> 
    );
  }
}

const frase='"Só de vez em quando é que você encontra alguém com uma precença e eletricidade que combina com a tua no ato."';
const autor='Charles Bukowski';

export default PermissaoGeo;