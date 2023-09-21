import { View, TextInput } from 'react-native'; // Import Text from 'react-native'
import React, { useState } from 'react';
import { Ionicons } from "@expo/vector-icons";
import nameStyle from '../RegisterStyles/registerNameStyle';

const Name = () => { // Use capitalized name
  const [name, setName] = useState("");
  return (
    <View style={nameStyle.viewContainer}>
      <Ionicons
        name="ios-person"
        size={24}
        color={"gray"}
        marginLeft={{ marginLeft: 8 }}
      />
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        style={nameStyle.text}
        placeholder="enter your name"
      ></TextInput>
    </View>
  );
};

export default Name; // Export with capitalized name
