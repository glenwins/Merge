import * as React from 'react';
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, Button, TextInput,TouchableOpacity } from 'react-native';
import { Container, Item, Form, Input, Label } from "react-native";
import 'react-native-gesture-handler';
import {GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail,signOut,userCredential,onAuthStateChanged, currentUser} from "firebase/auth";
import styles from "../app.json"
import SignupScreen from "./Signup"
import { getDatabase } from "firebase/database";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Commerce from './Commerce'
import Connect from './Connect'
import Community from './Community'
import Profile from './Profile'
import Icon from 'react-native-vector-icons/Ionicons';
import CalendarScreen from './Calendar'
import Explore from './Explore'


export default function HomeScreen({navigation}) {
    const Tab = createBottomTabNavigator();


    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#000',
            inactiveTintColor: '#000',
            activeBackgroundColor: '#696969',
            inactiveBackgroundColor: '#a9a9a9',
            showLabel: false,
            style: {
                backgroundColor: '#CE4418',
                paddingBottom: 6
            },
            
        }}>
           
            
            <Tab.Screen name="CalendarScreen" component={CalendarScreen} options={{
                tabBarIcon: () => (
                    <Image source={require('../calendar.png')} style={bottonIcons.calendar}></Image>
                ),
            }} />
            <Tab.Screen name="Explore" component={Explore} options={{
                tabBarIcon: () => (
                    <Image source={require('../arrow.png')} style={bottonIcons.arrow}></Image>
                ),
            }} />
            <Tab.Screen name="Connect" component={Connect} options={{
                tabBarIcon: () => (
                    <Image source={require('../home.png')} style={bottonIcons.home}></Image>
                ),
            }} />
            <Tab.Screen name="Commerce" component={Commerce} options={{
                tabBarIcon: () => (
                    <Image source={require('../suitcase.png')} style={bottonIcons.suitcase}></Image>
                ),
            }} />
            
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: () => (
                    <Image source={require('../profile.png')} style={bottonIcons.profile}></Image>
                ),
            }}
               />

        </Tab.Navigator>
    
      
    );
  
}

const bottonIcons = StyleSheet.create({
    suitcase: {
        flex: 1,
        width: 30,
        resizeMode: 'contain',
    },
    home: {
        flex: 1,
        width: 35,
        resizeMode: 'contain',
    },
    calendar: {
        flex: 1,
        width: 30,
        resizeMode: 'contain',
    },
    arrow: {
        flex: 1,
        width: 30,
        resizeMode: 'contain',
    },
    profile: {
        flex: 1,
        width: 30,
        resizeMode: 'contain',
    },


})