import * as React from 'react';
import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity, TouchableHighlight, Pressable, SafeAreaView, ScrollView  } from 'react-native';
import { Container, Item, Form, Input, Label } from "react-native";
import 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import storage from "../Firebase"
import { uploadBytes } from 'firebase/storage';
import { getDatabase, ref, set,onValue, get } from "firebase/database";
import DropDownPicker from 'react-native-dropdown-picker';
import { auth } from '../Firebase';
import {onAuthStateChanged, GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail,signOut,userCredential,currentUser} from "firebase/auth";
import { database } from '../Firebase';


export default function EditProfile({navigation}) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Acting', value: 'acting'},
        {label: 'Baseball', value: 'baseball'},
        {label: 'Basketball', value: 'basketball'},
        {label: 'Beekeeping', value: 'beekeeping'},
        {label: 'Camping', value: 'camping'},
        {label: 'Coding', value: 'coding'},
        {label: 'Cooking', value: 'cooking'},
        {label: 'Dancing', value: 'dancing'},
        {label: 'Drawing', value: 'drawing'},
        {label: 'Football', value: 'football'},
        {label: 'Gaming', value: 'gaming'},
        {label: 'Hiking', value: 'hiking'},
        {label: 'Painting', value: 'painting'},
        {label: 'Photography', value: 'photography'},
        {label: 'Singing', value: 'singing'},
        {label: 'Soccer', value: 'soccer'},
        {label: 'Weightlifting', value: 'weightlifting'},

        
    ]);

    onAuthStateChanged(auth,function(user) {
        if (user) {
            //console.log(auth.currentUser.uid)
        } else {
          console.log('you are not signed in')
          navigation.navigate('LoginScreen')
        }
      });
      
      const [name, setName] = useState('');

      
        const tasksRef = ref(database, "users/" + auth.currentUser.uid + '/name');
        get(tasksRef)
        .then((snapshot) => {
            const data = snapshot.val();
            setName(data);
            console.log(data);
            return data;
        })
        .catch((err) => {
            console.error(err);
        }); 
    

      

    return (
        
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff',}}>
            <View style={editprofile.imageContainer}>
                <TouchableOpacity style={editprofile.imageButton}>
                    <Image style={editprofile.image} source={require('../profiletemp.jpg')} />
                </TouchableOpacity>
                <View style={{top: 330 }} alignItems= 'center'>
                    <Text style={{fontSize: 55 }}>{name}</Text>
                    <View style={{width:300}}>
                        <DropDownPicker 
                        schema={{
                            label: 'label', // required
                            value: 'value', // required
                            icon: 'icon',
                            parent: 'parent',
                            selectable: 'selectable',
                            disabled: 'disabled',
                            testID: 'testID',
                            containerStyle: 'containerStyle',
                            labelStyle: 'labelStyle'
                        
                        }}
                        maxHeight={550}
                        placeholder={'Select up to 10 hobbies'}
                        multipleText={'You have selected hobbies'}
                        listMode="MODAL"
                        searchable={true}
                        dropDownDirection='down'
                        multiple={true}
                        min={0}
                        max={10}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        onSelectItem={(item) => {
                            console.log(item);
                            set(ref(database, 'users/' + auth.currentUser.uid + '/hobbies'), {
                                hobbies: item
                            });
                          }}
                        />
                    </View>
                </View>
            </View>
            
        </View>

    )
}

const editprofile = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    image:{
        width: '100%',
        height: '100%'

    },
    imageButton: {
        top: 70,
        width: '60%',
        height: '30%',
        resizeMode: "contain",
        position:'absolute',
    },
    

})
