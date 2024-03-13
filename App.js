
import React from 'react';
import { View, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductsScreen from './lesson2/ProductsScreen';
import CarScreen from './lesson2/CarScreen';
import CartScreen from './lesson2/CartScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
        <Stack.Screen name="CarScreen" component={CarScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )

  // return (
  //   <SafeAreaView>
  //     <Products />
  //   </SafeAreaView>
  // );
};


export default App;
