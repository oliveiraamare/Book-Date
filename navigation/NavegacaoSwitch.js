import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import HomeLogin from "../screens/HomeLogin";
import Login from "../screens/Login";
import LoginSocial from "../screens/LoginSocial";
import ReenviarSenha from "../screens/ReenviarSenha";
import ResetarSenha from "../screens/ResetarSenha";
import TermoPrivacidade from "../termos/TermoPrivacidade"
import TermoUso from "../termos/TermoUso"

const NavegacaoSwitch = createSwitchNavigator(
    {
        HomeLogin: { screen: HomeLogin },
        Login: { screen: Login },
        LoginSocial: { screen: LoginSocial },
        ReenviarSenha: { screen: ReenviarSenha },
        ResetarSenha: { screen: ResetarSenha },
        TermoPrivacidade: { screen: TermoPrivacidade},
        TermoUso : { screen: TermoUso}
    },
    {
        initialRouteName: 'HomeLogin'
    }
)

export default createAppContainer(NavegacaoSwitch);