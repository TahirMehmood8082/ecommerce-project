import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainScrollView: {
    marginTop: 55, 
    flex: 1, 
    backgroundColor: "white",
  },
  carouselImgbg: { 
    marginTop: 25, 
    resizeMode: "contain",
  },
  percentOffView: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#C60C30",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  percentOffTxt: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 12,
  },
  socialShareView: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  wishlistView: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "auto",
    marginLeft: 20,
    marginBottom: 20,
  },
  titlePriceView: {
    padding: 10,
  },
  titleTxt: {
    fontSize: 15, 
    fontWeight: "500",
  },
  priceTxt: {
    fontSize: 18, 
    fontWeight: "600", 
    marginTop: 6,
  },
  dividerLine: {
    height: 1, 
    borderColor: "#D0D0D0", 
    borderWidth: 1,
  },
  colorSizeView: {
    flexDirection: "row", 
    alignItems: "center", 
    padding: 10,
  },
  colorSizeTxt: {
    fontSize: 15, 
    fontWeight: "bold",
  },
  totalPriceTxt: {
    fontSize: 15, 
    fontWeight: "bold", 
    marginVertical: 5,
  },
  freeDelivery: {
    color: "#00CED1",
  },
  locationView: {
    flexDirection: "row",
    marginVertical: 5,
    alignItems: "center",
    gap: 5,
  },
  locationTxt: {
    fontSize: 15, 
    fontWeight: "500",
  },
  inStockTxt: {
    color: "green", 
    marginHorizontal: 10, 
    fontWeight: "500",
  },
  addToCartBtnPress: {
    backgroundColor: "#FFC72C",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  buyNowBtnPress: {
    backgroundColor: "#FFAC1C",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default styles;