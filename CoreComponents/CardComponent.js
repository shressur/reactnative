import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'

const CardComponent = ({card_title, card_subtitle, card_body, card_footer}) => {
    return(
        <View style={{ backgroundColor: 'white', borderRadius: 15, marginTop: 10, padding: 15}}>
            <View>
                <View>
                    <Text style={styles.cardTitle}>
                        {card_title}
                    </Text>
                    <Text style={styles.cardSubtitle}>
                        {card_subtitle}
                    </Text>
                </View>
                <View>
                    <Text style={styles.cardBoy}>
                        {card_body}
                    </Text>
                </View>
                <View>
                    <Text style={styles.cardFooter}>
                        {card_footer}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default CardComponent;

const styles = StyleSheet.create({
    cardTitle: {
        width: '100%',
        backgroundColor: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10,
        paddingBottom: 0,
        textAlign: 'left',
        marginTop: 5
    },
    cardSubtitle: {
        width: '100%',
        backgroundColor: 'white',
        fontSize: 20,
        fontWeight: 'light',
        padding: 10,
        paddingTop: 0,
        textAlign: 'left'
    },
    cardBoy: {
        width: '100%',
        backgroundColor: 'white',
        fontSize: 25,
        padding: 10,
        textAlign: 'left'
    },
    cardFooter: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'right'
    }
})