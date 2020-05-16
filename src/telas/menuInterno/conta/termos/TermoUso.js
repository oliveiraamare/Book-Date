import React, { Component } from 'react';
import { 
  ImageBackground,
  ScrollView,
  Text,
  View 
} from 'react-native';

import compartilhado from '../../../../estilos/compartilhado';
import termos from '../../../../estilos/termos';

import { AppBarHeader } from '../../../../componentes/header';

class TermoUso extends Component {
  render(){
    return (
      <View style={compartilhado.container}>
        <ImageBackground
          source={require('../../../../imagens/fundoInterno.jpg')} 
          style={compartilhado.imagemBackground}
        >
          <AppBarHeader 
            onPress={() => this.props.navigation.navigate('Conta')} 
            title={"Termos de Uso"} 
          />
          <ScrollView style={termos.scrollView}>
            <Text style={termos.paragrafo}>
              Bem vindx ao nossx aplicativo Book Date. {"\n"}
            </Text>
            <Text style={termos.paragrafo}>
              Ao utilizar nosso aplicativo você concorda em se vincular com o nossx Termo e Politica de Privacidade. 
              Caso não concorde com os termos deste contrato, não utilize este serviço. 
              Este contrato pode ser alterado conforme a atualização do aplicativo e sua versão mais recente pode ser encontrada na Conta do aplicativo. {"\n"}
            </Text>
            <Text style={termos.paragrafo}>
              Abaixo algumas informações sobre sua conta: {"\n"}
            </Text>
            <Text style={termos.paragrafo}>
              {'\u2022'} Sua idade mínima para criar uma conta deve ser de 18 anos. 
              Com isso, prezamos com sua honestidade na hora de criar sua conta.
            </Text>
            <Text style={termos.paragrafo}>
              {'\u2022'} Caso faça a conta, você nos autoriza a acessar informações do seu perfil. {"\n"}
            </Text>
            <Text style={termos.paragrafo}>
              {'\u2022'} Sobre sua foto de perfil, aconselhamos utilizar foto apenas sua. 
              Qualquer foto de carater pornográfico e/ou que viole a regra de idade minima será excluída do app.{"\n"}
            </Text>
            <Text style={termos.paragrafo}>
              {'\u2022'} É de responsabilidade SUA manter seus dados de login e senha de forma sigilosa 
              para se conectar ao Book Date e também pelas atividades dentro do mesmo. {"\n"}
            </Text>
            <Text style={termos.paragrafo}>
              {'\u2022'} O usuário tem plena responsabilidade pela verificação da identidade das pessoas com quem ele marca encontros reais com pessoas fora do aplicativo. 
              o Book Date NÃO se responsabiliza de maneira alguma com qualquer incidente que venha ocorrer fora do mesmo.{"\n"}
            </Text>
            <Text style={termos.paragrafo}>
              {'\u2022'} Nós da equipe temos o total direito de excluir sua conta caso você viole alguma de nossas regras de uso. {"\n"}
            </Text> 
            <Text style={termos.paragrafo}>
              Caso você, membro do aplicativo Book Date, veja a violação de alguma dessas regras favor entrar em contato pelo e-mail bookdate.app@gmail.com	{"\n"}
            </Text>
            <Text style={termos.paragrafo}>
              Agradecemos a compreensão de todos. Divirta-se.{"\n"}
            </Text>
            <Text style={termos.paragrafo}>
            Equipe Book Date.
            </Text>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

export default TermoUso;