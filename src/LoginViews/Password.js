import { View, TextInput } from 'react-native'; // Import Text from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import passwordStyle from '../LoginStyles/passwordStyle'

const Password = ({password, setPassword}) => { // Use capitalized name
  return (
    <View style={{ marginTop: 10 }}>
      <View style={passwordStyle.passwordView}>
        <AntDesign
          name="lock1"
          size={24}
          color="gray"
          style={{ marginLeft: 8 }}
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          style={passwordStyle.placeholder}
          placeholder="enter your Password"
        ></TextInput>
      </View>
    </View>
  );
};

export default Password; // Export with capitalized name