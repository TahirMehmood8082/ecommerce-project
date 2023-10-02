import { View, Text } from 'react-native'; // Import Text from 'react-native'
import React from 'react';
import appTitleStyle from '../LoginStyles/appTitleStyle';

const AppTitle = () => { // Use capitalized name
  return (
    <View style={appTitleStyle.container}>
      <Text style={appTitleStyle.text}>
        Login in to your Account
      </Text>
    </View>
  );
};

export default AppTitle; // Export with capitalized name
