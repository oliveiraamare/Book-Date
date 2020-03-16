//Permisões
//https://docs.expo.io/versions/latest/sdk/permissions/#permissionresponse
//https://stackoverflow.com/questions/42521679/how-can-i-upload-a-photo-with-expo
//https://github.com/deinyefa/RNPhotoPicker/blob/master/screens/PhotoPickerScreen.js
//https://docs.expo.io/versions/v36.0.0/tutorial/image-picker/

import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  ImageBackground,
  Clipboard,
  Text,
  View,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { Avatar } from 'react-native-paper';

import BotaoTransparente from '../../componentes/botoes/BotaoTransparente';
import { BotaoTouchableOpacity }from '../../componentes/botao';

import { AppBarHeader } from '../../componentes/header';
import { FraseTop } from '../../componentes/frase';

import compartilhado from '../../estilos/compartilhado';
import uploadImagem from '../../estilos/uploadImagem';
import cor from '../../estilos/cores';

class UploadImagem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      uploading: false
    };
  }

  handleImagem = () => {
    this.salvarCadastro();
    this.props.navigation.navigate('PermissaoGeo');
  }

  salvarCadastro = () => {
    const { image } = this.state;
    let imagem = {
      image: image
    }
    AsyncStorage.setItem('imagem', JSON.stringify(imagem)).then(
      ()=>{
        alert('Item salvo: ' + image);//colocar console.log depois
      }).catch( ()=>{
       alert('Item não salvo');
      }
    );
  }

  render() {
    let { image } = this.state;
    return (
      <View style={compartilhado.container}>
        <ImageBackground
          source={require('../../imagens/black.jpeg')} 
          style={compartilhado.imagemBackground}
        >
          <AppBarHeader 
            onPress={() => this.props.navigation.navigate('Preferencias')} 
            title={"Adicione sua foto"} 
          /> 
          <FraseTop 
            subtitleStyle={uploadImagem.header} 
            title={frase} 
            subtitle={autor} 
          />
          <Avatar.Image 
            size={250} 
            source={{uri:image}} 
            style={uploadImagem.avatar}
          />
          <View style={uploadImagem.botaoTransparente}>
            <BotaoTransparente           
              onPress={this._pickImage}
              texto="Escolher foto da galeria"
            />
              <Text style={{color:cor.branco, marginTop:20}}>ou então</Text>
            <BotaoTransparente        
              onPress={this._tirarFoto} 
              texto="Tirar foto" 
            />
          </View>
          <BotaoTouchableOpacity 
            buttonStyle={uploadImagem.botao}
            onPress={() => this.handleImagem()}
            text="Continuar" 
          />
          {this._renderizarUploadingOverlay()}
        </ImageBackground>
      </View>
    );
  }

  _renderizarUploadingOverlay = () => {
    if (this.state.uploading) {
      return (
        <View style={uploadImagem.renderizandoUpload}>
          <ActivityIndicator size="large" color={cor.rosa} />
        </View>
      );
    }
  };

  _copyToClipboard = () => {
    Clipboard.setString(this.state.image);
    alert('Copied image URL to clipboard');
  };

  _tirarFoto = async () => {
    const {
      status: cameraPerm
    } = await Permissions.askAsync(Permissions.CAMERA);

    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    // only if user allows permission to camera AND camera roll
    if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [10, 10],
      });

      if (!pickerResult.cancelled) {
        this.setState({ image: pickerResult.uri });
      }

      this.uploadImageAsync(pickerResult.uri);
    }
  };

  _pickImage = async () => {
    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    // only if user allows permission to camera roll
    if (cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        base64: true,
        aspect: [10, 10],
      });

      if (!pickerResult.cancelled) {
        this.setState({ image: pickerResult.uri});
      }

      this.uploadImageAsync(pickerResult.uri);
    }
  };

  uploadImageAsync(pictureuri) {
    let apiUrl = 'http://123.123.123.123/ABC';
    var data = new FormData();  
    data.append('file', {  
      uri: pictureuri,
      name: 'file',
      type: 'image/jpg'
    })

    let filename = pictureuri.split('/').pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    let formData = new FormData();
    formData.append('photo', { uri: apiUrl, name: filename, type });

    fetch(apiUrl, {  
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      method: 'POST',
      body: data
    }).then(
      response => {
        console.log('succ ')
        console.log(response)
      }).catch(error => {
        console.log('error ')
        alert(error)
      })
  }
}


const frase='Se uma imagem vale mais do que mil palavras, então diga isto com uma imagem.';
const autor='Millôr Fernandes';

export default UploadImagem;