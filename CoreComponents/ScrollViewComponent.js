/* CORE COMPONENT:
"<Text> </Text>" is the most basic component in react native
It is similar to "<p> </p>" in HTML, used to hold textual values
It compiles to "<TextView> </TextView>" in android and "<UITextView> </UITextView>"" in ios
"Text component" can be nested
*/

import React from 'react';
import { View, Text } from 'react-native';
import css from '../css/css';

const MyTextComponent = () => {
    return(
        <View style={{flex: 1, padding: 10, justifyContent: 'center'}}>
          <Text style={css.h1}>Text Component</Text>
          <Text style={{fontSize: 20}}>
            <Text style={css.ul}>{'\u2022'}</Text>
              <Text>This is a "Text componnet"</Text>

            <Text style={css.block}></Text>
            
            <Text style={css.ul}>{'\u2022'}</Text>
              <Text>All text nodes must go inside the "Text component" i.e. they cannot be direct children of a "View component"</Text>
            </Text>
      </View>
    )
}

export default MyTextComponent;
