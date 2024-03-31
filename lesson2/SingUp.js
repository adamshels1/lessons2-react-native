import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Touchable, TouchableOpacity, Platform, SafeAreaView, TextInput, Alert } from 'react-native'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux';
import { loginAction } from './store/userActions';



const SingUp = ({ navigation }) => {
    const [isVisible, setVisible] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const togleassword = () => {
        if (isVisible === true) {
            setVisible(false)
        } else {
            setVisible(true)
        }
    }

    // const storeData = async () => {
    //     try {
    //     //   await AsyncStorage.setItem(
    //     //     'token',
    //     //     'sdfsldkfj324324',
    //     //   );

    //     const value = await AsyncStorage.getItem('token');
    //     console.log('value', value);
    //     } catch (error) {
    //       console.log('error', error)
    //     }
    //   };

    const singIn = async () => {
        

       

        console.log('email', email)
        console.log('password', password)

        try {
            const response = await axios.get('http://localhost:3000/signin', {
                email: email,
                password: password
            });

            // Добавьте здесь обработку ответа, в зависимости от вашего API
            console.log(response.data);

            // await AsyncStorage.setItem(
            //     'token',
            //     response.data.token,
            // );

            dispatch(loginAction())

            navigation.navigate('ProductsScreen')

        } catch (error) {
            // Обработайте ошибку здесь
            Alert.alert('Ошибка при авторизации:')
            console.error('Ошибка при авторизации:', error);
        }
    }

    return (<View>
        <View style={{ marginLeft: 20, marginTop: 8 }}>
            <TouchableOpacity onPress={navigation.goBack}>
                <Image style={{ width: 44, height: 44 }} source={require('./images/back.png')} />
            </TouchableOpacity>
        </View>
        <View style={{ marginTop: 32, marginHorizontal: 64, height: 67 }}>
            <Text style={{ fontWeight: '500', textAlign: 'center', color: '#1A2530', fontSize: 28 }}>Create Account</Text>
            <Text style={{ textAlign: 'center', color: '#707B81', fontSize: 16 }}>Let's Create Account Together</Text>
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 50, height: 300 }}>
            {/* <Text style={{fontWeight:'500',fontSize:16,color:'#1A2530'}}>Your name</Text>
                    <TextInput style={{marginTop:12,height:48,backgroundColor:'white',borderRadius:20}} placeholder='Alisson Becker'/> */}
            <Text style={{ fontWeight: '500', marginTop: 30, fontSize: 16, color: '#1A2530' }}>Email Address</Text>

            <TextInput
                style={{ marginTop: 12, height: 48, backgroundColor: 'white', borderRadius: 20, marginTop: 12 }}
                placeholder='alissonbecker@gmail.com'
                value={email}
                onChangeText={(text) => setEmail(text)}
            />

            <Text style={{ fontWeight: '500', marginTop: 30, fontSize: 16, color: '#1A2530' }}>Password</Text>
            <View style={{ backgroundColor: 'white', borderRadius: 20, marginTop: 12 }}>
                <TextInput
                    style={{ fontWeight: '500', width: 300, height: 48, backgroundColor: 'white', borderRadius: 20 }}
                    secureTextEntry={isVisible}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity onPress={() => { togleassword() }} style={{ top: 12, right: 14, position: 'absolute' }}>
                    <Image style={{ width: 20, height: 16 }} source={require('./images/Vector.png')} />
                </TouchableOpacity>
            </View>


        </View>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
            <TouchableOpacity onPress={() => singIn()}

                style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 50, height: 54, backgroundColor: '#5B9EE1' }}>
                <Text style={{ fontWeight: '500', color: 'white', fontSize: 18 }}>Sing In</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ flexDirection: "row", justifyContent: 'center', marginTop: 30, alignItems: 'center', borderRadius: 50, width: '100%', height: 54, backgroundColor: 'white' }}>
                <Image style={{ right: 8, width: 24, height: 24 }} source={require('./images/Group108.png')} />
                <Text style={{ fontWeight: '500', color: '#1A2530', fontSize: 18 }}>Sing In with google</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 94, marginTop: 30 }}>
            <Text style={{ color: '#707B81', fontSize: 12 }}>
                Allreade have an Account?<Text style={{ color: '#1A2530', fontSize: 12 }}>Sign In</Text>
            </Text>
        </TouchableOpacity>
    </View>)

};


export default SingUp;