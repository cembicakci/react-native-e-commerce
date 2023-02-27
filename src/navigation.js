import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductScreen from './screens/ProductScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import ShoppingCart from './screens/ShoppingCart';

import { FontAwesome5 } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

function Navigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    contentStyle: { backgroundColor: '#fff' }
                }}
            >
                <Stack.Screen
                    name="Product"
                    component={ProductScreen}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={{ flexDirection: 'row' }}
                                onPress={() => { navigation.navigate('ShoppingCart') }}
                            >
                                <FontAwesome5 name={'shopping-cart'} size={16} color={'gray'} />
                                <Text style={{ marginLeft: 5, fontWeight: '500' }}>1</Text>
                            </TouchableOpacity>
                        )
                    })}
                />
                <Stack.Screen
                    name="ProductDetail"
                    component={ProductDetailScreen}
                    options={{
                        presentation: 'modal'
                    }}
                />
                <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;