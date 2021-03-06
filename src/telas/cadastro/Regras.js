import React , { Component } from 'react';
import { 
  BackHandler,
  ImageBackground, 
  Text, 
  View 
} from 'react-native';

import { AppBarHeader } from '../../componentes/header';
import { FraseTop } from '../../componentes/frase';
import { BotaoTouchableOpacity  }from '../../componentes/botao';

import compartilhado from '../../estilos/compartilhado';
import regras from '../../estilos/regras';

import { recupera_cadastro } from '../../acoes/recuperar_cadastro';

class Regras extends Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBack);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBack);
  }

  onBack = () => {
    this.props.navigation.navigate('Geolocalizacao');    
    return true;
  }

  handleCadastroBanco = () => {
    recupera_cadastro(); 
  }
        
  render(){
    return (
      <View style={compartilhado.container}>
        <ImageBackground
          source={require('../../imagens/fundo.jpg')} 
          style={compartilhado.imagemBackground}
        >
          <View style={compartilhado.imagemTransparente}>
            <AppBarHeader 
              onPress={() => this.props.navigation.navigate('Geolocalizacao')} 
              title={"Regras"} 
            />
            <FraseTop 
              titleStyle={{fontSize: 25}} subtitleStyle={regras.subtitleStyle}
              title={frase} subtitle={autor} 
            />           
            <View style={regras.texto}>
              <Text style={regras.paragrafo}> 
                Eu quero muito fazer isso dar certo. 
              </Text>
              <Text style={regras.subparagrafo}> 
                Na verdade, nunca quis tanto uma coisa quanto eu quero isso.
              </Text>
              <Text style={regras.paragrafo}>
                Ainda tem muita vida pela frente, viva-a. 
              </Text>
              <Text style={regras.subparagrafo}> 
                Você merece o melhor.
              </Text>
              <Text style={regras.paragrafo}>
                É assim que funciona, se lembra?
              </Text>
              <Text style={regras.subparagrafo}> 
                Conversar, ouvir, resolver os problemas.
              </Text>
              <Text style={regras.paragrafo}>
                É difícil, é complicado, mas vai passar...
              </Text>
              <Text style={regras.subparagrafo}> 
                Se não passar a gente se refaz.
              </Text>
              <Text style={regras.paragrafo}>
                Os seus gostos podem ser bem peculiares.
              </Text>
              <Text style={regras.subparagrafo}> 
                A gente entende completamente.
              </Text>
              <Text style={regras.paragrafo}>
                Ao fazer parte do nosso mundo literário, você estará concordando em seguir com os nossos termos e políticas de privacidade.
              </Text>
              <Text style={regras.subparagrafo}> 
                Estamos felizes por ver você aqui. Nosso objetivo é satisfazer.     
              </Text>
            </View>
            <BotaoTouchableOpacity 
              buttonStyle={regras.botao}
              onPress={() => this.handleCadastroBanco()}
              text="Concordar e Continuar" 
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
 
const frase='Regras da Comunidade';
const autor='baseadas em 50 Tons de Cinza';

export default Regras;