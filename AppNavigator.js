
import { Provider, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react';
import { store } from './lesson2/store/store'
import { View, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductsScreen from './lesson2/ProductsScreen';
import ProductScreen from './lesson2/ProductScreen';
import CartScreen from './lesson2/CartScreen';
import SingUp from './lesson2/SingUp';
// import Home from './src/screens/Home'
import AsyncStorage from '@react-native-async-storage/async-storage'



const Stack = createNativeStackNavigator();

const AppNavigator = () => {

  // const [token, setToken] = useState(null);



  // useEffect(() => {
  //   AsyncStorage.getItem('token').then((value) => {
  //     setToken(value)
  //   })
  // }, [token])


  const isSignedIn = useSelector(state => state.userData.isSignedIn)



  if (isSignedIn) {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
            <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SingUp" component={SingUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
};


export default AppNavigator;
