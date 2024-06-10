import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

export const HeaderCustom=({title})=>{
   

    return(
        <View style={styles.header}>
            {/* icon */}
            <Entypo style={styles.icon} name='game-controller'/>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    header: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height: '100%',
        backgroundColor: '#69a',
       
    },
    headerText: {
        fontWeight: 'bold',
        fontSize:20,
        color:'white',
        letterSpacing:1,
    },
    icon: {
        position: 'absolute',
        left:16,
        fontSize:25,
        color:'white',
    }
});