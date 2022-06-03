/* CORE COMPONENT:
"<Image />" one of the basic component in react native
"Image component" is self closing component with "source" prop for image source
*/

import { View, Text, Image } from 'react-native';

const MyImageComponent = () => {

    let catImage = require('../../assets/cat1.jpg');

    return(
        <View>
            <h2>Image Component</h2>
            <View style={{marginBottom: 30}}>
                <Text style={{fontSize: 20, marginBottom: 10}}>Local image</Text>
                <View>
                    <Image 
                        source={catImage}
                        style={{height: 200}}
                    />
                </View>
            </View>
            <View>
                <Text style={{fontSize: 20, marginBottom: 10}}>Image from url</Text>
                <Image 
                    source={{uri:'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'}}
                    style={{height: 200}}
                />
            </View>
            

        </View>
    )
}

export default MyImageComponent;