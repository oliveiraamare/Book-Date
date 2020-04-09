import React from 'react';
import { Text, View } from 'react-native';

import cardItem from '../estilos/cardItem';

const CardItem = ({
  sinopse,
  genero1,
  genero2,
  genero3,
  nome
}) => {  
  return (
    <View style={cardItem.containerInfo}> 
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