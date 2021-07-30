import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Activity from '../../screens/Activity';
import Login from '../../screens/Login';
import Splash from '../../screens/Splash';
import {AuthContext} from '../../components/context';

const Stack = createStackNavigator();
const RootStackScreen = () => {
  const {signIn} = React.useContext(AuthContext);
  return(
  <NavigationContainer>
    {console.log("Root Stack")}
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{title: 'Splash'}}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        options={{title: 'Login'}}
        options={{headerShown: false}}
        component={Login}
      />

      <Stack.Screen
        name="Activity"
        // component={Activity}
        options={{headerShown: false}}
        component={Activity}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
};
export default RootStackScreen;
