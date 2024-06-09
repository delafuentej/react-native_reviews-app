import React from 'react';
import {  Text, View, Pressable,  StyleSheet, Image, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { Rating } from 'react-native-stock-star-rating';

export default function Details({navigation, route}){

    const {title,rating, body, img} = route.params;

   
    const pressHandler=()=>{
        navigation.goBack();
    }
    return(
        <ImageBackground source={require('../assets/img/bgImage2.png')} style={globalStyles.container}>
            <Card>
                <View style={globalStyles.imgContainer}>
                    <Image  source={img} style={globalStyles.img} resizeMode='cover'/>
                </View>
                <Text style={globalStyles.title}>{title}</Text>
                <Text style={globalStyles.reviewBodyText}>{body}</Text>
                <View style={globalStyles.rating}>
                    <Text style={globalStyles.reviewRating}>GameZone rating: </Text>
                    <Text style={globalStyles.ratingNumber}>{rating}/5</Text>
                    <Rating
                      stars={rating}
                      maxStars={5}
                      size={25}
                    />
                </View>
 
               
            </Card>
           
            <Pressable 
                onPress={pressHandler}
                style={({pressed})=>[
                    {backgroundColor: pressed ? '#5dc' : '#69a',
                    padding:10,
                    borderRadius:10,
                },
                globalStyles.button
                ]}>
                <Text style={globalStyles.buttonText}>Go to Home</Text>
            </Pressable>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    
})