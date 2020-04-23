import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Cadastro from '../telas/cadastro/Cadastro';
import Geolocalizacao from '../telas/cadastro/Geolocalizacao';
import Home from '../telas/home/Home';
import Loading from '../telas/home/Loading';
import Login from '../telas/home/Login';
import NavegacaoInterna from '../navegacao/NavegacaoInterna';
import Perfil from '../telas/menuInterno/conta/perfil/Perfil';
import PermissaoGeo from '../telas/cadastro/PermissaoGeo';
import Preferencias from '../telas/cadastro/Preferencias';
import ReenviarSenha from '../telas/home/ReenviarSenha';
import Regras from '../telas/cadastro/Regras';
import TermoPrivacidade from '../telas/termos/TermoPrivacidade';
import TermoUso from '../telas/termos/TermoUso';
import UploadImagem from '../telas/cadastro/UploadImagem';

const NavegacaoSwitch = createSwitchNavigator(
    {
        Cadastro: { screen: Cadastro },
        Geolocalizacao: { screen: Geolocalizacao },
        Home: { screen: Home },
        Loading: { screen: Loading },
        Login: { screen: Login },
        NavegacaoInterna: { screen: NavegacaoInterna },
        Perfil: { screen: Perfil },
        PermissaoGeo: { screen: PermissaoGeo },
        Preferencias: { screen: Preferencias },
        Regras: { screen: Regras },
        ReenviarSenha: { screen: ReenviarSenha },
        TermoPrivacidade: { screen: TermoPrivacidade },
        TermoUso : { screen: TermoUso },
        UploadImagem: { screen: UploadImagem }
    },
    {
        initialRouteName: 'UploadImagem',
        headerMode: 'none'
    }
)

export default createAppContainer(NavegacaoSwitch);