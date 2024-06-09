import React from 'react';
import {  Text, View, Pressable,  StyleSheet, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Details({navigation, route}){

    const {title,rating, body, img} = route.params;

   
    const pressHandler=()=>{
        navigation.goBack();
    }
    return(
        <View style={globalStyles.container}>
            <Card>
                <View style={styles.imgContainer}>
                    <Image  source={img} style={styles.img} resizeMode='cover'/>
                </View>
                <Text style={globalStyles.title}>{title}</Text>
                <Text style={globalStyles.reviewBodyText}>{body}</Text>
                <Text style={globalStyles.reviewRating}>{rating}</Text>
            </Card>
           
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

const styles = StyleSheet.create({
    imgContainer: {
            height: 300,
            width:'auto',
            backgroundColor: "gray",
    },
    img: {
       width:'100%',
       height:'100%',
       backgroundColor: "gray",
    
    }
})