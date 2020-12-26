import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App(props) {
  return (
    <View style={styles.container}>
      <Text>Screen 2</Text>
      <StatusBar style="auto" />
      <Button
        title="Add Friends"
        onPress={() => props.navigation.openDrawer()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
