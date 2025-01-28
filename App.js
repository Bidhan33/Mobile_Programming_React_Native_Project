import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Make sure to install react-native-vector-icons

import Calculator from './Components/calculator'; 
import ShoppingList from './Components/shopinglist';
import HomeScreen from './Components/Home';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Calculator') {
              iconName = 'calculate';
            } else if (route.name === 'ShoppingList') {
              iconName = 'shopping-cart';
            } else if (route.name === 'Home') {
              iconName = 'home';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calculator" component={Calculator} />
        <Tab.Screen name="ShoppingList" component={ShoppingList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}