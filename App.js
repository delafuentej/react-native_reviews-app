import React, {useState, useEffect} from 'react';

import * as Font from 'expo-font';
import  * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { enableScreens } from 'react-native-screens';
import 'react-native-gesture-handler';


import Home from './screens/home';
import Details from './screens/details';
import About from './screens/about';
import HeaderCustom from './shared/headerCustom';




//to improve performance
enableScreens();

//to prevent the splash-screen from auto-hiding
SplashScreen.preventAutoHideAsync();
// google-fonts 
const getFonts =()=> Font.loadAsync({
    'roboto-black': require('./assets/fonts/Roboto-Black.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Black.ttf'),
    'roboto-italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf')
 
  });

const HomeStack= createStackNavigator();


const HomeStackScreen=()=>{
  return(
    <HomeStack.Navigator  initialRouteName="Home">
          <HomeStack.Screen  
            name="GameZone" 
            component={Home}
            //  options={{
            //    header: (props) => <HeaderCustom {...props} />
            //  }}
            />
          <HomeStack.Screen  
            name="Details" 
            component={Details} 
            // options={{
            //   header: () => <HeaderCustom />
            // }}
            />
    </HomeStack.Navigator>

  )
}
const Drawer = createDrawerNavigator();

const DrawerNavigator=()=>{
  return(
    <Drawer.Navigator 
      initialRouteName='HomeStack'
      screenOptions={{
                drawerStyle: {
                  marginTop:60,
                  flexDirection:'column',
                  alignItems:'center',
                  alignContent:'center',
                  width:'100%',
                  height: '100%',
                  backgroundColor: '#69a',
                 
                },
               drawerLabelStyle: {
                  color:'white',
                 
                },
            }}
      >
      <Drawer.Screen name='Home' component={HomeStackScreen} />
      <Drawer.Screen name='About' component={About} />
    </Drawer.Navigator>
  )
}


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
    return (
      <NavigationContainer >
        <DrawerNavigator/>
      </NavigationContainer>
    
  )
    ;
  }
 
}


