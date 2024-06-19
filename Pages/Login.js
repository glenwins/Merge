import * as React from 'react';
import { useState, useRef  } from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Container, Item, Form, Input, Label } from "react-native";
import 'react-native-gesture-handler';
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail,signOut,userCredential,currentUser} from "firebase/auth";
import {getFirestore,query,getDocs,collection,where,addDoc} from "firebase/firestore";
import { auth } from '../Firebase';


export default function LoginScreen({navigation}) {
    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const Login = async () => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigation.navigate('Home')
      } catch(error) {
        console.log(error.message);
      }
    }
    return (
        <ImageBackground source={require('../backgroundimage.jpg')} resizeMode="cover" style={{ flex: 1 }}>
      <View style={{flex: 1, alignItems: 'center',borderColor: '#fff'}}>
        <View style={{top:200,alignItems: 'center'}}>
          <Text style={{fontSize:40,color:'white'}}>Login</Text>
          <View style={{width:300, position:'absolute',top:60}}>
          <TextInput style={{backgroundColor:'#fff'}} placeholder="Email" value={email} onChangeText={(email) => {setEmail(email)}} returnKeyType="next" onSubmitEditing={() => ref_input2.current.focus()}/>
          <TextInput style={{backgroundColor:'#fff'}} placeholder="Password" value={password} onChangeText={(password) => {setPassword(password)}} secureTextEntry={true} returnKeyType="next" 
            ref={ref_input2}/>
          <Button
                            color='#696969'
                  title="Login"
                  titleStyle={{color:"#696969",fontSize:50}}
                  onPress={Login}
                />  
        </View>
        </View>
        
            </View>
            </ImageBackground>
    );
    }

    