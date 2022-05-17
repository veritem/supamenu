import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Dimensions } from "react-native-web";
import { Rating } from 'react-native-ratings';

export default function Feedback() {
  return (
    <View style={styles.container}>
      <View style={[styles.mb,{marginTop: "15%"}]}>
        <Text style={styles.centered}>
          Yayy! {"\n"}
          We value all feedback,{"\n"}
          please rate your experience{"\n"}
          below:
        </Text>
      </View>
      <View style={styles.mb}>
        <Rating
          type="custom"
          ratingColor='#F7941D'
          ratingImage={require('../../assets/star.png')}
          ratingBackgroundColor='transparent'
        />
      </View>
      <View style={styles.mb}>
        <Text style={styles.centered}>
          Thank you for helping us{"\n"}
          improve our service !
        </Text>
      </View>
      <View style={[styles.mb,{display: "flex",flexDirection: "row",justifyContent: "center"}]}>
        <Image source={require('../../assets/yellow-logo.png')} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    width: "100%",
    height: "100%",
    padding: "15%",
  },
  centered: {
    textAlign: "center",
    color: "#F7941D",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Roboto_700Bold",
  },
  mb: {
    marginBottom: "30%",
  },
  image: {
    width: "90%",
    height: 67,
    margin: "auto",
    resizeMode: "contain"
  }
});
