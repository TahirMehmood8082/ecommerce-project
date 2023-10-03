import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainSafeArea: {
    backgroundColor: "white", 
    flex: 1,
  },
  thumbsViewImg: {
    height: 260,
    width: 300,
    alignSelf: "center",
    marginTop: 40,
    justifyContent: "center",
  },
  orderRecievedTxt: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
  },
  sparkleViewImg: {
    height: 300,
    position: "absolute",
    top: 100,
    width: 300,
    alignSelf: "center",
  },
});

export default styles;