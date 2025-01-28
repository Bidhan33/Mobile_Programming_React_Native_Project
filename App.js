import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Ensure react-native-vector-icons is installed

import Calculator from './Components/calculator';
import History from './Components/History';
import ShoppingList from './Components/shopinglist';
import HomeScreen from './Components/Home';

const Tab = createBottomTabNavigator();
const CalculatorStack = createStackNavigator();

// Add the CalculatorStackNavigator function here
function CalculatorStackNavigator() {
  return (
    <CalculatorStack.Navigator>
      <CalculatorStack.Screen name="Calculator" component={Calculator} />
      <CalculatorStack.Screen name="History" component={History} />
    </CalculatorStack.Navigator>
  );
}

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
        <Tab.Screen
          name="Calculator"
          component={CalculatorStackNavigator}
          options={{ headerShown: false }} // Hide the header for the stack
        />
        <Tab.Screen name="ShoppingList" component={ShoppingList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
