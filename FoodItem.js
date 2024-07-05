import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import MenuComponent from "./MenuComponent";

const FoodItem = ({ item }) => {
  const data = [item];
  const [selected, setSelected] = useState(["Recommended"]);

  const handleItemSelect = (itemName) => {
    const isSelected = selected.includes(itemName);
    if (isSelected) {
      setSelected(selected.filter((sel) => sel !== itemName));
    } else {
      setSelected([...selected, itemName]);
    }
  };

  return (
    <View>
      {data.map((item, i) => (
        <React.Fragment key={i}>
          <Pressable
            onPress={() => handleItemSelect(item.name)}
            style={styles.header}
          >
            <Text style={styles.headerText}>
              {item.name} ({item.items.length})
            </Text>
            <AntDesign name="down" size={24} color="black" />
          </Pressable>

          {selected.includes(item.name) &&
            item.items.map((food, index) => (
              <MenuComponent food={food} key={index} />
            ))}
        </React.Fragment>
      ))}
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  header: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});