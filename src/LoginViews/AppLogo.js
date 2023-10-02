import { View, Image, SafeAreaView } from 'react-native'
import React from 'react'

const AppLogo = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
        <Image
          style={{ width: 150, height: 100 }}
          source={require('../../assets/images/app-logo.png')}
        />
      </SafeAreaView>
  )
}

export default AppLogo 