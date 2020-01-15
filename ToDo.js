O ARQUIVO QUE NÃO FOR CLASSE, TEM QUE SER NOMEADO COM A PRIMEIRA LETRA MINÚSCULA

-> TODO implementar tratamento decodeURI erros das telas
-> ajeitar App.js e colocar os códigos em seus devidos lugares
-> TODO estudar redux e firebase
-> TODO mover o evento de BackHandler para o arquivo BackPress e ajeitar as outras telas com ele
->  TODO criar termos de uso e privacidade
-> TODO procurar como ter um array aleatório de frases vinda do firebase
->  TODO criar telas de cadastro e usuário
-> TODO colocar o seguinte código após o usuário já estar logado, ele mostra um alerta caso o usuário pressiona o voltar do andorid
    import { 
        Alert,
        BackHandler
    } from "react-native";
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
        }
        componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
        }
        onBackPress = () => {  
        //Code to display alert message when use click on android device back button.
        Alert.alert(
            ' Exit From App ',
            ' Do you want to exit From App ?',
            [
            { text: 'Yes', onPress: () => BackHandler.exitApp() },
            { text: 'No', onPress: () => console.log('NO Pressed') }
            ],
            { cancelable: true },
        );
    
        // Return true to enable back button over ride.
        return true;
    }