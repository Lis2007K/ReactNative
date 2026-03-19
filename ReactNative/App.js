import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ButtonScreen from './screens/ButtonScreen';
import MenuScreen from './screens/MenuScreen';
import ListScreen from './screens/ListScreen';
import StudentsScreen from './screens/StudentsScreen';
import ProfileScreen from './screens/ProfileScreen';
import BoxScreen from './screens/BoxScreen'; 
import PostsScreen from './screens/PostsScreen';
import GalleryScreen from './screens/GalleryScreen';
import CountriesScreen from './screens/CountriesScreen';
import ProductsScreen from './screens/ProductsScreen';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{
          headerTitle: 'APP',
        }}
      >
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="ButtonScreen" component={ButtonScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Students" component={StudentsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Box" component={BoxScreen} />
        <Stack.Screen name="Posts" component={PostsScreen} />
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="Countries" component={CountriesScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
