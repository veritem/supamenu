import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function PaymentSuccess() {
  return (
    <View style={styles.container}>
      <View style={[styles.mb,{display: "flex",flexDirection: "row",justifyContent: "center"}]}>
        <Image source={require('../../assets/transaction-success.png')} style={styles.icon} />
      </View>
      <View style={[{marginBottom: "10%", marginTop: -50 }]}>
        <Text style={styles.centered}>
          Payment success, Yayy! {"\n"}
        </Text>
        <Text style={[styles.centered, { marginTop: 20,fontSize: 12, marginBottom:"5%", fontWeight: "normal", color: "#ffff" }]}>
          we will send you order details and invoice in {"\n"}
          your contact no. and registered email
        </Text>
      </View>
      <View style={[{ display: "flex", flexDirection: "row", justifyContent: "center", marginBottom:"10%" }]}>
        <Text style={{ color: "#C3744D", marginRight: 12 }}>
          Check Details
        </Text>
        <Icon name="arrow-right" size={20} color="#C3744D" />
      </View>
      <View style={{marginBottom: "15%"}}>
        <TouchableOpacity title="sign in" style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Download Invoice</Text>
        </TouchableOpacity>
      </View>
      <View style={[{display: "flex",flexDirection: "row",justifyContent: "center"}]}>
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
    paddingTop: "5%",
  },
  centered: {
    textAlign: "center",
    color: "#F7941D",
    fontWeight: "bold",
  },
  mb: {
    marginBottom: "30%",
  },
  image: {
    width: "90%",
    height: 67,
    margin: "auto",
    resizeMode: "contain"
  },
  icon: {
    width: 400,
    height: 200,
    margin: "auto",
    resizeMode: "contain"
  },
  downloadButton:{
    backgroundColor: "#F7941D",
    width: 250,
    height: 50,
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center"
  },
  downloadButtonText: {
    color: "#fff",
    fontWeight: "500"
  }
});
