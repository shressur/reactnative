/* CORE COMPONENT:
"<TextInput> </TextInput>" is the most basic component in react native
It is similar to "<p> </p>" in HTML, used to hold textual values
It compiles to "<TextView> </TextView>" in android and "<UITextView> </UITextView>"" in ios
"Text component" can be nested
*/

import { View, Text, TextInput } from 'react-native'
const MyTextInput = () => {
    return(
        <View style={{flex: 1, height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
            <h2>TextInput Component</h2>
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
        </View>
    )
}

export default MyTextInput;