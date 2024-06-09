import React from 'react';
import { StyleSheet,Text, View } from 'react-native';

export default function Card(props){
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    card: {
        borderRadius: 8,
        elevation: 3,
        backgroundColor: '#69a',
        shadowOffset: {width: 2, height: 2},
        shadowColor: 'gray',
        shadowOpacity: 0.4,
        shadowRadius:2,
        color: 'white',
        marginBottom:5,
        padding:4,

    },
    cardContent:{
        marginHorizontal:10,
        marginVertical:10,

    }
})