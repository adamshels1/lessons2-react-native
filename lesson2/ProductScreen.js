import React from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import Product from "./Product";

const ProductScreen = ({ route, navigation }) => {
    const product = route?.params?.product;
    console.log(product);
    return (
        <View style={{ padding: 20 }}>
            <Text>CarScreen</Text>
            <Product item={product} onPress={() => Alert.alert(product.name)} />

            <TouchableOpacity
                style={{ marginTop: 20, backgroundColor: 'red' }}
                onPress={() => navigation.goBack()}>
                <Text>Back</Text>
            </TouchableOpacity>

        </View>
    )
}

export default ProductScreen;