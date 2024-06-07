import React from 'react';
import {  Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Details(){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Details</Text>
        </View>
    )
}

