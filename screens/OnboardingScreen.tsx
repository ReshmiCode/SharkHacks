import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function OnboardingScreen(props: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App details + User signup</Text>
      <TouchableOpacity
        onPress={() => props.navigation.replace("Root")}
        style={styles.link}
      >
        <Text style={styles.linkText}>Go to main screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
