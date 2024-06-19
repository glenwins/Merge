import * as React from 'react';
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity, TouchableHighlight, Pressable, ScrollView  } from 'react-native';
import { Container, Item, Form, Input, Label } from "react-native";
import 'react-native-gesture-handler';
import EditProfile from './EditProfile'
import { database } from '../Firebase';
import { getDatabase, ref, set,onValue, get } from "firebase/database";
import { auth } from '../Firebase';
import {onAuthStateChanged, GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail,signOut,userCredential,currentUser} from "firebase/auth";


export default function Profile({navigation}) {
    onAuthStateChanged(auth,function(user) {
        if (user) {
            //console.log(auth.currentUser.uid)
        } else {
          console.log('you are not signed in')
          navigation.navigate('LoginScreen')
        }
      });
      
      var [name, setName] = useState('');
    var [hobby1, setHobby1] = useState(''); 
    var [hobby2, setHobby2] = useState(''); 
    var [hobby3, setHobby3] = useState(''); 
    var [hobby4, setHobby4] = useState(''); 
    var [hobby5, setHobby5] = useState(''); 
    var [hobby6, setHobby6] = useState(''); 
    var [hobby7, setHobby7] = useState(''); 
    var [hobby8, setHobby8] = useState(''); 
    var [hobby9, setHobby9] = useState(''); 
    var [hobby10, setHobby10] = useState(''); 
      
        const tasksRef = ref(database, "users/" + auth.currentUser.uid + '/name');
        get(tasksRef)
        .then((snapshot) => {
            const data = snapshot.val();
            setName(data);
            console.log(data);
        })
        .catch((err) => {
            console.error(err);
        }); 
        const hobbyRef1 = ref(database, "users/" + auth.currentUser.uid + '/hobbies/hobbies/0/label');
        get(hobbyRef1)
        .then((snapshot) => {
            const data1 = snapshot.val();
            setHobby1(data1);
        })
        .catch((err) => {
            console.error(err);
        }); 
        const hobbyRef2 = ref(database, "users/" + auth.currentUser.uid + '/hobbies/hobbies/1/label');
        get(hobbyRef2)
        .then((snapshot) => {
            const data2 = snapshot.val();
            setHobby2(data2);
        })
        .catch((err) => {
            console.error(err);
        }); 
        const hobbyRef3 = ref(database, "users/" + auth.currentUser.uid + '/hobbies/hobbies/2/label');
        get(hobbyRef3)
        .then((snapshot) => {
            const data3 = snapshot.val();
            setHobby3(data3);

        })
        .catch((err) => {
            console.error(err);
        }); 
        const hobbyRef4 = ref(database, "users/" + auth.currentUser.uid + '/hobbies/hobbies/3/label');
        get(hobbyRef4)
        .then((snapshot) => {
            const data4 = snapshot.val();
            setHobby4(data4);
        })
        .catch((err) => {
            console.error(err);
        }); 
        const hobbyRef5 = ref(database, "users/" + auth.currentUser.uid + '/hobbies/hobbies/4/label');
        get(hobbyRef5)
        .then((snapshot) => {
            const data5 = snapshot.val();
            setHobby5(data5);
        })
        .catch((err) => {
            console.error(err);
        }); 
        const hobbyRef6 = ref(database, "users/" + auth.currentUser.uid + '/hobbies/hobbies/5/label');
        get(hobbyRef6)
        .then((snapshot) => {
            const data6 = snapshot.val();
            setHobby6(data6);
        })
        .catch((err) => {
            console.error(err);
        }); 
        const hobbyRef7 = ref(database, "users/" + auth.currentUser.uid + '/hobbies/hobbies/6/label');
        get(hobbyRef7)
        .then((snapshot) => {
            const data7 = snapshot.val();
            setHobby7(data7);
        })
        .catch((err) => {
            console.error(err);
        }); 
        const hobbyRef8 = ref(database, "users/" + auth.currentUser.uid + '/hobbies/hobbies/7/label');
        get(hobbyRef8)
        .then((snapshot) => {
            const data8 = snapshot.val();
            setHobby8(data8);
        })
        .catch((err) => {
            console.error(err);
        }); 
        const hobbyRef9 = ref(database, "users/" + auth.currentUser.uid + '/hobbies/hobbies/8/label');
        get(hobbyRef9)
        .then((snapshot) => {
            const data9 = snapshot.val();
            setHobby9(data9);
        })
        .catch((err) => {
            console.error(err);
        }); 
        const hobbyRef10 = ref(database, "users/" + auth.currentUser.uid + '/hobbies/hobbies/9/label');
        get(hobbyRef10)
        .then((snapshot) => {
            const data10 = snapshot.val();
            setHobby10(data10);
        })
        .catch((err) => {
            console.error(err);
        }); 
    return (
        
        <View style={{ flex: 1,  backgroundColor: '#fff',}}>
            
            <View style={profile.imageContainer}>
            
                <Image style={profile.image} source={require('../profiletemp.jpg')} />
                
                <TouchableOpacity style={profile.editProfile} onPress={() => navigation.navigate('EditProfile')}>
                    <View style={profile.imageContainer}>
                        <Image style={profile.editProfileImage} source={require('../button.png')} />
                        <Text style={profile.editProfileText}>Edit Profile</Text>
                    </View>
                </TouchableOpacity>
                <View style={{position: 'absolute', top:55}}>
                    <Text style={{fontSize: 45, top:170, fontWeight:'bold'}}>{name}</Text>
                </View>
            </View>
            
            <View style={{top:350, right:270, position:'absolute'}}>
                
                <Text style={{fontWeight:'bold', fontSize: 20} }>Hobbies:</Text>
                </View>
                <View style={{top:370, position:'absolute'}}>
                <Text style={{fontWeight:'bold', fontSize: 20} }>{hobby1}, {hobby2}, {hobby3}, {hobby4}, {hobby5}, {hobby6}, {hobby7}, {hobby8}, {hobby9}, {hobby10}</Text>
                </View>
                
            </View>
            
    )
}

const profile = StyleSheet.create({
    imageContainer: {

        alignItems: 'center',
        width: '100%',
        height: '100%',

    },
    image:{
        width: '50%',
        height: '50%',
        resizeMode:'contain'

    },
    editProfile: {
        top: 280,
        width: '60%',
        height: '10%',
        resizeMode: "contain",
        position:'absolute',
        
    },
    editProfileImage: {
        width: '100%',
        height: '100%'
    },
    editProfileText: {
        position: 'absolute',
        top: 17,
        color: '#fff',
        fontWeight: 'bold',


    }
    

})