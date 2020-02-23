import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Cadastro from '../telas/cadastro/Cadastro';
import Configuracao from '../telas/menuInterno/conta/configuracoes/Configuracao';
import Home from '../telas/home/Home';
import Sobre from '../telas/cadastro/Sobre';
import Login from '../telas/home/Login';
import NavegacaoInterna from '../navegacao/NavegacaoInterna';
import Perfil from '../telas/menuInterno/conta/perfil/Perfil';
import Preferencias from '../telas/cadastro/Preferencias';
import ReenviarSenha from '../telas/home/ReenviarSenha';
import Regras from '../telas/cadastro/Regras';
import ResetarSenha from '../telas/home/ResetarSenha';
import SobreNos from '../telas/menuInterno/conta/SobreNos';
import TermoPrivacidade from '../telas/termos/TermoPrivacidade';
import TermoUso from '../telas/termos/TermoUso';


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
        SobreNos: { screen: SobreNos },
        TermoPrivacidade: { screen: TermoPrivacidade },
        TermoUso : { screen: TermoUso }
    },
    {
        initialRouteName: 'NavegacaoInterna',
        headerMode: 'none'
    }
)

export default createAppContainer(NavegacaoSwitch);