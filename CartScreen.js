import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  cleanCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/CartReducer";

const CartScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  const dispatch = useDispatch();
  const instructions = [
    {
      id: "0",
      name: "Avoid Ringing",
      iconName: "bell",
    },
    {
      id: "1",
      name: "Leave at the door",
      iconName: "door-open",
    },
    {
      id: "2",
      name: "directions to reach",
      iconName: "directions",
    },
    {
      id: "3",
      name: "Avoid Calling",
      iconName: "phone-alt",
    },
  ];

  return (
    <>
      <ScrollView style={styles.scrollView}>
        {total > 0 ? (
          <>
            <View style={styles.header}>
              <Ionicons
                onPress={() => navigation.goBack()}
                name="arrow-back"
                size={24}
                color="black"
              />
              <Text style={styles.headerText}>{route.params.name}</Text>
            </View>

            <View style={styles.orderingDetails}>
              <Text style={styles.orderingDetailsText}>
                Ordering for Someone else?
              </Text>
              <Text style={styles.addDetailsText}>Add Details</Text>
            </View>

            <View style={styles.cartContainer}>
              {cart.map((item, index) => (
                <View style={styles.cartItem} key={index}>
                  <Text style={styles.itemName}>{item.name}</Text>

                  <Pressable style={styles.quantityContainer}>
                    <Pressable
                      onPress={() => {
                        dispatch(decrementQuantity(item));
                      }}
                    >
                      <Text style={styles.quantityText}>-</Text>
                    </Pressable>

                    <Pressable>
                      <Text style={styles.quantityText}>{item.quantity}</Text>
                    </Pressable>

                    <Pressable
                      onPress={() => {
                        dispatch(incrementQuantity(item));
                      }}
                    >
                      <Text style={styles.quantityText}>+</Text>
                    </Pressable>
                  </Pressable>

                  <Text style={styles.itemTotal}>
                    ₹{item.price * item.quantity}
                  </Text>
                </View>
              ))}
            </View>

            <View style={styles.deliveryInstructions}>
              <Text style={styles.instructionsTitle}>Delivery Instructions</Text>
              <ScrollView
                horizontal
                style={styles.instructionsScroll}
                showsHorizontalScrollIndicator={false}
              >
                {instructions.map((item) => (
                  <Pressable style={styles.instructionItem} key={item.id}>
                    <View>
                      <FontAwesome5
                        name={item.iconName}
                        size={22}
                        color={"gray"}
                      />
                      <Text style={styles.instructionText}>{item.name}</Text>
                    </View>
                  </Pressable>
                ))}
              </ScrollView>
            </View>

            <View style={styles.billingDetails}>
              <Text style={styles.billingTitle}>Billing Details</Text>
              <View style={styles.billingContainer}>
                <View style={styles.billingRow}>
                  <Text style={styles.billingText}>Item Total</Text>
                  <Text style={styles.billingText}>₹{total}</Text>
                </View>

                <View style={styles.billingRow}>
                  <Text style={styles.billingText}>
                    Delivery Fee | 1.2KM
                  </Text>
                  <Text style={styles.deliveryFeeText}>FREE</Text>
                </View>

                <View style={styles.billingRow}>
                  <Text style={styles.billingText}>
                    Free Delivery on Your order
                  </Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.billingRow}>
                  <Text style={styles.billingText}>Delivery Tip</Text>
                  <Text style={styles.tipText}>ADD TIP</Text>
                </View>

                <View style={styles.billingRow}>
                  <Text style={styles.billingText}>Taxes and Charges</Text>
                  <Text style={styles.taxText}>95</Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.billingRow}>
                  <Text style={styles.toPayText}>To Pay</Text>
                  <Text style={styles.toPayText}>{total + 95}</Text>
                </View>
              </View>
            </View>
          </>
        ) : (
          <View style={styles.emptyCart}>
            <Text style={styles.emptyCartText}>Your Cart is Empty!</Text>
          </View>
        )}
      </ScrollView>

      {total === 0 ? null : (
        <Pressable style={styles.footer}>
          <View>
            <Text style={styles.totalText}>₹{total + 95}</Text>
            <Text style={styles.viewBillText}>View Detailed Bill</Text>
          </View>

          <Pressable
            onPress={() => {
              navigation.navigate("Loading");
              dispatch(cleanCart());
            }}
            style={styles.proceedButton}
          >
            <Text style={styles.proceedButtonText}>Proceed To pay</Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  scrollView: { marginTop: 50 },
  header: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: { fontSize: 17, fontWeight: "600", marginLeft: 3 },
  orderingDetails: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  orderingDetailsText: { fontSize: 16, fontWeight: "500" },
  addDetailsText: { fontSize: 16, fontWeight: "700", color: "#FF4500" },
  cartContainer: {
    marginTop: 16,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 14,
    marginLeft: 10,
    marginRight: 10,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  itemName: { width: 100, fontSize: 16, fontWeight: "600" },
  quantityContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
    borderColor: "#BEBEBE",
    borderWidth: 0.5,
    borderRadius: 10,
  },
  quantityText: {
    fontSize: 20,
    color: "green",
    paddingHorizontal: 6,
    fontWeight: "600",
  },
  itemTotal: { fontSize: 16, fontWeight: "bold" },
  deliveryInstructions: { padding: 10 },
  instructionsTitle: { fontSize: 16, fontWeight: "600" },
  instructionsScroll: { marginTop: 10 },
  instructionItem: {
    margin: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },
  instructionText: {
    width: 75,
    fontSize: 13,
    color: "#383838",
    paddingTop: 10,
  },
  billingDetails: { marginHorizontal: 10 },
  billingTitle: { fontSize: 16, fontWeight: "bold" },
  billingContainer: {
    backgroundColor: "white",
    borderRadius: 7,
    padding: 10,
    marginTop: 15,
  },
  billingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  billingText: { fontSize: 18, fontWeight: "400", color: "gray" },
  deliveryFeeText: { fontSize: 18, fontWeight: "400", color: "#FF4500" },
  divider: { borderColor: "gray", height: 1, borderWidth: 0.5, marginTop: 10 },
  tipText: { fontSize: 18, fontWeight: "400", color: "#FF4500" },
  taxText: { fontSize: 18, fontWeight: "400", color: "#FF4500" },
  toPayText: { fontSize: 18, fontWeight: "bold" },
  emptyCart: { flex: 1, alignItems: "center", justifyContent: "center" },
  emptyCartText: { textAlign: "center", fontSize: 16, fontWeight: "600" },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginBottom: 20,
    padding: 20,
  },
  totalText: { fontSize: 18, fontWeight: "600" },
  viewBillText: { color: "#00A877", fontSize: 17 },
  proceedButton: {
    backgroundColor: "#00A877",
    padding: 14,
    width: 200,
    borderRadius: 6,
  },
  proceedButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
