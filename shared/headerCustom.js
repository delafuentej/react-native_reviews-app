import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export const HeaderCustom=()=>{

    const openMenu= ()=>{
        // navigation.openMenu()
    }
    return(
        <View style={styles.header}>
            {/* icon */}
            <MaterialIcons style={styles.icon} name='menu'  onPress={openMenu}/>
            <View>
                <Text style={styles.headerText}></Text>
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
        size:28,
    }
});