////https://stackoverflow.com/questions/53651505/pushing-text-input-data-in-json-format-through-asyncstorage-in-react-native
//https://itqna.net/questions/8717/how-save-data-asyncstorage
//https://www.npmjs.com/package/react-native-tag-select-max
//https://stackoverflow.com/questions/44628346/passing-checkbox-value-to-show-hide-password-via-react-native
//https://www.w3resource.com/javascript/form/email-validation.php
import React, { Component } from 'react';
import { 
  Alert,
  AsyncStorage,
  BackHandler,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,  
  TouchableOpacity,
  View
} from 'react-native';
import { TagSelect } from 'react-native-tag-select-max';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import { AppBarHeader } from '../../componentes/header';
import { FraseTop } from '../../componentes/frase';
import TextoInput from '../../componentes/textInput/TextInput';
import Calendario from '../../componentes/DatePicker';
import { BotaoTransparente }from '../../componentes/botao';

import cadastro from '../../estilos/cadastro';
import compartilhado from '../../estilos/compartilhado';
import cor from '../../estilos/cores';

class Cadastro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      esconderSenha: true,
      email: '',
      senha: '',
      nome: '',
      data: '',
      cidade: '',
      sexo: [
        'Leitor',
        'Leitora'
      ],
      sx: []
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
    this.props.navigation.navigate('Home');    
    return true;
  }

  validacao() {
    if(this.email() && this.senha() && this.nome() && this.dataNasc() && this.cidade()){
      if((this.sexo.itemsSelected[0] == undefined)){
        Alert.alert('Ops', 'Que tal nos dizer como se identifica?');
      } else {
        this.handleCadastro()
      }
    } else { return }
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
              <KeyboardAvoidingView behavior='padding'>
                <FraseTop title={frase} subtitle={autor} />  
                <Text style={cadastro.texto}>
                  *Para começarmos, digite um e-mail e senha
                </Text>
                <TextoInput      
                  inputStyle={cadastro.textInput}
                  placeHolder='E-mail'
                  value={this.state.email}
                  onChangeText={email => this.setState({ email })}
                />
                <View>
                  <TextoInput
                    inputStyle={cadastro.textInput}
                    placeHolder='Senha'
                    maxLength={15}
                    secureTextEntry={this.state.esconderSenha}
                    value={this.state.senha}
                    onChangeText={senha => this.setState({ senha })}
                  />     
                  <TouchableOpacity 
                    activeOpacity={0.8} style={cadastro.senha} 
                    onPress={this.visibilidadeSenha}
                  >
                    { 
                      this.state.esconderSenha 
                      ?
                        <MaterialCommunityIcons name='eye-off' color={cor.branco} size={27} />
                      :
                        <MaterialCommunityIcons name='eye' color={cor.amarelo} size={27} />
                    } 
                  </TouchableOpacity>
                </View>               
                <Text style={cadastro.texto}>
                  *Fale um pouco sobre você
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
                  placeholder='Quando você nasceu?'
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
                  *Como se identifica?
                </Text>
                <View style={{alignItems:'center'}}>
                  <TagSelect
                    value={this.state.sx}
                    data={this.state.sexo}
                    max={1}
                    ref={(sexo) => {
                      this.sexo = sexo;
                    }}
                    onMaxError={() => {
                      Alert.alert('Ops', 'Escolha somente uma opção');
                    }}
                    itemStyle={cadastro.tagItem}
                    itemLabelStyle={cadastro.tagLabel}
                    itemStyleSelected={cadastro.tagItemSelecionado}
                    itemLabelStyleSelected={cadastro.tagLabelSelecionado}
                  />
                </View> 
                <BotaoTransparente 
                  buttonStyle={cadastro.botao}
                  onPress={() => this.validacao()}
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

  recuperaDados = async() => {
    await AsyncStorage.getItem('cadastro').then((cadastro) => {
      if (cadastro != null)
      {
        var cadastro = JSON.parse(cadastro);
        var email = cadastro.email; this.setState({ email });
        var nome = cadastro.nome; this.setState({ nome });
        var data = cadastro.dtNasc; this.setState({ data });
        var cidade = cadastro.cidade; this.setState({ cidade });
        
        var sexo = cadastro.sexo;  
        if(sexo != undefined){
          sx = [sexo];     
          this.setState({ sx });
        }
        
      } else { return }
    }).done();
  }

  visibilidadeSenha = () => {
    this.setState({ esconderSenha: !this.state.esconderSenha });
  }

  handleCadastro = () => {
    Keyboard.dismiss;
    this.salvarCadastro();
    this.props.navigation.navigate('Preferencias');
  }

  salvarCadastro = async() => {
    const { email, senha, nome, cidade } = this.state;
    const sexo = this.sexo.itemsSelected;  
    const dtNasc = this.state.data;
    const cadastro = {
      email: email,
      senha: senha,
      nome: nome,
      dtNasc: dtNasc,
      cidade: cidade,
      sexo: sexo[0] 
    }
    await AsyncStorage.setItem('cadastro', JSON.stringify(cadastro)).then(
      ()=>{
        //console.log('Itens salvos: ' + email + ' ' + senha + ' ' + nome + ' ' + dtNasc + ' ' + cidade + ' ' + sexo);
        console.log('Os itens do cadastro foram salvos no async.')
      }).catch(error => {
        console.log('Os itens do cadastro não foram salvos: ', error.message)
      }
    );
  }

  email() {
    const email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email_pattern.test(this.state.email)) {
      Alert.alert('Ops', 'Digite um e-mail válido!');
      return false
    }  else {
      return true
    }
  }

  senha() {
    const senha_pattern = /^\S{8,15}/;
    if (!senha_pattern.test(this.state.senha)) {
      Alert.alert('Ops', 'Digite uma senha com oito ou mais caracteres!');
      return false
    } else {
      return true
    }
  }

  nome() {
    const nome_pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!nome_pattern.test(this.state.nome)) {
      Alert.alert('Ops', 'Faltou inserir seu nome!');
      return false
    } else {
      return true
    }
  }

  dataNasc() {
    if(this.state.data.trim() == '') {
      Alert.alert('Ops', 'Faltou inserir sua data de nascimento!');
      return false
    } else {
      return true
    }
  }

  cidade() {
    if(this.state.cidade.trim() == '') {
      Alert.alert('Ops', 'Nos diga a sua cidade natal!');
      return false
    } else {
      return true
    }
  }
}

const frase='"Seja bem vindo a minha vida, está meio desarrumada, mas se você quiser ficar mais um pouco arrumamos juntos (..) é você quem eu tanto esperei!"';
const autor='Vilma Galvão';

export default Cadastro;