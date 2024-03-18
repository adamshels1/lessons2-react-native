import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Touchable, TouchableOpacity, Platform, Alert } from 'react-native'
import Product from './Product'
import axios from 'axios';

// const products = [
//     { name: 'Nike Jordan', price: 493.00, color: 'gray', image: 'https://i5.walmartimages.com/asr/0a34ef4c-d1f5-4627-832f-e4125701d399.14cbe143d89f81352a894ddb0ef5d96a.jpeg' },
//     { name: 'Nike Air Max', price: 897.99, color: 'green', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/db683a69-e9ad-476b-972e-a81b8a533df9/air-max-plus-ayakkab%C4%B1s%C4%B1-Flt552.png' },
//     { name: 'Nike Air Jordan', price: 849.69, color: 'blue', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1eac4e3d-869d-44f3-abb3-233eea2f68f1/air-jordan-1-high-og-satin-bred-ayakkab%C4%B1s%C4%B1-vLK7RL.png' },
// ]

const ProductsScreen = ({ navigation }) => {
    const [cart, setCart] = useState([])

    const [products, setProducts] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const clearCart = () => {
        setCart([])
    }


    useEffect(() => {
        getProducts()
    }, [])


    const getProducts = () => {
        axios.get('http://localhost:3000/products')
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const handleOpenProduct = (item) => {
        navigation.navigate('ProductScreen', { product: item })
    }

    const handleOpenCart = () => navigation.navigate('ProductScreen')

    return (
        <View style={{ padding: 20 }}>
            {/* <Text>Platform: {Platform.OS}</Text>
            <Text>Cars</Text>


            <TouchableOpacity
                style={{ backgroundColor: 'red' }}
                onPress={handleOpenCart}
            >
                <Text>Products in cart: {cart.length}</Text>
            </TouchableOpacity>
*/}


            <TouchableOpacity onPress={clearCart}>
                <Text>clear cart</Text>
            </TouchableOpacity> 

            <TouchableOpacity onPress={getProducts}>
                <Text>get products</Text>
            </TouchableOpacity>

            <FlatList
                data={products}
                renderItem={({ item }) => <Product item={item} onPress={() => handleOpenProduct(item)} />}
                keyExtractor={(item) => item.name}
                ListFooterComponent={<View style={{ height: 100 }} />}
                numColumns={2}
            />

            {/* <Car
                item={cars[1]}
                color='blue'
            /> */}


        </View>
    )
}

export default ProductsScreen;