import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailsScreen from '../screens/DetailScreen';
import CartScreen from '../screens/CartScreen'


const Stack = createNativeStackNavigator();

const HomeStackNavigator = () =>
    (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen
                name='Inicio' component={HomeScreen}
                
            />
            <Stack.Screen
                name='Detalle' component={DetailsScreen}
                
            />
            <Stack.Screen
                name='Cart' component={CartScreen}
                
            />
        </Stack.Navigator>
    )


export default HomeStackNavigator
