//https://github.com/stevenpersia/tinder-react-native
//https://www.npmjs.com/package/react-native-card-stack-swiper

import React, { Component } from 'react';
import { AsyncStorage,Dimensions, ImageBackground, Text, View } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';


import { FraseTop } from '../../../componentes/frase';

import CardItem from '../../../componentes/CardItem';
import Demo from './demo.js';

import { usuariosMatch } from '../../../acoes/usuariosMatch';

import compartilhado from '../../../estilos/compartilhado';

import { BarIndicator } from 'react-native-indicators';
import cor from '../../../estilos/cores';

import { usuarioUid } from '../../../firebase/acoes'


const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;


class Match extends Component {
  constructor(props) {
    super(props);
    this.state = {
     dados: {},
     isBVisible:false
    };
  }
  componentDidMount() {  
    console.log(usuarioUid())
   // this.match();
    setTimeout(() => {
      this.setState({isBVisible:true});
    }, 7000);
   
  }  
  
  match = async () => {
    var async = await AsyncStorage.getItem('matchProximos');
    var dados = JSON.parse(async);
  //  console.log(dados)
    this.setState({dados});
    dados.map((currElement, index) => {
      console.log("The current iteration is: " + index);
      console.log("The current element is: " + currElement);
      console.log("The current element is: " + currElement.nome);
      console.log("The current element is: " + currElement.imagem);
      console.log("The current element is: " + currElement.preferencias.generoLiterario[0]);
      console.log("The current element is: " + currElement.preferencias.generoLiterario[1]);
      console.log("The current element is: " + currElement.preferencias.generoLiterario[2]);
      console.log("The current element is: " + currElement.preferencias.sinopse);
      console.log("\n");
    });

  }

  render() {
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        {/*
          this.state.isBVisible ?     
            
            <CardStack
              loop={true}
              verticalSwipe={false}
              renderNoMoreCards={() => null}
              ref={swiper => (this.swiper = swiper)}
            >
          
              { 
                this.state.dados.map((item, index) => (
                <Card key={index}>
                  <ImageBackground
                   // source={{uri:item.imagem}}
                    style={{flex: 1,
    height: DIMENSION_HEIGHT,
		resizeMode: 'contain',
		width: DIMENSION_WIDTH}}
                  >    
                    <CardItem
                   //   name={item.nome}
                      //idade={item.idade}
                      //image={item.image}
                     // genero1={[item.preferencias.generoLiterario[0]]}
                     // genero2={[item.preferencias.generoLiterario[1]]}
                     // genero3={[item.preferencias.generoLiterario[2]]}
                     // description={[item.preferencias.sinopse]}
                      actions
                      onPressPerfil={() => this.props.navigation.navigate('PerfilMatch')}
                      onPressLeft={() => this.swiper.swipeLeft()}
                      onPressRight={() => this.swiper.swipeRight()}
                      onPressMensagem={() => this.props.navigation.navigate('Mensagem')}
                    />
                 </ImageBackground>    

                </Card>
              ))}
            </CardStack>           
          
          : 
          <View style={{top: 20}}>
          <FraseTop title={frase} subtitle={autor} />    
            <Text style={{color: cor.amareloA,
      fontSize: 20,
      marginBottom: 40,
      paddingBottom: 5,
      paddingHorizontal: 5,
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 5,
      textAlign: 'justify'}}>Julgue pela capa e perca uma granse história - desconhecido</Text>
            <BarIndicator 
              color={cor.amarelo}
              count={5}
              size={70}
              animating={true}
              interaction={true}
              />   
          </View>
          
          
         */ }
      </View>
    );
  }
}

const frase='"Julgue pela capa e perca uma grande história."';
const autor='Autor Desconhecido';

export default Match;