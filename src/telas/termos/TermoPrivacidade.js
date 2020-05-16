import React , {Component} from 'react';
import { 
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View 
} from 'react-native';

import compartilhado from '../../estilos/compartilhado';
import cor from '../../estilos/cores';
class TermoPrivacidade extends Component {

  state = {
    accepted: false
  }

  render(){
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        <ImageBackground
          source={require('../../imagens/fundo.jpg')} 
          style={compartilhado.imagemBackground}
        >
          <View style={compartilhado.imagemTransparente}>
            <Text style={styles.titulo}>Políticas de Privacidade</Text>            
            <ScrollView 
              style={styles.scrollView}
              onScroll={({nativeEvent}) => {
                if (scrollPertoDoBotao(nativeEvent)) {
                  this.setState({ accepted: true })}
              }}
            >
              <Text style={styles.paragrafo}>
                {"\n"}Todas as suas informações pessoais recolhidas, serão usadas para o ajudar a tornar 
                a sua visita no nosso site o mais produtiva e agradável possível.  {"\n"}
              </Text>
              <Text style={styles.paragrafo}>
                A garantia da confidencialidade dos dados pessoais dos utilizadores do nosso site é importante para o Book Date.{"\n"}
              </Text>
              <Text style={styles.paragrafo}>
                Abaixo algumas informações sobre seus direitos como usuários e os dados que serão coletados.{"\n"}
              </Text>
              <Text style={styles.paragrafo}>
                {'\u2022'} Seus dados serão coletados de forma transparente e leal apenas para finalidades determinadas 
                e legitimas às necessidades do objetivo para quais eles será utilizados.{"\n"}
              </Text>
              <Text style={styles.paragrafo}>
                {'\u2022'} Caso faça a conta, você nos autoriza a acessar informações do seu perfil.{"\n"}
              </Text>
              <Text style={styles.paragrafo}>
                {'\u2022'} Para seu funcionamento, o Book Date precisará ter acesso a algumas funcionalidades do seu celular. 
                Sem as permissões abaixo o aplicativo pode não funcionar de forma correta.{"\n"}
              </Text>
              <Text style={styles.paragrafo}>
                {'\u2022'} Câmera: com essa permissão o usuário poderá tirar foto para por em seu perfil.{"\n"}
              </Text>
              <Text style={styles.paragrafo}>
                {'\u2022'} Album: caso não queira tirar foto, com essa permissão o usuário poderá escolher uma foto de seu album para o perfil.{"\n"}
              </Text>
              <Text style={styles.paragrafo}>
                {'\u2022'} GPS: tendo em vista que a função principal do Book Date é buscar pessoas atraves de sua localização, 
                essa permissão nos dá o direito de saber sua localização atual para realizar um busca de pessoas próximas ao mesmo.{"\n"}
              </Text>
              <Text style={styles.paragrafo}>
                O Book Date informa que nunca iremos solicitar sua senha pessoal e que, caso queira exluir sua conta, estaremos excluindo todos os seus dados de nosso sistema.{"\n"}
              </Text>
              <Text style={styles.paragrafo}>
                Agradecemos pelo uso do nosso app e que qualquer dúvida, reclamação ou sugestões entre em contato com e-mail bookdate.app@gmail.com{"\n"}
              </Text>
              <Text style={styles.paragrafo}>
                Equipe Book Date.
              </Text>
            </ScrollView>
            <TouchableOpacity 
              disabled={ !this.state.accepted } 
              style={ this.state.accepted ? styles.botao : styles.botaoDesabilitado }
              onPress={() => this.props.navigation.navigate('Home')}
            >
              <Text style={styles.textoBotao}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const scrollPertoDoBotao = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom
  );
};

const { width , height } = Dimensions.get('window');

const styles = {
  botao:{
    alignItems: 'center',
    backgroundColor: cor.amarelo,
    borderColor: cor.amarelo,
    borderWidth: 1, 
    bottom: 0, 
    marginBottom: 5,
    marginTop: 5,
    padding: 10
  },
  botaoDesabilitado:{
    alignItems: 'center',
    backgroundColor: cor.cinzaEscuro,
    borderColor: cor.cinzaEscuro,
    borderWidth: 1, 
    bottom: 0, 
    marginBottom: 5,
    marginTop: 5,
    padding: 10
  },
  paragrafo:{      
    color: cor.pagina,
    fontFamily: compartilhado.fontePadrao.fontFamily,  
    fontSize: 14,
    marginTop: 5,  
    marginLeft: 15,
    marginRight: 15,
    textAlign:'justify'     
  },
  scrollView: {
    flex: 1, 
    height: height * .7,
    marginBottom: 15,
    marginTop: 15
  },
  textoBotao:{
    alignItems: 'center',
    alignSelf: 'center',
    color: cor.pagina,
    fontFamily: compartilhado.fonteBotao.fontFamily,
    fontSize: compartilhado.fonteBotao.fontSize,
    justifyContent: 'center'
  },
  titulo: {
    alignSelf: 'center',      
    color: cor.amarelo,
    fontFamily: compartilhado.fontePadrao.fontFamily,  
    fontSize: 30,
    marginTop: 20
  }
}

export default TermoPrivacidade;