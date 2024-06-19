import * as React from 'react';
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, Button, TextInput,TouchableOpacity } from 'react-native';
import { Container, Item, Form, Input, Label } from "react-native";
import 'react-native-gesture-handler';
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail,signOut} from "firebase/auth";
import {getFirestore,query,getDocs,collection,where,addDoc} from "firebase/firestore";
import firebase from 'firebase/compat/app';
import { getAnalytics } from "firebase/analytics";
import SignupScreen from './Pages/Signup'
import LoginScreen from './Pages/Login'
import HomeScreen from './Pages/Home'
import Startup from './Pages/Startup'
import Community from './Pages/Community'
import Commerce from './Pages/Commerce'
import Connect from './Pages/Connect'
import Profile from './Pages/Profile'
import CalendarScreen from './Pages/Calendar'
import Explore from './Pages/Explore'
import EditProfile from './Pages/EditProfile'



export default function App() {
    const Stack = createStackNavigator();
    
  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName="Startup" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Startup" component={Startup} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Community" component={Community} />
        <Stack.Screen name="Connect" component={Connect} />
        <Stack.Screen name="Commerce" component={Commerce} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    top:30, 
    width: 166,
    height: 202,
    resizeMode: 'stretch'
  },
  buttonSize: {
    width: 113,
  },
  title:{
    fontSize: 50
  },
  rowButtons:{
    flex: 1,
    flexWrap: "wrap",
    flexDirection: 'row',
    top:325,
  }
});


