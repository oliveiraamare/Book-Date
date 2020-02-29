import React from 'react';
import { ImageBackground, Text, View} from 'react-native';
import { IconButton } from 'react-native-paper';

import BotaoGradiente from './botoes/botaoGradiente';
import cardItem from '../estilos/cardItem';

import cor from '../estilos/cores';

const CardItem = ({
  actions,
  description,
  genero1,
  genero2,
  genero3,
  image,
  name,
  onPressLeft,
  onPressMensagem,
  onPressPerfil,
  onPressRight
}) => {  
  return (
    <ImageBackground 
      source={image} 
      style={cardItem.imageBackground}
    >
      <View style={cardItem.containerInfo}> 
      
        {/* nome */}
        <Text style={cardItem.nome}>{name}</Text>

        <View style={{flexDirection:'row'}}>
          <BotaoGradiente text={genero1} />
          <BotaoGradiente text={genero2} />
          <BotaoGradiente text={genero3} />
        </View>

        {/* descrição */}
        {description && (
          <Text style={cardItem.descricao}>{description}</Text>
        )}

        {/* ACTIONS */}
        {actions && (
          <View style={cardItem.acoes}>       
            <IconButton
              icon="shield-account"
              color={cor.cinzaEscuro}
              size={23}
              style={cardItem.miniBotao} 
              onPress={() => onPressPerfil()}
            />

            <IconButton
              icon="bookmark-check"
              color={cor.cinzaEscuro}
              size={35}
              style={cardItem.botaoMaior} 
              onPress={() => onPressLeft()}
            />

            <IconButton
              icon="bookmark-remove"
              color={cor.cinzaEscuro}
              size={35}
              style={cardItem.botaoMaior} 
              onPress={() => onPressRight()}
            />

            <IconButton
              icon="chat-processing"
              color={cor.cinzaEscuro}
              size={23}
              style={cardItem.miniBotao} 
              onPress={() => onPressMensagem()}
            />
           
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

export default CardItem;