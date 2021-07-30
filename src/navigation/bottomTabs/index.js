import * as React from 'react';
import {View, Text, Image, BackHandler, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Activity from '../../screens/Activity';
import Customize from '../../screens/Customize';
import Cart from '../../screens/Cart';

const Tab = createBottomTabNavigator();

const customTabBarStyle = {
  showIcon: true,
  showLabel: true,
  lazyLoad: true,
  style: {
    backgroundColor: 'transparent',
    backgroundColor: '#FFFF00',
    borderTopWidth: 0,
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 20,
    height: 60,
    borderRadius: 20,
  },
  activeTintColor: 'red',

  inactiveTintColor: 'black',
  // inactiveTintColor: 'transparent',
  // activeColor: 'red',
  // style: {backgroundColor: 'yellow', borderTopWidth: 0, bottom: 0},
};
const bottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Menu"
      tabBarOptions={customTabBarStyle}
      shifting="false">
      <Tab.Screen
        name="Menu"
        options={{
          tabBarLabel: 'Menu',
          activeColor: 'green',
          tabBarIcon: ({color}) => (
            <View>
              <Image
                style={{
                  position: 'relative',
                  height: 30,
                  width: 30,
                  // borderRadius: 68,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={require('../../assets/Home.png')}
              />
            </View>
          ),
        }}
        component={Activity}
      />
      {/* screen name = Notification */}

      <Tab.Screen
        name="Customize"
        options={{
          tabBarLabel: 'Customize',
          tabBarIcon: ({color}) => (
            <View>
              <Image
                style={{
                  // backgroundColor: color,
                  // position: 'absolute',
                  bottom: 0, // space from bottombar
                  height: 30,
                  width: 30,
                  // borderRadius: 68,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={require('../../assets/wolf.jpg')}
              />
            </View>
          ),
        }}
        component={Customize}
      />

      <Tab.Screen
        name="Cart"
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color}) => (
            <View>
              <Image
                style={{
                  height: 30,
                  width: 30,
                  // borderRadius: 68,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={require('../../assets/CartActive.png')}
              />
            </View>
          ),
        }}
        component={Cart}
      />
    </Tab.Navigator>
  );
};
export default bottomTabs;
