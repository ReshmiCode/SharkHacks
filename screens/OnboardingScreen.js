import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "native-base";

export default function OnboardingScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up here or Login</Text>
      <Button onPress={() => props.navigation.push("UserForm")}>
        <Text>Create Profile</Text>
      </Button>
      <Text>{"\n"}</Text>
      <Button>
        <Text>Login</Text>
      </Button>
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
