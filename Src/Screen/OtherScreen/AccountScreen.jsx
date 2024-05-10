import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Statusbar from "../../Component/statusbar";
import { color } from "../../Global/Styles";

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text>Account Screen</Text>
      <Statusbar color={color.lYellow} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
