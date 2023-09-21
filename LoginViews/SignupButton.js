import { Pressable, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SignupButton = () => {
  const navigation = useNavigation()
  return (
    <Pressable onPress={() => navigation.navigate("Register") } style={{marginTop:15}}>
          <Text style={{textAlign:"center",color:"gray",fontSize:16}}>Don't have an account? Sign Up</Text>
        </Pressable>
  )
}

export default SignupButton 