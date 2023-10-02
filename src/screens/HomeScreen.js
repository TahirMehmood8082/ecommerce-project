import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
 // Platform,
  ScrollView,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import React, { useState, useEffect, useCallback, useContext } from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import axios from "axios";
import ProductItem from "../components/ProductItem";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { BottomModal, SlideAnimation, ModalContent } from "react-native-modals";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserType } from "../../UserContext";
import jwt_decode from "jwt-decode";
import SearchInAmazon from '../components/HomeComponents/SearchInAmazon'
import AddAAddress from '../components/HomeComponents/AddAAddress'
import ProductsCategories from '../components/HomeComponents/ProductsCategories'
import TrendingDeals from '../components/HomeComponents/TrendingDeals'
import TodayDeals from '../components/HomeComponents/TodayDeals'
import SearchProductCategories from '../components/HomeComponents/SearchProductCategories'
import ChooseLocationBottomModal from '../components/HomeComponents/ChooseLocationBottomModal'
import { images } from '../Constants/Constants'
import homeStyle from '../ProjectStyles/HomeStyle'

const HomeScreen = () => {
 
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [category, setCategory] = useState("jewelery");
  const { userId, setUserId } = useContext(UserType);
  const [selectedAddress,setSelectedAddress] = useState("");
  console.log(selectedAddress)
  const [items, setItems] = useState([
    { label: "Men's clothing", value: "men's clothing" },
    { label: "jewelery", value: "jewelery" },
    { label: "electronics", value: "electronics" },
    { label: "women's clothing", value: "women's clothing" },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log("error message", error);
      }
    };

    fetchData();
  }, []);
  const onGenderOpen = useCallback(() => {
    setCompanyOpen(false);
  }, []);

  const cart = useSelector((state) => state.cart.cart);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    if (userId) {
      fetchAddresses();
    }
  }, [userId, modalVisible]);
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
  useEffect(() => {
    const fetchUser = async () => {
      const token = await AsyncStorage.getItem("authToken");
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.userId;
      setUserId(userId);
    };

    fetchUser();
  }, []);
  console.log("address", addresses);
  return (
    <>
      <SafeAreaView
        style={homeStyle.homeScreenSafeArea}
      >
        <ScrollView>
          <SearchInAmazon />
          <AddAAddress 
            modalVisible={modalVisible} 
            setModalVisible={setModalVisible} 
            selectedAddress={selectedAddress}
          />
          <ProductsCategories/>
          <SliderBox
            images={images}
            autoPlay
            circleLoop
            dotColor={"#13274F"}
            inactiveDotColor="#90A4AE"
            ImageComponentStyle={{ width: "100%" }}
          />
          <TrendingDeals/>
          <Text style={homeStyle.sectionsDividerLine}/>
          <TodayDeals navigation={navigation}/>
          <Text style={homeStyle.sectionsDividerLine}/>
          <SearchProductCategories 
            open={open}
            category={category}
            items={items}
            setOpen={setOpen}
            setCategory={setCategory}
            setItems={setItems}
            onGenderOpen={onGenderOpen}
            products={products}
          />
        </ScrollView>
      </SafeAreaView>

      <ChooseLocationBottomModal 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        addresses={addresses}
        setSelectedAdress={setSelectedAddress}
        selectedAddress={selectedAddress}
        navigation={navigation}
      />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
