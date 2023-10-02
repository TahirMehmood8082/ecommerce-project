import { Text, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";


import LoginStyle from '../../ProjectStyles/LoginStyle';

const AddAAddress = ({modalVisible, setModalVisible, selectedAddress }) => {
  return (
    <Pressable
      onPress={() => setModalVisible(!modalVisible)}
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        padding: 10,
        backgroundColor: "#AFEEEE",
      }}
    >
    <Ionicons name="location-outline" size={24} color="black" />

    <Pressable>
    {selectedAddress ? (
      <Text>
        Deliver to {selectedAddress?.name} - {selectedAddress?.street}
      </Text>
      ) : (
      <Text style={{ fontSize: 13, fontWeight: "500" }}>
          Add a Address
      </Text>
      )}
    </Pressable>
      <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
    </Pressable>
  )
}

export default AddAAddress 