import React, {useState, useEffect} from 'react';
import * as Font from 'expo-font';
import  * as SplashScreen from 'expo-splash-screen';
import Home from './screens/home';


//to prevent the splash-screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const getFonts =()=> Font.loadAsync({
    'roboto-black': require('./assets/fonts/Roboto-Black.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Black.ttf'),
    'roboto-italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf')
 
  });



export default function App() {
  // fonts state
  const [fontsLoaded, setFontsLoaded ]= useState(false);

  useEffect(()=>{
    const loadResourcesAndDataAsync=async()=>{
      try{
        //to loading fonts
        await getFonts();
      }catch(error){
        console.warm(error);
      }finally{
        setFontsLoaded(true);
        //to hide spashScreen
        SplashScreen.hideAsync();
      };
    };
    loadResourcesAndDataAsync();
  },[])

  if(!fontsLoaded){
    return null;
  }else{
    return (<Home />)
  }
 
}


