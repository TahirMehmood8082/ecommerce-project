import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerLeftImg: {
    width: 140, 
    height: 120, 
    resizeMode: "contain",
  },
  headerRightMainView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginRight: 12,
  },
  mainScrollView: {
    padding: 10, 
    flex: 1, 
    backgroundColor: "white",
  },
  welcomeTxt: {
    fontSize: 16, 
    fontWeight: "bold",
  },
  rowMainView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 12,
  },
  btnPress: {
    padding: 10,
    backgroundColor: "#E0E0E0",
    borderRadius: 25,
    flex: 1,
  },
  btnTxt: {
    textAlign: "center",
  },
  ordersListPress: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d0d0d0",
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  ordersListImg: {
    width: 100,
    height: 100, 
    resizeMode: "contain",
  },
});

export default styles;