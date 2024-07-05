import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../redux/CartReducer";

const MenuComponent = ({ food }) => {
  const dispatch = useDispatch();
  const [additems, setAddItems] = useState(0);
  const [selected, setSelected] = useState(false);

  return (
    <View>
      <Pressable style={styles.container}>
        <View>
          <Text style={styles.foodName}>{food.name}</Text>
          <Text>{food.price}</Text>
          <Text style={styles.rating}>
            {[0, 0, 0, 0, 0].map((_, i) => (
              <FontAwesome
                key={`${food.id}-${i}`}
                style={styles.starIcon}
                name={i < Math.floor(food.rating) ? "star" : "star-o"}
                size={15}
                color="#FFD700"
              />
            ))}
          </Text>
          <Text style={styles.description}>
            {food.description.length > 30
              ? food.description.substr(0, 35) + "..."
              : food.description}
          </Text>
        </View>

        <Pressable style={styles.imageContainer}>
          <Image
            style={styles.foodImage}
            source={{ uri: food.image }}
          />
          {selected ? (
            <Pressable style={styles.quantityContainer}>
              <Pressable onPress={() => {
                if (additems === 1) {
                  dispatch(removeFromCart(food));
                  setSelected(false);
                  setAddItems(0);
                } else {
                  setAddItems((c) => c - 1);
                  dispatch(decrementQuantity(food));
                }
              }}>
                <Text style={styles.quantityButton}>-</Text>
              </Pressable>

              <Pressable>
                <Text style={styles.quantityText}>{additems}</Text>
              </Pressable>

              <Pressable onPress={() => {
                setAddItems((c) => c + 1);
                dispatch(incrementQuantity(food));
              }}>
                <Text style={styles.quantityButton}>+</Text>
              </Pressable>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setSelected(true);
                if (additems == 0) {
                  setAddItems((c) => c + 1);
                }
                dispatch(addToCart(food));
              }}
              style={styles.addButton}
            >
              <Text style={styles.addButtonText}>ADD</Text>
            </Pressable>
          )}
        </Pressable>
      </Pressable>
    </View>
  );
};

export default MenuComponent;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  foodName: {
    fontSize: 18,
    fontWeight: "600",
  },
  rating: {
    marginTop: 5,
    borderRadius: 4,
  },
  starIcon: {
    paddingHorizontal: 3,
  },
  description: {
    width: 180,
    marginTop: 8,
    color: "gray",
    fontSize: 16,
  },
  imageContainer: {
    marginRight: 10,
  },
  foodImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  quantityContainer: {
    position: "absolute",
    top: 90,
    left: 15,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
  },
  quantityButton: {
    fontSize: 25,
    color: "green",
    paddingHorizontal: 6,
  },
  quantityText: {
    fontSize: 20,
    color: "green",
    paddingHorizontal: 6,
  },
  addButton: {
    position: "absolute",
    top: 90,
    left: 20,
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#018749",
  },
});