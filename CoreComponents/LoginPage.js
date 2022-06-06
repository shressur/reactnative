import * as React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import css from '../css/css'

const LoginPage = () =>{

    const [id, setId] = React.useState(123)
    const [pass, setPass] = React.useState()
    const [result, setResult] = React.useState()

    const [focus, setFocus] = React.useState(false);

    const submitData = () => {
        setResult(id+ " - " +pass)
        console.log(id)
    }

    return(
        <View style={{width: "100%"}}>
          <Text style={css.h1}>Login page</Text>
          <View>
              <View>
                  <Text style={styles.label}>
                      User id (number only):
                    </Text>
              </View>
              <View>
                  <TextInput 
                      onChangeText={id=>setId(id)}
                      placeholder="User id..."
                      defaultValue="123"
                      keyboardType="numeric"
                      //style={styles.input}
                      style={focus ? StyleSheet.compose(styles.input, styles.inputOnFocus) : StyleSheet.compose(styles.input, styles.inputOnBlur)}
                      onFocus={() => setFocus(true)}
                      onBlur={() => setFocus(false)}
                    />
              </View>
          </View>
          <View>
              <View>
                  <Text style={styles.label}>
                      Password:
                    </Text>
              </View>
              <View>
                  <TextInput 
                      onChangeText={pass=>setPass(pass)}
                      placeholder="Password..."
                      secureTextEntry = {true}
                      style={styles.input}
                    />
              </View>
          </View>
          <View style={{marginTop: 10}}>
              {/* <Button 
                  title="Submit" 
                  onPress = { submitData }
                  style={{fontSize: 555}}
                /> */}
            <TouchableOpacity 
                onPress = { submitData }
                style={styles.button}
            >
                <Text style={{fontSize: 25, color: 'white'}}>TouchableOpacity Button</Text>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 20}}>
              <Text style={{color: 'blue'}}>You typed</Text>
              <Text 
                  style={{fontSize: 20, padding: 5, color: 'gray', fontWeight: 'bold', padding: 10}}>
                      { result }
              </Text>
          </View>
      </View>
    )
}

export default LoginPage;


const styles = StyleSheet.create({
    input: {
        paddingStart: 10,
        paddingTop: 5,
        paddingEnd: 10,
        paddingBottom: 7,
        backgroundColor: 'white',
        fontSize: 20
    },
    inputOnFocus: { 
        color: 'red' 
    },
    inputOnBlur: { 
        color: 'gray' 
    },
    label: {
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5
    },
    button: {
        alignItems: "center",
        backgroundColor: "red",
        padding: 10,
        marginTop: 5,
        marginBottom: 5
    }
})