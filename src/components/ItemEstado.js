import {View, Text, StyleSheet} from 'react-native'
export default function ItemEstado(props){
    return(
        <View style={styles.item}>
            <Text style={styles.textItem}>
                {props.estado.capital} - ({props.estado.digla})
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#00ff32',
        padding: 10,
        borderRadius: 10,
        margin: 5,
    },
    textItem:{
        color: '#fff',
    },
});