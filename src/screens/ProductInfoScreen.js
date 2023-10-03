import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  ImageBackground,
  Dimensions,
} from "react-native";
import React ,{useState} from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartReducer";
import SearchInAmazon from '../components/HomeComponents/SearchInAmazon'
import productInfoStyle from '../ProjectStyles/ProductInfoStyle'
import commonStyle from '../ProjectStyles/CommonStyles'

const ProductInfoScreen = () => {
  const route = useRoute();
  const { width } = Dimensions.get("window");
  const navigation = useNavigation();
  const [addedToCart, setAddedToCart] = useState(false);
  const height = (width * 100) / 100;
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    setAddedToCart(true);
    dispatch(addToCart(item));
    setTimeout(() => {
      setAddedToCart(false);
    }, 60000);
  };
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <ScrollView
      style={productInfoStyle.mainScrollView}
      showsVerticalScrollIndicator={false}
    >
      <SearchInAmazon />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {route.params.carouselImages.map((item, index) => (
          <ImageBackground
            style={{ width, height, marginTop: 25, resizeMode: "contain" }}
            source={{ uri: item }}
            key={index}
          >
            <View style={commonStyle.spaceBetweenLeftRightItems}>
              <View style={productInfoStyle.percentOffView}>
                <Text style={productInfoStyle.percentOffTxt}>
                  20% off
                </Text>
              </View>

              <View style={productInfoStyle.socialShareView}>
                <MaterialCommunityIcons
                  name="share-variant"
                  size={24}
                  color="black"
                />
              </View>
            </View>

            <View style={productInfoStyle.wishlistView}>
              <AntDesign name="hearto" size={24} color="black" />
            </View>
          </ImageBackground>
        ))}
      </ScrollView>

      <View style={productInfoStyle.titlePriceView}>
        <Text style={productInfoStyle.titleTxt}>
          {route?.params?.title}
        </Text>

        <Text style={productInfoStyle.priceTxt}>
          ₹{route?.params?.price}
        </Text>
      </View>

      <Text style={productInfoStyle.dividerLine} />

      <View style={productInfoStyle.colorSizeView}>
        <Text>Color: </Text>
        <Text style={productInfoStyle.colorSizeTxt}>
          {route?.params?.color}
        </Text>
      </View>

      <View style={productInfoStyle.colorSizeView}>
        <Text>Size: </Text>
        <Text style={productInfoStyle.colorSizeTxt}>
          {route?.params?.size}
        </Text>
      </View>

      <Text style={productInfoStyle.dividerLine} />

      <View style={{ padding: 10 }}>
        <Text style={productInfoStyle.totalPriceTxt}>
          Total : ₹{route.params.price}
        </Text>
        <Text style={productInfoStyle.freeDelivery}>
          FREE delivery Tomorrow by 3 PM.Order within 10hrs 30 mins
        </Text>

        <View style={productInfoStyle.locationView}>
          <Ionicons name="location" size={24} color="black" />

          <Text style={productInfoStyle.locationTxt}>
            Deliver To Sujan - Bangalore 560019
          </Text>
        </View>
      </View>

      <Text style={productInfoStyle.inStockTxt}>
        IN Stock
      </Text>

      <Pressable
        onPress={() => addItemToCart(route?.params?.item)}
        style={productInfoStyle.addToCartBtnPress}
      >
        {addedToCart ? (
          <View>
            <Text>Added to Cart</Text>
          </View>
        ) : (
          <Text>Add to Cart</Text>
        )}
      </Pressable>

      <Pressable style={productInfoStyle.buyNowBtnPress}>
        <Text>Buy Now</Text>
      </Pressable>
    </ScrollView>
  );
};

export default ProductInfoScreen;

const styles = StyleSheet.create({});
