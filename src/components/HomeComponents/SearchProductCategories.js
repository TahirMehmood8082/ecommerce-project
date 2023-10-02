import { View } from 'react-native'
import React from 'react'
import ProductItem from "../../components/ProductItem";
import DropDownPicker from "react-native-dropdown-picker";

import LoginStyle from '../../ProjectStyles/LoginStyle';

const SearchProductCategories = (
    {
      open,
      category,
      items,
      setOpen,
      setCategory,
      setItems,
      onGenderOpen,
      products
    }) => {
  return (
    <>
      <View
            style={{
              marginHorizontal: 10,
              marginTop: 20,
              width: "45%",
              marginBottom: open ? 50 : 15,
            }}
          >
            <DropDownPicker
              style={{
                borderColor: "#B7B7B7",
                height: 30,
                marginBottom: open ? 120 : 15,
              }}
              open={open}
              value={category} //genderValue
              items={items}
              setOpen={setOpen}
              setValue={setCategory}
              setItems={setItems}
              placeholder="choose category"
              //placeholderStyle={styles.placeholderStyles}
              onOpen={onGenderOpen}
              // onChangeValue={onChange}
              zIndex={3000}
              zIndexInverse={1000}
            />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {products
          ?.filter((item) => item.category === category)
          .map((item, index) => (
            <ProductItem item={item} key={index} />
          ))}
      </View>
    </>
  )
}

export default SearchProductCategories 