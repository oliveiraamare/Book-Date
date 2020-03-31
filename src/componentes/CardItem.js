import React from 'react';
import { Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';

import cardItem from '../estilos/cardItem';
import cor from '../estilos/cores';

const CardItem = ({
  actions,
  sinopse,
  genero1,
  genero2,
  genero3,
  nome,
  onPressLeft,
  onPressPerfil,
  onPressRight
}) => {  
  return (
      <View style={cardItem.containerInfo}> 

        {actions && (
          <View style={cardItem.acoes}>       
            <IconButton
              icon='account-off-outline'
              color={cor.preto}
              size={23}
              style={cardItem.miniBotao} 
              onPress={() => onPressLeft()}
            />
            <IconButton
              icon='account-heart'
              color={cor.preto}
              size={23}
              style={cardItem.botaoMaior} 
              onPress={() => onPressPerfil()}
            />
            <IconButton
              icon='comment-account'
              color={cor.preto}
              size={23}
              style={cardItem.miniBotao} 
              onPress={() => onPressRight()}
            />
          </View>
        )}

        <View style={cardItem.containerUsuarioInfo}>
          {nome && (
            <Text style={cardItem.nome}>{nome}</Text>
          )}

          <View style={cardItem.containerGenero}>
            {genero1 && (<Text style={cardItem.genero}>#{genero1}</Text>)}
            {genero2 && (<Text style={cardItem.genero}>#{genero2}</Text>)}
            {genero3 && (<Text style={cardItem.genero}>#{genero3}</Text>)}
          </View>

          {sinopse && (
            <Text style={cardItem.sinopse}>{sinopse}</Text>
          )}
        </View>

      </View>
  );
};

export default CardItem;