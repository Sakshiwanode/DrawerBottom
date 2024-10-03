// App.js
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';

import ProfileScreen from './src/screens/ProfileScreen';
import React from 'react';
import SignUp from './src/screens/SignUp';

// Create Drawer and tab navigators
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const MenuTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

// Drawer Navigator: Contains menutab and ProfileScreen
function AppDrawer() {
  return (
    <Drawer.Navigator
    //  initialRouteName="MenuTab"
    // screenOptions={{drawerPosition: 'right'}}
    >
      <Drawer.Screen name="Home" component={MenuTab} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="SignUp" component={SignUp} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
}
