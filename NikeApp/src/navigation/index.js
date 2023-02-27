import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsScreen from '../screens/ProductsScreen.js';
import ProductDetailScreen from '../screens/ProductDetailScreen.js';
import ShoppingCartScreen from '../screens/ShoppingCartScreen.js';


const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ShoppingCartScreen" component={ShoppingCartScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ProductsScreen" component={ProductsScreen} options={{ headerShown: false }} />
            
        </Stack.Navigator>
    );
}

export default MyStack;