import { View, Image } from 'react-native'
import React from 'react'

const AppLogo = () => {
  return (
    <View>
        <Image
          style={{ white: 150, height: 100 }}
          source={{
            url: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
          }}
        />
      </View>
  )
}

export default AppLogo 