import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        padding:20,
       
    },
    title:{
        fontFamily:'roboto-black',
    }

});

