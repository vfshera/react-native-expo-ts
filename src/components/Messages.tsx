import { StyleSheet, Text, View } from "react-native";
import React from "react";
import messages from "../services/MessagesService";
import Message from "./Message";

const Messages = () => {
  return (
    <View style={styles.messagesContainer}>
      {messages.map((msg, i) => (
        <Message msg={msg} key={i} />
      ))}
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  messagesContainer: {},
});
