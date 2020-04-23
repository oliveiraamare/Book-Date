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
            <Text style={styles.titulo}>
            Políticas de Privacidade
            </Text>            
            <ScrollView 
            style={styles.scrollView}
            onScroll={({nativeEvent}) => {
              if (scrollPertoDoBotao(nativeEvent)) {
                this.setState({
                  accepted: true
                })}
            }}
            >
              <Text style={styles.paragrafo}>
                Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern [business name]’s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.
              </Text>
              <Text style={styles.paragrafo}>
                The term ‘[business name]’ or ‘us’ or ‘we’ refers to the owner of the website whose registered office is [address]. Our company registration number is [company registration number and place of registration]. The term ‘you’ refers to the user or viewer of our website.
              </Text>
              <Text style={styles.paragrafo}>
                {'\u2022'} The content of the pages of this website is for your general information and use only. It is subject to change without notice.
              </Text>
              <Text style={styles.paragrafo}>
                {'\u2022'} This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties: [insert list of information].
              </Text>
              <Text style={styles.paragrafo}>
                {'\u2022'} Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
              </Text>
              <Text style={styles.paragrafo}>
                {'\u2022'} Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
              </Text>
              <Text style={styles.paragrafo}>
                {'\u2022'} Your use of this website and any dispute arising out of such use of the website is subject to the laws of England, Northern Ireland, Scotland and Wales.
              </Text>
              <Text style={styles.paragrafo}>
                The use of this website is subject to the following terms of use
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