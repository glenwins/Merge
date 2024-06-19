import * as React from 'react';
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import {onAuthStateChanged, GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail,signOut,userCredential,currentUser} from "firebase/auth";
import { Container, Item, Form, Input, Label } from "react-native";
import 'react-native-gesture-handler';
import { initializeApp } from "firebase/app";
import styles from '../App'
import HomeScreen    from './Home'
import { Commerce } from './Commerce'
import { Connect } from './Connect'
import { Community } from './Community'
import App from '../App'
import { auth } from '../Firebase';



export default function Startup({ navigation }) {
    onAuthStateChanged(auth,function(user) {
        if (user) {
            navigation.navigate('Home')
            //console.log(auth.currentUser.uid)
        } else {
          console.log('you are not signed in')
        }
      });
    return (
        <ImageBackground source={require('../backgroundimage.jpg')} resizeMode="cover" style={{flex:1} }>
        <View style={{ flex: 1, alignItems: 'center', borderColor: '#fff'}}>
            
            <View style={{position:'absolute',top:40,right:55} }>
                <Image style={startup.image} source={require('../baboon.png')} />
            </View>
            <View style={{ position: 'absolute', top: 330, right: 75 }}>
                <Image style={startup.image} source={require('../baboontitle.png')} />
            </View>
            <View style={{ top: 200, alignItems: 'center' }}>
                <View style={{ width: 320, position: 'absolute', top:350 }}>
                    <Button
                        color='#696969'
                        title="Login"
                        titleStyle={{ color: "white", fontSize: 50 }}
                        onPress={() => navigation.navigate('LoginScreen')}
                    />
                </View>
                <View style={{position: 'absolute', top: 390 }}>
                <TouchableOpacity
                    title="Sign Up"
                    color='transparent'
                    titleStyle={{ color: "white", fontSize: 50 }}
                    onPress={() => navigation.navigate('SignupScreen')}
                    >
                        

                    <Text style={{ fontSize: 15,color:'white' }}>Don't have an account? Signup Here</Text>
                    </TouchableOpacity>
                </View>


                </View>
                
        </View>
        </ImageBackground >
    );
}

const startup = StyleSheet.create({
    imageContainer: {
        position: 'absolute'




    },
    image: {
        alignitems: 'center',
        width: 200,
        resizeMode: 'contain',



    }






})