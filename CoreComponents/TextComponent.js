/* CORE COMPONENT:
"<TextInput> </TextInput>" is the most basic component in react native
It is similar to "<p> </p>" in HTML, used to hold textual values
It compiles to "<TextView> </TextView>" in android and "<UITextView> </UITextView>"" in ios
"Text component" can be nested
*/
/*
npm i react-native-vector-icons --save
...
import Icon from 'react-native-vector-icons/FontAwesome';
...
export default () => <Icon name="rocket" size={80} color="#bf1313" />;
*/

import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import css from '../css/css'

import CardComponent from './CardComponent';

const MyTextInput = () => {
    return(
        <View style={{flex: 1, height: '100vh', justifyContent: 'center', alignItems: 'center', width: '95%'}}>
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
          <View 
            style={{padding: 10, backgroundColor: 'white', marginTop: 20, flexDirection: 'row'}}
            >
                <Icon name="user" size={30} color='gray' style={{flex: 1}} />
                <TextInput placeholder="user name" style={{color: 'gray', marginLeft: 10, borderLeftColor: 'gray', borderLeftWidth: 2, paddingLeft: 10, fontSize: 30, outline: 'none', flex: 1}}/>
          </View>

          <CardComponent 
            card_title='Awesome sausome title' 
            card_subtitle='a mini description' 
            card_body='In Android development, you write views in Kotlin or Java; in iOS development, you use Swift or Objective-C. With React Native, you can invoke these views with JavaScript using React components. At runtime, React Native creates the corresponding Android and iOS views for those components.' 
            card_footer='published on 06 June, 2022' 
        />
      </View>
    )
}

export default MyTextInput;