import { View, Text } from 'react-native'; // Import Text from 'react-native'
import  forgotStyle from '../RegisterStyles/registerForgotPasswordStyle'

const ForgotPassword = () => { // Use capitalized name
  return (
    <View style={forgotStyle.logged}>
      <Text>keep me logged in</Text>
      <Text style={forgotStyle.forgot}>
        Forgot Password
      </Text>
    </View>
  );
};

export default ForgotPassword; // Export with capitalized name