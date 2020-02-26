import React , {Component} from 'react';
import { Text, View } from 'react-native';

import compartilhado from '../../estilos/compartilhado';
import cor from '../../estilos/cores';
import regras from '../../estilos/regras';

import { AppBarHeader } from '../../componentes/tabBar/AppBarHeader';
import Header from '../../componentes/header/header';
import BotaoTouchableOpacity from '../../componentes/botoes/botaoTouchableOpacity';

class TermoUso extends Component {
  render(){
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        <AppBarHeader 
          headerStyle={{
            backgroundColor:cor.preto, 
            borderBottomColor:cor.branco,
            borderBottomWidth:0.18
          }} 
          onPress={() => this.props.navigation.navigate('PermissaoGeo')} 
          title={"Regras"} 
          style={{color:cor.branco, fontSize:18}} 
        />    
        <Header titleStyle={regras.titleStyle} subtitleStyle={regras.subtitleStyle} title={frase} subtitle={autor} />           
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
          onPress={() => this.props.navigation.navigate('NavegacaoInterna')}
          text="Concordar e Continuar" 
        />
      </View>
    );
  }
}
 
const frase='Regras da Comunidade';
const autor='baseadas em 50 Tons de Cinza';

export default TermoUso;