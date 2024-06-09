import { createDrawerNavigator } from "@react-navigation/drawer";
import {HomeNavigator} from "./homeNavigator"; 
import {HeaderCustom} from '../shared/headerCustom'
import About from "../screens/about";


const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
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
