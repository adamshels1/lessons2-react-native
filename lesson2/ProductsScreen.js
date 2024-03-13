import React, { useState } from 'react';
import { View, Text, FlatList, Image, Touchable, TouchableOpacity, Platform, Alert } from 'react-native'
import Car from './Car'

const cars = [
    { name: 'mers', speed: 220, color: 'gray', image: 'https://cdn.motor1.com/images/mgl/jvjqN/s1/mercedes-e-klasse-2020.jpg' },
    { name: 'bmw', speed: 240, color: 'green', image: 'https://www.borusanotomotiv.com/Uploads/2023%20Bas%C4%B1n%20B%C3%BCltenleri/5)%20May%C4%B1s/25.05.2023/yeni-bmw-5-serisi.jpg' },
    { name: 'toyta', speed: 230, color: 'blue', image: 'https://scene7.toyota.eu/is/image/toyotaeurope/Yeni-Toyota-Corolla-1:Medium-Landscape?ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0' },
]

const ProductsScreen = ({ navigation }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const clearCart = () => {
        setCart([])
    }

    const handleOpenProduct = (item) => {
        navigation.navigate('CarScreen', { product: item })
    }

    const handleOpenCart = () => navigation.navigate('CartScreen')

    return (
        <View style={{ padding: 20 }}>
            <Text>Platform: {Platform.OS}</Text>
            <Text>Cars</Text>


            <TouchableOpacity
                style={{ backgroundColor: 'red' }}
                onPress={handleOpenCart}
            >
                <Text>Products in cart: {cart.length}</Text>
            </TouchableOpacity>



            <TouchableOpacity onPress={clearCart}>
                <Text>clear cart</Text>
            </TouchableOpacity>

            <FlatList
                data={cars}
                renderItem={({ item }) => <Car item={item} onPress={() => handleOpenProduct(item)} />}
                keyExtractor={(item) => item.name}
                ListFooterComponent={<View style={{ height: 100 }} />}
            />

            {/* <Car
                item={cars[1]}
                color='blue'
            /> */}


        </View>
    )
}

export default ProductsScreen;