import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Cadastro from '../telas/cadastro/Cadastro';
import Home from '../telas/home/Home';
import Sobre from '../telas/cadastro/Sobre';
import Login from '../telas/home/Login';
import NavegacaoInterna from '../navegacao/NavegacaoInterna';
import Preferencias from '../telas/cadastro/Preferencias';
import ReenviarSenha from '../telas/home/ReenviarSenha';
import Regras from '../telas/cadastro/Regras';
import ResetarSenha from '../telas/home/ResetarSenha';;
import TermoPrivacidade from '../telas/termos/TermoPrivacidade';
import TermoUso from '../telas/termos/TermoUso';


const NavegacaoSwitch = createSwitchNavigator(
    {
        Cadastro: { screen: Cadastro },
        Home: { screen: Home },
        Sobre: { screen: Sobre },
        Login: { screen: Login },
        NavegacaoInterna: { screen: NavegacaoInterna },
        Preferencias: { screen: Preferencias },
        Regras: { screen: Regras },
        ReenviarSenha: { screen: ReenviarSenha },
        ResetarSenha: { screen: ResetarSenha },
        TermoPrivacidade: { screen: TermoPrivacidade },
        TermoUso : { screen: TermoUso }
    },
    {
        initialRouteName: 'NavegacaoInterna',
        headerMode: 'none'
    }
)

export default createAppContainer(NavegacaoSwitch);