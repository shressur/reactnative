/* CORE COMPONENT:
"<TextInput> </TextInput>" is the most basic component in react native
It is similar to "<p> </p>" in HTML, used to hold textual values
It compiles to "<TextView> </TextView>" in android and "<UITextView> </UITextView>"" in ios
"Text component" can be nested
*/
/*
npm i react-native-vector-icons --save

import Icon from 'react-native-vector-icons/FontAwesome';
...
export default () => <Icon name="rocket" size={80} color="#bf1313" />;
*/

import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import css from '../css/css'

const MyTextInput = () => {
    return(
        <View style={{flex: 1, height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={css.h1}>TextInput Component</Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={{display: 'flex', alignItems: 'center', fontSize: 20}}>name</Text>
              <TextInput
                  placeholder="name"
                  contextMenuHidden={false}
                  selectTextOnFocus={true}
                  editable={true}
                  focusable={true}
                  secureTextEntry={false}
                  selection='yellow'
                  style={{ padding: 5, backgroundColor: 'white', flex: 1, marginStart: 10, fontSize: 20, borderRadius: 5, color: 'red'}}
              />
          </View>
          <View>
              <Text>
                  <Icon name="user" size={10} color='gray' />
                  <TextInput placeholder="user name" />
              </Text>
          </View>
      </View>
    )
}

export default MyTextInput;