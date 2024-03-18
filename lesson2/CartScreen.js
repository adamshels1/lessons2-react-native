import React from "react";
import { Text, View ,Image} from "react-native";

const CartScreen = ({ route, navigation }) => {
    return (
        <View>
            <View style={{ borderRadius:20,backgroundColor:'white',marginLeft:20,marginTop:8,width:205,hight:44,justifyContent:'space-between',flexDirection:"row" }}>
                <Image style={{ width: 44, height: 44 }} source={require('./images/back.png')} />
                <Text style={{ fontStyle:'Airbnb Cereal App',fontSize: 16, color: '#1A2530',fontWeight:'bold',marginTop:12,marginRight:5 }}>My Cart</Text>
            </View>

            <View style={{paddingHorizontal:20,flexDirection:"row", marginTop:24,justifyContent:'space-between'}}>
                <View style={{flexDirection:"row",width:210}}>
                    <View >
                        <Image style={{ borderRadius:20,width: 87, height: 85}} source={{ uri: 'https://i5.walmartimages.com/asr/0a34ef4c-d1f5-4627-832f-e4125701d399.14cbe143d89f81352a894ddb0ef5d96a.jpeg'}} />
                    </View>

                    <View style={{marginLeft:16}}>
                        <Text style={{fontSize:16,fontStyle:'Airbnb Cereal App',fontWeight:'bold',color: '#1A2530'}}>Nike Club Max</Text>
                        <Text style={{fontSize:14,fontStyle:'Airbnb Cereal App',fontWeight:'bold',color: '#1A2530'}}>$64.95</Text>
                        <View style={{alignItems:'cneter',width:89,hight:24,flexDirection:"row",marginTop:12,justifyContent:'space-between'}}>
                            <Image style={{ width: 24, height: 24 }} source={require('./images/Group61.png')} />
                            <Text  style={{fontStyle:'Airbnb Cereal App',fontWeight:'bold',color: '#1A2530'}}>1</Text>
                            <Image style={{ width: 24, height: 24 }} source={require('./images/Group60.png')} />
                    
                        </View>
                    </View>

                </View>

                <View style={{width:24,height:76,justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontSize: 14,fontStyle:'Airbnb Cereal App',fontWeight:'bold',color: '#1A2530'}}>
                        L
                    </Text>
                    <Image style={{ width: 24, height: 24 }} source={require('./images/Icon.png')} />
                    
                </View>

            </View>
        </View>
        
    )
}

export default CartScreen;