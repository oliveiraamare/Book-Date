//Permisões
//https://docs.expo.io/versions/latest/sdk/permissions/#permissionresponse
//https://stackoverflow.com/questions/42521679/how-can-i-upload-a-photo-with-expo
//https://github.com/deinyefa/RNPhotoPicker/blob/master/screens/PhotoPickerScreen.js
//https://docs.expo.io/versions/v36.0.0/tutorial/image-picker/

import React, { Component } from 'react';
import {
  AsyncStorage,
  BackHandler,
  ImageBackground,
  Text,
  View
} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { Avatar } from 'react-native-paper';

import { AppBarHeader } from '../../componentes/header';
import { FraseTop } from '../../componentes/frase';
import { BotaoTransparente }from '../../componentes/botao';

import compartilhado from '../../estilos/compartilhado';
import uploadImagem from '../../estilos/uploadImagem';

class UploadImagem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
  }

  componentDidMount() {
    this.recuperaDados();
    BackHandler.addEventListener('hardwareBackPress', this.onBack);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBack);
  }

  onBack = () => {
    this.props.navigation.navigate('Preferencias');    
    return true;
  }

  recuperaDados = async() => {
    await AsyncStorage.getItem('image').then((image) => {
      var image = JSON.parse(image);
      if (image != null){
        this.setState({ image });        
      } else {
        var image = '../../imagens/icone.png';
        this.setState({ image });
      }
    }).done();
  }

  handleImagem = () => {
    this.salvarImagem();
    this.props.navigation.navigate('Geolocalizacao');
  }

  salvarImagem = async() => {
    var image;
    if (this.state.image != '../../imagens/icone.png'){
      image = this.state.image
    } else {
      image = null;
    }
    await AsyncStorage.setItem('imagem', JSON.stringify(image)).then(
      ()=>{
        //console.log('Item salvo: ' + image);
        console.log('A url da imagem foi salva no async.')
      }).catch(error => {
        console.log('A imagem não foi salva: ', error.message);
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
              onPress={() => this.props.navigation.navigate('Preferencias')} 
              title={"Adicione sua foto"} 
            /> 
            <FraseTop 
              subtitleStyle={uploadImagem.header} title={frase} subtitle={autor}
            />
            {
              this.state.image == '../../imagens/icone.png' 
              ? <Avatar.Image 
                  size={200} 
                  source={require('../../imagens/icone.png')}
                  style={uploadImagem.avatar}
                /> 
              :  <Avatar.Image 
                    size={200} 
                    source={{uri:this.state.image}} 
                    style={uploadImagem.avatar}
                  />  
            }
            <View style={uploadImagem.botaoComTexto}>
              <BotaoTransparente 
                onPress={this._pegarDaGaleria}
                text="Escolher foto da galeria"
              />
              <Text style={uploadImagem.ouEntao}>ou então</Text>
              <BotaoTransparente 
                onPress={this._tirarFoto} 
                text="Tirar foto" 
              />
            </View>
            <BotaoTransparente 
              buttonStyle={uploadImagem.botaoContinuar}
              onPress={() => this.handleImagem()}
              text="Continuar" 
              textStyle={uploadImagem.botaoContinuarTexto}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }

  _tirarFoto = async () => {
    const {
      status: cameraPerm
    } = await Permissions.askAsync(Permissions.CAMERA);

    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true
      });

      if (!pickerResult.cancelled) {
        this.setState({ image: pickerResult.uri });
      } 
    }
  };

  _pegarDaGaleria = async () => {
    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        base64: true
      });

      if (!pickerResult.cancelled) {
        this.setState({ image: pickerResult.uri});
      } 
    }
  };
}

const frase='"Se uma imagem vale mais do que mil palavras, então diga isto com uma imagem."';
const autor='Millôr Fernandes';

export default UploadImagem;