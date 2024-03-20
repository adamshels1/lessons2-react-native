
import React from 'react';
import { View, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductsScreen from './lesson2/ProductsScreen';
import ProductScreen from './lesson2/ProductScreen';
import CartScreen from './lesson2/CartScreen';
// import Home from './src/screens/Home'


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen}options={{headerShown: false}} />
        <Stack.Screen name="CartScreen" component={CartScreen} options={{headerShown: false}}/>
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
