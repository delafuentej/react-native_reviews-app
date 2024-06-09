import {Home} from '../screens/home';
import {Details} from '../screens/details';
import { HeaderCustom } from '../shared/headerCustom';
import { createStackNavigator } from '@react-navigation/stack';

export const HomeStack= createStackNavigator();


export default function HomeNavigator(){
    return(
      <HomeStack.Navigator  initialRouteName="Home">
            <HomeStack.Screen  
              name="GameZone" 
              component={Home}
            //    options={{
            //      header: () => <HeaderCustom />
            //    }}
              />
            <HomeStack.Screen  
              name="Details" 
              component={Details} 
            //    options={{
            //      header: () => <HeaderCustom />
            //    }}
              />
      </HomeStack.Navigator>
    )
  }