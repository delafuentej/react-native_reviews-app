import React, {useState} from 'react';
import { StyleSheet,Text, TextInput, View, Pressable, ImageBackground} from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../styles/global';

export default function Form({addReview}){

    return(
        <ImageBackground source={require('../assets/img/bgImage2.png')} resizeMode='cover' style={globalStyles.container}>
            <Formik
                initialValues={{title:'', body:'', rating:'', img:''}}
                onSubmit={(values/* , actions */)=>{
                    // actions.resetForm();
                   addReview(values);
                }}
            >
                {(props)=> (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />

                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder='Body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            inputMode='numeric'
                        />

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Img'
                            onChangeText={props.handleChange('img')}
                            value={props.values.img}
                        />
                         <Pressable 
                            onPress={props.handleSubmit}
                            style={({pressed})=>[
                                {backgroundColor: pressed ?  '#5dc' : '#69a',
                                padding:10,
                                borderRadius:10,
                                },
                                globalStyles.button
                                ]}>
                            <Text style={globalStyles.buttonText}>Submit</Text>
                        </Pressable>

                    </View>
                )}

            </Formik>
        </ImageBackground>
    )

};