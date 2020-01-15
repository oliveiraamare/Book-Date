import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Cadastro from '../screens/Cadastro';
import HomeLogin from '../screens/HomeLogin';
import Login from '../screens/Login';
import LoginSocial from '../screens/LoginSocial';
import ReenviarSenha from '../screens/ReenviarSenha';
import ResetarSenha from '../screens/ResetarSenha';
import TermoPrivacidade from '../screens/termos/TermoPrivacidade'
import TermoUso from '../screens/termos/TermoUso'
import Perfil from '../screens/Perfil'

const NavegacaoSwitch = createSwitchNavigator(
    {
        Cadastro: { screen: Cadastro },
        HomeLogin: { screen: HomeLogin },
        Login: { screen: Login },
        LoginSocial: { screen: LoginSocial },
        Perfil: { screen: Perfil},
        ReenviarSenha: { screen: ReenviarSenha },
        ResetarSenha: { screen: ResetarSenha },
        TermoPrivacidade: { screen: TermoPrivacidade},
        TermoUso : { screen: TermoUso }
    },
    {
        initialRouteName: 'HomeLogin',
        headerMode: 'none'
    }
)

export default createAppContainer(NavegacaoSwitch);