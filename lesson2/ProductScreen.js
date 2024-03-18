import React from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity, Image } from "react-native";
import Product from "./Product";

const ProductScreen = ({ route, navigation }) => {
    const handleOpenCart = () => navigation.navigate('CartScreen');

    return (
        <View>

            <View style={{  height: 44, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>

                    <Image style={{ width: 44, height: 44 }} source={require('./images/back.png')} />

                    <Text style={{ fontSize: 20, color: '#1A2530',fontWeight:'bold', }}>Men’s Shoes</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('CartScreen')}>
                    <Image style={{ width: 44, height: 44 }} source={require('./images/cart.png')} />
                </TouchableOpacity>

            </View>


            <View style={{  height: 202, marginTop: 16, alignItems: 'center' }}>
                <Image style={{ borderRadius:20,width: 311, height: 202 }} source={{ uri: 'https://i5.walmartimages.com/asr/0a34ef4c-d1f5-4627-832f-e4125701d399.14cbe143d89f81352a894ddb0ef5d96a.jpeg'}}/>
            </View>


            <View style={styles.view3}>

                <Text style={styles.text}>BEST SELLER</Text>

                <Text style={styles.text2}>Nike Air Jordan</Text>

                <Text style={styles.text3}>$967.800</Text>

                <Text style={styles.text4}>Air Jordan is an American brand of basketball shoes athletic, casual, and style clothing produced by Nike....</Text>

            </View>
            <View style={{borderRadius:20,backgroundColor:'white',marginTop:16,flexDirection:"row",justifyContent:'space-between',paddingHorizontal:20}}>
                <View style={{height:60}}>
                        <Text style={{color:'#707B81',fontSize:16,fontFamily: 'Airbnb Cereal App',marginBottom:8}}>Price </Text>
                        <Text style={{color:'#1A2530',fontSize:20,fontFamily: 'Airbnb Cereal App'}}>$1000</Text>
                </View>
                    <TouchableOpacity style={{fontSize: 22,fontFamily: 'Airbnb Cereal App',borderRadius:50,backgroundColor:'#5B9EE1',height:60,width:167,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'white',fontSize: 18,fontFamily: 'Airbnb Cereal App'}}>Add to Card</Text>
                    </TouchableOpacity>
            </View>


        </View>
    )

   
}

export default ProductScreen;


const styles = StyleSheet.create({
    view3:{
        fontFamily: 'Airbnb Cereal App',
        minHeight: 300,
        backgroundColor: 'yellow',
        borderRadius: 20,
        marginTop: 16,
        paddingTop: 16,
        paddingLeft: 20,
        backgroundColor: '#FFFFFF'
    },
    text:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#5B9EE1',
        fontFamily: 'Airbnb Cereal App',
    },
    text2:{
        fontSize: 24,
        color:'#1A2530'
    },
    text3:{
        fontSize: 20,
        color:'#1A2530'
    },
    text4:{
        fontSize:24,
        color:'#707B81'
    },
    text5:{

    }

    
})