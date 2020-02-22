import React, { Component } from 'react';
import { ScrollView, View} from 'react-native';
import { Avatar } from 'react-native-paper';

import { CardComTitulo, Cards } from '../../componentes/Card';

import compartilhado from '../../styles/compartilhado';
import cor from '../../styles/cores';

import notificacao from '../../styles/notificacao';

export default class App extends Component {
  render() {
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        <ScrollView >        
          <CardComTitulo
            styleCard={notificacao.cardComTitulo} 
            titulo="Enfim você chegou!"   
            left={(props) => 
              <Avatar.Icon {...props} 
                icon="heart" color={cor.rosa} style={{backgroundColor:'transparent'}} size={50}
              />
            }
            paragrafo="Respire fundo. Sorria. Deixe as suas preocupações de lado.
              Receba o melhor que esse mundo tem a lhe oferecer,
              afinal de contas, você merece. Entre e sinta-se em casa!"
            autor="Autor desconhecido"
          />      
          <Cards 
            styleCard={notificacao.cards}
            paragrafo="Você vai ser sempre bem-vinda para ficar um tempo ou para sempre, se quiser."
            autor="Um Dia - David Nicholls"
          />       
          <Cards 
            styleCard={notificacao.cards}
            paragrafo="Quando penso em você, não posso deixar de sorrir, sabendo que você me completa. Eu te amo, não só agora, mas sempre."
            autor="Querido John – Nicholas Sparks"
          />          
        </ScrollView>
      </View>
    );
  }
}