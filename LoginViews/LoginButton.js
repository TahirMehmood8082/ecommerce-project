import { Pressable, Text } from 'react-native'
import React from 'react'
import loginButtonStyle from '../LoginStyles/loginButtonStyle'

const LoginButton = () => {
  return (
    <Pressable style={loginButtonStyle.btn}>
      <Text style={loginButtonStyle.btnTxt}>
        Login
      </Text>
    </Pressable>
  )
}

export default LoginButton 