//https://www.npmjs.com/package/age-calculator      
import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView, 
  Text,
  View
} from 'react-native';

import editarTopTres from '../../../../../estilos/editarTopTres';
import compartilhado from '../../../../../estilos/compartilhado';

import { AppBarHeader } from '../../../../../componentes/header';
import { TopPreferencias } from '../../../../../componentes/topPreferencias'

import { usuarioUid, collection } from '../../../../../firebase/acoes';

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

  async getAndLoadDados() {
    var uid = usuarioUid();
    var data = collection('usuarios').doc(uid);
    data.get().then((doc) => {
      
      var usuario = doc.data(); this.setState({usuario});

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
    })
    .catch(function(error) {
      console.log("Erro ao pegar dados do usuário: " + error + ' ' + error.message);
    });
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
    this.props.navigation.navigate('EditarPerfil');
  }

  updateDados = (autor, generoLiterario, livro) => {
    var fire = collection('usuarios').doc(usuarioUid());
    fire.update({
      "preferencias.autor": autor,
      "preferencias.generoLiterario": generoLiterario,
      "preferencias.livro": livro    
    })
    .then(() => 
      console.log('update feito com sucesso'))
    .catch(error => { console.log('erro no updateDados: ' + error.message + ' ' + error)})
  }

  render() {
    return (    
      <View style={compartilhado.container}>  
        <AppBarHeader 
          onPress={() => 
            this.handleUpdate()
          } 
          title={"Editar Top Três"} 
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
      </View>
    );
  }
}

export default EditarTopTres;