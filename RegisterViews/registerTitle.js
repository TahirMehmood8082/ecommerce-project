import { View, Text } from 'react-native'; // Import Text from 'react-native'
import React from 'react';
import registerTitleStyle from '../RegisterStyles/registerTitleStyle';

const RegisterTitle = () => { // Use capitalized name
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={registerTitleStyle.text}>
        Register to your Account{" "}
      </Text>
    </View>
  );
};

export default RegisterTitle; // Export with capitalized name
