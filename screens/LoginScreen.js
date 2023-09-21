import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import AppLogo from '../LoginViews/AppLogo';
import AppTitle from "../LoginViews/AppTitle";
import Email from "../LoginViews/Email";
import Password from "../LoginViews/Password";
import ForgotPassword from "../LoginViews/ForgotPassword";
import LoginButton from "../LoginViews/LoginButton";
import SignupButton from "../LoginViews/SignupButton";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native'
const loginScreen = () => {

  //const navigation = useNavigation()
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <AppLogo/>
      <KeyboardAvoidingView>
        <AppTitle/>
        <View style={{ marginTop: 70 }}>
          <Email/>
          <Password/>
        </View>
        <ForgotPassword/>
        
        <View style={{ marginTop: 80 }} />
        
        <LoginButton/>
        <SignupButton/>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default loginScreen;

const styles = StyleSheet.create({});
