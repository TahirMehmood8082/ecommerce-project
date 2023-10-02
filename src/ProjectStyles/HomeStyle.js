import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  homeScreenSafeArea: {
    //paddinTop: Platform.OS === "android" ? 40 : 0,
    flex: 1,
    backgroundColor: "white",
  },
  sectionsDividerLine: {
    height: 1,
    borderColor: "#D0D0D0",
    borderWidth: 2,
    marginTop: 15,
  },
});

export default styles;