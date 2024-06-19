import * as React from 'react';
import { useState, useRef } from 'react'
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity, KeyboardAvoidingView, InlineTextButton, ImageBackground, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail,signOut,userCredential,currentUser} from "firebase/auth";
//import { getAnalytics, setUserProperties } from "firebase/analytics";
import { auth } from '../Firebase';
import { database } from '../Firebase';
import { getDatabase, ref, set } from "firebase/database";




export default function SignupScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();


    

    let signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              
                var user = userCredential.user;
                set(ref(database, 'users/' + user.uid), {
                    name: name,
                    email: email,
                    age: age
                });

              navigation.navigate('Home')
                // Signed in 
               
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
    });
    }

    return (
        <ImageBackground source={require('../backgroundimage.jpg')} resizeMode="cover" style={{ flex: 1 }}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{top:200,alignItems: 'center'}}>
        <Text style={{fontSize:25, color: 'white'}}>Sign Up</Text>
          <View style={{width:300, position: 'absolute', top: 50}}>
            <TextInput style={{backgroundColor:'#fff'}} placeholder="Name" value={name} onChangeText={(name) => {setName(name)}} returnKeyType="next" onSubmitEditing={() => ref_input2.current.focus()}/>
            <TextInput style={{backgroundColor:'#fff'}} placeholder="Age" value={age} onChangeText={(age) => {setAge(age)}} onSubmitEditing={() => ref_input3.current.focus()} ref={ref_input2}/>
            <TextInput style={{backgroundColor:'#fff'}} placeholder="Email" value={email} onChangeText={(email) => {setEmail(email)}} onSubmitEditing={() => ref_input4.current.focus()} ref={ref_input3}/>
            <TextInput style={{backgroundColor:'#fff'}} placeholder="Password" value={password} onChangeText={(password) => {setPassword(password)}} secureTextEntry={true} ref={ref_input4}/>
                        <Button
                            color='#696969'
                        title="Sign Up"
                        titleStyle={{ color: "white", fontSize: 50 }}
                        onPress={signUp}
            />  
        </View>
      </View>
      
            </View>
        </ImageBackground>
    )
    };

