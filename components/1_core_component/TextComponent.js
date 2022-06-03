/* CORE COMPONENT:
"<Text> </Text>" is the most basic component in react native
It is similar to "<p> </p>" in HTML, used to hold textual values
It compiles to "<TextView> </TextView>" in android and "<UITextView> </UITextView>"" in ios
"Text component" can be nested
*/

import { View, Text } from 'react-native';

const MyTextComponent = () => {
    return(
        <View style={{flex: 1, padding: 10, justifyContent: 'center'}}>
            <h2>Text Component</h2>
            <Text style={{fontSize: 20}}>
                <ul>
                    <li>This is a "Text componnet"</li>
                    <li>All text nodes must go inside the "Text component" i.e. they cannot be direct children of a "View component"</li>
                </ul>     
            </Text>
        </View>
    )
}

export default MyTextComponent;