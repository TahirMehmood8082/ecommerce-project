import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import axios from 'axios'
import { MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import RegisterImage from '../RegisterViews/registerImage'
import RegisterTitle from '../RegisterViews/registerTitle'
import Name from '../RegisterViews/registerName'
import Email from '../RegisterViews/registerEmail'
import Password from '../RegisterViews/registerPassword'
import ForgotPassword from '../RegisterViews/registerForgotPassword'
import RegisterButton from "../RegisterViews/registerButton";
import RegisterAlreadyAccount from '../RegisterViews/registerAlreadyAccount'

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();
  const handleRegister = () =>{
    const user = {
      name: name,
      email: email,
      password: password,
    }
    //send & post request to the backend API
    axios
      .post("http://localhost:8000/register", user)
      .then((respose)=>{
        console.log(respose)
        Alert.alert(
          "Registration Successfull",
          "You have registered successfully"
        )
        setName("")
        setPassword("")
        setEmail("")
      })
      .catch((error)=>{
        Alert.alert(
          "Registration Error",
          "an error occured during registration"
        )
        console.log("registration failed", error)
      })
  }
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <RegisterImage/>
      <KeyboardAvoidingView>
        <RegisterTitle/>
        <View style={{ marginTop: 70 }}>
          <Name/>
          <Email/>
          <Password/>
        </View>
        <ForgotPassword/>
        <View style={{ marginTop: 80 }} />
        <RegisterButton handleRegister={handleRegister}/>
        <RegisterAlreadyAccount/>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
