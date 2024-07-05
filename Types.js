import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

const Types = () => {
  const types = [
    {
      id: "0",
      image:
        "https://th.bing.com/th?id=OSK.11e16c74946ab93014901360488befcd&w=228&h=342&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1",
      name: "Brownies"
    },

    {  id: "1",
      image:
        "https://www.fnp.com/assets/images/custom/cakes_23/flavour/Chocolate-Cakes-web_2.jpg",
      name: "Cakes"
    },

    {  id: "2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8EegDAnOVphYD35t-M6b5jp1dJFzn6Otr6A&s",
      name: "Pastries"
    },

    {  id: "3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkOAaZAAtqyc8aRik-yJBd-7MRQbrtT47hSg&s",
      name: "Cupcakes"
    },

    {  id: "4",
      image:
        "https://images.news18.com/ibnkhabar/uploads/2021/04/cold-coffee.jpg?im=FitAndFill,width=1200,height=900",
      name: "Beverages"

    },

    {  id: "5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZw857Xd52dMPEawtRogRAB8N-4kaK8KpHw&s",
      name: "Croissants"
    },
  ];
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item) => (
          <View style={{ margin: 10 }} key={item.id}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 60, height: 60, borderRadius: 30 }}
            />
            <Text style={{ marginTop: 6, textAlign: "center" }}>
              {item.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Types;

const styles = StyleSheet.create({});