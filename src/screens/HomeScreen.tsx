import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Messages from "../components/Messages";

const HomeScreen = () => {
  return (
    <View style={styles.home}>
      <Text style={styles.title}>HomeScreen</Text>
      <Messages />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#cccccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
