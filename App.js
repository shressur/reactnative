import { View, StyleSheet, Dimensions } from 'react-native';

import MyViewComponent from './components/1_core_component/ViewComponent';
import MyTextComponent from './components/1_core_component/TextComponent';
import MyTextInput from './components/1_core_component/TextInputComponent';
import MyScrollView from './components/1_core_component/ScrollViewComponent';
import MyButtonComponent from './components/1_core_component/ButtonComponent';
import MyImageComponent from './components/1_core_component/ImageComponent'
import LoginPage from './components/1_core_component/LoginPage';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <MyViewComponent /> */}
      {/* <MyTextComponent /> */}
      {/* <MyTextInput /> */}
      {/* <MyScrollView /> */}
      {/* <MyButtonComponent></MyButtonComponent> */}
      {/* <MyImageComponent></MyImageComponent> */}
      <LoginPage />
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
    height: Dimensions.get('window').height
    //height: '100vh'
  }
})

/*
export default MustMatchFileName = () =>{

}
*/