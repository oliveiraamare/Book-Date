import React , { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { AppBarHeader } from '../../../componentes/tabBar/AppBarHeader';
import compartilhado from '../../../estilos/compartilhado';
import sobre from '../../../estilos/sobre';
import cor from '../../../estilos/cores';

class SobreNos extends Component {
  render(){
    return (
      <View style={compartilhado.container}>
        <View style={compartilhado.statusBar} />
        <AppBarHeader 
          headerStyle={{
            backgroundColor:cor.preto, 
            borderBottomColor:cor.branco,
            borderBottomWidth:0.18
          }} 
          onPress={() => this.props.navigation.navigate('Conta')} 
          title={"Sobre Nós"} 
          style={{color:cor.branco, fontSize:18}} 
        />
        <ScrollView>
          <Text style={sobre.paragrafo}>
            Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern [business name]’s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.
          </Text>
          <Text style={sobre.paragrafo}>
            The term ‘[business name]’ or ‘us’ or ‘we’ refers to the owner of the website whose registered office is [address]. Our company registration number is [company registration number and place of registration]. The term ‘you’ refers to the user or viewer of our website.
          </Text>
          <Text style={sobre.paragrafo}>
            {'\u2022'} The content of the pages of this website is for your general information and use only. It is subject to change without notice.
          </Text>
          <Text style={sobre.paragrafo}>
            {'\u2022'} This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties: [insert list of information].
          </Text>
          <Text style={sobre.paragrafo}>
            {'\u2022'} Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
          </Text>
          <Text style={sobre.paragrafo}>
            {'\u2022'} Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
          </Text>
          <Text style={sobre.paragrafo}>
            {'\u2022'} Your use of this website and any dispute arising out of such use of the website is subject to the laws of England, Northern Ireland, Scotland and Wales.
          </Text>
          <Text style={sobre.paragrafo}>
            The use of this website is subject to the following terms of use
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default SobreNos;