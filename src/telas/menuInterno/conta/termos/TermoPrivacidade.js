import React, { Component } from 'react';
import { 
  ImageBackground,
  Dimensions,
  ScrollView,
  Text,
  View 
} from 'react-native';

import compartilhado from '../../../../estilos/compartilhado';
import termos from '../../../../estilos/termos';

import { AppBarHeader } from '../../../../componentes/header';

class TermoUso extends Component {

  constructor(props) {
    super(props);
    this.state = {
      accepted: false
    };
  }

  render(){
    return (
      <View style={compartilhado.container}>
        <ImageBackground
          source={require('../../../../imagens/fundoInterno.jpg')} 
          style={compartilhado.imagemBackground}
        >
          <AppBarHeader 
            onPress={() => this.props.navigation.navigate('Conta')} 
            title={"Termos de Privacidade"} 
          />            
          <ScrollView style={termos.scrollView}>
          <Text style={termos.paragrafo}>
              Política de privacidade para Book Date.
              </Text>
              <Text style={termos.paragrafo}>
				
               </Text>
              <Text style={termos.paragrafo}>
                Todas as suas informações pessoais recolhidas, serão usadas para o ajudar a tornar a sua visita no nosso site o mais produtiva e agradável possível.  
              </Text>
			         <Text style={termos.paragrafo}>
               A garantia da confidencialidade dos dados pessoais dos utilizadores do nosso site é importante para o Book Date.

              </Text>
              <Text style={termos.paragrafo}>
                Abaixo algumas informações sobre seus direitos como usuários e os dados que serão coletados.
              </Text>
              <Text style={termos.paragrafo}>
				
              </Text>
              <Text style={termos.paragrafo}>
                {'\u2022'} Seus dados serão coletados de forma transparente e leal apenas para finalidades determinadas e legitimas às necessidades do objetivo para quais eles será utilizados.
              </Text>
              <Text style={termos.paragrafo}>
				
               </Text>
              <Text style={termos.paragrafo}>
                {'\u2022'} Caso faça a conta, você nos autoriza a acessar informações do seu perfil.
              </Text>
              <Text style={termos.paragrafo}>
				
              </Text>
              <Text style={termos.paragrafo}>
                {'\u2022'} Para seu funcionamento, o Book Date precisará ter acesso a algumas funcionalidades do seu celular. Sem as permissões abaixo o aplicativo pode não funcionar de forma correta.
              </Text>
              <Text style={termos.paragrafo}>
				
              </Text>
              <Text style={termos.paragrafo}>
						{'\u2022'} Câmera: com essa permissão o usuário poderá tirar foto para por em seu perfil.
              </Text>
              <Text style={termos.paragrafo}>
				
            </Text>
			      <Text style={termos.paragrafo}>
						{'\u2022'} Album: caso não queira tirar foto, com essa permissão o usuário poderá escolher uma foto de seu album para o perfil.
              </Text>
              <Text style={termos.paragrafo}>
				
              </Text>
              <Text style={termos.paragrafo}>
						{'\u2022'} GPS: tendo em vista que a função principal do Book Date é buscar pessoas atraves de sua localização, essa permissão nos dá o direito de saber sua localização atual para realizar um busca de pessoas próximas ao mesmo.
              </Text>
              <Text style={termos.paragrafo}>
				
              </Text>
              <Text style={termos.paragrafo}>
				        O Book Date informa que nunca iremos solicitar sua senha pessoal e que, caso queira exluir sua conta, estaremos excluindo todos os seus dados de nosso sistema.
              </Text>
              <Text style={termos.paragrafo}>
                Agradecemos pelo uso do nosso app e que qualquer dúvida, reclamação ou sugestões entre em contato com e-mail bookdate.app@gmail.com
              </Text>
			        <Text style={termos.paragrafo}>
				
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

const { width , height } = Dimensions.get('window');

export default TermoUso;