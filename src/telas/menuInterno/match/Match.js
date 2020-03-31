//https://github.com/stevenpersia/tinder-react-native
//https://www.npmjs.com/package/react-native-card-stack-swiper

import React, { Component } from 'react';
import { AsyncStorage, ImageBackground, View } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { DotIndicator  } from 'react-native-indicators';

import { FraseTop } from '../../../componentes/frase';
import CardItem from '../../../componentes/CardItem';

import compartilhado from '../../../estilos/compartilhado';
import cor from '../../../estilos/cores';
import match from '../../../estilos/match';

import { usuarioUid } from '../../../firebase/acoes'

import { matchPerfil } from './PerfilMatch';

class Match extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
     dados: {},
     carregarTelaMatch: false
    };
  }

  componentDidMount() {  
    this.match();
    setTimeout(() => {
      this.setState({ carregarTelaMatch: true });
    }, 10000);   
  }  
  
  match = async () => {
    var async = await AsyncStorage.getItem('matchProximos');
    var dados = JSON.parse(async);
    this.setState({dados});
  }

  swipedLeft = () => {
    console.log('tratar isso')
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
                this.state.dados.map((item, index) => (
                  <Card key={index}>
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
                        onPressPerfil={() => this.props.navigation.navigate('PerfilMatch', {item : 'oi'})}
                        onPressLeft={() => this.swiper.swipeLeft()}
                        onPressRight={() => this.props.navigation.navigate('Mensagem')} 
                      />
                      </View>
                    </ImageBackground>    
                  </Card>
                ))
              }
            </CardStack>           
          
            : <View style={match.imagemTransparente}>
                <View style={compartilhado.statusBar}/>
                <View style={{top:390}}>
                  <DotIndicator  
                    color={cor.amarelo}
                    count={5}
                    size={20}
                    animating={true}
                    interaction={true}
                  />   
                </View>
                <FraseTop 
                  topbarStyle={{top:280}} titleStyle={{fontSize:15}} 
                  title={frase} subtitleStyle={{alignSelf:'center'}} 
                  subtitle={autor} 
                />    
              </View>              
        }
      </View>
    );
  }
}

const frase='"Julgue pela capa e perca uma grande história."';
const autor='Autor Desconhecido';

export default Match;