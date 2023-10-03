import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incementQuantity,
  removeFromCart,
} from "../redux/CartReducer";
import { useNavigation } from "@react-navigation/native";
import SearchInAmazon from '../components/HomeComponents/SearchInAmazon'
import cartStyle from '../ProjectStyles/CartStyle'
import CommonStyles from '../ProjectStyles/CommonStyles'

const CartScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const total = cart
    ?.map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  const dispatch = useDispatch();
  const increaseQuantity = (item) => {
    dispatch(incementQuantity(item));
  };
  const decreaseQuantity = (item) => {
    dispatch(decrementQuantity(item));
  };
  const deleteItem = (item) => {
    dispatch(removeFromCart(item));
  };
  const navigation = useNavigation();
  return (
    <ScrollView style={cartStyle.mainScrollView}>
      <SearchInAmazon />

      <View style={cartStyle.subtotalMainView}>
        <Text style={cartStyle.subtotalTxt}>Subtotal : </Text>
        <Text style={cartStyle.subtotalValue}>{total}</Text>
      </View>
      <Text style={{ marginHorizontal: 10 }}>EMI details Available</Text>

      <Pressable
        onPress={() => navigation.navigate("Confirm")}
        style={cartStyle.BuyBtn}>
        <Text>Proceed to Buy ({cart.length}) items</Text>
      </Pressable>

      <Text style={ CommonStyles.sectionsDividerLine}/>

      <View style={{ marginHorizontal: 10 }}>
        {cart?.map((item, index) => (
          <View
            style={cartStyle.cartItemsSubView}
            key={index}
          >
            <Pressable style={cartStyle.cartItemsInStockPress}>
              <View>
                <Image
                  style={cartStyle.cartItemsInStockImg}
                  source={{ uri: item?.image }}
                />
              </View>

              <View>
                <Text 
                  numberOfLines={3} 
                  style={cartStyle.cartItemsInStockTitle}
                >
                  {item?.title}
                </Text>
                <Text
                  style={cartStyle.cartItemsInStockPrice}
                >
                  {item?.price}
                </Text>
                <Image
                  style={cartStyle.cartItemsInStockImg2}
                  source={{
                    uri: "https://assets.stickpng.com/thumbs/5f4924cc68ecc70004ae7065.png",
                  }}
                />
                <Text style={{ color: "green" }}>In Stock</Text>
                {/* <Text style={cartStyle.cartItemsInStockRating}>
                  {item?.rating?.rate} ratings
                </Text> */}
              </View>
            </Pressable>

            <Pressable style={cartStyle.cartItemsQuantityPress}>
              <View style={cartStyle.cartItemsQuantitySubView}>
                {item?.quantity > 1 ? (
                  <Pressable
                    onPress={() => decreaseQuantity(item)}
                    style={cartStyle.cartItemsDecreaseQuantity}
                  >
                    <AntDesign name="minus" size={24} color="black" />
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => deleteItem(item)}
                    style={cartStyle.cartItemsDelete}
                  >
                    <AntDesign name="delete" size={24} color="black" />
                  </Pressable>
                )}

                <Pressable style={cartStyle.cartItemsQuantitySubPress}>
                  <Text>{item?.quantity}</Text>
                </Pressable>

                <Pressable
                  onPress={() => increaseQuantity(item)}
                  style={cartStyle.cartItemsIncreaseQuantity}
                >
                  <Feather name="plus" size={24} color="black" />
                </Pressable>
              </View>
              <Pressable
                onPress={() => deleteItem(item)}
                style={cartStyle.cartItemsDelete2}
              >
                <Text>Delete</Text>
              </Pressable>
            </Pressable>

            <Pressable style={cartStyle.cartItemsSaveMorePress}>
              <Pressable style={cartStyle.cartItemsSaveForLaterPress}>
                <Text>Save For Later</Text>
              </Pressable>

              <Pressable style={cartStyle.cartItemsMorePress} >
                <Text>See More Like this</Text>
              </Pressable>
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
