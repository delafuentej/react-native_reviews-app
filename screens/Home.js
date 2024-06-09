import React, {useState} from 'react';
import { Text, View, Pressable, FlatList, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import uuid4 from 'uuid4';


export default function Home({navigation}){
    const [reviews, setReviews] = useState([
        {title: 'God of War Ragnarök', rating: 5, body:'Absolutely the best game in the video game industry right now', key: uuid4(), img : require('../assets/img/gowr.png')},
        {title: 'Gran Turismo 7', rating: 3.5, body:'Sufficient as a racing game, it is just not up to scratch.', key: uuid4(), img : require('../assets/img/gt7.jpg')},
        {title: 'Final Fantasy VII', rating: 4.9, body:'This game is simply a masterpiece.', key: uuid4(),  img : require('../assets/img/ff7.png')},
        {title: 'Red Dead Redemption 2', rating: 4, body:'Beautifully designed, eventful and bug-free open world. The basic principle is likeable, but good. ', key: uuid4(),  img : require('../assets/img/rdr2.png')},
        {title: 'DOOM Eternal', rating: 2, body:'Just pure filth! Opponents are impossible to defeat after a certain time.', key: uuid4(),  img : require('../assets/img/de.png')},
        {title: 'The Last of Us Part II', rating: 4.3, body:'It is rare that a sequel comes close to the first part, if not better! ', key: uuid4(),  img : require('../assets/img/tlou2.png')},
    ])

    const pressHandler=()=>{
        navigation.push('Details');
    }
    return(
        <View style={globalStyles.container}>
          <FlatList
            data={reviews}
            renderItem={({item})=>(
                <TouchableOpacity
                    onPress={()=> navigation.navigate('Details', item)}
                >
                    {/* <Text style={globalStyles.title}>{item.title}</Text> */}
                    <Card>
                        <Text style={globalStyles.title}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )}
          
          />
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

