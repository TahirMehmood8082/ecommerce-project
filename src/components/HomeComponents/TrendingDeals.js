import { Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import {deals} from '../../Constants/Constants'

import LoginStyle from '../../ProjectStyles/LoginStyle';

const TrendingDeals = () => {
  return (
    <>
      <Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>
        Trending Deals of the week
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {deals.map((item, index) => (
          <Pressable
            onPress={() =>
              navigation.navigate("Info", {
                id: item.id,
                title: item.title,
                price: item?.price,
                carouselImages: item.carouselImages,
                color: item?.color,
                size: item?.size,
                oldPrice: item?.oldPrice,
                item: item,
              })
            }
            style={{
              marginVertical: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 180, height: 180, resizeMode: "contain" }}
              source={{ uri: item?.image }}
            />
          </Pressable>
        ))}
      </View>
    </>
  )
}

export default TrendingDeals 