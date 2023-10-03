import { StyleSheet, Text, View, ScrollView, Pressable,Alert } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserType } from "../../UserContext";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { cleanCart } from "../redux/CartReducer";
import { useNavigation } from "@react-navigation/native";
import RazorpayCheckout from "react-native-razorpay";
import confirmationStyle from '../ProjectStyles/ConfirmationStyle'

const ConfirmationScreen = () => {
  const steps = [
    { title: "Address", content: "Address Form" },
    { title: "Delivery", content: "Delivery Options" },
    { title: "Payment", content: "Payment Details" },
    { title: "Place Order", content: "Order Summary" },
  ];
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(0);
  const [addresses, setAddresses] = useState([]);
  const { userId, setUserId } = useContext(UserType);
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    ?.map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
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
  const dispatch = useDispatch();
  const [selectedAddress, setSelectedAdress] = useState("");
  const [option, setOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const handlePlaceOrder = async () => {
    try {
      const orderData = {
        userId: userId,
        cartItems: cart,
        totalPrice: total,
        shippingAddress: selectedAddress,
        paymentMethod: selectedOption,
      };

      const response = await axios.post(
        "http://localhost:8000/orders",
        orderData
      );
      if (response.status === 200) {
        navigation.navigate("Order");
        dispatch(cleanCart());
        console.log("order created successfully", response.data);
      } else {
        console.log("error creating order", response.data);
      }
    } catch (error) {
      console.log("errror", error);
    }
  };
  const pay = async () => {
    try {
      const options = {
        description: "Adding To Wallet",
        currency: "INR",
        name: "Amazon",
        key: "rzp_test_E3GWYimxN7YMk8",
        amount: total * 100,
        prefill: {
          email: "void@razorpay.com",
          contact: "9191919191",
          name: "RazorPay Software",
        },
        theme: { color: "#F37254" },
      };

      const data = await RazorpayCheckout.open(options);

      console.log(data)

      const orderData = {
        userId: userId,
        cartItems: cart,
        totalPrice: total,
        shippingAddress: selectedAddress,
        paymentMethod: "card",
      };

      const response = await axios.post(
        "http://localhost:8000/orders",
        orderData
      );
      if (response.status === 200) {
        navigation.navigate("Order");
        dispatch(cleanCart());
        console.log("order created successfully", response.data);
      } else {
        console.log("error creating order", response.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <ScrollView style={confirmationStyle.mainScrollView}>
      <View style={confirmationStyle.subView}>
        <View style={confirmationStyle.subSubView}>
          {steps?.map((step, index) => (
            <View style={confirmationStyle.stepsMainView}>
              {index > 0 && (
                <View
                  style={[
                    { flex: 1, height: 2, backgroundColor: "green" },
                    index <= currentStep && { backgroundColor: "green" },
                  ]}
                />
              )}
              <View
                style={[
                  confirmationStyle.selectedStepView,
                  index < currentStep && { backgroundColor: "green" },
                ]}
              >
                {index < currentStep ? (
                  <Text
                    style={confirmationStyle.selectedStepTxt}
                  >
                    &#10003;
                  </Text>
                ) : (
                  <Text
                    style={confirmationStyle.selectedStepTxt}
                  >
                    {index + 1}
                  </Text>
                )}
              </View>
              <Text style={confirmationStyle.selectedStepTitle}>
                {step.title}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {currentStep == 0 && (
        <View style={confirmationStyle.currentStepsMainView}>
          <Text style={confirmationStyle.selectDeliveryAddressTxt}>
            Select Delivery Address
          </Text>

          <Pressable>
            {addresses?.map((item, index) => (
              <Pressable
                style={confirmationStyle.addressesItemPress}
              >
                {selectedAddress && selectedAddress._id === item?._id ? (
                  <FontAwesome5 name="dot-circle" size={20} color="#008397" />
                ) : (
                  <Entypo
                    onPress={() => setSelectedAdress(item)}
                    name="circle"
                    size={20}
                    color="gray"
                  />
                )}

                <View style={{ marginLeft: 6 }}>
                  <View style={confirmationStyle.addressItemNameView}>
                    <Text style={confirmationStyle.addressesItemNameTxt}>
                      {item?.name}
                    </Text>
                    <Entypo name="location-pin" size={24} color="red" />
                  </View>

                  <Text style={confirmationStyle.addressesItemsTxt}>
                    {item?.houseNo}, {item?.landmark}
                  </Text>

                  <Text style={confirmationStyle.addressesItemsTxt}>
                    {item?.street}
                  </Text>

                  <Text style={confirmationStyle.addressesItemsTxt}>
                    India, Bangalore
                  </Text>

                  <Text style={confirmationStyle.addressesItemsTxt}>
                    phone No : {item?.mobileNo}
                  </Text>
                  <Text style={confirmationStyle.addressesItemsTxt}>
                    pin code : {item?.postalCode}
                  </Text>

                  <View style={confirmationStyle.cardBtnsView}>
                    <Pressable style={confirmationStyle.cardBtnsPress}>
                      <Text>Edit</Text>
                    </Pressable>

                    <Pressable style={confirmationStyle.cardBtnsPress}>
                      <Text>Remove</Text>
                    </Pressable>

                    <Pressable style={confirmationStyle.cardBtnsPress}>
                      <Text>Set as Default</Text>
                    </Pressable>
                  </View>

                  <View>
                    {selectedAddress && selectedAddress._id === item?._id && (
                      <Pressable
                        onPress={() => setCurrentStep(1)}
                        style={confirmationStyle.deliverAddressBtnPress}
                      >
                        <Text style={confirmationStyle.deliverAddressBtnTxt}>
                          Deliver to this Address
                        </Text>
                      </Pressable>
                    )}
                  </View>
                </View>
              </Pressable>
            ))}
          </Pressable>
        </View>
      )}

      {currentStep == 1 && (
        <View style={confirmationStyle.currentStepsMainView}>
          <Text style={confirmationStyle.chooseDeliveryOptionsTxt}>
            Choose your delivery options
          </Text>

          <View style={confirmationStyle.checkBoxView}>
            {option ? (
              <FontAwesome5 name="dot-circle" size={20} color="#008397" />
            ) : (
              <Entypo
                onPress={() => setOption(!option)}
                name="circle"
                size={20}
                color="gray"
              />
            )}

            <Text style={{ flex: 1 }}>
              <Text style={confirmationStyle.deliveryTimeTxt}>
                Tomorrow by 10pm
              </Text>{" "}
              - FREE delivery with your Prime membership
            </Text>
          </View>

          <Pressable
            onPress={() => setCurrentStep(2)}
            style={confirmationStyle.continuePress}
          >
            <Text>Continue</Text>
          </Pressable>
        </View>
      )}

      {currentStep == 2 && (
        <View style={confirmationStyle.currentStepsMainView}>
          <Text style={confirmationStyle.paymentMethodTxt}>
            Select your payment Method
          </Text>

          <View style={confirmationStyle.cashOnDeliveryView}>
            {selectedOption === "cash" ? (
              <FontAwesome5 name="dot-circle" size={20} color="#008397" />
            ) : (
              <Entypo
                onPress={() => setSelectedOption("cash")}
                name="circle"
                size={20}
                color="gray"
              />
            )}

            <Text>Cash on Delivery</Text>
          </View>

          <View style={confirmationStyle.creditDebitCardView}>
            {selectedOption === "card" ? (
              <FontAwesome5 name="dot-circle" size={20} color="#008397" />
            ) : (
              <Entypo
                onPress={() => {
                  setSelectedOption("card");
                  Alert.alert("UPI/Debit card", "Pay Online", [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel is pressed"),
                    },
                    {
                      text: "OK",
                      onPress: () => pay(),
                    },
                  ]);
                }}
                name="circle"
                size={20}
                color="gray"
              />
            )}

            <Text>UPI / Credit or debit card</Text>
          </View>
          <Pressable
            onPress={() => setCurrentStep(3)}
            style={confirmationStyle.continuePress}
          >
            <Text>Continue</Text>
          </Pressable>
        </View>
      )}

      {currentStep === 3 && selectedOption === "cash" && (
        <View style={confirmationStyle.currentStepsMainView}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Order Now</Text>

          <View style={confirmationStyle.paymentView}>
            <View>
              <Text style={confirmationStyle.savePercentTxt}>
                Save 5% and never run out
              </Text>
              <Text style={confirmationStyle.autoDeliveryTxt}>
                Turn on auto deliveries
              </Text>
            </View>

            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>

          <View
            style={confirmationStyle.shippingToView}
          >
            <Text>Shipping to {selectedAddress?.name}</Text>

            <View style={confirmationStyle.itemsView} >
              <Text style={confirmationStyle.itemsTxt}>
                Items
              </Text>
              <Text style={confirmationStyle.itemsTotalTxt}>₹{total}</Text>
            </View>

            <View style={confirmationStyle.deliveryView}>
              <Text style={confirmationStyle.deliveryTxt}>
                Delivery
              </Text>

              <Text style={confirmationStyle.deliveryPrice}>₹0</Text>
            </View>

            <View style={confirmationStyle.orderTotalView}>
              <Text style={confirmationStyle.orderTotalTxt}>
                Order Total
              </Text>

              <Text style={confirmationStyle.orderTotalPrice}>
                ₹{total}
              </Text>
            </View>
          </View>

          <View style={confirmationStyle.payWithView}>
            <Text style={confirmationStyle.payWithTxt}>Pay With</Text>

            <Text style={confirmationStyle.PayOnDelivery}>
              Pay on delivery (Cash)
            </Text>
          </View>

          <Pressable
            onPress={handlePlaceOrder}
            style={confirmationStyle.placeYourOrderPress}
          >
            <Text>Place your order</Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({});
