//Permisões
//https://docs.expo.io/versions/latest/sdk/permissions/#permissionresponse
//https://stackoverflow.com/questions/42521679/how-can-i-upload-a-photo-with-expo
//https://github.com/deinyefa/RNPhotoPicker/blob/master/screens/PhotoPickerScreen.js
//https://docs.expo.io/versions/v36.0.0/tutorial/image-picker/

import React, { Component } from 'react';
import {
  ActivityIndicator,
  Clipboard,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { Avatar } from 'react-native-paper';

import BotaoTransparente from '../../componentes/botoes/BotaoTransparente';
import BotaoTouchableOpacity from '../../componentes/botoes/botaoTouchableOpacity';
import { AppBarHeader } from '../../componentes/tabBar/AppBarHeader';
import Header from '../../componentes/header/header';

import compartilhado from '../../estilos/compartilhado';
import uploadImagem from '../../estilos/uploadImagem';
import cor from '../../estilos/cores';

class UploadImagem extends Component {
  state = {
    image: null,
    uploading: false,
  };

  render() {
    let { image } = this.state;
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        <AppBarHeader 
          headerStyle={{
            backgroundColor:cor.preto, 
            borderBottomColor:cor.branco,
            borderBottomWidth:0.18
          }} 
          onPress={() => this.props.navigation.navigate('Preferencias')} 
          title={"Adicione uma foto"} 
          style={{color:cor.branco, fontSize:18}} 
        />
        <Header 
          subtitleStyle={{alignSelf:'flex-end', color: cor.rosa}} 
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
            onPress={this._takePhoto} 
            texto="Tirar foto agora" 
          />
        </View>
        <BotaoTouchableOpacity 
          buttonStyle={uploadImagem.botao}
          onPress={() => this.props.navigation.navigate('Regras')} 
          text="Continuar" 
        />
        {this._renderizarImagem()}
        {this._renderizarUploadingOverlay()}
      </View>
    );
  }

  _renderizarUploadingOverlay = () => {
    if (this.state.uploading) {
      return (
        <View style={[StyleSheet.absoluteFill, uploadImagem.renderizandoUploading]}>
          <ActivityIndicator size="large" color={cor.rosa} />
        </View>
      );
    }
  };

  _renderizarImagem = () => {
    let { image } = this.state;

    if (!image) {
      return;
    }

    return (
      <View style={uploadImagem.maybeRenderContainerApagar}>
        <Text
          onPress={this._copyToClipboard}
          style={uploadImagem.maybeRenderImageTextApagar}>
          {image}
        </Text>
      </View>
    );
  };

  _copyToClipboard = () => {
    Clipboard.setString(this.state.image);
    alert('Copied image URL to clipboard');
  };

  _takePhoto = async () => {
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
      }).catch(err => {
      console.log('err ')
      console.log(err)
      })
  }
}

const frase='Se uma imagem vale mais do que mil palavras, então diga isto com uma imagem.';
const autor='Millôr Fernandes';

export default UploadImagem;