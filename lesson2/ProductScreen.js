import React from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity, Image } from "react-native";
import Product from "./Product";

const ProductScreen = ({ route, navigation }) => {


    return (
        <View>

            <View style={{ backgroundColor: 'gray', height: 44, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>

                <Image style={{ width: 44, height: 44 }} source={require('./images/back.png')} />

                <Text style={{ fontSize: 16, color: '#1A2530' }}>Men’s Shoes</Text>

                <Image style={{ width: 44, height: 44 }} source={require('./images/cart.png')} />

            </View>


            <View style={{ backgroundColor: 'blue', height: 202, marginTop: 16, alignItems: 'center' }}>
                <Image style={{ width: 311, height: 202 }} source={{ uri: 'https://i5.walmartimages.com/asr/0a34ef4c-d1f5-4627-832f-e4125701d399.14cbe143d89f81352a894ddb0ef5d96a.jpeg' }} />
            </View>


            <View style={{minHeight: 300, backgroundColor: 'yellow', borderRadius: 20, marginTop: 16, paddingTop: 16, paddingLeft: 20}}>

                <Text>Best Seller</Text>

                <Text>Nike Air Jordan</Text>

                <Text>$967.800</Text>

                <Text>Air Jordan is an American brand of basketball shoes athletic, casual, and style clothing produced by Nike....</Text>

            </View>


        </View>
    )

    // const product = route?.params?.product;
    // console.log(product);
    // return (
    //     <View style={{ padding: 20 }}>
    //         <Text>CarScreen</Text>
    //         <Product item={product} onPress={() => Alert.alert(product.name)} />

    //         <TouchableOpacity
    //             style={{ marginTop: 20, backgroundColor: 'red' }}
    //             onPress={() => navigation.goBack()}>
    //             <Text>Back</Text>
    //         </TouchableOpacity>

    //     </View>
    // )
}

export default ProductScreen;