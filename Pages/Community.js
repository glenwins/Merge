import * as React from 'react';
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import { Container, Item, Form, Input, Label } from "react-native";
import 'react-native-gesture-handler';



export default function Community() {
    return (
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: '#fff', borderColor: '#fff', borderWidth: 10, }}>
            <Text>Community</Text>
        </View>
    );
}