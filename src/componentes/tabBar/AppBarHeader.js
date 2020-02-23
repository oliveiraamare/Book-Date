import React from 'react';
import { Appbar, Text } from 'react-native-paper';

import cor from '../../estilos/cores';

export const AppBarHeader = ({ headerStyle, onPress, title, style }) =>(
  <Appbar style={headerStyle}> 
    <Appbar.Action icon='undo' color={cor.rosa}  onPress={() => onPress()} />
    <Appbar.Content
      title={
        <Text style={style}>{title}</Text>
      }
    />
  </Appbar>  
)