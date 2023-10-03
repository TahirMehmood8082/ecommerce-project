import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect, useState,useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode"
import { UserType } from "../../UserContext";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import addressStyle from '../ProjectStyles/AddressStyle'

const AddressScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const {userId,setUserId} = useContext(UserType)
  useEffect(() => {
    const fetchUser = async() => {
        const token = await AsyncStorage.getItem("authToken");
        const decodedToken = jwt_decode(token);
        const userId = decodedToken.userId;
        setUserId(userId)
    }

    fetchUser();
  },[]);
  console.log(userId)
  const handleAddAddress = () => {
      const address = {
          name,
          mobileNo,
          houseNo,
          street,
          landmark,
          postalCode
      }

      axios.post("http://localhost:8000/addresses",{userId,address}).then((response) => {
          Alert.alert("Success","Addresses added successfully");
          setName("");
          setMobileNo("");
          setHouseNo("");
          setStreet("");
          setLandmark("");
          setPostalCode("");

          setTimeout(() => {
            navigation.goBack();
          },500)
      }).catch((error) => {
          Alert.alert("Error","Failed to add address")
          console.log("error",error)
      })
  }
  return (
    <ScrollView style={addressStyle.mainScrollView}>
      <View style={addressStyle.headerView} />

      <View style={{ padding: 10 }}>
        <Text style={addressStyle.txt}>
          Add a new Address
        </Text>

        <TextInput
          placeholderTextColor={"black"}
          placeholder="India"
          style={addressStyle.txtInput}
        />

        <View style={{ marginVertical: 10 }}>
          <Text style={addressStyle.txt}>
            Full name (First and last name)
          </Text>

          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            placeholderTextColor={"black"}
            style={addressStyle.txtInput}
            placeholder="enter your name"
          />
        </View>

        <View>
          <Text style={addressStyle.txt}>
            Mobile number
          </Text>

          <TextInput
            value={mobileNo}
            onChangeText={(text) => setMobileNo(text)}
            placeholderTextColor={"black"}
            style={addressStyle.txtInput}
            placeholder="Mobile No"
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={addressStyle.txt}>
            Flat,House No,Building,Company
          </Text>

          <TextInput
            value={houseNo}
            onChangeText={(text) => setHouseNo(text)}
            placeholderTextColor={"black"}
            style={addressStyle.txtInput}
            placeholder=""
          />
        </View>

        <View>
          <Text style={addressStyle.txt}>
            Area,Street,sector,village
          </Text>
          <TextInput
            value={street}
            onChangeText={(text) => setStreet(text)}
            placeholderTextColor={"black"}
            style={addressStyle.txtInput}
            placeholder=""
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={addressStyle.txt}>Landmark</Text>
          <TextInput
            value={landmark}
            onChangeText={(text) => setLandmark(text)}
            placeholderTextColor={"black"}
            style={addressStyle.txtInput}
            placeholder="Eg near appollo hospital"
          />
        </View>

        <View>
          <Text style={addressStyle.txt}>Pincode</Text>

          <TextInput
            value={postalCode}
            onChangeText={(text) => setPostalCode(text)}
            placeholderTextColor={"black"}
            style={addressStyle.txtInput}
            placeholder="Enter Pincode"
          />
        </View>

        <Pressable
        onPress={handleAddAddress}
          style={addressStyle.addAddressBtnPress}
        >
          <Text style={addressStyle.addAddressBtnTxt}>Add Address</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({});
