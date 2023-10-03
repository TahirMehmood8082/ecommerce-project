import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import React, { useEffect, useContext, useState, useCallback } from "react";
import { Feather, AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import axios from "axios";
import { UserType } from "../../UserContext";
import addAddressStyle from '../ProjectStyles/AddAddressStyle'
import SearchInAmazon from '../components/HomeComponents/SearchInAmazon'

const AddAddressScreen = () => {
  const navigation = useNavigation();
  const [addresses, setAddresses] = useState([]);
  const { userId, setUserId } = useContext(UserType);
  console.log("userId", userId);
  useEffect(() => {
    fetchAddresses();
  }, []);
  const fetchAddresses = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/addresses/${userId}`
      );
      const { addresses } = response.data;

      setAddresses(addresses);
    } catch (error) {
      console.log("error", error);
    }
  };
  //refresh the addresses when the component comes to the focus ie basically when we navigate back
  useFocusEffect(
    useCallback(() => {
      fetchAddresses();
    }, [])
  );
  console.log("addresses", addresses);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 50 }}>
      <SearchInAmazon />

      <View style={{ padding: 10 }}>
        <Text style={addAddressStyle.yourAddressesTxt}>Your Addresses</Text>

        <Pressable
          onPress={() => navigation.navigate("Add")}
          style={addAddressStyle.addANewAddressPress}
        >
          <Text>Add a new Address</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </Pressable>

        <Pressable>
          {/* all the added adresses */}
          {addresses?.map((item, index) => (
            <Pressable style={addAddressStyle.addedAddressesListPress}>
              <View style={addAddressStyle.addedAddressesListNameView}>
                <Text style={addAddressStyle.addedAddressesListNameTxt}>
                  {item?.name}
                </Text>
                <Entypo name="location-pin" size={24} color="red" />
              </View>

              <Text style={addAddressStyle.addedAddressesListTxt}>
                {item?.houseNo}, {item?.landmark}
              </Text>

              <Text style={addAddressStyle.addedAddressesListTxt}>
                {item?.street}
              </Text>

              <Text style={addAddressStyle.addedAddressesListTxt}>
                India, Bangalore
              </Text>

              <Text style={addAddressStyle.addedAddressesListTxt}>
                phone No : {item?.mobileNo}
              </Text>

              <Text style={addAddressStyle.addedAddressesListTxt}>
                pin code : {item?.postalCode}
              </Text>

              <View style={addAddressStyle.editRemoveDefaultView}>
                <Pressable style={addAddressStyle.editRemoveDefaultPress}>
                  <Text>Edit</Text>
                </Pressable>

                <Pressable style={addAddressStyle.editRemoveDefaultPress}>
                  <Text>Remove</Text>
                </Pressable>

                <Pressable style={addAddressStyle.editRemoveDefaultPress}>
                  <Text>Set as Default</Text>
                </Pressable>
              </View>
            </Pressable>
          ))}
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default AddAddressScreen;

const styles = StyleSheet.create({});
