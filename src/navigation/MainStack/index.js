import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import bottomTabs from '../bottomTabs';
// import Tab2 from './src/navigation/Tab2/Tab2'
import RootStackScreen from '../RootStack';
import Activity from '../../screens/Activity';
import Login from '../../screens/Login';
import Splash from '../../screens/Splash';

const Stack = createStackNavigator();
function MainStack() {
  return (
    <NavigationContainer>
      
{console.log("Main")}
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
          name="Splash"
          component={Splash}
          options={{title: 'Splash'}}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
          options={{headerShown: false}}
        /> */}
     
        <Stack.Screen
          name="Home"
          component={bottomTabs}
          options={{title: 'Home'}}
          options={{headerShown: false}}
        />
        
   <Stack.Screen
          name="Activity"
          component={Activity}
          // component={Activity}
          options={{headerShown: false}}
        />
        {/* 
         />
         <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }}
          options={{headerShown: false}}
         /> 
      
         <Stack.Screen name="More" component={More} options={{ title: 'More' }}
          options={{headerShown: false}}
         /> */}
        {/* For bundles to share on different screen */}
        {/*  <Stack.Screen name="Killjoy" component={Killjoy} options={{ title: 'Kill Joy' }}
          options={{ headerTitle: props => <MyHeader {...props} /> }}
          options={({ route }) => ({ title: route.params.title })}

        />
        <Stack.Screen name="Agent" component={Agent} options={{ title: 'Agent' }}
          options={({ route }) => ({ title: route.params.agentName })}

        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
