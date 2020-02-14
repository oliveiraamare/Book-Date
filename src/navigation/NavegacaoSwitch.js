import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Cadastro from '../screens/cadastro/Cadastro';
import Home from '../screens/Home';
import Sobre from '../screens/cadastro/Sobre';
import Login from '../screens/Login';
import Perfil from '../screens/Perfil'
import Preferencias from '../screens/cadastro/Preferencias';
import ReenviarSenha from '../screens/ReenviarSenha';
import Regras from '../screens/cadastro/Regras';
import ResetarSenha from '../screens/ResetarSenha';
import TermoPrivacidade from '../screens/termos/TermoPrivacidade';
import TermoUso from '../screens/termos/TermoUso';

const NavegacaoSwitch = createSwitchNavigator(
    {
        Cadastro: { screen: Cadastro },
        Home: { screen: Home },
        Sobre: { screen: Sobre },
        Login: { screen: Login },
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