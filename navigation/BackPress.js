import { BackHandler } from "react-native";

const BackPress = {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
      },
    componentWillUnmount(){
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    },
    onBackPress = () => {

    this.props.navigation.navigate('HomeLogin');
    
    // Return true to enable back button over ride.
    return true;
    }
}

export default BackPress;