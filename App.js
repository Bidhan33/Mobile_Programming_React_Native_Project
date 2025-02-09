import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Calculator from './Components/calculator';
import History from './Components/History';
import ShoppingList from './Components/shopinglist';
import HomeScreen from './Components/Home';
import GitFinder from './Components/GitFinder';
import Recipe from './Components/Recipe';

const Tab = createBottomTabNavigator();
const CalculatorStack = createStackNavigator();


function CalculatorStackNavigator() {
  return (
    <CalculatorStack.Navigator screenOptions={{ headerShown: false }}>
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
            switch (route.name) {
              case 'Calculator':
                iconName = 'calculate';
                break;
              case 'ShoppingList':
                iconName = 'shopping-cart';
                break;
              case 'Home':
                iconName = 'home';
                break;
              case 'Git Finder':
                iconName = 'search';
                break;
              default:
                iconName = 'apps';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calculator" component={CalculatorStackNavigator} />
        <Tab.Screen name="ShoppingList" component={ShoppingList} />
        <Tab.Screen name="Git Finder" component={GitFinder} />
        <Tab.Screen name="Recipe" component={Recipe} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
