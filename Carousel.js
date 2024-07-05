import { StyleSheet, Text, View } from "react-native";
import React from "react";
//import ImageSlider from "react-native-image-slider"

const Carousel = () => {
  const images = [
    require('./../../assets/Beverages.jpg'),
    require('./../../assets/Brownie.webp'),
    require('./../../assets/Cookie.jpg'),
    require('./../../assets/Cupcake.webp'),
  ];

  return (
    <View>
      {/*<ImageSlider
        images={images}
        autoplay
        circleLoop
        dotColor='#13274F'
        inactiveDotColor='#90A4AE'
        ImageComponentStyle={{
          borderRadius: 6,
          width: '94%'
        }}
      />*/}
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});