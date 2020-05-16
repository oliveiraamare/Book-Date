import React, { Component } from 'react';
import { 
  ImageBackground,
  ScrollView, 
  Text, 
  View 
} from 'react-native';

import compartilhado from '../../../estilos/compartilhado';
import sobreNos from '../../../estilos/sobreNos';

import { AppBarHeader } from '../../../componentes/header';

class SobreNos extends Component {
  render(){
    return (
      <View style={compartilhado.container}>
        <ImageBackground
          source={require('../../../imagens/fundoInterno.jpg')} 
          style={compartilhado.imagemBackground}
        >
          <AppBarHeader 
            onPress={() => this.props.navigation.navigate('Conta')} 
            title={"Sobre nós"} 
          />       
          <ScrollView>
            <Text style={sobreNos.paragrafo}>
              Bem vindx ao nossx aplicativo Book Date. 
            </Text>
            <Text style={sobreNos.paragrafo}>
              Nos chamamos Amanda e Thellen. Somos duas estudantes de Engenharia da Computação no último periodo.
            </Text>
            <Text style={sobreNos.paragrafo}>
              Esse aplicativo é nosso TCC e foi feito com muito amor, carinho, alguns estresse, mas que no final nos orgulhou e orgulha bastante.
            </Text>
			      <Text style={sobreNos.paragrafo}>
              A ideia desse aplicativo surgiu numa sala de estudos da faculdade onde estavámos pensando em ideias para o nosso TCC.
            </Text>
			      <Text style={sobreNos.paragrafo}>
              Esperamos que todxs os usuários gostem do Book Date assim como nós e o usem com muito amor. 
            </Text>
			      <Text style={sobreNos.paragrafo}>
              Um agradecimento especial a nossas familias que nos apoiou durante toda nossa vida acadêmica. 
             </Text>
			      <Text style={sobreNos.paragrafo}>
              Equipe Book Date.
            </Text>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

export default SobreNos;