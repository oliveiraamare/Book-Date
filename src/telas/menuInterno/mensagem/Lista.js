//https://react-native-elements.github.io/react-native-elements/docs/listitem.html

import React, { useEffect, useState } from 'react';
import { 
  ImageBackground, 
  ScrollView, 
  Text, 
  View 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ListItem } from "react-native-elements";

import compartilhado from '../../../estilos/compartilhado';
import lista from '../../../estilos/lista';

import { collection, usuarioUid } from '../../../firebase/acoes';
import { BarHeader } from '../../../componentes/header';

export default function Booklovers() {

  const [ dados_lista, setDados_lista ] = useState(null);  
  
  const usuario_logado_uid = usuarioUid();

  const recupera_mensagem = collection('mensagem').where('id_conversa', 'array-contains',usuario_logado_uid).orderBy('ultima_interacao', 'desc');
 
  const navigation = useNavigation();

  useEffect(() => {   
    const criador_mensagem =  recupera_mensagem.onSnapshot(querySnapshot => {
      var dados_match =  [];
      querySnapshot.forEach(doc => {
        var dados = doc.data();
        if( dados.criador.criador_uid == usuario_logado_uid ){ 
          dados_match.push({
            nome: dados.participante.participante_nome, 
            imagem: dados.participante.participante_imagem, 
            uid: dados.participante.participante_uid,
            id_mensagem: dados.id_mensagem,
            logado_uid: dados.criador.criador_uid,
            logado_nome: dados.criador.criador_nome,
            logado_imagem: dados.criador.criador_imagem
          }); 
        } else if ( dados.participante.participante_uid == usuario_logado_uid ){
          dados_match.push({
            nome: dados.criador.criador_nome, 
            imagem: dados.criador.criador_imagem, 
            uid: dados.criador.criador_uid,
            id_mensagem: dados.id_mensagem,
            logado_uid: dados.participante.participante_uid,
            logado_nome: dados.participante.participante_nome,
            logado_imagem: dados.participante.participante_imagem
          }); 
        }
      });
      setDados_lista(dados_match);
    })
   
    return () => {
      criador_mensagem();
    }      
  }, []);  

  if(!dados_lista) {
    return (
      <View style={compartilhado.container}>   
        <ImageBackground
          source={require('../../../imagens/fundoInterno.jpg')} 
          style={booklovers.imagem}
        >
          <BarHeader title={"Mensagem"} />    
        </ImageBackground>
      </View>
    )
  }

  const render_lista = () => {
    if(!dados_lista.length) {
      return (
        <View style={compartilhado.container}>   
            <ImageBackground
              source={require('../../../imagens/fundoInterno.jpg')} 
              style={compartilhado.imagemBackground}
            >
              <BarHeader title={"Mensagem"} />      
              <View style={lista.containerParagrafo}>
                <Text style={lista.paragrafo}>
                  Aqui aparecerão as suas mensagens enviadas e recebidas de outros booklovers. 
                </Text>
                <Text style={lista.texto}>
                  Que tal chamar alguém para uma prosa?
                </Text>
              </View>
          </ImageBackground>
        </View>
      )
    } 
    
    return (
      <View style={compartilhado.container}>   
        <ImageBackground
          source={require('../../../imagens/fundoInterno.jpg')} 
          style={compartilhado.imagemBackground}
        >
          <BarHeader title={'Mensagem'} />  
          <ScrollView>
            {
              dados_lista.map((item, index) => (
                <ListItem
                  key={index}
                  leftAvatar={{ source: { uri: item.imagem }, size: 60 }}
                  title={item.nome}
                  titleStyle={lista.nome}
                  onPress={() => navigation.navigate('Chat', { item })}
                  bottomDivider
                  chevron
                  containerStyle={lista.listItem}
                />
              ))        
            }
          </ScrollView>
        </ImageBackground>
      </View>
    )}

  return ( render_lista() );
}