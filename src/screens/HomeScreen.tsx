import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExamleComponent from "../components/ExamleComponent";
import timeService from "../services/TimeService";

const HomeScreen = () => {
  console.log("Time", timeService());

  return (
    <View>
      <Text>HomeScreen</Text>
      <ExamleComponent />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
