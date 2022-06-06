import { View, StyleSheet, Dimensions } from 'react-native';

import MyViewComponent from './CoreComponents/ViewComponent';
import MyTextComponent from './CoreComponents/TextComponent';
import MyTextInput from './CoreComponents/TextInputComponent';
import MyScrollView from './CoreComponents/ScrollViewComponent';
import MyButtonComponent from './CoreComponents/ButtonComponent';
import MyImageComponent from './CoreComponents/ImageComponent'
import LoginPage from './CoreComponents/LoginPage';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <MyViewComponent /> */}
      <MyTextComponent />
      {/* <MyTextInput /> */}
      {/* <MyScrollView /> */}
      {/* <MyButtonComponent /> */}
      {/* <MyImageComponent /> */}
      {/* <LoginPage /> */}
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'lightblue',
    width: '100%',
    //height: Dimensions.get('window').height
    //height: '100vh'
  }
})

/*
export default MustMatchFileName = () =>{

}
*/