import { View, TextInput } from 'react-native'; // Import Text from 'react-native'
import React, { useState } from 'react';
import { MaterialIcons } from "@expo/vector-icons";
import emailStyle from '../LoginStyles/emailStyle';

const Email = () => { // Use capitalized name
  const [email, setEmail] = useState("");
  return (
    <View style={emailStyle.viewContainer}>
      <MaterialIcons
        style={{ marginLeft: 8 }}
        name="email"
        size={24}
        color="gray"
      />
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={emailStyle.textInput}
        placeholder="enter your Email"
      ></TextInput>
    </View>
  );
};

export default Email; // Export with capitalized name
