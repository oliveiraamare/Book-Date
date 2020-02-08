import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Cadastro from '../screens/cadastro/Cadastro';
import Home from '../screens/Home';
//import InformacaoPessoal from '../screens/cadastro/InfomacaoPessoal';
import Login from '../screens/Login';
import ReenviarSenha from '../screens/ReenviarSenha';
import Regras from '../screens/cadastro/Regras';
import ResetarSenha from '../screens/ResetarSenha';
import TermoPrivacidade from '../screens/termos/TermoPrivacidade'
import TermoUso from '../screens/termos/TermoUso'
import Perfil from '../screens/Perfil'

const NavegacaoSwitch = createSwitchNavigator(
    {
        Cadastro: { screen: Cadastro },
        Home: { screen: Home },
       // InformacaoPessoal: { screen: InformacaoPessoal },
        Login: { screen: Login },
        Perfil: { screen: Perfil },
        Regras: { screen: Regras },
        ReenviarSenha: { screen: ReenviarSenha },
        ResetarSenha: { screen: ResetarSenha },
        TermoPrivacidade: { screen: TermoPrivacidade },
        TermoUso : { screen: TermoUso }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
)

export default createAppContainer(NavegacaoSwitch);