import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'

const Product = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={{ width: 157, height: 201, backgroundColor: 'white', margin: 5, flexDirection: 'column', padding: 10, borderRadius: 10 }}>

            <Image source={{ uri: item.image }} style={{ width: 137, height: 97 }} />


            <Text style={{ fontWeight: '300', color: '#5B9EE1', fontSize: 12, marginTop: 12 }}>
                Best Seller
            </Text>

            <Text style={{ fontWeight: '800', color: '#1A2530', fontSize: 16, marginTop: 4 }}>
                {item.name}
            </Text>

            <Text style={{ fontWeight: '300', color: '#1A2530', fontSize: 14, marginTop: 12 }}>
                ${item.price}
            </Text>

            <Image
                style={{ width: 34, height: 35.5, position: 'absolute', right: 0, bottom: 0 }}
                source={require('./images/Group107.png')}
            />


            {/* <Text style={{ fontWeight: '800', color: '#471471', fontSize: 20 }}>{item.name}</Text> */}
            {/* <Text style={{ fontWeight: '800', color: '#471471', fontSize: 20 }}>{item.name}</Text> */}
            {/*<Text>speed: {item.speed}</Text>  */}

        </View>
    </TouchableOpacity>
)

export default Product