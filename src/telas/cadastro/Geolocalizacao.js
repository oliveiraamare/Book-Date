import React, { Component } from 'react';
import { 
  BackHandler,
  ImageBackground, 
  Text, 
  View 
} from 'react-native';
import { Avatar } from 'react-native-paper';

import { BotaoTouchableOpacity  }from '../../componentes/botao';
import { AppBarHeader } from '../../componentes/header';
import { FraseTop } from '../../componentes/frase';

import compartilhado from '../../estilos/compartilhado';
import permissaoGeo from '../../estilos/permissaoGeo';
class Geolocalizacao extends Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBack);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBack);
  }

  onBack = () => {
    this.props.navigation.navigate('UploadImagem');    
    return true;
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
              onPress={() => this.props.navigation.navigate('UploadImagem')} 
              title={"Cadê o Wally?"} 
            />
            <FraseTop title={frase} subtitle={autor} />
            <View style={{margin:10, top:5}}>
              <Avatar.Icon 
                size={200} 
                icon="map-marker-radius"  
                style={permissaoGeo.avatar}
              />
              <Text style={permissaoGeo.texto}>
                Você precisa autorizar que acessemos sua localização para que possamos encontrar os leitores que cruzam o seu caminho
              </Text>  
            </View>
            <BotaoTouchableOpacity 
              buttonStyle={permissaoGeo.botao}
              onPress={() =>  this.props.navigation.navigate('PermissaoGeo')}
              text="Bora lá" 
              textStyle={permissaoGeo.botaoTexto}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const frase='"Você vai encontrar alguém que também queira te encontrar."';
const autor='Autor Desconhecido';

export default Geolocalizacao;