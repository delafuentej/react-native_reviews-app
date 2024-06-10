import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About(){
    return(
        <ImageBackground source={require('../assets/img/bgImage2.png')}  resizeMode='cover' style={globalStyles.container}>
            <Text style={globalStyles.title}>About</Text>
        </ImageBackground>
    )
}



