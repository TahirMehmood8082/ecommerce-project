import { Pressable, Text } from 'react-native'
import React from 'react'
import registerButtonStyle from '../RegisterStyles/registerButtonStyle'

const RegisterButton = (handleRegister) => {
  return (
    <Pressable
      onPress={handleRegister}
      style={registerButtonStyle.btn}>
      <Text
        style={registerButtonStyle.btnTxt}>
            Register
      </Text>
    </Pressable>
  )
}

export default RegisterButton 