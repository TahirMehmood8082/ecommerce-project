import { ScrollView, Pressable, Image, Text } from 'react-native'
import React from 'react'
import {list} from '../../Constants/Constants'

import LoginStyle from '../../ProjectStyles/LoginStyle';

const ProductsCategories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {list.map((item, index) => (
        <Pressable
          key={index}
          style={{
            margin: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 50, height: 50, resizeMode: "contain" }}
            source={{ uri: item.image }}
          />

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 5,
            }}
          >
            {item?.name}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  )
}

export default ProductsCategories 