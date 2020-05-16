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
class TermoUso extends Component {

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
            <Text style={styles.titulo}>Termos de Uso</Text>            
            <ScrollView 
              style={styles.scrollView}
              onScroll={({nativeEvent}) => {
                if (scrollPertoDoBotao(nativeEvent)) {
                  this.setState({ accepted: true })}
              }}
            >
              <Text style={styles.paragrafo}>
                {"\n"}Bem vindx ao nossx aplicativo Book Date. {"\n"}
              </Text>
              <Text style={styles.paragrafo}>
                Ao utilizar nosso aplicativo você concorda em se vincular com o nossx Termo e Politica de Privacidade. 
                Caso não concorde com os termos deste contrato, não utilize este serviço. 
                Este contrato pode ser alterado conforme a atualização do aplicativo e sua versão mais recente pode ser encontrada na Conta do aplicativo. {"\n"}
              </Text>
              <Text style={styles.paragrafo}>
                Abaixo algumas informações sobre sua conta: {"\n"}
              </Text>
              <Text style={styles.paragrafo}>
                {'\u2022'} Sua idade mínima para criar uma conta deve ser de 18 anos. 
                Com isso, prezamos com sua honestidade na hora de criar sua conta.
              </Text>
              <Text style={styles.paragrafo}>
                {'\u2022'} Caso faça a conta, você nos autoriza a acessar informações do seu perfil. {"\n"}
              </Text>
              <Text style={styles.paragrafo}>
                {'\u2022'} Sobre sua foto de perfil, aconselhamos utilizar foto apenas sua. 
                Qualquer foto de carater pornográfico e/ou que viole a regra de idade minima será excluída do app.{"\n"}
              </Text>
              <Text style={styles.paragrafo}>
                {'\u2022'} É de responsabilidade SUA manter seus dados de login e senha de forma sigilosa 
                para se conectar ao Book Date e também pelas atividades dentro do mesmo. {"\n"}
              </Text>
              <Text style={styles.paragrafo}>
                {'\u2022'} O usuário tem plena responsabilidade pela verificação da identidade das pessoas com quem ele marca encontros reais com pessoas fora do aplicativo. 
                o Book Date NÃO se responsabiliza de maneira alguma com qualquer incidente que venha ocorrer fora do mesmo.{"\n"}
              </Text>
              <Text style={styles.paragrafo}>
                {'\u2022'} Nós da equipe temos o total direito de excluir sua conta caso você viole alguma de nossas regras de uso. {"\n"}
              </Text> 
              <Text style={styles.paragrafo}>
                Caso você, membro do aplicativo Book Date, veja a violação de alguma dessas regras favor entrar em contato pelo e-mail bookdate.app@gmail.com	{"\n"}
              </Text>
              <Text style={styles.paragrafo}>
                Agradecemos a compreensão de todos. Divirta-se.{"\n"}
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

export default TermoUso;