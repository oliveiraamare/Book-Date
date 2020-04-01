//https://github.com/stevenpersia/tinder-react-native
//https://www.npmjs.com/package/react-native-card-stack-swiper
//https://stackoverflow.com/questions/47547465/how-to-render-one-react-native-component-after-another-component-had-rendered

import React, { Component } from 'react';
import { ImageBackground, View } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { DotIndicator  } from 'react-native-indicators';

import { FraseTop } from '../../../componentes/frase';
import CardItem from '../../../componentes/CardItem';

import compartilhado from '../../../estilos/compartilhado';
import cor from '../../../estilos/cores';
import match from '../../../estilos/match';

import { database } from '../../../firebase/acoes';

class Match extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
     carregarTelaMatch: false,
     matchDados: {}
    };
  }

  componentDidMount() {   
    this.pegarDadosBanco();    
    setTimeout(() => {
      this.setState({ carregarTelaMatch: true });
    }, 7000);
  }  

  swipedLeft = () => {
    console.log('Tratar swipedLeft');
  }

  pegarDadosBanco(){
    database('match/').once('value').then(snapshot => 
    {
      var matchDados = snapshot.val();
      this.setState({matchDados});      
    })
    .catch(error => {      
      console.log('Não foi possível recuperar os dados do Banco no Match. ', error.message);
    })
  }


  render() { 
    return (
      <View style={compartilhado.container}>     
        {
          this.state.carregarTelaMatch  
          ? <CardStack
              loop={true}
              verticalSwipe={false}
              renderNoMoreCards={() => null}
              ref={swiper => (this.swiper = swiper)}
              onSwipedLeft={() => this.swipedLeft()}
              onSwipedRight={() => this.props.navigation.navigate('Mensagem')}
            >  
              { 
                this.state.matchDados.map((item, index) => (
                  <Card key={index}>
                    <ImageBackground
                      source={require('../../../imagens/leitor.png')}
                      style={match.imagem}
                    >  
                      <View style={match.semFoto}> 
                        <ImageBackground
                          source={{uri:item.imagem}}
                          style={match.imagem}
                        >    
                          <View style={match.imagemTransparente}>
                            <CardItem
                              nome={item.nome}
                              genero1={[item.preferencias.generoLiterario[0]]}
                              genero2={[item.preferencias.generoLiterario[1]]}
                              genero3={[item.preferencias.generoLiterario[2]]}
                              sinopse={[item.preferencias.sinopse]}
                              actions
                              onPressPerfil={() => this.props.navigation.navigate('PerfilMatch')}
                              onPressLeft={() => this.swiper.swipeLeft()}
                              onPressRight={() => this.props.navigation.navigate('Mensagem')} 
                            />
                          </View>
                        </ImageBackground>    
                      </View>
                    </ImageBackground>
                  </Card>     
                ))
              }
            </CardStack>           
          
            : <View style={match.imagemTransparente}>
                <View style={compartilhado.statusBar}/>
                <FraseTop 
                  topbarStyle={match.loading} titleStyle={{fontSize:15}} 
                  title={frase} subtitleStyle={{alignSelf:'center'}} 
                  subtitle={autor} 
                />   
                <View style={match.loading}>
                  <DotIndicator  
                    color={cor.amarelo}
                    count={5}
                    size={20}
                    animating={true}
                    interaction={true}
                  />   
                </View> 
              </View>              
        }
      </View>
    );
  }
}

const frase='"Julgue pela capa e perca uma grande história."';
const autor='Autor Desconhecido';

export default Match;