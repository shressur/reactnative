import * as React from 'react'
import { View, Text, TextInput, Image, Button } from 'react-native';
import css from '../css/css'

const LoginPage = () =>{

    const resultRef = React.useRef()
    const emailRef = React.useRef()
    const passRef = React.useRef()

    const [result, setResult] = React.useState()

    const submitData = () => {
        setResult(`${emailRef.current.value} - ${passRef.current.value}`)
    }


    return(
        <View style={{width: '100%'}}>
          <Text style={css.h1}>Login page</Text>
          <View style={{flex: 1, width: '100%'}}>
              <View style={{padding: 5, justifyContent: 'center'}}>
                  <Text 
                      style={{fontSize: 16}}
                  >User id or e-mail id:</Text>
              </View>
              <View style={{padding: 5, justifyContent: 'center'}}>
                  <TextInput 
                      ref = {emailRef}
                      placeholder="User id or e-mail id..."
                      style={{backgroundColor: 'white', padding: 5, fontSize: 16}}
                    />
              </View>
          </View>
          <View style={{flex: 1, width: '100%'}}>
              <View style={{padding: 5, justifyContent: 'center'}}>
                  <Text 
                      style={{fontSize: 16}}
                  >Password:</Text>
              </View>
              <View style={{padding: 5, justifyContent: 'center'}}>
                  <TextInput 
                      ref = {passRef}
                      placeholder="Password..."
                      secureTextEntry = {true}
                      style={{backgroundColor: 'white', padding: 5, fontSize: 16}}
                    />
              </View>
          </View>
          <View style={{marginTop: 10}}>
              <Button 
                  title="Submit" 
                  onPress = { submitData }
                  />
          </View>

          <View style={{marginTop: 20}}>
              <Text style={{color: 'blue'}}>You typed</Text>
              <Text 
                  ref = {resultRef}
                  style={{fontSize: 20, padding: 5, color: 'gray', fontWeight: 'bold'}}>
                      { result }
              </Text>
          </View>
      </View>
    )
}

export default LoginPage;