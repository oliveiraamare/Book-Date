//https://www.npmjs.com/package/age-calculator      
import React, { Component } from 'react';
import {
  AsyncStorage,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView, 
  Text,
  View
} from 'react-native';
import { RootToaster, Toast } from 'react-native-root-toaster';

import { AppBarHeader } from '../../../../../componentes/header';
import { TopPreferencias } from '../../../../../componentes/topPreferencias';

import editarTopTres from '../../../../../estilos/editarTopTres';
import compartilhado from '../../../../../estilos/compartilhado';
import cor from '../../../../../estilos/cores';

import { usuarioUid, collection } from '../../../../../firebase/acoes';
import { usuario_logado_dados } from '../../../../../acoes/recuperaDadoUsuario';

class EditarTopTres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autor0: '',
      autor1: '',
      autor2: '',

      genero0: '',
      genero1: '',
      genero2: '',

      livro0: '',
      livro1: '',
      livro2: ''
    };
  }

  componentDidMount() {
    this.getAndLoadDados()
  }

  render() {
    return (    
      <View style={compartilhado.container}>  
        <ImageBackground 
          source={require('../../../../../imagens/editarPerfil.jpg')}
          style={compartilhado.imagemBackground}
        > 
          <AppBarHeader 
            onPress={() => 
              this.handleUpdate()
            } 
            title={"Editar Top Três"} 
          />        
          <RootToaster 
            defaultDuration={2000} defaultColor={cor.amarelo} 
          />        
          <ScrollView style={editarTopTres.scrollView}>  
            <KeyboardAvoidingView 
              style={{justifyContent: "flex-end", flex: 1 }} 
              behavior='padding' 
              enabled 
            >    
              <View style={editarTopTres.info}>
                <Text style={editarTopTres.texto}>Meu top 3 de autores</Text>   
                <TopPreferencias
                  nomeIcone={'numeric-1'} 
                  inputStyle={editarTopTres.textInput}
                  maxLength={20}
                  value={this.state.autor0}
                  onChangeText={autor0 => this.setState({ autor0 })}
                />
                <TopPreferencias
                  nomeIcone={'numeric-2'} 
                  inputStyle={editarTopTres.textInput}
                  value={this.state.autor1}
                  onChangeText={autor1 => this.setState({ autor1 })}
                />
                <TopPreferencias
                  nomeIcone={'numeric-3'} 
                  inputStyle={editarTopTres.textInput}
                  value={this.state.autor2}
                  onChangeText={autor2 => this.setState({ autor2 })}
                />
                <Text style={editarTopTres.texto}>Meu top 3 de gênero literário</Text>  
                <TopPreferencias
                  nomeIcone={'numeric-1'} 
                  inputStyle={editarTopTres.textInput}
                  maxLength={20}
                  value={this.state.genero0}
                  onChangeText={genero0 => this.setState({ genero0 })}
                />
                <TopPreferencias
                  nomeIcone={'numeric-2'} 
                  inputStyle={editarTopTres.textInput}
                  value={this.state.genero1}
                  onChangeText={genero1 => this.setState({ genero1 })}
                />
                <TopPreferencias
                  nomeIcone={'numeric-3'} 
                  inputStyle={editarTopTres.textInput}
                  value={this.state.genero2}
                  onChangeText={genero2 => this.setState({ genero2 })}
                />
                <Text style={editarTopTres.texto}>Meu top 3 de livros</Text> 
                <TopPreferencias
                  nomeIcone={'numeric-1'} 
                  inputStyle={editarTopTres.textInput}
                  maxLength={20}
                  value={this.state.livro0}
                  onChangeText={livro0 => this.setState({ livro0 })}
                />
                <TopPreferencias
                  nomeIcone={'numeric-2'} 
                  inputStyle={editarTopTres.textInput}
                  value={this.state.livro1}
                  onChangeText={livro1 => this.setState({ livro1 })}
                />
                <TopPreferencias
                  nomeIcone={'numeric-3'} 
                  inputStyle={editarTopTres.textInput}
                  value={this.state.livro2}
                  onChangeText={livro2 => this.setState({ livro2 })}
                />
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
  async getAndLoadDados() {
    var usuarioLogado = await AsyncStorage.getItem('usuarioLogado');
    usuarioLogado = JSON.parse(usuarioLogado);

    var usuario = usuarioLogado;
      
    var autor0 = usuario.preferencias.autor[0];
    this.setState({autor0});
    var autor1 = usuario.preferencias.autor[1];
    this.setState({autor1});
    var autor2 = usuario.preferencias.autor[2];
    this.setState({autor2});

    var genero0 = usuario.preferencias.generoLiterario[0];
    this.setState({genero0});
    var genero1 = usuario.preferencias.generoLiterario[1];
    this.setState({genero1});
    var genero2 = usuario.preferencias.generoLiterario[2];
    this.setState({genero2});

    var livro0 = usuario.preferencias.livro[0];
    this.setState({livro0});
    var livro1 = usuario.preferencias.livro[1];
    this.setState({livro1});
    var livro2 = usuario.preferencias.livro[2];
    this.setState({livro2});
  }

  handleUpdate = () => {
    var autor = {
      0: this.state.autor0,
      1: this.state.autor1,
      2: this.state.autor2
    };
    var generoLiterario = {
      0: this.state.genero0,
      1: this.state.genero1,
      2: this.state.genero2
    };
    var livro = {
      0: this.state.livro0,
      1: this.state.livro1,
      2: this.state.livro2
    };    
    this.updateDados(autor, generoLiterario, livro);
    Toast.show('Alterações salvas!');
    setTimeout(() => {
      this.props.navigation.navigate('EditarPerfil');
    }, 2000);       
  }

  updateDados = (autor, generoLiterario, livro) => {
    collection('usuarios').doc(usuarioUid())
      .update({
        "preferencias.autor": autor,
        "preferencias.generoLiterario": generoLiterario,
        "preferencias.livro": livro    
      })
      .then(() => 
        usuario_logado_dados(),
        console.log('Update dos dados da tela EditarTopTres feito com sucesso.'))
      .catch(error => { 
        console.log('Erro no update da tela EditarTopTres: ' + error.message)
      })
  }
}

export default EditarTopTres;