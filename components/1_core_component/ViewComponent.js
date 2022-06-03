/* CORE COMPONENT:
"<View> </View>" is the most basic component in react native
It is similar to "<div> </div>" in HTML, used to organize other components
There can only be one parent View coponent and all other componnents must go inside it
It compiles to "<ViewGroup> </ViewGroup>" in android and "<UIView> </UIView>"" in ios
"View component" can be nested 
*/

import { View, Text } from 'react-native';

const MyViewComponent = () => {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <h2>View Component</h2>
            <Text style={{fontSize: 30}}>
                This is a View component
            </Text>
        </View>
    )
}

export default MyViewComponent;
