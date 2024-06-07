import React from 'react';
import { Text, View, Pressable} from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({navigation}){
    const pressHandler=()=>{
        navigation.navigate('Details');
    }
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Home</Text>
            <Pressable 
                onPress={pressHandler}
                style={({pressed})=>[
                    {backgroundColor: pressed ? '#69a' : '#5dc',
                    padding:10,
                    borderRadius:10,
                },
                globalStyles.button
                ]}>
                <Text style={globalStyles.buttonText}>Go to Details</Text>
            </Pressable>
        </View>
    )
}

