import React from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import Car from './Car';

const CarScreen = ({ route, navigation }) => {
    const { product } = route.params;
    console.log(product);
    return (
        <View style={{ padding: 20 }}>
            <Text>CarScreen</Text>
            <Car item={product} onPress={() => Alert.alert(product.name)} />
            <View style={{ backgroundColor: product.color, marginTop: 10 }}>
                <Text>color: {product.color}</Text>
            </View>

            <TouchableOpacity
                style={{ marginTop: 20, backgroundColor: 'red' }}
                onPress={() => navigation.goBack()}>
                <Text>Back</Text>
            </TouchableOpacity>

        </View>
    )
}

export default CarScreen;