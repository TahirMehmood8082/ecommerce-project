import { Pressable, Text } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const RegisterAlreadyAccount = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.goBack()}
      style={{ marginTop: 15 }}>
      <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
        Already have an account? Sign In
      </Text>
    </Pressable>
  )
}

export default RegisterAlreadyAccount 