// https://medium.com/building-with-react-native/android-back-button-handling-in-react-native-apps-1x08-e3acb0990011
import {BackHandler} from 'react-native';

/**
 * Attaches an event listener that handles the android-only hardware
 * back button
 * @param  {Function} callback The function to call on click
 */

const handleAndroidBackButton = (screen) => {
  BackHandler.addEventListener('hardwareBackPress', onBackPress(screen));
  removeAndroidBackButtonHandler (screen);
};

const removeAndroidBackButtonHandler  = (screen) => {
  BackHandler.removeEventListener('hardwareBackPress', onBackPress(screen));
};

const onBackPress = (screen) => {
  this.props.navigation.navigate('screen');    
  return true;
}

export {handleAndroidBackButton};


