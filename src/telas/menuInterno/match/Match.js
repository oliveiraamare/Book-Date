//https://github.com/stevenpersia/tinder-react-native
//https://www.npmjs.com/package/react-native-card-stack-swiper

import React, { Component } from 'react';
import { AsyncStorage, ImageBackground, View } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';

import CardItem from '../../../componentes/CardItem';
import Demo from './demo.js';

import { usuariosMatch } from '../../../acoes/usuariosMatch';

import compartilhado from '../../../estilos/compartilhado';
import { BarIndicator } from 'react-native-indicators';

import cor from '../../../estilos/cores';


import{match} from './teste'


 //const x = require('./teste')
 
 //const x = require('./teste')
var y;
class Match extends Component {
  constructor(props) {
    super(props);
    this.state = {
     dados: {},
     isBVisible:false
    };
  }
  componentDidMount() {  
    this.match();
    setTimeout(() => {
      this.setState({isBVisible:true});
    }, 7000);
   
  }  
  
  match = async () => {
    var async = await AsyncStorage.getItem('matchProximos');
    var dados = JSON.parse(async);
    console.log(dados)
    this.setState({dados});
    //console.log(x)
  }

  render() {
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
    {this.state.isBVisible ?     
        <ImageBackground
          source={require('../../../imagens/fundo.jpeg')} 
          style={compartilhado.imagemBackground}
        >
     
          <CardStack
            loop={true}
            verticalSwipe={false}
            renderNoMoreCards={() => null}
            ref={swiper => (this.swiper = swiper)}
          >
         
            { 
              this.state.dados.map((item, index) => (
              <Card key={index}>
                <CardItem
                  name={item.name}
                  idade={item.idade}
                  //image={item.image}
                  genero1={item.genero1}
                  genero2={item.genero2}
                  genero3={item.genero3}
                  description={item.description}
                  actions
                  onPressPerfil={() => this.props.navigation.navigate('PerfilMatch')}
                  onPressLeft={() => this.swiper.swipeLeft()}
                  onPressRight={() => this.swiper.swipeRight()}
                  onPressMensagem={() => this.props.navigation.navigate('Mensagem')}
                />
              </Card>
            ))}
          </CardStack>           
        </ImageBackground>    
        
        : <BarIndicator 
            color={cor.amarelo}
            count={5}
            size={70}
            animating={true}
            interaction={true}
          />   
        
        
        }
      </View>
    );
  }
}

export default Match;