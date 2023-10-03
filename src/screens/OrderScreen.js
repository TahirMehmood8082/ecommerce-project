import { StyleSheet, Text, View,SafeAreaView } from "react-native";
import React ,{useEffect} from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import orderStyle from '../ProjectStyles/OrderStyle'

const OrderScreen = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
          navigation.replace("Main");
        }, 1300);
      }, []);
  return (
    <SafeAreaView style={orderStyle.mainSafeArea}>
      <LottieView
        source={require("../../assets/thumbs.json")}
        // ref={animation}
        style={orderStyle.thumbsViewImg}
        autoPlay
        loop={false}
        speed={0.7}
      />
      <Text style={orderStyle.orderRecievedTxt}>
        Your Order Has been Recieved
      </Text>
      <LottieView
        source={require("../../assets/sparkle.json")}
        style={orderStyle.sparkleViewImg}
        autoPlay
        loop={false}
        speed={0.7}
      />
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
