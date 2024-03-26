import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import Modal from "react-native-modal";

const CartScreen = ({ route, navigation }) => {
    const [isVisible, setVisible] = useState(false)

    const showModal = () => setVisible(true)
    const hideModal = () => setVisible(false)

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <Modal
                onBackdropPress={hideModal}
                style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', margin: 0 }}
                visible={isVisible}
                swipeDirection="down"
                onSwipeComplete={hideModal}
            >

                <View style={{ marginHorizontal:20,borderRadius:20,backgroundColor: 'white', height: 378 }}>
                    <View style={{justifyContent: 'center', alignItems: 'center',paddingHorizontal: 12.5,marginTop:40,marginLeft:88,marginRight:88,backgroundColor:'white',width:159,height:214}}>
                        <View style={{ borderRadius:200,backgroundColor:'#DFEFFF',width:134,height:134}}>
                            <Image style={{margin:24, width: 86, height: 86 }} source={require('./images/image50.png')}/>
                        </View>
                        <Text style={{ textAlign:'center',marginTop:24,color:'#1A2530',fontWeight:'bold',fontSize:20}}>
                                 Your Payment Is Succesfull
                        </Text>
                    </View>
                    <TouchableOpacity onPress={()=>{hideModal(); }}
                        style={{marginHorizontal:60,marginTop: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 50,  height: 54, backgroundColor: '#5B9EE1' }}>
                             <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Back To Shopping</Text>
                    </TouchableOpacity>
                </View>
            </Modal>


            <View style={{ borderRadius: 20, backgroundColor: 'white', marginLeft: 20, marginTop: 8, width: 205, hight: 44, justifyContent: 'space-between', flexDirection: "row" }}>

                <TouchableOpacity onPress={navigation.goBack }>
                    <Image style={{ width: 44, height: 44 }} source={require('./images/back.png')} />
                </TouchableOpacity>
                <Text style={{ fontStyle: 'Airbnb Cereal App', fontSize: 16, color: '#1A2530', fontWeight: 'bold', marginTop: 12, marginRight: 5 }}>My Cart</Text>
            </View>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ paddingHorizontal: 20, flexDirection: "row", marginTop: 24, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: "row", width: 210 }}>
                        <View >
                            <Image style={{ borderRadius: 20, width: 87, height: 85 }} source={{ uri: 'https://i5.walmartimages.com/asr/0a34ef4c-d1f5-4627-832f-e4125701d399.14cbe143d89f81352a894ddb0ef5d96a.jpeg' }} />
                        </View>

                        <View style={{ marginLeft: 16 }}>
                            <Text style={{ fontSize: 16, fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>Nike Club Max</Text>
                            <Text style={{ fontSize: 14, fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>$64.95</Text>
                            <View style={{ alignItems: 'center', width: 89, hight: 24, flexDirection: "row", marginTop: 12, justifyContent: 'space-between' }}>
                                <Image style={{ width: 24, height: 24 }} source={require('./images/Group61.png')} />
                                <Text style={{ fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>1</Text>
                                <Image style={{ width: 24, height: 24 }} source={require('./images/Group60.png')} />

                            </View>
                        </View>

                    </View>

                    <View style={{ width: 24, height: 76, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>
                            L
                        </Text>
                        <Image style={{ width: 24, height: 24 }} source={require('./images/Icon.png')} />

                    </View>

                </View>
                <View style={{ paddingHorizontal: 20, flexDirection: "row", marginTop: 24, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: "row", width: 210 }}>
                        <View >
                            <Image style={{ borderRadius: 20, width: 87, height: 85 }} source={{ uri: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/db683a69-e9ad-476b-972e-a81b8a533df9/air-max-plus-ayakkab%C4%B1s%C4%B1-Flt552.png' }} />
                        </View>

                        <View style={{ marginLeft: 16 }}>
                            <Text style={{ fontSize: 16, fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>Nike Air Max</Text>
                            <Text style={{ fontSize: 14, fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>$897.99</Text>
                            <View style={{ alignItems: 'cneter', width: 89, hight: 24, flexDirection: "row", marginTop: 12, justifyContent: 'space-between' }}>
                                <Image style={{ width: 24, height: 24 }} source={require('./images/Group61.png')} />
                                <Text style={{ fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>1</Text>
                                <Image style={{ width: 24, height: 24 }} source={require('./images/Group60.png')} />

                            </View>
                        </View>

                    </View>

                    <View style={{ width: 24, height: 76, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>
                            L
                        </Text>
                        <Image style={{ width: 24, height: 24 }} source={require('./images/Icon.png')} />

                    </View>

                </View>
                <View style={{ paddingHorizontal: 20, flexDirection: "row", marginTop: 24, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: "row", width: 210 }}>
                        <View >
                            <Image style={{ borderRadius: 20, width: 87, height: 85 }} source={{ uri: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1eac4e3d-869d-44f3-abb3-233eea2f68f1/air-jordan-1-high-og-satin-bred-ayakkab%C4%B1s%C4%B1-vLK7RL.png' }} />
                        </View>

                        <View style={{ marginLeft: 16 }}>
                            <Text style={{ fontSize: 16, fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>Nike Air Jordan</Text>
                            <Text style={{ fontSize: 14, fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>$849.69</Text>
                            <View style={{ alignItems: 'cneter', width: 89, hight: 24, flexDirection: "row", marginTop: 12, justifyContent: 'space-between' }}>
                                <Image style={{ width: 24, height: 24 }} source={require('./images/Group61.png')} />
                                <Text style={{ fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>1</Text>
                                <Image style={{ width: 24, height: 24 }} source={require('./images/Group60.png')} />

                            </View>
                        </View>

                    </View>

                    <View style={{ width: 24, height: 76, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>
                            L
                        </Text>
                        <Image style={{ width: 24, height: 24 }} source={require('./images/Icon.png')} />

                    </View>

                </View>
                <View style={{ paddingHorizontal: 20, flexDirection: "row", marginTop: 24, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: "row", width: 210 }}>
                        <View >
                            <Image style={{ borderRadius: 20, width: 87, height: 85 }} source={{ uri: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1eac4e3d-869d-44f3-abb3-233eea2f68f1/air-jordan-1-high-og-satin-bred-ayakkab%C4%B1s%C4%B1-vLK7RL.png' }} />
                        </View>

                        <View style={{ marginLeft: 16 }}>
                            <Text style={{ fontSize: 16, fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>Nike Air Jordan</Text>
                            <Text style={{ fontSize: 14, fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>$849.69</Text>
                            <View style={{ alignItems: 'cneter', width: 89, hight: 24, flexDirection: "row", marginTop: 12, justifyContent: 'space-between' }}>
                                <Image style={{ width: 24, height: 24 }} source={require('./images/Group61.png')} />
                                <Text style={{ fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>1</Text>
                                <Image style={{ width: 24, height: 24 }} source={require('./images/Group60.png')} />

                            </View>
                        </View>

                    </View>

                    <View style={{ width: 24, height: 76, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>
                            L
                        </Text>
                        <Image style={{ width: 24, height: 24 }} source={require('./images/Icon.png')} />

                    </View>

                </View>
                <View style={{ paddingHorizontal: 20, flexDirection: "row", marginTop: 24, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: "row", width: 210 }}>
                        <View >
                            <Image style={{ borderRadius: 20, width: 87, height: 85 }} source={{ uri: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1eac4e3d-869d-44f3-abb3-233eea2f68f1/air-jordan-1-high-og-satin-bred-ayakkab%C4%B1s%C4%B1-vLK7RL.png' }} />
                        </View>

                        <View style={{ marginLeft: 16 }}>
                            <Text style={{ fontSize: 16, fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>Nike Air Jordan</Text>
                            <Text style={{ fontSize: 14, fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>$849.69</Text>
                            <View style={{ alignItems: 'cneter', width: 89, hight: 24, flexDirection: "row", marginTop: 12, justifyContent: 'space-between' }}>
                                <Image style={{ width: 24, height: 24 }} source={require('./images/Group61.png')} />
                                <Text style={{ fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>1</Text>
                                <Image style={{ width: 24, height: 24 }} source={require('./images/Group60.png')} />

                            </View>
                        </View>

                    </View>

                    <View style={{ width: 24, height: 76, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>
                            L
                        </Text>
                        <Image style={{ width: 24, height: 24 }} source={require('./images/Icon.png')} />

                    </View>

                </View>
                <View style={{ paddingHorizontal: 20, flexDirection: "row", marginTop: 24, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: "row", width: 210 }}>
                        <View >
                            <Image style={{ borderRadius: 20, width: 87, height: 85 }} source={{ uri: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1eac4e3d-869d-44f3-abb3-233eea2f68f1/air-jordan-1-high-og-satin-bred-ayakkab%C4%B1s%C4%B1-vLK7RL.png' }} />
                        </View>

                        <View style={{ marginLeft: 16 }}>
                            <Text style={{ fontSize: 16, fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>Nike Air Jordan</Text>
                            <Text style={{ fontSize: 14, fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>$849.69</Text>
                            <View style={{ alignItems: 'cneter', width: 89, hight: 24, flexDirection: "row", marginTop: 12, justifyContent: 'space-between' }}>
                                <Image style={{ width: 24, height: 24 }} source={require('./images/Group61.png')} />
                                <Text style={{ fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>1</Text>
                                <Image style={{ width: 24, height: 24 }} source={require('./images/Group60.png')} />

                            </View>
                        </View>

                    </View>

                    <View style={{ width: 24, height: 76, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>
                            L
                        </Text>
                        <Image style={{ width: 24, height: 24 }} source={require('./images/Icon.png')} />

                    </View>

                </View>
                <View style={{ paddingHorizontal: 20, flexDirection: "row", marginTop: 24, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: "row", width: 210 }}>
                        <View >
                            <Image style={{ borderRadius: 20, width: 87, height: 85 }} source={{ uri: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1eac4e3d-869d-44f3-abb3-233eea2f68f1/air-jordan-1-high-og-satin-bred-ayakkab%C4%B1s%C4%B1-vLK7RL.png' }} />
                        </View>

                        <View style={{ marginLeft: 16 }}>
                            <Text style={{ fontSize: 16, fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>Nike Air Jordan</Text>
                            <Text style={{ fontSize: 14, fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>$849.69</Text>
                            <View style={{ alignItems: 'cneter', width: 89, hight: 24, flexDirection: "row", marginTop: 12, justifyContent: 'space-between' }}>
                                <Image style={{ width: 24, height: 24 }} source={require('./images/Group61.png')} />
                                <Text style={{ fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>1</Text>
                                <Image style={{ width: 24, height: 24 }} source={require('./images/Group60.png')} />

                            </View>
                        </View>

                    </View>

                    <View style={{ width: 24, height: 76, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, fontStyle: 'Airbnb Cereal App', fontWeight: 'bold', color: '#1A2530' }}>
                            L
                        </Text>
                        <Image style={{ width: 24, height: 24 }} source={require('./images/Icon.png')} />

                    </View>

                </View>
                <View style={{ height: 100 }}></View>
            </ScrollView >
            <View style={{ margin: 20, borderRadius: 20 }}>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text style={{ color: '#707B81', fontSize: 16, fontStyle: 'Airbnb Cereal App' }}>Subtotal</Text>
                    <Text style={{ fontWeight: 'bold', color: '#1A2530', fontSize: 18, fontStyle: 'Airbnb Cereal App' }}>$1250</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 16 }}>
                    <Text style={{ color: '#707B81', fontSize: 16, fontStyle: 'Airbnb Cereal App' }}>Shopping</Text>
                    <Text style={{ fontWeight: 'bold', color: '#1A2530', fontSize: 18, fontStyle: 'Airbnb Cereal App' }}>$40</Text>
                </View>
                <View style={{ paddingTop: 16, borderTopWidth: 1, borderColor: 'black', borderStyle: 'dashed', flexDirection: "row", justifyContent: 'space-between', marginTop: 24 }}>
                    <Text style={{ fontWeight: 'bold', color: '#1A2530', fontSize: 16, fontStyle: 'Airbnb Cereal App' }}>Total Cost</Text>
                    <Text style={{ fontWeight: 'bold', color: '#1A2530', fontSize: 18, fontStyle: 'Airbnb Cereal App' }}>$1690</Text>
                </View>
                <TouchableOpacity
                    onPress={showModal}
                    style={{ marginTop: 24, justifyContent: 'center', alignItems: 'center', borderRadius: 50, width: '100%', height: 54, backgroundColor: '#5B9EE1' }}
                >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Payment</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

export default CartScreen;