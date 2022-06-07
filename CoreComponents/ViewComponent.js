/* CORE COMPONENT:
"<View> </View>" is the most basic component in react native
It is similar to "<div> </div>" in HTML, used to organize other components
There can only be one parent View coponent and all other componnents must go inside it
It compiles to "<ViewGroup> </ViewGroup>" in android and "<UIView> </UIView>"" in ios
"View component" can be nested 
*/
/*
react must be imported to write JSX
*/

import React from 'react';
import { View, Text } from 'react-native';
import css from '../css/css'

const MyViewComponent = () => {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={css.h1}>View Component</Text>
          <Text style={{fontSize: 30}}>
              This is a View component
          </Text>
      </View>
    )
}

export default MyViewComponent;
