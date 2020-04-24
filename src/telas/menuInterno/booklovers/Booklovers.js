//https://github.com/stevenpersia/tinder-react-native
//https://www.npmjs.com/package/react-native-card-stack-swiper
//https://stackoverflow.com/questions/47547465/how-to-render-one-react-native-component-after-another-component-had-rendered
import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, TouchableHighlight, View } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { DotIndicator } from 'react-native-indicators';
import { useNavigation } from '@react-navigation/native';
const axios = require('axios');

import { FraseTop } from '../../../componentes/frase';
import CardItem from '../../../componentes/CardItem';

import compartilhado from '../../../estilos/compartilhado';
import cor from '../../../estilos/cores';
import booklovers from '../../../estilos/booklovers';

import { collection, usuarioUid } from '../../../firebase/acoes';
import { localizacao } from '../../../componentes/localizacao';

export default function Booklovers() {

  const [ dados_match, setDados_match ] = useState(null);  
  
  const firestore = collection('usuarios').doc(usuarioUid()).collection('usuarios_proximos').doc(usuarioUid());

  var salvar_estante =  [];
  var salvar_listagem_usuarios = [];
  const frase ='"Julgue pela capa e perca uma grande história."';
  const autor ='Autor Desconhecido';
  const thats_all = '"That\'s all folks!"';

  const navigation = useNavigation();

  useEffect(() => {
    //refresh(usuarioUid());
    const estante_de_usuarios = firestore.onSnapshot(snapshot => {
      const usuarios_proximos = Object.assign([], snapshot.data());
      setDados_match(usuarios_proximos);
    });
    //localizacao();

    return () => {
      estante_de_usuarios();
      //localizacao();
    }      
  }, []);   

  const swipedLeft = (item) => {
    swiped(item);
    salvar_estante.push(item);  
    const usuarios_na_estante = Object.assign({}, salvar_estante);
    collection('usuarios').doc(usuarioUid())
      .collection('estante').doc(usuarioUid())
      .set(usuarios_na_estante, {merge: true});
  }   

  const swipedRight = (item) => {
    swiped(item);
  }  
  
  const swiped = (item) => {
    salvar_listagem_usuarios.push(item);  
    const usuarios_manipulados = Object.assign({}, salvar_listagem_usuarios);
    collection('usuarios').doc(usuarioUid())
      .collection('usuarios_swiped').doc(usuarioUid())
      .set(usuarios_manipulados);
  }

  const refresh = (uid) => {
    axios.post('https://us-central1-bookdate-app.cloudfunctions.net/refresh_usuarios_proximos', {
      data: { uid: uid }
    })
    .then(data => { console.log(data.status) })
    .catch(error => { console.log(error.message) });
  }  


  if(!dados_match) {
    return (
      <View style={compartilhado.container}>   
        <View style={compartilhado.statusBar}/>
        <ImageBackground
          source={require('../../../imagens/fundoInterno.jpg')} 
          style={booklovers.imagem}
        >
          <DotIndicator  
            color={cor.creme}
            count={5}
            size={20}
            animating={true}
            interaction={true}
          />   
        </ImageBackground>
      </View>
    )
  }

  const render_booklovers = () => {
    if(!dados_match.length) {
      return (
        <View style={compartilhado.container}>   
          <View style={compartilhado.statusBar}/>
          <ImageBackground
            source={require('../../../imagens/fundoInterno.jpg')} 
            style={booklovers.imagem}
          >
            <FraseTop 
             titleStyle={{fontSize:15}} 
              title={frase} subtitleStyle={{alignSelf:'center'}} 
              subtitle={autor} 
            />   
            <View style={booklovers.containerParagrafo}>
              <Text style={booklovers.paragrafo}>
                Aqui aparecerão os booklovers que estão mais próximos da sua localização atual. 
              </Text>
              <Text style={booklovers.texto}>
                Que tal dar uma chance a eles?
              </Text>
            </View>
          </ImageBackground>
        </View>
      )
    } 

    const sem_cards = () => {
      return (
        <View style={compartilhado.container}>   
          <View style={compartilhado.statusBar}/>
          <ImageBackground
            source={require('../../../imagens/fundoInterno.jpg')} 
            style={booklovers.imagem}
          >
            <FraseTop 
              titleStyle={{fontSize:15}} title={thats_all}
            />   
            <View style={booklovers.containerSwipedAll}>
              <Text style={booklovers.paragrafo}>
                Enquanto estamos buscando novos booklovers
              </Text>
              <Text style={booklovers.texto}>
                Que tal dar uma passada no bookshelf?
              </Text>
            </View>
          </ImageBackground>
        </View>
      ) 
    }

    const swipedAll = () => {
      collection('usuarios').doc(usuarioUid())
        .set({ swipedAll: true }, { merge: true });
    }

    return (
      <View style={compartilhado.container}>   
        <CardStack
          loop={false}
          verticalSwipe={false}
          renderNoMoreCards={() => sem_cards()}
          ref={swiper => (swiper = swiper)}
          onSwipedAll={() => swipedAll()}      
        >  
          { 
            dados_match.map((item, index) => (
              <Card 
                key={index}
                onSwipedLeft={() => swipedLeft(item)}
                onSwipedRight={() => swipedRight(item)}
              >
                <TouchableHighlight onPress={() => navigation.navigate('PerfilBooklover', { item })}>
                  <ImageBackground
                    source={require('../../../imagens/match.jpg')}
                    style={booklovers.background}
                  >  
                    <View> 
                      <ImageBackground
                        source={{uri:item.imagem}}
                        style={booklovers.imagem}
                      >    
                        <CardItem
                          nome={item.nome}
                          genero1={[item.preferencias.generoLiterario[0]]}
                          genero2={[item.preferencias.generoLiterario[1]]}
                          genero3={[item.preferencias.generoLiterario[2]]}
                          sinopse={[item.preferencias.sinopse]}
                        />
                      </ImageBackground>    
                    </View>
                  </ImageBackground>
                </TouchableHighlight>
              </Card>     
            ))
          }
        </CardStack>           
      </View>
    )}

  return ( render_booklovers() );
}