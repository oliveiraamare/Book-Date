import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Cadastro from '../screens/cadastro/Cadastro';
import Configuracao from '../screens/conta/Configuracao';
import Home from '../screens/Home';
import Sobre from '../screens/cadastro/Sobre';
import Login from '../screens/Login';
import NavegacaoInterna from '../navigation/NavegacaoInterna';
import Perfil from '../screens/conta/perfil/Perfil';
import Preferencias from '../screens/cadastro/Preferencias';
import ReenviarSenha from '../screens/ReenviarSenha';
import Regras from '../screens/cadastro/Regras';
import ResetarSenha from '../screens/ResetarSenha';
import TermoPrivacidade from '../screens/termos/TermoPrivacidade';
import TermoUso from '../screens/termos/TermoUso';


const NavegacaoSwitch = createSwitchNavigator(
    {
        Cadastro: { screen: Cadastro },
        Configuracao: { screen: Configuracao },
        Home: { screen: Home },
        Sobre: { screen: Sobre },
        Login: { screen: Login },
        NavegacaoInterna: { screen: NavegacaoInterna },
        Perfil: { screen: Perfil },
        Preferencias: { screen: Preferencias },
        Regras: { screen: Regras },
        ReenviarSenha: { screen: ReenviarSenha },
        ResetarSenha: { screen: ResetarSenha },
        TermoPrivacidade: { screen: TermoPrivacidade },
        TermoUso : { screen: TermoUso }
    },
    {
        initialRouteName: 'Perfil',
        headerMode: 'none'
    }
)

export default createAppContainer(NavegacaoSwitch);