import React, { useEffect, useState } from 'react';
import { ImageBackground, View, KeyboardAvoidingView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import  * as firebase from 'firebase';
import '@firebase/firestore';

import { AppBarHeader } from '../../../componentes/header';

import compartilhado from '../../../estilos/compartilhado';
import cor from '../../../estilos/cores';
import mensagem from '../../../estilos/mensagem';

import { collection } from '../../../firebase/acoes';

export default function Mensagem() {
  
  const [ messages, setMessages ] = useState(null);

  const navigation = useNavigation();
  const route = useRoute()

  const item = route.params.item;
  const salvar_mensagem = collection('mensagem').doc(item.id_mensagem).collection('chats');

  useEffect(() => {
    const mensagens = collection('mensagem').doc(item.id_mensagem).collection('chats').orderBy('createdAt', 'desc').onSnapshot(snapshot => {
      var mensagem = [];
      snapshot.forEach(element => {
        mensagem.push(element.data())
      });
      setMessages(mensagem);
    })

    return () => {
      mensagens();
    }  
  }, []);  

  const renderBubble = props  => {
    return (
      <Bubble
       {...props}
        textStyle={{
          left: {
            color: cor.pagina,
            fontFamily: compartilhado.fontePadrao.fontFamily
          },
          right: {
            color: cor.pagina,
            fontFamily: compartilhado.fontePadrao.fontFamily
          }
        }}
        wrapperStyle={{
          left: {
            backgroundColor: cor.laranja,
          },
          right: {
            backgroundColor: cor.creme
          }
        }}
      />
    )
  }

  const uuidv4 = () =>{
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
  const onSend = (messages = []) => {
    messages.forEach(message => {
      chat = { 
        _id: uuidv4(),
        text : message.text, 
        createdAt : new Date().getTime(),
        user: {
          _id: item.logado_uid,
          name: item.logado_nome,
          avatar: item.logado_imagem
        }
       }
    });
    const mensagem = Object.assign({}, chat);
    salvar_mensagem.add(mensagem);
    atualizar_interacao()
  } 
 
  const atualizar_interacao = () => {
    collection('mensagem').doc(item.id_mensagem).set({
      ultima_interacao: firebase.firestore.FieldValue.serverTimestamp()}, 
      { merge: true });
  }

  return (
    <View style={compartilhado.container}>   
      <ImageBackground
        source={require('../../../imagens/fundoInterno.jpg')} 
        style={compartilhado.imagemBackground}
      >
        <AppBarHeader 
          onPress={() => navigation.navigate('Mensagem')} 
          title={item.nome} 
        />   
        <KeyboardAvoidingView behavior='height' style={{flex:1}}>
          <GiftedChat
            placeholder={'Escreva uma mensagem'}
            renderBubble={renderBubble}
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
              _id: item.logado_uid, 
              name: item.logado_nome,
              avatar: item.logado_imagem
            }}
            timeTextStyle={{left:{color:'green'},right:{color:'red'}}}
          />
       </KeyboardAvoidingView>   
      </ImageBackground>
    </View>
  )  
}