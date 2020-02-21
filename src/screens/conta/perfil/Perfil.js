import React, { Component } from 'react';
import {
  ImageBackground,
  ScrollView, 
  Text,
  TouchableOpacity, 
  View
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import perfil from '../../../styles/perfil';
import cor from '../../../styles/cores';

class Perfil extends Component {
  render() {
    return (    
      <View style={perfil.container}>  
        <ImageBackground 
          source={require('../../../imagens/fotoPerfil.jpg')} 
          style={perfil.imagemBackground}
        >      
          <ScrollView style={perfil.scrollView}>
            <View style={perfil.containerPerfilComDescricoes}>
              <View style={perfil.containerNome}>
                <Text style={perfil.nome}>
                  Thellen Santiago
                </Text>
              </View>
              <Text style={perfil.descricaoIdadeCidade}>
                26 anos, Rio de Janeiro
              </Text>
              <Text style={perfil.citacao}>
                "Você só vive uma vez. É sua obrigação aproveitar a vida da melhor forma possível."
              </Text>      
              <View style={perfil.preferencias}>
                <Text style={perfil.perguntas}>
                  O que estais a buscar?
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <CheckBox
                    title='Aventura'
                    checkedIcon='user-circle' 
                    uncheckedIcon='circle-o'
                    uncheckedColor={cor.rosa}
                    checked={true}
                    checkedColor={cor.rosa}
                    size={20}
                    containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    textStyle={{fontSize: 14, color:cor.branco}}
                  />  
                  <CheckBox
                    title='Mistério'
                    checkedIcon='user-circle' 
                    uncheckedIcon='circle-o'
                    uncheckedColor={cor.rosa}
                    checked={true}
                    checkedColor={cor.rosa}
                    size={20}
                    containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent'}}
                    textStyle={{fontSize: 14, paddingLeft: 10,color:cor.branco}}
                  />  
                </View>
              </View>
              <View style={perfil.info}>
                <Text style={perfil.perguntas}
                  >Se a sua vida fosse um livro, qual seria a sinopse?
                </Text>
                <Text style={perfil.respostas}>
                  A vida é uma tempestade (...) Um dia você está tomando sol e no dia seguinte o mar te lança contra as rochas. O que faz de você um homem é o que você faz quando a tempestade vem.
                </Text>     
              </View>       
              <View style={perfil.info}>
                <Text style={perfil.perguntas}>
                  Peculiariedades
                </Text>
                <Text style={perfil.respostas}>
                  Eu sou muito peculiar, impulsivo. Eu gosto de controlar, a mim mesmo e aqueles ao meu redor.
                </Text>     
              </View>        
              <View style={perfil.preferenciasLiterarias}>
                <Text style={perfil.perguntas}>Top 3 de preferências literárias</Text>
                <Text style={perfil.preferenciasLiterariasResposta}>
                  Autor
                </Text>
                <View style={{flexDirection:'row'}}>
                  <MaterialCommunityIcons name='numeric-1-box-multiple-outline' color= '#ff33cc' size={20} />
                  <Text style={perfil.respostas}>Carlos Drummond</Text> 
                </View>
                <View style={{flexDirection:'row'}}>
                  <MaterialCommunityIcons name='numeric-2-box-multiple-outline' color= '#ff33cc' size={20} />
                  <Text style={perfil.respostas}>Shakspeare</Text> 
                </View>   
                <View style={{flexDirection:'row'}}>
                  <MaterialCommunityIcons name='numeric-3-box-multiple-outline' color= '#ff33cc' size={20} />
                  <Text style={perfil.respostas}>J. K. Rowling</Text> 
                </View>   
                <Text style={perfil.preferenciasLiterariasResposta}>
                  Gênero
                </Text>
                <View style={{flexDirection:'row'}}>
                  <MaterialCommunityIcons name='numeric-1-box-multiple-outline' color= '#ff33cc' size={20} />
                  <Text style={perfil.respostas}>Romance</Text> 
                </View>
                <View style={{flexDirection:'row'}}>
                  <MaterialCommunityIcons name='numeric-2-box-multiple-outline' color= '#ff33cc' size={20} />
                  <Text style={perfil.respostas}>Suspense</Text> 
                </View>   
                <View style={{flexDirection:'row'}}>
                  <MaterialCommunityIcons name='numeric-3-box-multiple-outline' color= '#ff33cc' size={20} />
                  <Text style={perfil.respostas}>Esotérico</Text> 
                </View>   
                <Text style={perfil.preferenciasLiterariasResposta}>
                  Livro
                </Text>
                <View style={{flexDirection:'row'}}>
                  <MaterialCommunityIcons name='numeric-1-box-multiple-outline' color= '#ff33cc' size={20} />
                  <Text style={perfil.respostas}>Cinquenta Tons de Cinza</Text> 
                </View>
                <View style={{flexDirection:'row'}}>
                  <MaterialCommunityIcons name='numeric-2-box-multiple-outline' color= '#ff33cc' size={20} />
                  <Text style={perfil.respostas}>Harry Potter e a Pedra Filosofal</Text> 
                </View>   
                <View style={{flexDirection:'row'}}>
                  <MaterialCommunityIcons name='numeric-3-box-multiple-outline' color= '#ff33cc' size={20} />
                  <Text style={perfil.respostas}>O livreiro de Cabul</Text> 
                </View>   
              </View>          
            </View>
            <View style={perfil.containerBotao}>
              <TouchableOpacity style={perfil.botao}>
                <Text style={perfil.iconeBotao}>
                  <MaterialCommunityIcons name='chat-processing' color='black' size={20} />
                </Text>
                <Text style={perfil.textoBotao}>Conversar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

export default Perfil;