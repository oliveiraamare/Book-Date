import React, { useEffect, useState } from 'react'
import { 
  Alert,
  ImageBackground,
  ScrollView, 
  Text, 
  View
} from 'react-native'
import { ListItem } from 'react-native-elements'
import { Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';

import BotaoTransparente from '../../../componentes/botoes/BotaoTransparente';
import { Citacoes } from '../../../componentes/fraseAleatoria/citacoes';

import compartilhado from '../../../estilos/compartilhado';
import conta from '../../../estilos/conta';
import cor from '../../../estilos/cores';

import { collection, usuarioUid } from '../../../firebase/acoes';
import Firebase from '../../../firebase/Firebase';

export default function Conta() {

  const [ usuario_logado, setUsuarioLogado ] = useState(null);  

  const firestore = collection('usuarios').doc(usuarioUid());

  const navigation = useNavigation();

  useEffect(() => {
    const usuario_data = firestore.onSnapshot(snapshot => {
      const dados_usuario = Object.assign([], snapshot.data());
      setUsuarioLogado(dados_usuario);
    });

    return () => {
      usuario_data();
    }
  }, []);

  const sair_popup = () => {
    Alert.alert('Deseja realmente sair?', '"A verdade é a seguinte: Você vai se apaixonar! Não tem jeito! Nem tente fugir." - Sussuro.', 
    [
      { text: "Cancelar", onPress: () => null },
      { text: "Sim", onPress: () => sair()  }
    ]);
    return true;
  };

  const book_date = 'background-location-task';

  const sair = () => {
   // Location.stopLocationUpdatesAsync(book_date);
    Firebase.auth().signOut();    
  }

  return (
    <View style={compartilhado.container}>
      <View style={compartilhado.statusBar} />
      <ImageBackground
        source={require('../../../imagens/fundoInterno.jpg')}
        style={compartilhado.imagemBackground}
      >
        <ScrollView>
          <Citacoes 
            container={conta.containerCitacao} 
            textoStyle={conta.citacao} autorStyle={conta.autor} 
          />
          <View style={conta.viewAvatar}>
            <View style={conta.viewImagem}>
              {
                usuario_logado == null

                ? <Avatar.Image 
                    size={200} 
                    source={require('../../../imagens/icone.png')}
                  />
                  
                : <View>
                    { usuario_logado.imagem == null 
                    
                      ? <Avatar.Image 
                          size={200} 
                          source={require('../../../imagens/icone.png')}
                        />

                      : <Avatar.Image 
                          size={200} 
                          source={{ uri: usuario_logado.imagem }}  
                        />
                    }
                  <View style={conta.viewTexto}>
                    <Text style={{color: cor.amarelo, fontSize: 20, textAlign: "justify"}}>
                      {usuario_logado.nome}
                    </Text>
                  </View>
                </View>
              }
            </View>    
          </View>
          <View style={{marginTop: 100}}>
            <ListItem
              containerStyle={conta.listItem}
              title="Meu Perfil"
              titleStyle={{color:cor.pagina}}
              leftIcon={
                <MaterialCommunityIcons name="account-edit" color={cor.amarelo} size={20} />
              }
              rightElement={
                <MaterialCommunityIcons name="chevron-right" color={cor.amarelo} size={20} />
              }
              onPress={() => navigation.navigate('Perfil') }
            />
            <ListItem
              containerStyle={conta.listItem}
              title="Termos de Privacidade"
              titleStyle={{color:cor.pagina}}
              leftIcon={
                <MaterialCommunityIcons name="view-headline" color={cor.amarelo} size={20} />
              } 
              rightElement={
                <MaterialCommunityIcons name="chevron-right" color={cor.amarelo} size={20} />
              }
              onPress={() => navigation.navigate('TermoPrivacidade')}                  
            />
            <ListItem
              containerStyle={conta.listItem}
              title="Termos de Uso"
              titleStyle={{color:cor.pagina}}
              leftIcon={
                <MaterialCommunityIcons name="view-headline" color={cor.amarelo} size={20} />
              } 
              rightElement={
                <MaterialCommunityIcons name="chevron-right" color={cor.amarelo} size={20} />
              }
              onPress={() => navigation.navigate('TermoUso')}                  
            />
            <ListItem
              containerStyle={conta.listItem}
              title="Sobre Nós"
              titleStyle={{color:cor.pagina}}
              leftIcon={
                <MaterialCommunityIcons name="face-agent" color={cor.amarelo} size={20} />
              } 
              rightElement={
                <MaterialCommunityIcons name="chevron-right" color={cor.amarelo} size={20} />
              }
              onPress={() => navigation.navigate('SobreNos')}   
            />
            <ListItem
              containerStyle={conta.listItem}
              title="Sair"
              titleStyle={{color:cor.pagina}}
              leftIcon={
                <MaterialCommunityIcons name="account-arrow-right-outline" color={cor.amarelo} size={20} />
              } 
              rightElement={
                <MaterialCommunityIcons name="chevron-right" color={cor.amarelo} size={20} />
              }
              onPress={() => sair_popup()} 
            />
          </View>     
          <BotaoTransparente
            buttonStyle={{marginTop:50, marginBottom: 60}}
            onPress={() => navigation.navigate('DeletarConta')}
            texto="Deletar Conta"              
          />
        </ScrollView>
      </ImageBackground>
    </View>
  )
}