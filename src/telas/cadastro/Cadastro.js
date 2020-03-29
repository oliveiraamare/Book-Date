//https://www.youtube.com/watch?v=sUlKjXi-zxk
//https://stackoverflow.com/questions/53651505/pushing-text-input-data-in-json-format-through-asyncstorage-in-react-native
//https://itqna.net/questions/8717/how-save-data-asyncstorage
//https://www.npmjs.com/package/react-native-tag-select-max
//https://reactnativeexample.com/text-and-textinput-with-mask-for-react-native-applications/
//https://stackoverflow.com/questions/53090059/automatic-backslash-for-date-text-input-react-native 
//https://github.com/benhurott/react-native-masked-text-> mask
import React, { Component } from 'react';
import { 
  Alert,
  AsyncStorage,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Text,  
  View,
  Keyboard
} from 'react-native';
import { TagSelect } from 'react-native-tag-select-max';

import { AppBarHeader } from '../../componentes/header';
import { FraseTop } from '../../componentes/frase';
import TextoInput from '../../componentes/textInput/TextInput';
import Calendario from '../../componentes/DatePicker';
import { BotaoTransparente }from '../../componentes/botao';

import cadastro from '../../estilos/cadastro';
import compartilhado from '../../estilos/compartilhado';

// TODO ajeitar KeyboardAvoidingView
//BackHandler

class Cadastro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      nome: '',
      data: '',
      cidade: '',
      sexo: [
        'Leitor',
        'Leitora'
      ]
    };
  }

  handleCadastro = () => {
    Keyboard.dismiss;
    this.salvarCadastro();
    this.props.navigation.navigate('Preferencias');
  }

  salvarCadastro = () => {
    const { email, senha, senhaConfirme, nome, cidade } = this.state;
    const sexo = this.tag.itemsSelected;  
    const dtNasc = this.state.data;
    let cadastro = {
      email: email,
      senha: senha,
      senhaConfirme: senhaConfirme,
      nome: nome,
      dtNasc: dtNasc,
      cidade: cidade,
      sexo: sexo[0] 
    }
    AsyncStorage.setItem('cadastro', JSON.stringify(cadastro)).then(
      ()=>{
        alert('Itens salvos: ' + email + ' ' + senha + ' ' + nome + ' '  + ' ' + dtNasc + ' ' + cidade + ' ' + sexo);//colocar console.log depois
      }).catch( ()=>{
       alert('Itens não salvos')
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
              onPress={() => this.props.navigation.navigate('Home')} 
              title={"Cadastro"} 
            />              
            <ScrollView>
              <KeyboardAvoidingView 
                style={{justifyContent: "flex-end", flex: 1 }} 
                behavior='padding' 
                enabled 
              >
                <FraseTop 
                  subtitleStyle={cadastro.header} title={frase} subtitle={autor} 
                />  
                <Text style={cadastro.texto}>
                  Para começarmos, digite um e-mail e senha
                </Text>
                <TextoInput
                  inputStyle={cadastro.textInput}
                  placeHolder='E-mail'
                  value={this.state.email}
                  onChangeText={email => this.setState({ email })}
                />
                <TextoInput
                  inputStyle={cadastro.textInput}
                  placeHolder='Senha'
                  maxLength={15}
                  secureTextEntry={true}
                  value={this.state.senha}
                  onChangeText={senha => this.setState({ senha })}
                />     
                <TextoInput
                  inputStyle={cadastro.textInput}
                  placeHolder='Confirme a senha'
                  maxLength={15}
                  secureTextEntry={true}
                  value={this.state.senhaConfirme}
                  onChangeText={senhaConfirme => this.setState({ senhaConfirme })}
                />   
                <Text style={cadastro.texto}>
                  Fale um pouco sobre você
                </Text>
                <TextoInput
                  inputStyle={cadastro.textInput}
                  placeHolder='Como se chama?' 
                  maxLength={20}
                  value={this.state.nome}
                  onChangeText={nome => this.setState({ nome })}
                />
                <Calendario
                  date={ this.state.data}
                  onDateChange={data => this.setState({ data })}
                  placeholder="Quando você nasceu?"
                  dateInputStyle={cadastro.dateInput}
                />     
                <TextoInput
                  inputStyle={cadastro.textInput}
                  placeHolder='Qual é a sua cidade natal?'
                  maxLength={20}
                  value={this.state.cidade}
                  onChangeText={cidade => this.setState({ cidade })}
                />               
                <Text style={cadastro.texto}>
                  Como se identifica?
                </Text>
                <TagSelect
                  data={this.state.sexo}
                  max={1}
                  ref={(tag) => {
                    this.tag = tag;
                  }}
                  onMaxError={() => {
                    Alert.alert('Ops', 'Max reached' + JSON.stringify(this.tag.itemsSelected)+ ' ' + `Total: ${this.tag.totalSelected}`);
                  }}
                  itemStyle={cadastro.tagItem}
                  itemLabelStyle={cadastro.tagLabel}
                  itemStyleSelected={cadastro.tagItemSelecionado}
                  itemLabelStyleSelected={cadastro.tagLabelSelecionado}
                />
                <BotaoTransparente 
                  buttonStyle={cadastro.botao}
                  onPress={() => this.handleCadastro()}
                  text="Continuar" 
                  textStyle={cadastro.botaoTexto}
                />
              </KeyboardAvoidingView> 
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const frase='Seja bem vindo a minha vida, está meio desarrumada, mas se você quiser ficar mais um pouco arrumamos juntos (..) é você quem eu tanto esperei!';
const autor='Vilma Galvão';

export default Cadastro;