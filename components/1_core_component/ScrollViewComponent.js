/* CORE COMPONENT:
"<ScrollView> </ScrollView>" one of the basic component in react native
It is similar to "<div> </div>" in HTML, used to hold textual values
It compiles to "<ScrollView> </ScrollView>" in android and "<UIScrollView> </UIScrollView>"" in ios
"ScrollView component" can be nested
Acts as "View component" with "overflow: scroll" property
*/

import { View, Text, ScrollView } from 'react-native'

const MyScrollView = () => {
    return(
        <View style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <h2>ScrollView Component</h2>
            <View style={{backgroundColor: 'lightblue', padding: 10, height: 135, marginBottom: 20, border: '1px solid yellow', overflow: 'hidden'}}>
                <Text style={{fontSize: 20}}>This section is fixed (not scrolling)</Text>
                <Text style={{fontSize: 20, color: 'red'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at nihil eaque deserunt 
                    fuga voluptatum praesentium quo magni dolor repellendus quaerat ipsam neque omnis, 
                    voluptatibus fugit suscipit sapiente! Dolore, veniam?</Text>
                <Text style={{fontSize: 20, color: 'green'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at nihil eaque deserunt 
                    fuga voluptatum praesentium quo magni dolor repellendus quaerat ipsam neque omnis, 
                    voluptatibus fugit suscipit sapiente! Dolore, veniam?</Text>
                <Text style={{fontSize: 20, color: 'blue'}}>I won't scroll!!!</Text>
            </View>
            <ScrollView style={{height: 300, marginTop: 30, padding: 10, border: '1px solid yellow'}}>
                <View>
                    <Text style={{fontSize: 20}}>This section can be scrolled</Text>
                    <Text style={{fontSize: 20, color: 'red'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at nihil eaque deserunt 
                        fuga voluptatum praesentium quo magni dolor repellendus quaerat ipsam neque omnis, 
                        voluptatibus fugit suscipit sapiente! Dolore, veniam?</Text>
                    <Text style={{fontSize: 20, color: 'green'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at nihil eaque deserunt 
                        fuga voluptatum praesentium quo magni dolor repellendus quaerat ipsam neque omnis, 
                        voluptatibus fugit suscipit sapiente! Dolore, veniam?</Text>
                    <Text style={{fontSize: 20, color: 'blue'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at nihil eaque deserunt 
                        fuga voluptatum praesentium quo magni dolor repellendus quaerat ipsam neque omnis, 
                        voluptatibus fugit suscipit sapiente! Dolore, veniam?</Text>
                    <Text style={{fontSize: 20, color: 'magenta'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos at nihil eaque deserunt 
                        fuga voluptatum praesentium quo magni dolor repellendus quaerat ipsam neque omnis, 
                        voluptatibus fugit suscipit sapiente! Dolore, veniam?</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default MyScrollView;