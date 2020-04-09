//https://github.com/stevenpersia/tinder-react-native
//https://www.npmjs.com/package/react-native-card-stack-swiper
//https://stackoverflow.com/questions/47547465/how-to-render-one-react-native-component-after-another-component-had-rendered

const arrayEstante =  [];

import React, { Component } from 'react';
import { ImageBackground, View } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { DotIndicator  } from 'react-native-indicators';

import { FraseTop } from '../../../componentes/frase';
import CardItem from '../../../componentes/CardItem';

import compartilhado from '../../../estilos/compartilhado';
import cor from '../../../estilos/cores';
import match from '../../../estilos/match';

import { database, collection, usuarioUid } from '../../../firebase/acoes';
import { usuarioLogado } from '../../../acoes/usuarioLogado';


class Match extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
     carregarTelaMatch: false,
     matchDados: {}
    };
  }

  componentDidMount() {       
    setTimeout(() => {
      this.pegarDadosBanco(); 
    }, 3000);
    
    setTimeout(() => {
      this.setState({ carregarTelaMatch: true });
    }, 10000);
  }  
  
//messages.map((item, index) =>{console.log('pessoasNaEstante: ', item.pessoasNaEstante[index].nome)})
  swiped = (item) => {
    arrayEstante.push(item);  
    console.log('arraaaaaaaaay: ', arrayEstante)
    var pessoasNaEstante = Object.assign({}, arrayEstante)
    collection('estante').doc(usuarioUid()).set(
      pessoasNaEstante)
  }

  

  pegarDadosBanco(){
    database('match/').once('value').then(snapshot => 
    {
      var matchDados = snapshot.val();
      //console.log('matchDados na tela Maataach: ', matchDados)
      this.setState({matchDados});   
      //console.log('match dados: ', matchDados)
      console.log('recuperei os dados do banco na tela de match');   
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
            >  
              { 
                this.state.matchDados.map((item, index) => (
                  <Card 
                    key={index} 
                    onSwipedLeft={() => this.swiped(item)}
                    onSwipedRight={() => this.swiped(item)}
                  >
                    <ImageBackground
                      source={require('../../../imagens/match.jpg')}
                      style={match.background}
                    >  
                      <View> 
                        <ImageBackground
                          source={{uri:item.imagem}}
                          style={match.imagem}
                        >    
                          <CardItem
                            nome={item.nome}
                            genero1={[item.preferencias.generoLiterario[0]]}
                            genero2={[item.preferencias.generoLiterario[1]]}
                            genero3={[item.preferencias.generoLiterario[2]]}
                            sinopse={[item.preferencias.sinopse]}
                            actions
                            onPressPerfil={() => 
                              this.props.navigation.navigate('PerfilMatch', { item })
                            }
                            onPressRight={() => this.swiper.swipeLeft()} 
                          />
                        </ImageBackground>    
                      </View>
                    </ImageBackground>
                  </Card>     
                ))
              }
            </CardStack>           
          
            : <ImageBackground
                source={require('../../../imagens/fundoInterno.jpg')} 
                style={match.imagem}
              >
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
              </ImageBackground>              
        }
      </View>
    );
  }
}

const frase='"Julgue pela capa e perca uma grande história."';
const autor='Autor Desconhecido';

export default Match;