import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  yourAddressesTxt: {
    fontSize: 20, 
    fontWeight: "bold",
  },
  addANewAddressPress: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingVertical: 7,
    paddingHorizontal: 5,
  },
  addedAddressesListPress: {
    borderWidth: 1,
    borderColor: "#D0D0D0",
    padding: 10,
    flexDirection: "column",
    gap: 5,
    marginVertical: 10,
  },
  addedAddressesListTxt: {
    fontSize: 15, 
    color: "#181818",
  },
  addedAddressesListNameView:{
    flexDirection: "row", 
    alignItems: "center", 
    gap: 3,
  },
  addedAddressesListNameTxt: {
    fontSize: 15, 
    fontWeight: "bold",
  },
  editRemoveDefaultView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 7,
  },
  editRemoveDefaultPress:{
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
    borderWidth: 0.9,
    borderColor: "#D0D0D0",
  },
});

export default styles;