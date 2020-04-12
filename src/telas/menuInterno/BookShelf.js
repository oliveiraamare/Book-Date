//https://stackoverflow.com/questions/10024866/remove-object-from-array-using-javascript
import React, { useEffect, useState } from 'react';
import { ImageBackground, View, Text, TouchableHighlight } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { DotIndicator } from 'react-native-indicators';
import { useNavigation } from '@react-navigation/native';

import { FraseTop } from '../../componentes/frase';
import CardItem from '../../componentes/CardItem';

import compartilhado from '../../estilos/compartilhado';
import cor from '../../estilos/cores';
import bookshelf from '../../estilos/bookshelf';

import { collection, usuarioUid } from '../../firebase/acoes';

const frase='"Julgue pela capa e perca uma grande história."';
const autor='Autor Desconhecido';

export default function Bookshelf() {

  const [ usuarios_estante, setUsuarios_estante ] = useState(null);  

  const firestore = collection('usuarios_swiped').doc(usuarioUid()).collection('estante').doc(usuarioUid());

  const navigation = useNavigation();

  useEffect(() => {
    const estante_de_usuarios = firestore.onSnapshot(snapshot => {
      const usuariosNaEstante = Object.assign([], snapshot.data());
      setUsuarios_estante(usuariosNaEstante);
    });

    return () => {
      estante_de_usuarios();
    }  
  }, []);


  /*const swiped = (uid) => {
    firestore.get().then(snapshot => {
      const usuariosNaEstante = Object.assign([], snapshot.data());

      //retiro o usuário do array
      var novaEstante = usuariosNaEstante.filter(doc => doc.uid != uid);
      novaEstante = Object.assign({}, novaEstante);

      firestore.set(novaEstante);
    })
    .catch(function(error) {
      console.log("Erro ao deletar o usuario: ", error.message);
    });
  }*/

  if(!usuarios_estante) {
    return (
      <View style={compartilhado.container}>   
        <View style={compartilhado.statusBar}/>
        <ImageBackground
          source={require('../../imagens/fundoInterno.jpg')} 
          style={bookshelf.imagem}
        >
          <DotIndicator  
            color={cor.amarelo}
            count={5}
            size={20}
            animating={true}
            interaction={true}
          />   
        </ImageBackground>
      </View>
    )
  }

  const renderusuarios_estante = () => {
    if(!usuarios_estante.length) {
      return (
        <View style={compartilhado.container}>   
          <View style={compartilhado.statusBar}/>
          <ImageBackground
            source={require('../../imagens/fundoInterno.jpg')} 
            style={bookshelf.imagem}
          >
            <FraseTop 
             titleStyle={{fontSize:15}} 
              title={frase} subtitleStyle={{alignSelf:'center'}} 
              subtitle={autor} 
            />   
            <View style={bookshelf.containerParagrafo}>
              <Text style={bookshelf.paragrafo}>
                Aqui aparecerão os booklovers que foram colocados na sua estante. 
              </Text>
              <Text style={bookshelf.texto}>
                Que tal dar uma nova chance a eles?
              </Text>
            </View>
          </ImageBackground>
        </View>
      )
    } 

    return (
      <View style={compartilhado.container}>   
        <CardStack
          loop={true}
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={swiper => (swiper = swiper)}
        >  
          { 
            usuarios_estante.map((item, index) => (
              <Card 
                key={index}
                onSwipedLeft={() => null}
                onSwipedRight={() => null}
              >
                <TouchableHighlight onPress={() => navigation.navigate('PerfilMatch', { item })}>
                  <ImageBackground
                    source={require('../../imagens/match.jpg')}
                    style={bookshelf.background}
                  >  
                    <View> 
                      <ImageBackground
                        source={{uri:item.imagem}}
                        style={bookshelf.imagem}
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

  return ( renderusuarios_estante() );
};