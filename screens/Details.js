import React from 'react';
import {  Text, View, Pressable } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Details({navigation, route}){

    const {title,rating, body} = route.params;

   
    const pressHandler=()=>{
        navigation.goBack();
    }
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>{title}</Text>
            <Text style={globalStyles.reviewBodyText}>{body}</Text>
            <Text style={globalStyles.reviewRating}>{rating}</Text>
            <Pressable 
                onPress={pressHandler}
                style={({pressed})=>[
                    {backgroundColor: pressed ? '#69a' : '#5dc',
                    padding:10,
                    borderRadius:10,
                },
                globalStyles.button
                ]}>
                <Text style={globalStyles.buttonText}>Go to Home</Text>
            </Pressable>
        </View>
    )
}

