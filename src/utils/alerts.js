
import {Alert} from 'react-native'
 
 

  export const showAlert = (message,title ="Atención") => {
    
    Alert.alert(
        title,
        message,
        [
          { text: "Cancel", style: 'cancel', onPress: () => {} },
          {
            text: 'Aceptar',
            onPress: ()=>{},
          },
        ],
        { cancelable: false }

      );

  };

  export const showAlertCallback = (message,onclick=()=>{},title ="Atención") => {
    
    Alert.alert(
        title,
        message,
        [
          { text: "Cancel", style: 'cancel', onPress: () => {} },
          {
            text: 'Aceptar',
            onPress: onclick,
          },
        ],
        { cancelable: false }

      );

  };