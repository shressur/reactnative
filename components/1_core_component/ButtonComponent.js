/* CORE COMPONENT:
"<Button />" one of the basic component in react native
"Button component" is self closing component with "title" prop for display text
"Button component" is has very limited suppport for styling
*/

import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

const MyButtonComponent = () => {
    const [luckyNum, setLuckyNum] = useState("N/A")

    const generateLuckyNumber = () =>{
        let num = Math.floor(Math.random()*100) +1
        setLuckyNum(num)
    }

    return(
        <View>
            <h2>Button Component</h2>
            <Text style={{fontSize: 20}}>Find out your lucky number</Text>
            <Text style={{fontSize: 20}}>{ luckyNum }</Text>
            <View style={{flexDirection: 'row'}}>
                <View style={{margin: 5}}>
                    <Button 
                        title='Show me'
                        onPress= { generateLuckyNumber }
                        color='hotpink'
                    />
                </View>
                <View style={{margin: 5}}>
                    <Button 
                        title='Disabled button!'
                        color='black'
                        disabled = {true}
                    />
                </View>
            </View>
            
        </View>
    )
}

export default MyButtonComponent;