import React from 'react';
import { Text, TextInput, View,  ImageBackground} from 'react-native';
import ButtonCustom from '../shared/buttonCustom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { globalStyles } from '../styles/global';

const ReviewSchema = Yup.object({
    title: Yup.string()
        .min(4, 'Too Short')
        .max(30, 'Too Long!')
        .required('Required'),
    body: Yup.string()
        .min(8, 'Too Short')
        .max(50, 'Too Long!')
        .required('Required'),
    rating: Yup.string()
        .required('Required!')
        .test('is-num-1-5', 'Rating must be a number 1-5', (val)=> {
            return parseInt(val)< 6 && parseInt(val) > 0;
        }),
    img: Yup.string()
        .url('Img must be a valid URL')
        .matches(/\.(jpeg|jpg|gif|png)$/, 'Must be a URL of an image (jpeg, jpg, gif, png)')
        .required('Required')
})

export default function Form({addReview}){

    return(
        <ImageBackground source={require('../assets/img/bgImage2.png')} resizeMode='cover' style={globalStyles.container}>
            <Formik
                initialValues={{title:'', body:'', rating:'', img:''}}
                validationSchema={ReviewSchema}
                onSubmit={(values/* , actions */)=>{
                    // actions.resetForm();
                   addReview(values);
                }}
            >
                {(props)=> (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Title´s game"
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorTextInput}>{ props.touched.title && props.errors.title}</Text>

                        <TextInput
                            multiline 
                            minHeight={80}
                            style={globalStyles.input}
                            placeholder='Please introduce your review'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                         <Text style={globalStyles.errorTextInput}>{props.touched.body && props.errors.body}</Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            inputMode='numeric'
                            onBlur={props.handleBlur('rating')}
                        />
                         <Text style={globalStyles.errorTextInput}>{props.touched.rating && props.errors.rating}</Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Url image is required:.jpeg, .jpg, .gif, .png'
                            onChangeText={props.handleChange('img')}
                            onBlur={props.handleBlur('img')}
                            value={props.values.img}
                        />
                         <Text style={globalStyles.errorTextInput}>{props.touched.img && props.errors.img}</Text>


                        <ButtonCustom
                            text='Submit'
                            onPress={props.handleSubmit}

                        />

                        
                         {/* <Pressable 
                            onPress={props.handleSubmit}
                            style={({pressed})=>[
                                {backgroundColor: pressed ?  '#5dc' : '#69a',
                                padding:10,
                                borderRadius:10,
                                },
                                globalStyles.button
                                ]}>
                            <Text style={globalStyles.buttonText}>Submit</Text>
                        </Pressable> */}

                    </View>
                )}

            </Formik>
        </ImageBackground>
    )

};