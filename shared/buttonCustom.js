import React from 'react';
import { Text, Pressable} from 'react-native';
import { globalStyles } from '../styles/global';

export default function ButtonCustom({text, onPress}){
        return(
            <Pressable 
            onPress={onPress}
            style={({pressed})=>[
                {backgroundColor: pressed ?  '#5dc' : '#69a',
                padding:10,
                borderRadius:10,
            },
            globalStyles.button
            ]}>
           
                <Text style={globalStyles.buttonText}>{text}</Text>
     
           
        </Pressable>
        )
}