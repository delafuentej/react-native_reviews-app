import React, {useState, useEffect} from 'react';

import * as Font from 'expo-font';
import  * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from "@react-navigation/native";
// import { DrawerNavigator } from './routes/drawerNavigator';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './screens/home';
import Details from './screens/details';
import About from './screens/about';
import { HeaderCustom } from './shared/headerCustom';
import 'react-native-gesture-handler';


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


// HomeNavigator
const HomeStack= createStackNavigator();

function HomeNavigator(){
    return(
      <HomeStack.Navigator  initialRouteName="Home">
            <HomeStack.Screen  
              name="GameZone" 
              component={Home}
               options={{
                headerTitle: (props) => <HeaderCustom title='GameZone' navigation={navigation}/>
               }}
              />
            <HomeStack.Screen  
              name="Details" 
              component={Details} 
               options={{
                 header: () => <HeaderCustom title='Details' navigation={navigation}/>
               }}
              />
      </HomeStack.Navigator>
    )
  }

// DrawerNavigator

const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return(
    <Drawer.Navigator 
      initialRouteName='HomeStack'
      // options={{ header: () => <HeaderCustom />}}
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
      <Drawer.Screen name='Home' component={HomeNavigator} />
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


