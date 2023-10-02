import { Pressable, Text } from 'react-native'
import React from 'react'

const SignupButton = ({navi}) => {
  return (
    <Pressable onPress={() => navi.navigate("Register") } style={{marginTop:15}}>
      <Text style={{textAlign:"center",color:"gray",fontSize:16}}>Don't have an account? Sign Up</Text>
    </Pressable>
  )
}

export default SignupButton 