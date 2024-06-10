import React, {useState} from 'react';
import { Text,StyleSheet, View, Pressable, FlatList,TouchableWithoutFeedback, Keyboard, ImageBackground, Modal} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { globalStyles } from '../styles/global';
import ButtonCustom from '../shared/buttonCustom';
import Card from '../shared/card';
import Form from './form';
import uuid4 from 'uuid4';



export default function Home({navigation}){
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        {title: 'God of War Ragnarök', rating: 5, body:'Absolutely the best game in the video game industry right now', key: uuid4(), img : require('../assets/img/gowr.png')},
        {title: 'Gran Turismo 7', rating: 3.5, body:'Sufficient as a racing game, it is just not up to scratch.', key: uuid4(), img : require('../assets/img/gt7.jpg')},
        {title: 'Final Fantasy VII', rating: 4.9, body:'This game is simply a masterpiece.', key: uuid4(),  img : require('../assets/img/ff7.png')},
        {title: 'Red Dead Redemption 2', rating: 4, body:'Beautifully designed, eventful and bug-free open world. The basic principle is likeable, but good. ', key: uuid4(),  img : require('../assets/img/rdr2.png')},
        {title: 'DOOM Eternal', rating: 2, body:'Just pure filth! Opponents are impossible to defeat after a certain time.', key: uuid4(),  img : require('../assets/img/de.png')},
        {title: 'The Last of Us Part II', rating: 4.3, body:'It is rare that a sequel comes close to the first part, if not better! ', key: uuid4(),  img: require('../assets/img/tlou2.png')},
    ]);

    const addReview= (review)=>{
        review.key= uuid4();
        setReviews((currentReviews)=>{
            return [ review, ...currentReviews];
        });
        setModalOpen(false);
    }

    const pressHandler=()=>{
        navigation.push('Details');
    }
    return(
        <ImageBackground source={require('../assets/img/bgImage2.png')} resizeMode='cover' style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='fade'>
                {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
                <View style={styles.modalContent}>
                    <MaterialIcons 
                        style={{...styles.modalToggle, ...styles.modalClose}}
                        name='close' 
                        size={24} 
                        onPress={()=> setModalOpen(false)}
                />
                    <Form addReview={addReview}/>
                </View>
                {/* </TouchableWithoutFeedback> */}
            </Modal>

            <MaterialIcons 
                style={styles.modalToggle}
                name='add' 
                size={24} 
                onPress={()=> setModalOpen(true)}
                />

          <FlatList
            data={reviews}
            renderItem={({item})=>(
                <Pressable
                    onPress={()=> navigation.navigate('Details', item)}
                >
                    {/* <Text style={globalStyles.title}>{item.title}</Text> */}
                    <Card>
                        <Text style={globalStyles.title}>{item.title}</Text>
                    </Card>
                </Pressable>
            )}
          
          />
          <ButtonCustom 
            text='Go to Details'
            onPress={pressHandler}
          />
            {/* <Pressable 
                onPress={pressHandler}
                style={({pressed})=>[
                    {backgroundColor: pressed ?  '#5dc' : '#69a',
                    padding:10,
                    borderRadius:10,
                },
                globalStyles.button
                ]}>
                <Text style={globalStyles.buttonText}>Go to Details</Text>
            </Pressable> */}
        </ImageBackground>
    )
}

const styles= StyleSheet.create({
    modalToggle: {
        marginBottom:10,
        borderWidth:1,
        borderColor: 'gray',
        padding: 10,
        borderRadius:10,
        alignSelf: 'center',
        backgroundColor:'#69a',
        color: 'white',
    },
    modalClose: {
        marginTop:20,
        marginBottom:0,
    },
    modalContent: {
        flex:1,
    }
})