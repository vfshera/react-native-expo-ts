import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { IMessage } from "../interfaces/messages";

const Message: FC<{ msg: IMessage }> = ({ msg }) => {
  return (
    <View style={styles.msg}>
      <Text>
        {msg.name} - {msg.message}
      </Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  msg: {
    padding: 5,
    marginVertical: 2,
    backgroundColor: "#f1f1f1",
  },
});
