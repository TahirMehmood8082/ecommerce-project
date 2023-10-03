import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainScrollView: {
    marginTop: 55, 
    flex: 1, 
    backgroundColor: "white",
  },
  subtotalMainView: {
    padding: 10, 
    flexDirection: "row", 
    alignItems: "center",
  },
  subtotalTxt: {
    fontSize: 18, 
    fontWeight: "400",
  },
  subtotalValue: {
    fontSize: 20, 
    fontWeight: "bold",
  },
  BuyBtn: {
    backgroundColor: "#FFC72C",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 10,
  },
  cartItemsSubView: {
    backgroundColor: "white",
    marginVertical: 10,
    borderBottomColor: "#F0F0F0",
    borderWidth: 2,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
  },
  cartItemsInStockPress: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cartItemsInStockImg: {
    width: 140, 
    height: 140, 
    resizeMode: "contain",
  },
  cartItemsInStockTitle: {
     width: 150, 
     marginTop: 10,
  },
  cartItemsInStockPrice: {
    fontSize: 20, 
    fontWeight: "bold", 
    marginTop: 6,
  },
  cartItemsInStockImg2: {
    width: 30, 
    height: 30, 
    resizeMode: "contain",
  },
  cartItemsInStockRating: {
    fontWeight: "500", 
    marginTop: 6,
  },
  cartItemsQuantityPress:{
    marginTop: 15,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cartItemsQuantitySubView:{
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 7,
  },
  cartItemsDecreaseQuantity:{
    backgroundColor: "#D8D8D8",
    padding: 7,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  cartItemsDelete: {
    backgroundColor: "#D8D8D8",
    padding: 7,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  cartItemsQuantitySubPress: {
    backgroundColor: "white",
    paddingHorizontal: 18,
    paddingVertical: 6,
  },
  cartItemsIncreaseQuantity: {
    backgroundColor: "#D8D8D8",
    padding: 7,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  cartItemsDelete2: {
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: "#C0C0C0",
    borderWidth: 0.6,
  },
  cartItemsSaveMorePress:{
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 15,
  },
  cartItemsSaveForLaterPress: {
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: "#C0C0C0",
    borderWidth: 0.6,
  },
  cartItemsMorePress: {
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: "#C0C0C0",
    borderWidth: 0.6,
  },
});

export default styles;