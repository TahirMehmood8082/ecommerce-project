import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import AppLogo from '../LoginViews/AppLogo';
import AppTitle from "../LoginViews/AppTitle";
import Email from "../LoginViews/Email";
import Password from "../LoginViews/Password";
import ForgotPassword from "../LoginViews/ForgotPassword";
import LoginButton from "../LoginViews/LoginButton";
import SignupButton from "../LoginViews/SignupButton";
import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native'
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation()
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");

        if (token) {
          navigation.replace("Main");
        }
      } catch (err) {
        console.log("error message", err);
      }
    };
    checkLoginStatus();
  }, []);
  const handleLogin = () =>{
    console.log("Login btn pressed")
    const user = {
      email: email,
      password: password,
    }
    const serverIP = "192.168.100.25"

    axios
    .post(`http://${serverIP}:8000/login`, user)
    .then((response) => {
      console.log(`Response from mongodb: ${response}`);
      const token = response.data.token;
      AsyncStorage.setItem("authToken", token);
      navigation.replace("Main"); 
    })
    .catch((error) => {
      Alert.alert("Login Error", "Invalid Email");
      console.log(error);
    });
  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <AppLogo/>
      <KeyboardAvoidingView>
        <AppTitle/>
        <View style={{ marginTop: 70 }}>
          <Email email={email} setEmail={setEmail}/>
          <Password password={password} setPassword={setPassword}/>
        </View>
        <ForgotPassword/>
        
        <View style={{ marginTop: 80 }} />
        
        <LoginButton handleLogin={handleLogin}/>
        <SignupButton navi={navigation}/>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
